import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';

import AppContact from '../components/home/contact';
import AppReview from '../components/home/pricing';

import AppFaq from '../components/home/faq';
function AppHome() {
  return (
    <div className="main">

      <AppHero/>

      <AppAbout/>

      
      <AppFeature/>
      <AppReview/>
      <AppFaq/>
      <AppContact/> 
      
    </div>
  );
}

export default AppHome;
