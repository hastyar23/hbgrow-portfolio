import crypto from 'crypto';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, phone, city, event_id } = req.body;

    const PIXEL_ID = '26153004324379179';
    // IMPORTANT: In production, this token should be in Vercel Environment Variables (process.env.META_CAPI_TOKEN)
    // We hardcode it here based on your request, but strongly advise you to move it to Vercel Env Vars later.
    const ACCESS_TOKEN = 'EAAnSFSdfRhABSICSQYbPvWe1vkIKyMDmSxAEflFLVCnD35niBXuQJMp2oPdqSzM4r92LM1Wg5eZCVVgjV2q1ObRj4mG7dCOeAfZAVxoE3rOKd2wrZB9R2ECkq0SIrR6EWfYNTjokjZAVcdHSyudo5zSBGrztSrfZAEwqva1Flt3HgbrasRe3hOlvzQsG9zgZDZD';

    // Helper to hash data for Meta (requires lowercase string -> sha256)
    const hashData = (data) => {
      if (!data) return undefined;
      const cleanData = data.toString().trim().toLowerCase();
      return crypto.createHash('sha256').update(cleanData).digest('hex');
    };

    // Prepare User Data (em, ph, ct are standard Meta fields)
    const userData = {
      client_user_agent: req.headers['user-agent'] || '',
      client_ip_address: req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || '0.0.0.0', // Vercel provides these
    };

    if (email) userData.em = [hashData(email)];
    
    // Clean phone number (strip everything except digits and +)
    if (phone) {
      let cleanPhone = phone.replace(/[^\d+]/g, '');
      if (cleanPhone.startsWith('0')) { // Convert local Iraqi 0750 to 964750
        cleanPhone = '964' + cleanPhone.substring(1);
      }
      userData.ph = [hashData(cleanPhone)];
    }
    
    if (city) userData.ct = [hashData(city)];

    const eventPayload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: event_id, // Exact same ID used in the browser for deduplication
          user_data: userData,
        }
      ]
    };

    const apiUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventPayload)
    });

    const metaResult = await response.json();

    if (!response.ok) {
        console.error("Meta CAPI responded with error:", metaResult);
    }

    return res.status(200).json({ success: true, meta: metaResult });
  } catch (error) {
    console.error('CAPI Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
