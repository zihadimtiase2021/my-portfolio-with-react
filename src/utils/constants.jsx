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
  aboutImg,
  css,
  dp,
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
    img: aboutImg,
  },
  [
    "I'm Zihad Imtiase (Munna) living in Dhaka, Bangladesh. I'm a frontend web developer that thrives on bringing ideas to life with code!✨",

    "🤔Whether you need a new website from scratch or want to revamp your existing site? I am here to help you 🤗.",

    "🌟Obtain a website that will increase your business by magnifying your online presence, capturing the attention of potential customers, ultimately driving exponential growth and propelling your brand to new heights of success.🌟",

    "🌐 Elevate Your Brand Online with Tailored Web Solutions 🌐. By getting me in your team, you can expect:",

    "🌐 Your Success, My Focus: From startups to established enterprises, my goal is to empower your digital journey. Anticipate websites that not only boast fantastic aesthetics but also propel your business toward progress.",

    "✨You get a website that not only looks great but also works seamlessly with a user-friendly interface and intuitive navigation. ",

    "🚀 Seamless User Experiences: Transforming intricate codes into intuitive interfaces, your website visitors will effortlessly navigate your platform, engaging seamlessly with your brand in meaningful interactions.",

    "🌐 Mobile-First Approach: Your online presence will be optimized for every device. Expect a responsive and stunning design that ensures your message reaches users on the go.",

    "🌟 Innovative Advantage: By embracing the latest technologies, crafted websites stand out from the crowd, positioning your brand as a forward-thinking industry leader.",

    "📈 Performance that Impresses: Speed, efficiency, and reliability are the hallmarks of my work. Your website will be optimized for peak performance, keeping users engaged and satisfied.",

    "💼 Enhanced Conversions: Your website extends beyond aesthetics it's a potent tool for driving results. Employing a user-focused strategy, together we'll amplify your conversions and attain your business objectives.",

    "💡 Solutions tailored to you: Recognizing the uniqueness of each project, a web solution that seamlessly aligns with your brand identity, purpose and target audience.",
  ],
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
    img: dp,
    reviewImg: review5,
    date: "01 August 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/",
    content: `"🎉 Happy Client, Happy Me! 🌟 Just received the most amazing feedback from one of my client, and I couldn't be more thrilled! 🙌💖"`,
  },
  {
    img: dp,
    reviewImg: review1,
    date: "14 February 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"It's always a joy to receive feedback from happy clients like you! I am thrilled that I could meet your expectations and provide you with a great experience. Thank you for your trust and support, and I look forward to serving you again soon!"`,
  },
  {
    img: dp,
    reviewImg: review2,
    date: "30 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I am thrilled to have delivered the results you were looking for and to have helped you achieve your project goals. Thank you for your positive feedback. I am look forward to working with you again in the future!"`,
  },
  {
    img: dp,
    reviewImg: review3,
    date: "21 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I love working with clients like you who appreciate our dedication to providing high-quality freelancer services. Thank you for your trust and for sharing your positive experience with others."`,
  },
  {
    img: dp,
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
