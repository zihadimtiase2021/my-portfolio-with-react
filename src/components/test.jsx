import { useEffect, useState } from "react";

// ✅ Since this won't change, define it outside the component
const COLLECTION_ID = "6886ecb0620916f902732c1f";

const Test = () => {
  const [items, setItems] = useState([]); // Store fetched items
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/.netlify/functions/fetchCmsItems?collectionId=${COLLECTION_ID}`
        );
        const data = await res.json();
        console.log("Fetched Data:", data);

        if (res.ok && data.items) {
          const formattedItems = data.items.map(item => ({
            id: item._id,
            name: item.name,
            slug: item.slug,
            // Add more fields here if needed
          }));

          setItems(formattedItems);
        } else {
          throw new Error(data.error || "Failed to fetch items");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("items", items);
    fetchData();
  }, []); // ✅ No dependency on collectionId

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name || item.slug || "Untitled Item"}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Test;
