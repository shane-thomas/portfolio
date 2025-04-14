"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown, Github, Linkedin, FileDown } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        ref={heroRef}
        className="h-screen bg-black text-white flex-col flex items-center justify-center gap-5"
      >
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#e9e9e9] via-[#9a9a9a] to-[#707070] text-transparent bg-clip-text">
            shane shaji thomas
          </span>
        </h1>

        <h2 className="text-3xl text-gray-400 font-medium">
          student at VIT, Vellore
        </h2>
        <h3 className="text-2xl text-gray-400 font-normal">
          machine learning | web development | app development
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
              className="grayscale hover:grayscale-0"
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
              className="grayscale hover:grayscale-0"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
            aria-label="Download Resume"
          >
            <span>download resume</span>
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
        className="py-20 px-6 md:px-24 lg:px-40 text-white border-t-1 border-gray-700 "
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="mb-6 leading-relaxed">
          I am a third-year undergraduate student at Vellore Institute of
          Technology with a strong passion for technology and innovation. My
          interests span across front-end development, emerging industry trends,
          and machine learning.
        </p>
        <p className="mb-6 leading-relaxed">
          Driven by curiosity and a growth mindset, I am always keen to explore
          new technologies—whether it's a modern framework, a programming
          language, or a tool that can enhance development workflows. Outside
          academics and projects, I enjoy gaming and continuously learning
          across a range of topics that pique my interest.
        </p>
        <p className="mb-12 leading-relaxed">
          I am open to collaboration and discussions related to app development,
          machine learning, or any exciting idea that blends creativity with
          technology.
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
              className="grayscale hover:grayscale-0"
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
              className="grayscale hover:grayscale-0"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-white hover:text-gray-400 transition-colors border-b border-gray-700 hover:border-gray-400 inline-flex items-center gap-2"
            aria-label="Download Resume"
          >
            <span>download resume</span>
            <FileDown size={16} />
          </a>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Languages:</strong> JavaScript, Python
          </li>
          <li>
            <strong>Web Development:</strong> HTML5, CSS3, Tailwind CSS, React,
            Next.js
          </li>
          <li>
            <strong>Machine Learning:</strong> scikit-learn, Pandas, NumPy,
            pyTorch, tensorflow
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, VS Code
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 px-6 md:px-24 lg:px-40 text-white border-t-1 border-gray-700 "
      >
        <h2 className="text-4xl mb-4 font-bold">projects</h2>
        <p>here's some stuff i built using ML and deep learning...</p>
      </section>
    </>
  );
}
