import React from 'react'
import MainScreen from '../MainScreen/MainScreen'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
      <MainScreen heading={"Hello"} subHeading={"Hello Part 2"}/>
      <Navbar/>
    </>
  )
}

export default Home