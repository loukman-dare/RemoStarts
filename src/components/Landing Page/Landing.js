import React from 'react'
import Land from "./Lnading sections/Land"
import Header from '../General Component/Header'
import Stat from "./Lnading sections/Stat"
import OurProjects from "./Lnading sections/OurProjects"
import Services from "./Lnading sections/Services"
import AboutUS from "./Lnading sections/AboutUS"
import CustComments from "./Lnading sections/CustComments"
import Social from "./Lnading sections/Social"
import MeetTeam from './Lnading sections/MeetTeam';
import Contact from './Lnading sections/Contact';
import Footer from '../General Component/Footer'
function Landing() {
  return (
    <div>
      <Header />
      <Land />
      <Stat />
      <OurProjects />
      <Services />
      <AboutUS />
      <CustComments />
      <Social />
      <MeetTeam />
      <Contact />
      <Footer  />
    </div>
  )
}

export default Landing