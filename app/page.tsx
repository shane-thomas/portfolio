"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown, FileDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Machine Learning Project",
    description: "A project that uses machine learning to predict outcomes.",
    imageUrl: "/path-to-image.jpg",
    badges: ["Python", "TensorFlow", "Machine Learning"],
    githubLink: "https://github.com/yourusername/ml-project",
    websiteUrl: "https://yourwebsite.com", // Optional: if the project has a website
  },
  {
    title: "Deep Learning Model",
    description: "A deep learning model for image classification.",
    imageUrl: "/path-to-image.jpg",
    badges: ["Python", "Keras", "Deep Learning"],
    githubLink: "https://github.com/yourusername/deep-learning-model",
    websiteUrl: "", // Empty: no website for this project
  },
  {
    title: "Machine Learning Project",
    description: "A project that uses machine learning to predict outcomes.",
    imageUrl: "/path-to-image.jpg",
    badges: ["Python", "TensorFlow", "Machine Learning"],
    githubLink: "https://github.com/yourusername/ml-project",
    websiteUrl: "https://yourwebsite.com", // Optional: if the project has a website
  },{
    title: "Machine Learning Project",
    description: "A project that uses machine learning to predict outcomes.",
    imageUrl: "/path-to-image.jpg",
    badges: ["Python", "TensorFlow", "Machine Learning"],
    githubLink: "https://github.com/yourusername/ml-project",
    websiteUrl: "https://yourwebsite.com", // Optional: if the project has a website
  },
  // More projects...
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*HERO */}
      <section
        id="hero"
        ref={heroRef}
        className="h-screen bg-gradient-to-b from-gray-600 via-gray-900 to-black text-white flex-col flex items-center justify-center gap-5"
      >
        <h1 className="text-5xl font-bold">
          <span className=" tracking-wide bg-gradient-to-r from-[#e9e9e9] via-[#9a9a9a] to-[#707070] text-white bg-clip-text">
            Shane Shaji Thomas
          </span>
        </h1>

        <h2 className="text-3xl text-gray-400 font-medium tracking-wide">
          Student at VIT, Vellore
        </h2>
        <h3 className="text-2xl text-gray-400 font-normal tracking-wide">
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
            href="/resume.pdf"
            download
            className="text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
            aria-label="Download Resume"
          >
            <span>View Resume</span>
            <FileDown size={16} />
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
            className="border-b inline-block"
          >
            shaneshaji10@gmail.com
          </a>{" "}
          or reach out to me on my Linkedin!
        </p>

        <div className="my-5 py-5 flex space-x-6 items-center border-y-1 border-gray-700">
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
            href="/resume.pdf"
            download
            className=" tracking-wide text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
            aria-label="Download Resume"
          >
            <span>View resume</span>
            <FileDown size={16} />
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
            pyTorch, tensorflow, requests, Selenium, BeautifulSoup, tqdm, opencv
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
              websiteUrl={project.websiteUrl} // Pass the website URL if available
            />
          ))}
        </div>
      </section>
    </>
  );
}
