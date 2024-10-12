import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function LandingText() {
  useEffect(() => {
    // GSAP animation for the number 4
    gsap.fromTo(".animated-4", 
      { scale: 1 }, 
      { 
        duration: 2, 
        y: -10,      
        scale: 2,    
        rotate: 20, 
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="landing-text">
      <h1 className="company-name">
        {/* "T" treated as a separate element */}
        <span className="t relative ">T</span>
        {/* Underlined "RANS" */}
        <span className="underline">RANS</span>
        {/* Animated 4 */}
        <span className="animated-4">4</span>
        {/* Smaller "SARL" */}
        <small>SARL</small>
      </h1>
    </div>
  );
}
