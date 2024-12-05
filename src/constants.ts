export type Project = {
  title: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  bullets: string[];
};

export const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Javascript",
  "Tailwind",
  "Leetcode",
  "Data Structures",
  "Algorithms",
  "Git",
  "GitHub",
  "Web Sockets",
  "RESTful API",
];

export const experiences = [
  {
    title: "Front-end Engineer",
    company: "The Future University",
    period: "Chandigarh | May 2024 - Present",
    description:
      "Collaborating closely with design and product teams to create user-friendly web interfaces and solving loads of bugs",
    emoticon: "",
  },
  {
    title: "Web Developer Intern",
    company: "Stackkaroo",
    period: "Remote | Jan 2024 - Mar 2024",
    description:
      "Created interactive web applications using modern technologies like Next.js, Tailwind, Redux. Integrated seamless offline functionalities in a progressive web app.",
  },
  {
    title: "Web Developer Intern",
    company: "TMG Security",
    period: "Remote | Mar 2023 - May 2023",
    description:
      "Built a production grade e-Commerce app from scratch and work directly with customer-feedback team to identify & resolve pain points - technically.",
  },
];

export const projects: Project[] = [
  {
    title: "Realtime Text Editor + AI",
    image: "/text-editor.png",
    bullets: [
      "Architected scalable real-time collaboration platform handling concurrent user interactions through WebSocket protocols, to support simultaneous collaborative editing sessions.",
      "Integrated third-party authentication (Clerk) and Google calendar synchronization to reduce user onboarding friction.",
      "Utilized OpenAI's API to dynamically generate intelligent note summaries, enable contextual Q&A, and provide adaptive content suggestions.",
    ],
    technologies: [
      "MERN",
      "Next.js",
      "Socket.io",
      "Service Workers",
      "TypeScript",
    ],
    link: "https://memoir-frontend.vercel.app/",
    github: "https://github.com/hatiprithwish/memoir",
  },
  {
    title: "Flowchart & Diagram Maker",
    image: "/flowchart.avif",
    bullets: [
      "Supports personalized node styling, i.e., allows users to dynamically change node colors and configure edge connections",
      "Developed a file management system supporting custom <code>.qnect</code> files for saving, sharing, and resuming complex diagrams seamlessly across sessions.",
      "Built image export functionality to convert flowcharts into high-quality PNG, SVG, and JPEG formats for easy integration into presentations and workflows.",
    ],
    technologies: ["React", "React Flow", "TypeScript"],
    link: "https://qnect.vercel.app/",
    github: "https://github.com/hatiprithwish/qnect",
  },
  {
    title: "Social Media - Instagram Clone",
    image: "/instagram-clone.webp",
    bullets: [
      "Replicated core Instagram functionalities, implementing full CRUD operations for posts with features like adding, editing, deleting, liking, and commenting.",
      "Engineered user engagement features including a people search system, and follow/unfollow mechanics that enable dynamic social connections",
      "Created a personalized user experience with custom profile and dashboard interfaces, allowing users to view their content, interactions, and social connections.",
    ],
    technologies: ["React", "Zustand", "Firebase", "Clerk", "Chakra UI"],
    link: "https://bubble-ph.vercel.app/",
    github: "https://github.com/hatiprithwish/bubble",
  },
];
