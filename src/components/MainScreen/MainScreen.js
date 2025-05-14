import React, { useEffect, useState } from "react";
import "../../Styles/GlobalStyles.css";

const MainScreen = ({ heading, subHeading, children }) => {
    const [currentMessage, setCurrentMessage] = useState(subHeading[0]);
      const [index, setIndex] = useState(0);
    
  useEffect(() => {
    const heading = document.getElementById("heading");
    if (heading) {
      const words = heading.textContent.split(" ");
      const lastWord = words.pop();
      heading.innerHTML = `${words.join(" ")} <span>${lastWord}</span>`;
    }
   
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % subHeading.length;
        setCurrentMessage(subHeading[newIndex]);
        return newIndex;
      });
    }, 1500); // 2 seconds

    return () => clearInterval(interval); // cleanup on unmount

  }, []);


  return (
    <>
      <div className="mainScreen">
        <div className="headingContainer">
          <p className="heading" id="heading">
            {heading}
          </p>
          <p className="subHeading">{currentMessage}</p>
        </div>
        <div className="screenContent">{children}</div>
      </div>
    </>
  );
};

export default MainScreen;
