import { WebflowClient } from "webflow-api";

const token = import.meta.env.VITE_WEBFLOW_TESTIMONIAL_KEY;
const webflow = new WebflowClient({ accessToken: token });

(async () => {
  try {
    const sites = await webflow.sites.list();
    console.log(sites);
  } catch (error) {
    console.error("Error fetching sites:", error);
  }
})();
