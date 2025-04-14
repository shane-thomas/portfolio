'use client';
import './globals.css'
import { ReactNode, useState, useEffect } from 'react'
import Navbar from './components/Navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowNavbar(window.scrollY > heroHeight * 0.95);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar show={showNavbar} />
        {children}
      </body>
    </html>
  )
}