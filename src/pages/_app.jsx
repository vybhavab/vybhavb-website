/* eslint-disable import/first, react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../assets/css/application.scss';

import Footer from '../components/Footer';
import Navigation from '../components/Navbar';

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>vybhavb</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" hid="description" content="my personal portfolio." />
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}
