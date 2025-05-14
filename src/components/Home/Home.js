import React, { useState, useEffect, useRef } from "react";
import MainScreen from "../MainScreen/MainScreen";
import { ProfileImage } from "../../assets";

const Home = () => {
  const messages = ["App Developer", "Software Engineer", "Web Developer"];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true)
  const typingSpeed = 50; // Typing speed in ms
  const endLineIndex =  useRef()

  const introPara =
    "Hii, I'm Akshay - a Software Engineer with 3+ years of experience crafting responsive, performant, and pixel-perfect user interfaces. I specialize in React and React Native, turning caffeine and code into seamless web and mobile experiences. Whether it's revamping legacy systems or building apps from scratch, I bring clean code and clear logic to the table (with occasional side-eye at Internet Explorer). Welcome to my digital workspace!";

    const endLine = [
      "When I'm not coding, I'm probably debugging my life or looking for that one semicolon I forgot to add.",
      "If coding was a sport, I’d definitely be on the MVP team… or at least on the bench, sipping coffee.",
      "I spend my days turning coffee into code and my nights turning bugs into features. It's a weird balance, but it works.",
      "Some people collect stamps; I collect bugs… to fix, of course.",
      "When I’m not building apps, I’m probably attempting to explain why React is superior to other frameworks—just ask my friends!",
      "By day, I'm a code whisperer; by night, a bug hunter. React & React Native are my trusty sidekicks in this never-ending saga.",
      "From debugging chaos to crafting pixel-perfect UIs, I'm the React & React Native enthusiast who makes code sing.",

    ]

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + introPara.charAt(index));
        index++;
  
        if (index >= introPara.length) {
          clearInterval(interval);
          setIsTyping(false)
        }
      }, typingSpeed);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [introPara]);

  useEffect(() => {
    endLineIndex.current = Math.floor(Math.random() * 7);
    
  }, []);
  return (
    <>
      <MainScreen heading={"Akshay Tomar"} subHeading={messages}>
        <div className="homeScreen">
          <div className="profileWrapper">
            <div class="profileBorder">
              <img className="profileImage" src={ProfileImage} />
            </div>
          </div>
          <div className="introWrapper">
            <p>{typedText}<span className="cursor">|</span></p>
          </div>
         {!isTyping && <div className="exitWrapper">
            <quote>
              {`"${endLine[endLineIndex.current]}"`}
            </quote>
          </div>}
        </div>
      </MainScreen>
      {/* <Navbar/> */}
    </>
  );
};

export default Home;
