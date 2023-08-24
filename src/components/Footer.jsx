import { useEffect, useRef } from "react";
import { footerLinks } from "../utils/constants";

const Footer = () => {
  const timeRef = useRef();

  useEffect(() => {
    const setDate = () => {
      const date = new Date().getFullYear();
      timeRef.current.innerHTML = date;
    };
    setDate();
  }, []);

  return (
    <footer className="my-container">
      <div className="flex flex-col items-center py-8">
        {/* <!-- icon-parent --> */}

        <div className="flex mb-4">
          {/* get-the-footer-icons-and-links */}

          {footerLinks.map(item => (
            <a
              key={item.link}
              className="footer-icon"
              href={item.link}
              target="_blank"
              aria-label={item.name}
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* <!-- cpoyright --> */}
        <div className="text-base flex items-center gap-2">
          <p className="text-center">
            ©️<span ref={timeRef}>copyright time</span> Copyright by Web Banai |
            Developed by {""}
            <a
              href="https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/"
              target="_blank"
              className="text-themeColor hover:text-secondThemeColor hover:underline"
              rel="noreferrer"
            >
              Zihad Imtiase
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
