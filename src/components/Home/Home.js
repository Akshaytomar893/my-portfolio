import React, {useState, useEffect} from 'react'
import MainScreen from '../MainScreen/MainScreen'
import { ProfileImage } from '../../assets';

const Home = () => {
  const messages = [ 'App Developer', 'Software Engineer', 'Web Developer'];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % messages.length;
        setCurrentMessage(messages[newIndex]);
        return newIndex;
      });
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <>
      <MainScreen heading={"Akshay Tomar"} subHeading={currentMessage}>
        <div className='homeScreen'>
          <div className='profileWrapper'>
          <div class="profileBorder">
          <img className='profileImage' src={ProfileImage}/>
          </div>
          </div>
        </div>
        </MainScreen>
      {/* <Navbar/> */}
    </>
  )
}

export default Home