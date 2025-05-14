import React from 'react'
import MainScreen from '../MainScreen/MainScreen'

const Contact = () => {
  const subHeading = ['Reach Out', 'Ping Me', 'Let’s Chat', 'Connect Now', 'Get Involved']
  return (
    <MainScreen heading={'Contact Me'} subHeading={subHeading}>
      <div style = {
        {
          color: 'white',
          fontSize: '22px'
        }
      }>Work Under Progress</div>
    </MainScreen>
  )
}

export default Contact