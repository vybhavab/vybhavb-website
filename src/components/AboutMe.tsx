import Link from 'next/link';
import React from 'react';

const AboutMe = () => (
  <div>
    <h1 className="text-xl md:text-3xl py-11">Wait who are you?</h1>
    <p>
      I&apos;m a software engineer based out of California and I enjoy making things go fast.
      When I&apos;m not coding, I&apos;m taking some
      {' '}
      <Link href="/photos">photos</Link>
      {' '}
      or drinking some coffee (aeropress ftw).
      {' '}
      Currently, Im working with everything on the web and dabbling in
      {' '}
      Go, WASM and distributed computing.
    </p>
  </div>
);

export default AboutMe;
