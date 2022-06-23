import Hero from 'components/Hero';
import { projectData } from 'data/projects';
import React from 'react';

export async function getStaticProps() {
  return {
    props: {
      projects: projectData,
    },
  };
}

// <Hero />
// <Projects projects={projects}/>
const Index = (): JSX.Element => (
  <div>
    <Hero heroTitle="Hello World" heroContent="Welcome to my home on the internet. A lot more to come!!" />
  </div>
);

export default Index;
