async function getTestimonials() {
  try {
    const res = await fetch("/.netlify/functions/getTestimonials");
    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}
