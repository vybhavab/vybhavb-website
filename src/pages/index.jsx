import React from 'react';
import Typed from 'react-typed';

export default () => (
  <section className="hero is-dark is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-2">
          Hey! I&apos;m Vybhav.
        </h1>
        <p className="subtitle">
          i am&nbsp;
          <Typed
            strings={['an undergrad computer science student',
              'a full stack developer',
              'a photographer',
              'a security research enthusiast',
              '<a href=\'//keybase.io/vybhavb\'>@vybhavb</a> everywhere online']}
            typeSpeed={40}
          />
        </p>
      </div>
    </div>
    <div className="hero-foot has-text-centered">
      <h1 className="title is-size-6">scroll down to learn more about me</h1>
      <br />
    </div>
  </section>
);
