"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Local PDF Chat RAG App",
    description:
      "This is a simple PDF question-answering app built with Langchain, on a local language model running through Ollama. You can upload any PDF file and ask questions about it and the app will pull out relevant information and give short, helpful answers.",
    imageUrl: "/projects/pdf-rag.png",
    badges: ["streamlit", "LangChain", "Ollama", "RAG"],
    githubLink: "https://github.com/shane-thomas/pdf-chat-rag",
    websiteUrl: "", 
  },
  {
    title: "HerWay",
    description:
      "Created a safety-focused MVP in a 2-day hackathon using React Native, allowing women to review and rate how safe different locations are. and rate how safe different locations are. The app used Firebase to store ratings and displayed heatmaps on native iOS and Android maps to visually represent safety levels.",
    imageUrl: "/projects/her-way.png",
    badges: ["React Native", "Expo", "Firebase"],
    githubLink: "https://github.com/shane-thomas/women-techies-24",
    websiteUrl: "", 
  },
  {
    title: "Breakout Stock Screener",
    description:
      "A Python-based stock screener inspired by Mark Minervini's Volume Dry-Up (VDU) and Volatility Contraction Pattern (VCP) concepts. The program identifies stocks exhibiting significant volume compression, signaling potential imminent breakouts ideal for swing trading setups.",
    imageUrl: "/projects/stock.png",
    badges: ["Python", "API", "requests", "Pandas"],
    githubLink: "https://github.com/shane-thomas/breakout-stock-screener",
    websiteUrl: "", 
  },
  {
    title: "ClearSky",
    description:
      "A React app providing real-time weather updates with a user-friendly interface. Features include light/dark mode toggle, smooth routing using React Router, and responsive design",
    imageUrl: "/projects/clear-sky.png",
    badges: ["React", "API", "GitHub Pages"],
    githubLink: "https://github.com/shane-thomas/clear-sky",
    websiteUrl: "https://shane-thomas.github.io/clear-sky/", 
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const fullName = "Hello! I am Shane Shaji Thomas";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Type out the name one character at a time
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (lower = faster)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 300);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <title>Shane Shaji Thomas</title>
      {/*HERO */}
      <section
        id="hero"
        ref={heroRef}
        className="h-screen bg-black text-white flex-col flex p-10 justify-center"
      >
        <h1 className="text-5xl font-bold mb-3">
          <span className="tracking-wide bg-white text-transparent bg-clip-text">
            {displayText}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100 ml-1`}
            >
              |
            </span>
          </span>
        </h1>

        <h2 className="text-2xl text-gray-400 font-medium tracking-wide mb-3">
          Student at VIT, Vellore
        </h2>
        <h3 className="text-2xl text-gray-400 font-normal tracking-wide mb-3">
          Machine Learning | Web Development | App Development
        </h3>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shane-thomas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6"
          >
            <Image
              src="/github-mark-white.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://linkedin.com/in/shane-thomas1011"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6"
          >
            <Image
              src="/linkedin-White.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1W1FSaB47SQMp92GI9I_-EBgjZz4I6JsN/view"
            target="_blank"
            className="text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
          >
            <span>View Resume</span>
            {/* <FileDown size={16} /> */}
          </a>
        </div>
        <ChevronDown
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 animate-bounce w-[48px] h-[48px] text-white hover:text-gray-400 cursor-pointer transition-colors"
          aria-label="Scroll to About section"
        />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="tracking-wide py-20 px-6 md:px-24 lg:px-40 text-white border-t-1 border-gray-700 "
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="mb-6 leading-relaxed tracking-wide">
          I am a third-year undergraduate student at Vellore Institute of
          Technology with a strong passion for technology and innovation. My
          interests span across front-end development, emerging industry trends,
          and machine learning.
        </p>
        <p className="mb-6 leading-relaxed tracking-wide">
          Driven by curiosity and a growth mindset, I am always keen to explore
          new technologies—whether it's a modern framework, a programming
          language, or a tool that can enhance development workflows. Outside
          academics and projects, I enjoy gaming and continuously learning
          across a range of topics that pique my interest.
        </p>
        <p className="mb-12 leading-relaxed tracking-wide">
          I am open to collaboration and discussions related to app development,
          machine learning, or any exciting idea that blends creativity with
          technology. Feel free to email me at{" "}
          <a
            href="mailto:shaneshaji10@gmail.com"
            className="border-b inline-block opacity-[0.7]"
          >
            shaneshaji10@gmail.com
          </a>{" "}
          or reach out to me on my Linkedin!
        </p>

        <div className="my-5 py-5 flex space-x-10 items-center border-y-1 border-gray-700">
          <a
            href="https://github.com/shane-thomas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6"
          >
            <Image
              src="/github-mark-white.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://linkedin.com/in/shane-thomas1011"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6"
          >
            <Image
              src="/linkedin-White.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1W1FSaB47SQMp92GI9I_-EBgjZz4I6JsN/view"
            className=" tracking-wide text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
          >
            <span>View resume</span>
          </a>
        </div>

        <h3 className="text-2xl font-semibold mb-4 tracking-wide">Skills</h3>
        <ul className="list-disc list-inside space-y-1 tracking-wide">
          <li>
            <strong>Languages:</strong> JavaScript, Python, Typescript, R,
            HTML5, CSS3, C++
          </li>
          <li>
            <strong>Web Frameworks:</strong> Tailwind CSS, React, Next.js, React
            Native, Firebase, Flutter
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Android
            Studio, Jupyter Notebook
          </li>
          <li>
            <strong>Python Libraries:</strong> scikit-learn, Pandas, NumPy,
            pyTorch, tensorflow, requests, Selenium, BeautifulSoup, opencv, streamlit, LangChain
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 px-6 md:px-24 lg:px-40 text-white border-t-1 border-gray-700 "
      >
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              badges={project.badges}
              githubLink={project.githubLink}
              websiteUrl={project.websiteUrl} 
            />
          ))}
        </div>
      </section>
    </>
  );
}
