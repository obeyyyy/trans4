"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Example scroll visibility logic for the second section
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="main-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1>My Site</h1>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
        </ul>
      </nav>

      {/* Background section */}
      <div className="background-section">
        {/* You can add a background image here */}
      </div>

      {/* Text div that stays on top of the background */}
      <div className="text-overlay">
        <h2>This is the overlay text</h2>
        <p>It stays on top of the background as you scroll</p>
      </div>

      {/* Scrollable section 1 */}
      <div className="scroll-section" id="section1">
        <h2>This is the first scrollable section</h2>
        <p>More content here...</p>
      </div>

      {/* Scrollable section 2 */}
      <div className={`scroll-section ${isVisible ? 'show' : ''}`} id="section2">
        <h2>This section slides over the background</h2>
        <p>Content of the second section...</p>
      </div>
    </main>
  );
}
