import Hero from 'components/Hero';
import { projectData } from 'data/projects'
import React from 'react';

export async function getStaticProps() {
  return {
    props: {
      projects:projectData
    },
  }
}
//<Hero />
//<Projects projects={projects}/>
const Index = ({projects}) => {
  return (
    <div>
      <Hero />
    </div>
  )
};

export default Index;
