import React from 'react';

interface HeroProps {
  heroTitle: string;
  heroContent: string;
}

const Hero = ({ heroTitle, heroContent }: HeroProps): JSX.Element => (
  <div
    className="hero bg-base-200"
    style={{
      height: 'calc(100vh - 64px)',
    }}
  >
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{heroTitle}</h1>
        <p className="py-6">{heroContent}</p>
      </div>
    </div>
  </div>
);

export default Hero;
