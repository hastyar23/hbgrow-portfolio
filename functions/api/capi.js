export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    const { email, phone, city, event_id } = body;

    const PIXEL_ID = '26153004324379179';
    // For production on Cloudflare Pages, set META_CAPI_TOKEN in your Pages project Settings -> Environment variables
    const ACCESS_TOKEN = typeof process !== 'undefined' && process.env.META_CAPI_TOKEN ? process.env.META_CAPI_TOKEN : 'EAAnSFSdfRhABSICSQYbPvWe1vkIKyMDmSxAEflFLVCnD35niBXuQJMp2oPdqSzM4r92LM1Wg5eZCVVgjV2q1ObRj4mG7dCOeAfZAVxoE3rOKd2wrZB9R2ECkq0SIrR6EWfYNTjokjZAVcdHSyudo5zSBGrztSrfZAEwqva1Flt3HgbrasRe3hOlvzQsG9zgZDZD';

    // Helper to hash data for Meta (Web Crypto API for Cloudflare Workers)
    const hashData = async (data) => {
      if (!data) return undefined;
      const cleanData = data.toString().trim().toLowerCase();
      const encoder = new TextEncoder();
      const dataArray = encoder.encode(cleanData);
      const hashBuffer = await crypto.subtle.digest('SHA-256', dataArray);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };

    // Prepare User Data (em, ph, ct are standard Meta fields)
    const userData = {
      client_user_agent: request.headers.get('user-agent') || '',
      client_ip_address: request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || '0.0.0.0',
    };

    if (email) {
      const emHash = await hashData(email);
      userData.em = [emHash];
    }
    
    // Clean phone number (strip everything except digits and +)
    if (phone) {
      let cleanPhone = phone.replace(/[^\d+]/g, '');
      if (cleanPhone.startsWith('0')) { // Convert local Iraqi 0750 to 964750
        cleanPhone = '964' + cleanPhone.substring(1);
      }
      const phHash = await hashData(cleanPhone);
      userData.ph = [phHash];
    }
    
    if (city) {
      const ctHash = await hashData(city);
      userData.ct = [ctHash];
    }

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

    return new Response(JSON.stringify({ success: true, meta: metaResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('CAPI Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
