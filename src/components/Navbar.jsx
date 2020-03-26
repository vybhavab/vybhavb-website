import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  closeMenu = () => {
    this.setState({
      active: false,
    });
  }

  render() {
    const { isActive } = this.state;
    const { router: { pathname: route } } = this.props;
    return (
      <nav id="main-navbar" className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                <span className="is-size-5">vybhavb</span>
              </a>
            </Link>

            <a className={classnames('navbar-burger', 'burger', { 'is-active': isActive })} role="navigation" onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={classnames('navbar-menu', 'header', { 'is-active': isActive })}>
            <div className="navbar-end">
              <Link href="/projects">
                <a className={classnames('navbar-item', { 'is-active': route === '/projects' })} role="navigation" onClick={this.closeMenu}>
                  blog
                </a>
              </Link>
              <Link href="https://blog.vybhavb.com">
                <a className="navbar-item" role="navigation" onClick={this.closeMenu}>
                  projects
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
