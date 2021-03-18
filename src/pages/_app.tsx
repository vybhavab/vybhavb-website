/* eslint-disable import/first, react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../assets/css/application.scss';

import Footer from '../components/Footer';
import Navigation from '../components/Navbar';
import allReducers from '../utils/redux/reducer';

const store = createStore(allReducers);
export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>vybhavb</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" hid="description" content="my personal portfolio." />
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </>
    );
  }
}
