"use client"
import { useEffect, useRef } from 'react';
import TransText from "./Trans4Text";
import { motion } from "framer-motion";

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
     <section className="services-section">
          <h2 className="section-title">Our Services</h2>

          {/* Animated service div */}
          <motion.div
            className="service"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/service1.jpg" alt="Consignation" className="service-image" />
            <div className="service-text">
              <h3>Consignation</h3>
              <p>Details about service 1.</p>
            </div>
          </motion.div>

          {/* Another animated service div */}
          <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/service2.jpg" alt="Transport" className="service-image" />
            <div className="service-text">
              <h3>Transport</h3>
              <p>Details about service 2.</p>
            </div>
          </motion.div>

           {/* Another animated service div */}
           <motion.div
            className="service"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/service3.jpg" alt="Transit" className="service-image" />
            <div className="service-text">
              <h3>Transit</h3>
              <p>Details about service 2.</p>
            </div>
          </motion.div>

        </section>
      </div>
    </main>
  );
}
