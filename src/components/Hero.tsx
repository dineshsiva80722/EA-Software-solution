import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Team working"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute  inset-0 bg-black/50" />
      <div className="relative pt-40 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-white text-9xl font-semibold mb-4">
          Implementing<br />
          Software<br />
          Solutions
        </h1>
        <p className="text-white text-4xl tracking-[0.2em] py-5 mb-8">
          Innovating Tomorrow's Solutions, Today.<br />
          Logo - Your Trusted IT Partner
        </p>
        <button className="backdrop-blur-sm bg-white/10 text-xl font-bold text-white border border-white w-80 h-16 rounded-full flex justify-around items-center 
          relative overflow-hidden group
          transition-all duration-300 ease-in-out
          hover:bg-white/20 hover:border-purple-400
          hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]
          hover:scale-105
          active:scale-95">
          Let's Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-10 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          <span className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
        </button>
      </div>
    </div>
  );
}

export default Hero;