import React from 'react'
import '../Assets/Home.css'
import Nav from './Nav'
import Carousel from './Carousel'
import Footer from './FooterContainer'
import Body from './Body'

const Home = () => {
  return (
    <>
    <Nav/>
    <Carousel/>
    <Body/>
    <Footer/>
    </>
  )
}

export default Home