import { useEffect, useState } from "react";

const Test = () => {
  const [cmsItems, setCmsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCMSItems = async () => {
      try {
        const res = await fetch("/.netlify/functions/fetchCmsItems");
        const data = await res.json();
        console.log(data);
        if (data.items) {
          setCmsItems(data.items);
        } else {
          setError("No items found");
        }
      } catch (err) {
        setError("Failed to fetch CMS data");
      } finally {
        setLoading(false);
      }
    };

    fetchCMSItems();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Webflow CMS Live Data</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {cmsItems.length > 0 && (
        <ul>
          {cmsItems.map(item => (
            <li key={item.cmsLocaleId}>
              <strong>{item.name}</strong>
              <br />
              <small>Slug: {item.slug}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
