import React from 'react'
import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'

import Categories from '../components/Categories'
import Product from '../components/Product'
import Services from '../components/Services'
import Sale from '../components/Sale'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <>
    <Navbar2/>
    <Hero/>
    <Categories />
    <Product/>
    <Sale />
    <Services/>
  

    </>
  )
}

export default Home