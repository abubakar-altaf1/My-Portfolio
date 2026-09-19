import img from './assets/images/54crates.png';
import img2 from './assets/images/freight.png';
import img3 from './assets/images/little-stars.png';
import img4 from './assets/images/fix-my-ride.png';
import img0 from './assets/images/quickgrid.png';
import img5 from './assets/images/terapage.png';
import img6 from './assets/images/vibe.png';
import profile from './assets/images/profile.png';

const logotext = "Abubakar ALtaf";
const meta = {
  title: "Abubakar ALtaf",
  description:
    "I'm Abubakar ALtaf, a Full Stack Developer currently working in Lahore, Pakistan.",
};

const introdata = {
  title: "I’m Abubakar ALtaf",
  animated: {
    first: "I build web apps",
    second: "I craft clean code",
    third: "I solve problems digitally",
  },
  description:
    "Explore my portfolio showcasing diverse projects and skills in web development. Let's create innovative solutions together. Welcome to my site",
  your_img_url: profile,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "Results-driven Full Stack Developer with over 2 years of hands-on production experience building and scaling modern web applications using Next.js, React.js, Node.js, Supabase, PostgreSQL, and MongoDB. Proven expertise in RESTful API development, database architecture, real-time systems, and delivering responsive pixel-perfect UIs. Strong track record of owning end-to-end features, enhancing system architecture, and shipping high-quality software within agile cross-functional teams. Passionate about clean code, performance optimization, and building scalable solutions that solve real-world problems.",
};
const worktimeline = [
  {
    jobtitle: "Associate Software Engineer",
    where: "Axtra Studios",
    date: "Feb 2025 - June 2026",
  },
  {
    jobtitle: "MERN Stack Developer",
    where: "Webevis Technologies Pvt Ltd",
    date: "Jul 2024 - Oct 2024",
  },
  {
    jobtitle: "React Developer",
    where: "MSOFT",
    date: "Jul 2023 - Feb 2024",
  },
  {
    jobtitle: "Frontend Developer (Intern)",
    where: "Digital Vortax",
    date: "Apr 2023 - Jun 2023",
  },
];

const skills = [
  {
    name: "JavaScript (ES6+)",
    value: 90,
  },
  {
    name: "TypeScript",
    value: 85,
  },
  {
    name: "HTML5",
    value: 90,
  },
  {
    name: "CSS3",
    value: 85,
  },
  {
    name: "React.js",
    value: 85,
  },
  {
    name: "Next.js",
    value: 80,
  },
  {
    name: "Redux",
    value: 75,
  },
  {
    name: "Node.js",
    value: 75,
  },
  {
    name: "Express.js",
    value: 80,
  },
  {
    name: "Nest.js",
    value: 70,
  },
  {
    name: "MongoDB",
    value: 80,
  },
  {
    name: "PostgreSQL",
    value: 75,
  },
  {
    name: "Supabase",
    value: 80,
  },
  {
    name: "Tailwind CSS",
    value: 85,
  },
  {
    name: "Bootstrap CSS",
    value: 80,
  },
  {
    name: "RESTful API Design",
    value: 85,
  },
  {
    name: "RTK Query / React Query",
    value: 75,
  },
  {
    name: "Jest",
    value: 70,
  },
  {
    name: "JWT Authentication",
    value: 75,
  },
  {
    name: "Database Schema Design",
    value: 80,
  },
  {
    name: "SOLID Principles",
    value: 75,
  },
  {
    name: "Agile/Scrum",
    value: 80,
  },
  {
    name: "GitHub Copilot",
    value: 70,
  },
  {
    name: "Claude Code",
    value: 70,
  },
  {
    name: "Cursor",
    value: 75,
  },
];

const services = [
  {
    title: "Full Stack Web Apps",
    description:
    "I build and scale end-to-end web applications using Next.js, React.js, TypeScript, Node.js, Supabase, PostgreSQL, and MongoDB — from database schema design to pixel-perfect UI.",
  },
  {
    title: "API Development & Integration",
    description:
    "I design and implement scalable RESTful APIs with Node.js, Express.js, and Nest.js, featuring JWT authentication, middleware architecture, and seamless third-party integrations.",
  },
  {
    title: "Real-Time Systems & Cloud",
    description:
    "I build real-time features with Supabase subscriptions, optimize database queries and schema design, and deploy production-ready applications with SSR/SSG for SEO and performance.",
  },
];

const dataportfolio = [
  
  {
    img: img,
    description: "54 Crates — Music Platform",
    link: "https://54crates.com/",
  },
  {
    img: img0,
    description: "QuickGrid — AI-Powered Instagram Design Platform",
    link: "https://quickgrid.ai/",
  },
  {
    img: img5,
    description: "Terapage — Research Platform",
    link: "https://app.terapage.ai/",
  },
  {
    img: img6,
    description: "Vibe — AI-Powered Web Design Generator",
    link: "https://vibe-ten-cyan.vercel.app/",
  },
  {
    img: img2,
    description: "El Carim — Music Platform for DJs",
    link: "#",
  },
  {
    img: img4,
    description: "Fix My Ride",
    link: "https://fix-my-ride-lac.vercel.app/",
  },
  {
    img: img3,
    description: "Little Stars",
    link: "https://little-stars-snowy.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "bakarrajpoot098@gmail.com",
  YOUR_FONE: "+92 307-4452098",
  description:
    "Please feel free to reach out using the form below. Your message is important to us and we'll respond promptly. Thank you for contacting us!. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_y8ourg9",
  YOUR_TEMPLATE_ID: "template_blg9uew",
  YOUR_USER_ID: "y4D7K_xH4zzNDR1gi",
};

const socialprofils = {
  github: "https://github.com/abubakar-altaf1",
  linkedin: "https://www.linkedin.com/in/abubakar-rajpoot/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
