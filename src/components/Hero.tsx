import React, { useEffect, useRef } from 'react';
import Typed, { TypedOptions } from 'typed.js';

interface HeroProps {
  heroTitle: string;
  heroTitleList?: string[];
  heroContent: JSX.Element;
  mobileHeroContent: JSX.Element;
}

const Hero = ({
  heroTitle, heroTitleList, heroContent, mobileHeroContent,
}: HeroProps): JSX.Element => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options:TypedOptions = {
      strings: heroTitleList,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      smartBackspace: true,
      shuffle: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    if (el && el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed.current) { typed.current.destroy(); }
    };
  });

  return (
    <div
      className="hero bg-base-200"
      style={{
        height: 'calc(70vh - 64px)',
      }}
    >
      <div className="hero-content flex-col">
        <div className="w-fit">
          { (heroTitleList && heroTitleList.length > 0) ? <span className="font-extrabold p-2 text-4xl lg:text-8xl drop-shadow-md shadow-white text-center" ref={el} /> : <h1 className="font-extrabold p-2 text-4xl lg:text-8xl drop-shadow-md shadow-white text-center">{heroTitle}</h1>}
        </div>
        <div className="md:hidden">
          { mobileHeroContent }
        </div>
        <div className="hidden md:block text-left">
          {heroContent}
        </div>

      </div>
    </div>
  );
};

Hero.defaultProps = {
  heroTitleList: [],
};

export default Hero;
