import React, { useEffect } from "react";
import "../../Styles/GlobalStyles.css";

const MainScreen = ({ heading, subHeading, children }) => {
  useEffect(() => {
    debugger;
    const heading = document.getElementById("heading");
    if (heading) {
      const words = heading.textContent.split(" ");
      const lastWord = words.pop();
      heading.innerHTML = `${words.join(" ")} <span>${lastWord}</span>`;
    }

    // return () => {
    //   second
    // }
  }, []);

  return (
    <>
      <div className="mainScreen">
        <div className="headingContainer">
          <p className="heading" id="heading">
            {heading}
          </p>
          <p className="subHeading">{subHeading}</p>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default MainScreen;
