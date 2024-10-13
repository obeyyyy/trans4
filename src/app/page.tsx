"use client"
import { useEffect, useRef, useState } from 'react';
import TransText from "./Trans4Text";
import { motion } from "framer-motion";
import { translations } from './translation';


export default function Home() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en'); // Default language is English

  const changeLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };


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

      {/* Background section */}
     <div className='backgr'>
      
        {/* Text overlay that should appear immediately */}
        <div className="text-overlay">
          <TransText/>
          
          </div>
          <div className="words-container">
          <div className="words" data-text="Transit -> Transport -> Consignation -> Consultation">
            Transit&nbsp;{'->'}&nbsp;Transport&nbsp;{'->'}&nbsp;Consignation&nbsp;{'->'}&nbsp;Consultation
          </div>
        </div>
      

     {/* Our Services Section */}
     <h2 className="section-title">{translations[language].main.our_services}</h2>
     <section className="services-section">
          

          {/* Animated service div */}
          <motion.div
            className="service"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="card">
            <div className="card-image1"></div>
            <p className="card-title">CONSULTING</p>
            <p className="card-body">
            {translations[language].main.consultation}
            </p>
           
          </div>
          </motion.div>

          {/* Another animated service div */}
          <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="card">
            <div className="card-image2"></div>
            <p className="card-title">TRANSPORTATION</p>
            <p className="card-body">
            {translations[language].main.transit}
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
            <div className="card-image3"></div>
            <p className="card-title">TRANSIT</p>
            <p className="card-body">
            {translations[language].main.transit}
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
            <div className="card-image4"></div>
            <p className="card-title">CONSIGNATION</p>
            <p className="card-body">
            {translations[language].main.consignation}
            </p>
           
          </div>
          </motion.div>

        </section>
      </div>
    </main>
  );
}
