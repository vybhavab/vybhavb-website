import Hero from 'components/Hero';
import Link from 'next/link';
import React from 'react';

const Index = (): JSX.Element => (
  <div>
    <Hero
      heroTitle="Hey there!"
      heroContent={(
        <div>
          <p className="py-6 text-lg lg:text-2xl">
            Welcome to my part of the internet. I hope you like your stay.&nbsp;
            If you&apos;d like to get in touch find me anywhere @vybhavab or send me an
            {' '}
            <Link href="mailto:vybhavab@gmail.com">email </Link>
          </p>
        </div>
      )}
    />
  </div>
);

export default Index;
