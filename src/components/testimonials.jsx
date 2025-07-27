import { useEffect, useState } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/.netlify/functions/getTestimonials");
        if (!res.ok) throw new Error("Network response not ok");

        const data = await res.json();
        setTestimonials(data.items || []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div>
      <h2>Testimonials ({testimonials.length})</h2>
      {testimonials.length === 0 && <p>No testimonials found.</p>}
      {testimonials.map(item => (
        <div key={item._id} style={{ marginBottom: "20px" }}>
          <h3>{item.name}</h3> {/* Adjust 'name' to your Webflow field */}
          <p>{item["testimonial-caption"]}</p> {/* Adjust field name */}
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
