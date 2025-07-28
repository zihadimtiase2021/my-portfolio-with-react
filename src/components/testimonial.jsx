import { useEffect, useState } from "react";
import { fetchCmsData } from "../utils/fetchCmsData";

const collectionId = "6886ecb0620916f902732c1f"; //from webflow cms collection

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCmsData(collectionId);
      console.log(data);
      setTestimonials(data);
    };

    loadData();
  }, []);
  console.log(testimonials);

  return <div>testimonial</div>;
};

export default Testimonial;
