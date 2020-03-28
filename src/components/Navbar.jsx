/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';


class Navbar extends React.Component {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleMenu = () => {
    this.setState((prev) => ({
      isActive: !prev.isActive,
    }));
  }

  closeMenu = () => {
    this.setState({
      isActive: false,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <nav id="main-navbar" className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                <span className="is-size-5">vb</span>
              </a>
            </Link>
            <div className={classnames({ 'navbar-burger': true, burger: true, 'is-active': isActive })} role="navigation" onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={classnames('navbar-menu', 'header', { 'is-active': isActive })}>
            <div className="navbar-end">
              <Link href="//blog.vybhavb.com">
                <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                  blog
                </a>
              </Link>
              <Link href="/projects">
                <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                  projects
                </a>
              </Link>
              <Link href="/photos">
                <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                  photos
                </a>
              </Link>
              <Link href="/resume.pdf">
                <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                  résumé
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
