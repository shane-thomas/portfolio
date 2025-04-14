'use client';
import { useEffect, useState } from 'react';

interface Props {
  show: boolean;
}

const Navbar = ({ show }: Props) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('nav')?.parentElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (window.scrollY >= top - height * 0.3 && window.scrollY < top + height * 0.7) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transform transition-transform duration-500 border-gray-700 border-b-1
      ${show ? 'translate-y-0' : '-translate-y-full'} bg-black`}
    >
      <nav className="flex justify-start space-x-6">
        <button
          className={`cursor-pointer ${activeSection === 'hero' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => scrollTo('hero')}
        >
          home
        </button>
        <button
          className={`cursor-pointer ${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => scrollTo('about')}
        >
          about
        </button>
        <button
          className={`cursor-pointer ${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => scrollTo('projects')}
        >
          projects
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
