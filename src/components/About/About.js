import React from 'react'
import MainScreen from '../MainScreen/MainScreen'

const About = () => {
  const subHeading = ['My Bio', 'Who I Am', 'Profile Info', 'Dev Diary', 'Hey There']
  return (
    <MainScreen heading={'About Me'} subHeading={subHeading}>
      <div style = {
        {
          color: 'white',
          fontSize: '22px'
        }
      }>Work Under Progress</div>
    </MainScreen>
  )
}

export default About