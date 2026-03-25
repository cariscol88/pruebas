import React from 'react';

const AnimatedBackground = ({ variant = 'default' }) => {
  const variants = {
    default: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>
    ),
    hero: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    ),
    products: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-drift-reverse"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-drift" style={{ animationDelay: '2s' }}></div>
      </div>
    ),
  };

  return variants[variant] || variants.default;
};

export default AnimatedBackground;
