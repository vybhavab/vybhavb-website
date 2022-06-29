import React from 'react';

interface HeroProps {
  heroTitle: string;
  heroContent: JSX.Element;
}

const Hero = ({ heroTitle, heroContent }: HeroProps): JSX.Element => (
  <div
    className="hero bg-base-200"
    style={{
      height: 'calc(100vh - 64px)',
    }}
  >
    <div className="hero-content text-center">
      <div className="max-w-full">
        <div className="relative invisible lg:visible">
          <div className="absolute -top-20 left-64 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-heroBlob" />
          <div className="absolute -top-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-heroBlob animation-delay-5000" />
          <div className="absolute -top-20 right-52 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-heroBlob animation-delay-3000" />
        </div>

        <h1 className="font-extrabold p-2 text-5xl lg:text-9xl drop-shadow-md shadow-white">{heroTitle}</h1>
        {heroContent}
      </div>
    </div>
  </div>
);

export default Hero;
