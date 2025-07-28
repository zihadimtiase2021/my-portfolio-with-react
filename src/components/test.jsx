import { useEffect, useState } from "react";

const Test = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const collectionId = "6886ecb0620916f902732c1f"; // 🔄 change this when needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/.netlify/functions/fetchCmsItems?collectionId=${collectionId}`
        );
        const data = await res.json();

        console.log("Fetched Webflow CMS Data:", data);

        if (res.ok) {
          setItems(data.items || []);
        } else {
          setError(data.error || "Failed to fetch data");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [collectionId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Webflow CMS Items</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.name || item.slug || "Untitled Item"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
