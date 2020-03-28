import React from 'react';
import Typed from 'react-typed';

export default () => (
  <section className="hero is-dark is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Hey! I&apos;m Vybhav.
        </h1>
        <p className="subtitle">
          <Typed
            strings={['Here you can find anything']}
            typeSpeed={40}
          />
        </p>
      </div>
    </div>
  </section>
);
