import React, { useState, useEffect } from "react";
import MainScreen from "../MainScreen/MainScreen";
import { ProfileImage } from "../../assets";

const Home = () => {
  const messages = ["App Developer", "Software Engineer", "Web Developer"];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 130; // Typing speed in ms

  const introPara =
    "Hi, I'm Akshay - a Software Engineer with 3+ years of experience crafting responsive, performant, and pixel-perfect user interfaces. I specialize in React and React Native, turning caffeine and code into seamless web and mobile experiences. Whether it's revamping legacy systems or building apps from scratch, I bring clean code and clear logic to the table (with occasional side-eye at Internet Explorer). Welcome to my digital workspace!";

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + introPara.charAt(index));
        index++;
  
        if (index >= introPara.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [introPara]);

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
        <div className="homeScreen">
          <div className="profileWrapper">
            <div class="profileBorder">
              <img className="profileImage" src={ProfileImage} />
            </div>
          </div>
          <div className="introWrapper">
            <p>{typedText}<span className="cursor">|</span></p>
          </div>
        </div>
      </MainScreen>
      {/* <Navbar/> */}
    </>
  );
};

export default Home;
