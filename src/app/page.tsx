"use client"
import { useEffect, useRef, useState } from 'react';
import TransText from "./Trans4Text";
import { motion } from "framer-motion";
import { translations } from './translation';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en'); // Default language is English
  const [showVideo, setShowVideo] = useState(true); // State to control video visibility
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for our services section

  const changeLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  

  useEffect(() => {
    // Increment function to update the counter numbers
    function incrementCounter(element: HTMLElement, target: number) {
      let currentNumber = 0;
      const increment = Math.ceil(target / 100); // Adjust speed of count
      const interval = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= target) {
              currentNumber = target;
              clearInterval(interval);
          }
          element.innerText = currentNumber.toString(); // Update the element's inner text
      }, 50); // Adjust the speed of the count
  }

  // Wait for DOMContentLoaded to target the counters
  const counters = document.querySelectorAll('.counter span.count');
  counters.forEach(counter => {
      const target = +(counter.getAttribute('data-target') || 0); // Get target number from attribute
      incrementCounter(counter as HTMLElement, target); // Call the increment function
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(false); // Hide video when "Our Services" section is in view
          } else {
            setShowVideo(true); // Show video when the section is out of view
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <main className="main-page ">
      {/* Navbar */}
      <nav className="navbar">
        <h1>TRANS4 SL</h1>
        <ul>
          <li><a href="#">Email: info@gmail.com</a></li>
          <li><a href="#">Tel: +212 558 954 12</a></li>
        </ul>
         {/* Language Icons */}
         <div className="language-switcher">
          <img
            src="/englishflag.svg" // Use an English flag SVG
            alt="English"
            className={`language-icon ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          />
          <img
            src="/frenchflah.svg" // Use a French flag SVG
            alt="Français"
            className={`language-icon ${language === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
          />
        </div>
      </nav>

      {/* Video Background */}
      {showVideo && (
        <video autoPlay muted loop className="video-background">
          <source src="/tangermed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
        {/* Text overlay that should appear immediately */}
        <div className="text-overlay">
          <TransText/>
          
          </div>
          <div className="words-container">
          <div className="words" data-text="Transit -> Transport -> Consignation -> Consultation">
            Transit&nbsp;{'->'}&nbsp;Transport&nbsp;{'->'}&nbsp;Consignation&nbsp;{'->'}&nbsp;Consultation
          </div>
        </div>
      
 {/* Background section */}
 <div className='backgr'>
     {/* Our Services Section */}
     <h2 className="section-title">{translations[language].main.our_services}</h2>
     <section className="service-section1">
      {/* Animated service div */}
        <motion.div
            className="service1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card1">
            <div className="card-image card-image1"></div>
            <p className="card-title">TRANSIT</p>
            <p className="card-body">
            {translations[language].main.transit}
            </p>
           
          </div>
          </motion.div>
          </section>
          
     <section className="services-section ">
      

         

          <motion.div
          className="service"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          >
          <div className="card">
            <div className="card-image card-image2 "></div> {/* Correct class names */}
            <p className="card-title">TRANSPORTATION</p>
            <p className="card-body">
              {translations[language].main.consignation}
            </p>
          </div>
        </motion.div>


           {/* Another animated service div */}
           <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card">
            <div className=" card-image card-image3"></div>
            <p className="card-title">CONSIGNATION</p>
            <p className="card-body">
            {translations[language].main.consignation}
            </p>
           
          </div>
          </motion.div>

          
           {/* Another animated service div */}
           <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="card">
            <div className="card-image  card-image4"></div>
            <p className="card-title">CONSULTATION</p>
            <p className="card-body">
            {translations[language].main.consultation}
            </p>
           
          </div>

          </motion.div>
        </section>
        
        <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
        <h2 className="section-title">{translations[language].main.whychoose}</h2>
      <section className="counter-section">
      
        <div className="counter">
          <h3>{translations[language].main.yearsofexperience}</h3>
          <span className="count" data-target="30">0</span>
        </div>
        <div className="counter">
          <h3>Clients</h3>
          <span className="count" data-target="45">0</span>
        </div>
        <div className="counter">
          <h3>Projects</h3>
          <span className="count" data-target="1980">0</span>
        </div>
      </section>
       </motion.div>
      </div>
    </main>
  );
}
