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
     <h2 className="section-title">Our Services</h2>
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
             Our transit services include from border entrance export and import ve vesdvr revre rfvesvcr zfcszecez rvceer ect...   dvervzxzx
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
             Our transit services include from border entrance export and import ve vesdvr revre rfvesvcr zfcszecez rvceer ect...   dvervzxzx
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
             Our transit services include from border entrance export and import ve vesdvr revre rfvesvcr zfcszecez rvceer ect...   dvervzxzx
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
             Our transit services include from border entrance export and import ve vesdvr revre rfvesvcr zfcszecez rvceer ect...   dvervzxzx
            </p>
           
          </div>
          </motion.div>

        </section>
      </div>
    </main>
  );
}
