export async function handler(event, context) {
  const API_TOKEN = process.env.TESTIMONIAL_API_TOKEN;
  const COLLECTION_ID = process.env.TESTIMONIAL_COLLECTION_ID;

  const response = await fetch(
    `https://api.webflow.com/collections/${COLLECTION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "accept-version": "1.0.0",
      },
    }
  );

  if (!response.ok) {
    console.error("Webflow API error", response.status);
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: "Webflow API error" }),
    };
  }

  const data = await response.json();
  console.log("Webflow API data:", data); // Log API response on server (Netlify logs)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
