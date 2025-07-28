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
        console.log("res", res);
        const data = await res.json();
        console.log("data", data);
        if (data.ok) {
          setItems(data.items || []);
          console.log(items);
        } else {
          setError(data.error || "Failed to fetch data");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      }
    };

    console.log(items);
    fetchData();
  }, []);

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
