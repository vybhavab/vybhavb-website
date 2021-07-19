import React from 'react';

function Footer() {
  return (
    <footer className="footer has-background-white">
      <div className="content has-text-centered">
        <p>
          <a href="https://www.vybhavb.com" className="has-text-dark">
            &copy;
            {' '}
            {(new Date()).getFullYear()}
            {' '}
            vybhavb
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
