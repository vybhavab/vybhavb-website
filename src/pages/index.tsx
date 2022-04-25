import React from 'react';
import { Hero } from 'components/Hero';
import Projects from 'components/Projects';
import { projectData } from 'data/projects'

export async function getStaticProps() {
  return {
    props: {
      projects:projectData
    },
  }
}

const Index = ({projects}) => {
  return (
    <div>
      <Hero />
      <Projects projects={projects}/>
    </div>
  )
};

export default Index;
