export async function onRequest(context) {
  const cf = context.request.cf || {};
  
  const country = cf.country || context.request.headers.get("cf-ipcountry") || "UNKNOWN";
  const city = cf.city || "UNKNOWN";
  const region = cf.region || "UNKNOWN";
  const regionCode = cf.regionCode || "UNKNOWN";
  
  return new Response(JSON.stringify({ country, city, region, regionCode }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
