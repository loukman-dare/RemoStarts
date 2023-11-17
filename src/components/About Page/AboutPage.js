import React from 'react'
import Header from '../General Component/Header'
import SecHeading from './About Section/SecHeading'
import SectionDev from './About Section/SectionDev'
import SecSolutions from './About Section/SecSolutions'
import SecProducts from './About Section/SecProducts'
import AboutHire from './About Section/AboutHire'
import Footer from '../General Component/Footer'
function AboutPage() {
  return (
    <div>
        <Header/>
        <SecHeading />
        <SectionDev />
        <SecSolutions />
        <SecProducts />
        <AboutHire />
        <Footer/>
    </div>
  )
}

export default AboutPage