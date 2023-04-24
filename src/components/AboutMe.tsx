import Link from 'next/link';
import React, { ReactElement } from 'react';

// interface AboutMeProps {
// }

const AboutMe = ():ReactElement => (
  <div className="flex flex-col items-center justify-center">
    <div className="xl:container mx-auto flex flex-wrap">
      <h1 className="text-xl md:text-3xl py-3">So who are you?</h1>
      <p className="text-l">
        I&apos;m a software enginner, photographer and coffee snob (love me my aeropress) based out of California.

      </p>
    </div>
  </div>
);

export default AboutMe;
