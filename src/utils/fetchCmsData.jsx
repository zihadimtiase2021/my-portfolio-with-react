export const fetchCmsData = async collectionId => {
  try {
    const res = await fetch(
      `/.netlify/functions/fetchCmsItems?collectionId=${collectionId}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to fetch CMS data.");
    }

    return data.items || []; // returns array of CMS items
  } catch (error) {
    console.error("CMS Fetch Error:", error.message);
    return []; // fallback empty array
  }
};
