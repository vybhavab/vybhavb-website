import React from 'react';
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
              <h1 className={classnames('title', 'is-size-2', 'is-size-3-mobile', 'has-text-centered-mobile', { 'fade-in': shouldDoFade })} onAnimationEnd={this.callFirst}>
                Hey I&apos;m Vybhav!
              </h1>
              <p className={classnames('subtitle', 'is-size-5', 'is-size-6-mobile', { 'fade-in': shouldDoFade })}>
                <div className="is-hidden-mobile">
                  <p>tl;dr:&nbsp;</p>
                  <p>I build scaleable, fast and secure applications. Check some of them out over at <a href="/projects" className="has-text-link">/projects</a></p>
                  <p>Want to chat? Email me → <a href="mailto:contact@vybhavb.com" className="has-text-link">contact@vybhavb.com</a> or find me anywhere @<a href="https://keybase.io/vybhavb" className="has-text-link">vybhavb</a></p>
                </div>
                <div className="is-hidden-tablet">
                  <p>tl;dr:&nbsp;</p>
                  <p style={{ paddingTop: '5px', paddingBottom: '5px' }}>I build scaleable, fast and secure applications. Check them out <a href="/projects" className="has-text-link">here</a></p>
                  <p>Let&apos;s chat, <a href="mailto:contact@vybhavb.com" className="has-text-link">email me</a> or find me anywhere @<a href="https://keybase.io/vybhavb" className="has-text-link">vybhavb</a></p>
                </div>
              </p>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <h1 className="is-size-3 is-size-4-mobile has-text-centered has-text-upper has-background-light">about me</h1>
            <p className="is-size-5 is-size-6-mobile has-text-centered">
              add stuff about who i am here
            </p>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shouldDoFade: state.fade });

const mapDispatchToProps = () => ({ first: firstLoad });

export default connect(mapStateToProps, mapDispatchToProps())(Index);
