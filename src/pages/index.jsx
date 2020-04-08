import React from 'react';
import Typed from 'react-typed';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { firstLoad } from '../utils/redux/actions/firstLoad';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { callGlobalState: true };
  }

  callFirst = () => {
    const { callGlobalState } = this.state;
    const { first } = this.props;
    if (callGlobalState) {
      first();
      this.setState({ callGlobalState: false });
    }
  }

  render() {
    const { shouldDoFade } = this.props;
    return (
      <div>
        <section className="hero is-dark is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className={classnames('title', 'is-2', 'is-3-mobile', { 'fade-in': shouldDoFade })} onAnimationEnd={this.callFirst}>
                Hey I&apos;m Vybhav!
              </h1>
              <p className={classnames('subtitle', 'is-5', { 'fade-in': shouldDoFade })}>
                tl;dr:&nbsp; <br />
                I build scaleable, fast and secure applications. Check some of them out over at <a href="/projects" className="has-text-link">/projects</a> <br />
                Want to chat? Email me → <a href="mailto:contact@vybhavb.com" className="has-text-link">contact@vybhavb.com</a> or find me anywhere @<a href="https://keybase.io/vybhavb" className="has-text-link">vybhavb</a>
              </p>
            </div>
          </div>
        </section>
        <div className="container">
          <h1 className="title">bruh</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shouldDoFade: state.fade });

const mapDispatchToProps = () => ({ first: firstLoad });

export default connect(mapStateToProps, mapDispatchToProps())(Index);
