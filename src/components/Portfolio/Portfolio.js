import React from 'react'
import MainScreen from '../MainScreen/MainScreen'


const Portfolio = () => {
  const subHeading = ['Work Showcase', 'Featured Projects', 'Creative Output', 'Pixel Projects', 'Code Craft']
  return (
    <MainScreen heading={'Dev Portfolio'} subHeading={subHeading}>
      <div style = {
        {
          color: 'white',
          fontSize: '22px'
        }
      }>Work Under Progress</div>
    </MainScreen>
  )
}

export default Portfolio