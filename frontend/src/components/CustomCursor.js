import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.onclick !== null ||
                         target.closest('button') ||
                         target.closest('a');
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* Glow effect - extremely subtle */}
      <div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-[9999] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.04) 30%, transparent 70%)',
          opacity: isPointer ? 0.6 : 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
