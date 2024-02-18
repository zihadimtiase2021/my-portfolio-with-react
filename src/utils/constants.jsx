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
  aboutImg_small,
  bootstrap,
  css,
  dp,
  dp_small,
  drohne112,
  drohne112_popup,
  glowUpMd,
  glowUpMd_popup,
  graphicsfreak,
  graphicsfreak_popup,
  graphicsfreak_popup_small,
  html,
  js,
  lightgallery,
  lottie,
  m3t_konfiguration,
  m3tkonfigurator_small,
  m8it,
  m8it_popup,
  psyCRO,
  psyCRO_popup,
  reactQuizApp,
  reactQuizApp1,
  reactQuizApp2,
  reactQuizApp3,
  reactQuizApp4,
  review1,
  review1_small,
  review2,
  review3,
  review4,
  review5,
  review5_small,
  review_louise,
  review_louise_small,
  splidejs,
  tailwind,
  webartist,
  webartist_popup,
  webartistpopup_small,
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
    aboutImgPlaceHolder: aboutImg_small,
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
    content: "I have been working as a <br /> freelancer since 2022",
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
        "Dhaka Cantonment Board Adarsha Biddyaniketon, <br/> Manikdi - 2009 - 2020",
      content:
        "This school was my first education institute. I have passed my most of the valueable time of my life in my school.",
      icon: <FaSchool />,
    },
  },
};

export const reviews = [
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review_louise,
    placeholder: review_louise_small,
    date: "16 Jan 2024·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/",
    content: `Working with Louise M was a pleasure. Excellent communication, professionalism, and a shared commitment to quality made our collaboration outstanding.`,
  },
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review5,
    placeholder: review5_small,
    date: "01 August 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.linkedin.com/in/zihad-imtiase-the-web-wizard-41a62b289/",
    content: `"🎉 Happy Client, Happy Me! 🌟 Just received the most amazing feedback from one of my client, and I couldn't be more thrilled! 🙌💖"`,
  },
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review1,
    placeholder: review1_small,
    date: "14 February 2023·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"It's always a joy to receive feedback from happy clients like you! I am thrilled that I could meet your expectations and provide you with a great experience. Thank you for your trust and support, and I look forward to serving you again soon!"`,
  },
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review2,
    placeholder: review1_small,
    date: "30 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I am thrilled to have delivered the results you were looking for and to have helped you achieve your project goals. Thank you for your positive feedback. I am look forward to working with you again in the future!"`,
  },
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review3,
    placeholder: review1_small,
    date: "21 December 2022·",
    timeIcon: <BiWorld />,
    linkIcon: <FaLink />,
    link: "https://www.freelancer.com.bd/u/nurzahanbegum2",
    content: `"I love working with clients like you who appreciate our dedication to providing high-quality freelancer services. Thank you for your trust and for sharing your positive experience with others."`,
  },
  {
    DP: dp,
    DpPlaceholder: dp_small,
    reviewImg: review4,
    placeholder: review1_small,
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
  {
    name: "Web Artist",
    uses: "HTML, Tailwind.css, JS",
    img: webartist,
  },
  { name: "M3t-konfigurator", uses: "HTML, CSS, JS", img: m3t_konfiguration },
  { name: "Graphics Freak", uses: "HTML, CSS, JS", img: graphicsfreak },
  { name: "React Quiz App", uses: "HTML, Tailwind.css, JS", img: reactQuizApp },
  { name: "DROHNE112", uses: "React.js, Tailwind.css", img: drohne112 },
  { name: "M8iT", uses: "HTML, Bootstrap, js", img: m8it },
  { name: "Glow Up", uses: "React.js, Tailwind.css", img: glowUpMd },
  { name: "PsyCRO", uses: "HTML, Tailwind.css", img: psyCRO },
];

export const portfolioPopUp = [
  {
    title: "Web Artist",
    placeholder: webartistpopup_small,
    img: [webartist_popup, webartist_popup],
    icon: [
      { icon: html, name: "html" },
      { icon: css, name: "css" },
      { icon: js, name: "JS" },
      { icon: tailwind, name: "tailwind" },
      { icon: lottie, name: "lottie" },
    ],
    description:
      "I convert this web from Figma to HTML using Tailwind CSS for a web development agency.",
  },
  {
    title: "M3t-konfigurator",
    placeholder: m3tkonfigurator_small,
    img: [m3t_konfiguration],
    icon: [
      { icon: html, name: "html" },
      { icon: css, name: "css" },
      { icon: js, name: "JS" },
      { icon: bootstrap, name: "Bootstrap" },
    ],
    description:
      "This is a fully dynamic web page based by vanila JS. You can click on the product to view its details and add it to the chart and your total price will be updated simultaneously, also if no product is selected the first time then a product will be selected by default and if you click the button. Below, you will see a popup of the selected product, etc.",
  },
  {
    title: "Graphics Freak",
    placeholder: graphicsfreak_popup_small,
    img: [graphicsfreak_popup],
    icon: [
      { icon: html, name: "html" },
      { icon: css, name: "css" },
      { icon: js, name: "JS" },
      { icon: tailwind, name: "tailwind" },
      { icon: splidejs, name: "splide.js" },
      { icon: lightgallery, name: "lightgallery" },
    ],
    description: "I convert this web from Figma to HTML using Tailwind CSS.",
  },
  {
    title: "React Quiz App",
    placeholder: m3tkonfigurator_small,
    img: [
      reactQuizApp,
      reactQuizApp1,
      reactQuizApp2,
      reactQuizApp3,
      reactQuizApp4,
    ],
    icon: [
      { icon: html, name: "html" },
      { icon: css, name: "css" },
      { icon: js, name: "JS" },
      { icon: tailwind, name: "tailwind" },
      { icon: lottie, name: "lottie" },
    ],
    description:
      "I convert this web from Figma to HTML using Tailwind CSS for a web development agency.",
  },
  {
    title: "DROHNE112",
    img: drohne112_popup,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
  {
    title: "M8iT",
    img: m8it_popup,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
  {
    title: "Glow Up",
    img: glowUpMd_popup,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
  {
    title: "PsyCro",
    img: psyCRO_popup,
    icons: {
      icon: [html, css, js, tailwind, lottie],
      title: ["asd", "asd", "asd", "asd", "asd"],
    },
  },
];
