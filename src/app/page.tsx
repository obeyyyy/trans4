"use client"
import { useEffect, useRef, useState } from 'react';
import TransText from "./Trans4Text";
import { motion } from "framer-motion";
import { translations } from './translation';
import emailjs from 'emailjs-com';
import Contact from './contact'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en'); // Default language is English
  const [showVideo, setShowVideo] = useState(true); // State to control video visibility
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for our services section

  const changeLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [status, setStatus] = useState('');
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.send('service_yp1d2i8', 'template_oe51lk8', formData, '4xYZgRXwTULV1UCbn')
        .then((result) => {
          setStatus('Email sent successfully!');
        }, (error) => {
          setStatus('Failed to send the email.');
        });
    };
  

  

  useEffect(() => {
    // Increment function to update the counter numbers
    function incrementCounter(element: HTMLElement, target: number) {
      let currentNumber = 0;
      const increment = Math.ceil(target / 500); // Adjust speed of count
      const interval = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= target) {
              currentNumber = target;
              clearInterval(interval);
          }
          element.innerText = currentNumber.toString() + "+"; // Update the element's inner text
      }, 100); // Adjust the speed of the count
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

}


  return (
    <main className="main-page ">
      {/* Navbar */}
      <nav className="navbar">
        <img className='logo3' src='/logo5.png'></img>
        <ul>
          <img src="/emaillogo.png" className='language-icon1'/>
          <li className='h3'>Trans4tanger@gmail.com</li>
        </ul>

        <ul>
          <img src="/phonelogo.png" className='language-icon1'/>
          <li className='h4'>+212 666-981720</li>
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

        <div className="scroll-down-container">
        <p className="scroll-text">{translations[language].main.scroll}</p>
        <span className="scroll-down"></span>
       
      </div>

      
      
 {/* Background section */}
 <div className='backgr'>
  
     {/* Our Services Section */}
     <h2 className="section-title">{translations[language].main.our_services}</h2>
     <div className='align-main'>
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
          
     <section className="services-section">
      

          <motion.div
          className="service"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
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
        </div>
        
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
          <span className="count" data-target="18">0</span>
          
        </div>
        <div className="counter">
          <h3>Clients</h3>
          <span className="count" data-target="40">0</span>
        </div>
        <div className="counter">
          <h3>Projects</h3>
          <span className="count" data-target="2006">0</span>
        </div>
      </section>
       </motion.div>
       {/* Clients section */}
       <section className="clients-section">
        <h2 className="clients-title">Our Clients</h2>
        <div className="clients-logos">
          <div className="client-logo">
            <img src="/clients/agl.png" alt="Client 1 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/renault.png" alt="Client 2 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/pwl.png" alt="Client 3 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/tetouanexpo.png" alt="Client 4 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/bernimod.png" alt="Client 4 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/ilpea.png" alt="Client 4 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/mm.png" alt="Client 4 Logo" />
          </div>
          <div className="client-logo">
            <img src="/clients/geodis.png" alt="Client 4 Logo" />
          </div>
          {/* Add more client logos as needed */}
        </div>
      </section>

      <h2 className="section-title">{translations[language].main.contact_us}</h2>
      <section className='contact_section'>
      <div className="responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.5341327717133!2d-5.801766047570283!3d35.77567685615017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f606385458b%3A0x6b0246fae8f4f607!2zTmVqbWEgLSDYp9mE2YbYrNmF2Kk!5e0!3m2!1sen!2sma!4v1729547969840!5m2!1sen!2sma"></iframe>
      </div>
      <div className="contact-form-container">
            <Contact /> {/* Add the ContactForm here */}
          </div>
      </section>
      
      </div>
    </main>
  );
}
