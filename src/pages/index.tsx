import React, { useMemo, useState } from 'react';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import Link from 'next/link';
import heroTitleMultiLanguage from 'data/indexLanguages';
import { AboutMeEnum } from 'types/aboutme.types';

const heroContent = (
  <p className="py-6 text-xl">
    Welcome to my home on the internet. I hope you enjoy your stay!
    <br />
    Currently,
    {' @'}
    <Link href="https://www.tiktok.com">
      <span className="relative">
        <span className="font-bold mix-blend-multiply dark:mix-blend-screen text-[#69C9D0]">TikTok</span>
        <span className="font-bold mix-blend-multiply dark:mix-blend-screen absolute left-[1.7px] top-[-0.5px]  text-[#EE1D52]">TikTok</span>
      </span>
    </Link>
    {' '}
    helping build
    {' '}
    <Link href="https://effecthouse.tiktok.com"><a href="https://effecthouse.tiktok.com" className="text-info">Effect House</a></Link>
    .
    <br />
    If you&apos;d like to chat find me anywhere
    {' '}
    <Link href="https://keybase.io/vybhavab"><button type="button" className="text-info">@vybhavab</button></Link>
    {' '}
    or send me an
    {' '}
    <Link href="mailto:vybhavab@gmail.com"><button type="button" className="text-info">email</button></Link>
  </p>
);

const mobileHeroContent = (
  <p className="py-6 text-md">
    Welcome to my home on the internet. Currently I&apos;m
    {' @'}
    <Link href="https://www.tiktok.com">
      <span className="relative">
        <span className="font-bold mix-blend-multiply dark:mix-blend-screen text-[#69C9D0]">TikTok</span>
        <span className="font-bold mix-blend-multiply dark:mix-blend-screen absolute left-[1.7px] top-[-0.5px]  text-[#EE1D52]">TikTok</span>
      </span>
    </Link>
    {' '}
    building out
    {' '}
    <Link href="https://effecthouse.tiktok.com"><a href="https://effecthouse.tiktok.com" className="text-info">Effect House</a></Link>
    {'. '}
    Wanna talk? Find me anywhere
    {' '}
    <Link href="https://keybase.io/vybhavab"><button type="button" className="text-info">@vybhavab</button></Link>
    {' '}
    or send me an
    {' '}
    <Link href="mailto:vybhavab@gmail.com"><button type="button" className="text-info">email</button></Link>
  </p>
);

const Index = (): JSX.Element => (
  <div>
    <Hero
      heroTitle="Hello World!"
      heroTitleList={heroTitleMultiLanguage}
      heroContent={heroContent}
      mobileHeroContent={mobileHeroContent}
    />
    <div className="container mx-auto px-4">
      <div className="flex">
        <div className="flex-1 w-1/2">
          <AboutMe />
        </div>
        <div className="flex-1 w-1/2">
          <div className={getViewBg}>
            test
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
