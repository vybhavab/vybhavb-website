import Hero from 'components/Hero';
import Link from 'next/link';
import React from 'react';

const heroContent = (
  <p className="py-6 text-xl">
    Welcome to my home on the internet. I hope you enjoy your stay!
    <br />
    Currently,
    {' '}
    <Link href="https://www.tiktok.com">@Tiktok</Link>
    {' '}
    helping build
    {' '}
    <Link href="https://effecthouse.tiktok.com"><a href="https://effecthouse.tiktok.com" className="text-emerald-400">Effect House</a></Link>
    .
    <br />
    If you&apos;d like to chat find me anywhere @vybhavab or send me an
    {' '}
    <Link href="mailto:vybhavab@gmail.com"><a href="mailto:vybhavab@gmail.com" className="text-info">email</a></Link>
  </p>
);

const mobileHeroContent = (
  <p className="py-6 text-md">
    Welcome to my home on the internet. Currently I&apos;m working
    {' '}
    <Link href="https://www.tiktok.com">@Tiktok</Link>
    {' '}
    building out
    {' '}
    <Link href="https://effecthouse.tiktok.com"><a href="https://effecthouse.tiktok.com" className="text-emerald-400">Effect House</a></Link>
    If you&apos;d like to get in touch find me anywhere @vybhavab or send me an
    {' '}
    <Link href="mailto:vybhavab@gmail.com">email </Link>
  </p>
);

const Index = (): JSX.Element => (
  <div>
    <Hero
      heroTitle="Hey there!"
      heroTitleList={
        [
          'Pershëndetje Botë',
          'أهلاً بالعالم',
          'Ahoj Světe!',
          'Здравей, свят!',
          'ជំរាបសួរ ពិភពលោក',
          '你好世界',
          'Hej, Verden!',
          'Hallo, wereld!',
          'Hello World!',
          'Salut le Monde!',
          'Hallo Welt!',
          'Γεια σου κόσμε!',
          'שלום עולם',
          'नमस्ते दुनिया',
          'Helló világ!',
          'Halló heimur!',
          'Ndewo Ụwa',
          'Ciao Mondo!',
          'こんにちは、 世界！',
          'ಹಲೋ ವರ್ಲ್ಡ್',
          '반갑다 세상아',
          'Moien Welt!',
          'Hallo verden!',
          '!سلام دنیا',
          'Witaj świecie!',
          'Olá, mundo!',
          'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
          'Salut lume!',
          'Ahoj, svet!',
          '¡Hola mundo!',
          'Hallå världen!',
          'Kamusta mundo!',
          'ஹலோ உலகம்',
          'హలో వరల్డ్',
          'હેલો વર્લ્ડ',
          'สวัสดีโลก!',
          'Merhaba Dünya!',
          'Привiт, свiте!',
          'ہیلو دنیا والو',
          'Xin chào thế giới',
        ]
      }
      heroContent={heroContent}
      mobileHeroContent={mobileHeroContent}
    />
    <div className="container mx-auto px-4">
      <div>
        <h1 className="text-xl md:text-3xl py-11">While you&apos;re here, how about checking out some stuff I&apos;ve done?</h1>
      </div>
    </div>
  </div>
);

export default Index;
