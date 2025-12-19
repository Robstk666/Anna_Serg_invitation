
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [blobPos, setBlobPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setBlobPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(followMouse);
    };
    const animationFrame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block"
        style={{ transform: `translate(${mousePos.x - 3}px, ${mousePos.y - 3}px)` }}
      />
      <div 
        className="cursor-blob hidden md:block"
        style={{ transform: `translate(${blobPos.x - 16}px, ${blobPos.y - 16}px)` }}
      />
    </>
  );
};

export default CustomCursor;
