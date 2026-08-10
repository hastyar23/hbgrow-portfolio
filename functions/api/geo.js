export async function onRequest(context) {
  const cf = context.request.cf;
  
  const geoData = {
    country: cf?.country || null,
    city: cf?.city || null,
    region: cf?.regionCode || cf?.region || null,
  };

  return new Response(JSON.stringify(geoData), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}
