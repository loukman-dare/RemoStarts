import React from 'react'
import Header from '../General Component/Header'
import CareerHead from './CareerSections/CareerHead'
import Team from './CareerSections/Team'
import Footer from '../General Component/Footer'
function Career() {
  return (
    <div className='career'>
        <Header />
        <CareerHead />
        <Team />
        <Footer />
    </div>
  )
}

export default Career