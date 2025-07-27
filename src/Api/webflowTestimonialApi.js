export default async function handler(req, res) {
  const API_TOKEN = import.meta.env.TESTIMONIAL_API_TOKEN;
  const COLLECTION_ID = import.meta.env.TESTIMONIAL_COLLECTION_ID;

  const response = await fetch(
    `https://api.webflow.com/collections/${COLLECTION_ID}/items`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "accept-version": "1.0.0",
      },
    }
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Webflow API error" });
  }

  const data = await response.json();
  res.status(200).json(data);
}
