// src/pages/home/home.tsx
import { useEffect, useState } from "react";
import "../../components/shared/styles/global.css";
import heroBackground from "../../assets/hero-bg.jpeg"; // Hero background image
import patternBg from "../../assets/geometric_pattern_bg.jpg";
import cornerImage from "../../assets/rccg.jpg"; // Corner image on glass
import logoImg from "../../assets/rccg.png"; // Logo image
import ServiceImg1 from "../../assets/center_img.jpg";
import ServiceImg2 from "../../assets/corner_img.jpg";
import ServiceImg3 from "../../assets/corner_img_2.jpg";
import ServiceImg4 from "../../assets/corner_img_3.jpg";
import ServiceImg5 from "../../assets/corner_img_4.jpg";

const slides = [
  {
    title: "Welcome to RCCG Power Assembly",
    subtitle: "Redeemed Christian Church of God Power Assembly",
  },
  {
    title: "Strengthen one another's faith",
    subtitle: "Through interactive Sunday School",
  },
  {
    title: "Break generational cycles",
    subtitle: "And spiritual struggles in our Deliverance Services",
  },
  {
    title: "Stay fired up",
    subtitle: "Midweek Faith Support",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidenavActive, setSidenavActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleSidenav = () => setSidenavActive(!sidenavActive);


useEffect(() => {
  // Select all elements with fade-in classes
  const elements = document.querySelectorAll<HTMLElement>(
    ".fade-in-up, .fade-in-left, .fade-in-right"
  );

  // Intersection Observer callback
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const parent = entry.target as HTMLElement;
          parent.classList.add("visible"); // trigger parent animation

          // Stagger child animations dynamically
          const children = Array.from(parent.children) as HTMLElement[];
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.2}s`; // 0.2s between each child
          });

          obs.unobserve(parent); // stop observing once animated
        }
      });
    },
    {
      threshold: 0.1 // triggers when 10% of element is visible
    }
  );

  // Observe all selected elements
  elements.forEach(el => observer.observe(el));

  // Cleanup on unmount
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}, []);

  return (
    <div className="home-root">
      {/* ===== Header ===== */}
      
        <header className="home-header">
            <div className="logo">
                <img src={logoImg} alt="RCCG Power Assembly Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
                <a href="#home" className="active">Home</a>
                <a href="#about">About Us</a>
                <a href="#testimonials">Testimonies</a>
                <a href="#prayer">Prayer Requests</a>
                <a href="#faith">Faith Material</a>
                <a href="#contact">Contact Us</a>
            </nav>

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleSidenav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>

        {/* Sidenav for small screens */}
        
        <div className={`home-sidenav ${sidenavActive ? "active" : ""}`}>
            <div className="logo">
                <img src={logoImg} alt="RCCG Power Assembly Logo" />
            </div>
            <nav>
                <a href="#home" onClick={toggleSidenav} className="active">Home</a>
                <a href="#about" onClick={toggleSidenav}>About Us</a>
                <a href="#testimonials" onClick={toggleSidenav}>Testimonies</a>
                <a href="#prayer" onClick={toggleSidenav}>Prayer Requests</a>
                <a href="#faith" onClick={toggleSidenav}>Faith Material</a>
                <a href="#contact" onClick={toggleSidenav}>Contact Us</a>
            </nav>
        </div>

        {/* Floating bubble close button */}
        { sidenavActive && (
        <button className="sidenav-bubble-close" onClick={toggleSidenav}>×</button>
        )}

      {/* ===== Hero Section ===== */}
      <section className="home-hero" id="home">
        <div
          className="home-hero-background"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="home-hero-glass">
          <h1 className="home-hero-title">{slides[currentSlide].title}</h1>
          <p className="home-hero-subtitle">{slides[currentSlide].subtitle}</p>
          <img
            src={cornerImage}
            alt="Corner decoration"
            className="home-hero-corner-image"
          />
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section
            className="home-about fade-in-up"
            id="about"
            style={{ backgroundImage: `url(${patternBg})` }}
        >
        <h2 className="home-section-title">Our Mission</h2>
        <p className="home-section-text">
          We strive to spread the love of Christ, serve our community, and create a welcoming place for spiritual growth.
        </p>
      </section>

      {/* ===== Services Section ===== */}
      <section className="home-services fade-in-up" id="services">
        <h2 className="home-section-title">Worship with us</h2>
        <div className="home-services-wrapper">
          {/* Left: Gallery */}
          <div className="home-services-image">
            <div className="gallery">
              <img src={ServiceImg2} alt="Gallery image 2" />
              <img src={ServiceImg1} alt="Gallery image 1" />
              <img src={ServiceImg4} alt="Gallery image 4" />
              <img src={ServiceImg3} alt="Gallery image 3" />
              <img src={ServiceImg5} alt="Gallery image 5" />
            </div>
          </div>

          {/* Right: Service List */}
          <div className="home-services-list">
            <div>
              <h3>First Service</h3>
              <p>07:30 AM - 08:30 AM : Hakidma Service (God of Progress).</p>
            </div>
            <div>
              <h3>Second Service</h3>
              <p>09:15 AM - 11:15 AM : Healing and Deliverance Service.</p>
            </div>
            <div>
              <h3>Third Service</h3>
              <p>11:30 AM - 13:00 PM : Youth & Young Adult Service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Giving Section ===== */}
      <section
        className="home-giving fade-in-up"
        id="giving"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <h2 className="home-section-title">Support Our Mission</h2>
        <p className="home-section-text">
          Help us spread hope and love to the world. Every gift makes a difference.
        </p>
        <a href="/giving" className="dithered-button">Give Now</a>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="home-testimonials fade-in-up" id="testimonials">
        <h2 className="home-section-title">Stories of Faith</h2>
        <div className="home-testimonial-cards">
          <div className="home-testimonial-card">
            <p>“This church helped me reconnect with God and find peace in my life.” – Sarah L.</p>
          </div>
          <div className="home-testimonial-card">
            <p>“Through prayer and fellowship, I found a true sense of belonging.” – James K.</p>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="home-contact fade-in-up" id="contact">
        <h2 className="home-section-title">Connect With Us</h2>
        <div className="home-contact-wrapper">
          {/* Map */}
          <div className="home-contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.5173953025974!2d28.459219499999996!3d-15.3484404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194089b402e0dfad%3A0x98887a108b3371b5!2sRccg%20power%20assembly!5e0!3m2!1sen!2szm!4v1773915759779!5m2!1sen!2szm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RCCG Power Assembly Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="home-contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message or Prayer Request"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

