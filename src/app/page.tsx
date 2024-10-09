"use client"
import { useEffect, useRef } from 'react';

export default function Home() {
  const section2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <main className="main-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1>TRANS4 SL</h1>
        <ul>
          <li><a href="#">Email: info@gmail.com</a></li>
          <li><a href="#">Tel: +212 558 954 12</a></li>
        </ul>
      </nav>

      {/* Background section */}
      <div className="background-section bg-fixed">
        {/* Text overlay that should appear immediately */}
        <div className="text-overlay">
          <h2>TRANS4 SL</h2>
          <p>Efficient Transportation Services</p>
        </div>
      </div>

      {/* Scrollable section 1 */}
      <div className="scroll-section" id="section1"  ref={section2Ref}>
        <h2>This is the first scrollable section</h2>
        <p>More content here...</p>
      </div>

      {/* Scrollable section 2 with animation */}
      <div className="scroll-section" id="section2" ref={section2Ref}>
        <h2>This section slides over the background</h2>
        <p>Content of the second section...</p>
      </div>
    </main>
  );
}
