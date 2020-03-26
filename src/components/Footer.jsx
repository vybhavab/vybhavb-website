import React, { useState } from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href="https://www.vybhavb.com" className="has-text-black">
            &copy;
            {' '}
            { useState((new Date()).getFullYear()) }
            {' '}
            vybhavb
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
