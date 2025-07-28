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

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format (expected JSON)");
        }

        const data = await res.json();

        if (res.ok) {
          setItems(data.items || []);
        } else {
          setError(data.error || "Failed to fetch data");
        }
      } catch (err) {
        console.error("Fetch Error:", err.message);
        setError(err.message || "Something went wrong");
      }
    };

    fetchData();
  }, [collectionId]);

  console.log(items);

  return (
    <>
      {items.map(item => {
        return (
          <li key={item.id}>
            <strong>{item.name || item.slug || "Untitled Item"}</strong>
          </li>
        );
      })}
    </>
  );
};

export default Test;
