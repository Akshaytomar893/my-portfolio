import React from 'react'
import MainScreen from '../MainScreen/MainScreen'

const Achievement = () => {
  const subHeading = ['Key Milestones', 'Notable Successes', 'Track Record', 'Impact Points', 'Unlocked Goals']
  return (
    <MainScreen heading={'My Achievements'} subHeading={subHeading}>
      <div style = {
        {
          color: 'white',
          fontSize: '22px'
        }
      }>Work Under Progress</div>
    </MainScreen>
  )
}

export default Achievement