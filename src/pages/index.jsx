import React from 'react';
// import Typed from 'react-typed';
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
              <h1 className={classnames('title', 'is-size-2', { 'fade-in': shouldDoFade })} onAnimationEnd={this.callFirst}>
                Hey! I&apos;m Vybhav.
              </h1>
              <p className="subtitle">
                tl;dr:&nbsp;
                {/* <Typed
              strings={['i am you', 'you am i']}
              typeSpeed={40}
              backSpeed={20}
            /> */}
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
