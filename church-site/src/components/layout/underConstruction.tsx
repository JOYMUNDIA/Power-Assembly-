// src/components/layout/underConstruction.tsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './underConstruction.css';
import logoImg from '../../assets/rccg.jpg';

const UnderConstruction: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bubblesRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const bubbleLifeTime = 20;
    const noOfBubbles = 80;

    const bubblesLayer = bubblesRef.current;
    if (!bubblesLayer) return;

    const init = () => {
      for (let i = 0; i < noOfBubbles; i++) {
        const circle = createCircle();
        bubblesLayer.appendChild(circle);
      }
    };

    const createCircle = (): HTMLDivElement => {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.animationDelay = `${Math.random() * bubbleLifeTime}s`;

      const side = `${5 + Math.floor(Math.random() * 6)}px`;
      circle.style.width = side;
      circle.style.height = side;

      // random horizontal position
      circle.style.left = `${Math.random() * 100}%`;

      return circle;
    };

    init();

    return () => {
      if (bubblesLayer) bubblesLayer.innerHTML = '';
    };
  }, []);

  const goHome = () => {
    navigate('/'); // Navigate back to home
  };


  return (
    <div className="wrapper" ref={wrapperRef}>
      {/* Bubble layer */}
      <div className="bubbles" ref={bubblesRef}></div>

      {/* Content on top */}
      <div className="content">
        <div className="imageWrapper">
          <img src={logoImg} alt="RCCG Power Assembly Logo" />
        </div>

        <h1 className='ConstructionH1'>🚧 We’re Building Something Awesome</h1>
        <p className='ConstructionP'>
          This page is currently under construction. We're working hard to bring
          you a better experience. Please check back soon!
        </p>

        {/* Back to Home Button */}
        <button className="backHomeButton" onClick={goHome}>
          &larr; Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;