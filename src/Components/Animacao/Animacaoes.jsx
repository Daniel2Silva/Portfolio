import React, { useRef } from 'react';
import './Animacoes.css';

const ScrollAnimado = ({ children }) => {
  const elementRef = useRef(null);

  React.useEffect(() => {
    const handeScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        element.classList.add('visible');
        window.removeEventListener('scroll', handeScroll);
      }
    };
    window.addEventListener('scroll', handeScroll);
    return () => window.removeEventListener('scroll', handeScroll);
  }, []);

  return (
    <div className="animaScroll" ref={elementRef}>
      {children}
    </div>
  );
};

export default ScrollAnimado;
