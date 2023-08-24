import { BiWorld } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  FaBriefcase,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaLink,
  FaLocationDot,
  FaSchool,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiFreelancer, SiLinkedin } from "react-icons/si";
import {
  css,
  dp2,
  html,
  js,
  lottie,
  popUp1,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  review1,
  review2,
  review3,
  review4,
  review5,
  reviewDP,
  tailwind,
} from "../assets";

export const slogan = [
  "Talks about #frontend web development, #react.js,  #landingpage, #webdesigning, #webdesignservices, and #conversionrateoptimization",
];
export const title = [
  "Coding the Future of Your Business | Frontend Web Developer | Web Developer",
];
export const status = [
  { icon: <FaBriefcase />, text: "Available" },
  {
    text: "/linkedin",
    link: `https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/`,
    style: "text-themeColor",
  },
  { icon: <FaLocationDot />, text: "Dhaka Cantonment,Bangladesh" },
  { icon: <FaLocationDot />, text: "Joined March 2022" },
];

export const message = {
  text: "Message",
  icon: <FaWhatsapp />,
  link: "https://wa.me/01728964769",
};

export const filteringNav = [
  { item: "feed", link: "/" },
  { item: "about", link: "about" },
  { item: "portfolio", link: "portfolio" },
  { item: "contact", link: "contact" },
];

export const about = [
  {
    img: dp2,
    firstText: `I'm Zihad Imtiase (Munna). I'm a frontend web developer that thrives on bringing ideas to life with code!✨`,
    secondtext: `Whether you need a new website from scratch or want to revamp your existing site, I am here to help. I understand the importance of keeping up with the latest design trends, as well as ensuring your website is optimized for search engines and accessibility standards. My goal is to provide you with a website that not only looks great but also functions seamlessly, with a user-friendly interface and intuitive navigation.`,
  },
];

export const resume = {
  exprience: {
    title: "Web Development",
    status: "At Freelancer : 2022 - Running",
    content: "I have been working as a freelancer since 2022",
    icon: <FaBriefcase />,
  },
  education: {
    hsc: {
      title: "HSC",
      status: "Govt. Bangabandhu College, Dhaka - 2020 - 2022",
      content:
        "After my school life i have done my HSC examination at this college.",
      icon: <FaGraduationCap />,
    },
    ssc: {
      title: "SSC",
      status:
        "Dhaka Cantonment Board Adarsha Biddyaniketon, Manikdi - 2009 - 2020",
      content:
        "This school was my first education institute. I have passed my most of the valueable time of my life in my school.",
      icon: <FaSchool />,
    },
  },
};

export const reviews = [
  {
    img: reviewDP,
    reviewImg: review5,
    date: "01 August 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/",
    content: `"🎉 Happy Client, Happy Me! 🌟 Just received the most amazing feedback from one of my client, and I couldn't be more thrilled! 🙌💖"`,
  },
  {
    img: reviewDP,
    reviewImg: review1,
    date: "14 February 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"It's always a joy to receive feedback from happy clients like you! I am thrilled that I could meet your expectations and provide you with a great experience. Thank you for your trust and support, and I look forward to serving you again soon!"`,
  },
  {
    img: reviewDP,
    reviewImg: review2,
    date: "30 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I am thrilled to have delivered the results you were looking for and to have helped you achieve your project goals. Thank you for your positive feedback. I am look forward to working with you again in the future!"`,
  },
  {
    img: reviewDP,
    reviewImg: review3,
    date: "21 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I love working with clients like you who appreciate our dedication to providing high-quality freelancer services. Thank you for your trust and for sharing your positive experience with others."`,
  },
  {
    img: reviewDP,
    reviewImg: review4,
    date: "30 October 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"Another happy client, another reason to celebrate! Thank you for your kind words and for trusting. I am thrilled to have exceeded your expectations!"`,
  },
];

export const footerLinks = [
  {
    name: "Linkedin",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/",
  },
  {
    name: "Instagram",
    icon: <BsInstagram />,
    link: "",
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/01728964769",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/zihadimtiase2021",
  },
  {
    name: "Freelancer",
    icon: <SiFreelancer />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/zihad.imtiase.munna.2021",
  },
];
export const portfolioItems = [
  { category: "recent", img: portfolio1 },
  { category: "recent", img: portfolio2 },
  { category: "recent", img: portfolio3 },
  { category: "recent", img: portfolio4 },
  { category: "recent", img: portfolio5 },
  { category: "recent", img: portfolio6 },
];

export const portfolioPopUp = [
  {
    title: "Web Artist",
    img: popUp1,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["html", "css", "js", "tailwind", "lottie"],
    },
  },
  {
    title: "bal Artist",
    img: popUp1,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
  {
    title: "bal Artist",
    img: popUp1,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
];
