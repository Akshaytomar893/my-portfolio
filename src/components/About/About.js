import React, { useEffect, useRef } from "react";
import MainScreen from "../MainScreen/MainScreen";
import Stepper from "@keyvaluesystems/react-vertical-stepper";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { VeersaLogo } from "../../assets";

const About = () => {
  const hasInsertedRef = useRef(false);
  const subHeading = [
    "My Bio",
    "Who I Am",
    "Profile Info",
    "Dev Diary",
    "Hey There",
  ];
  const workSteps = [
    {
      label: "Senior Software Engineer",
      description: "1st Jan 2024 - Current",
      isCompleted: true,
    },
    {
      label: "Software Engineer",
      description: "18th July 2022 - 31st Dec 2023",
      isCompleted: true,
    },
    {
      label: "Software Engineer Intern",
      description: "7th Feb 2022 - 18th July 2022",
      isCompleted: true,
    },
  ];
  const eduSteps = [
    {
      label: "B.Tech in Computer Engineering ",
      description: "2018-2022, AKTU(Lucknow), SGPA:8.3",
      isCompleted: true,
    },
    {
      label: "Intermediate",
      description: "2016-17, CISCE Board, 85.00%",
      isCompleted: true,
    },
    {
      label: "High School",
      description: "2014-15, CISCE Board, 87.00%",
      isCompleted: true,
    },
  ];

  const stylesOverRide = {
    LabelTitle: (step, stepIndex) => ({
      fontSize: "20px",
      color: "var(--theme-color)",
    }),
    ActiveLabelTitle: (step, stepIndex) => ({}),
    LabelDescription: (step, stepIndex) => ({
      color: "white",
    }),
    ActiveLabelDescription: (step, stepIndex) => ({}),
    LineSeparator: (step, stepIndex) => ({ height: "100px" }),
    InactiveLineSeparator: (step, stepIndex) => ({}),
    Bubble: (step, stepIndex) => ({
      backgroundColor: "var(--theme-color)",
      height: "40px",
      width: "40px",
    }),
    ActiveBubble: (step, stepIndex) => ({
      border: "none",
    }),
    InActiveBubble: (step, stepIndex) => ({}),
  };
  useEffect(() => {
    if (hasInsertedRef.current) return;
    hasInsertedRef.current = true;

    for (let i = 0; i < workSteps.length; i++) {
      const ele = document.getElementById(`stepper-desc-${i}`);
      if (!ele) continue;

      const newSpan = ele.cloneNode(false);
      newSpan.textContent = "Veersa Technologies Pvt Ltd";
      ele.parentNode.insertBefore(newSpan, ele);
    }
  }, [workSteps]);
  return (
    <MainScreen heading={"About Me"} subHeading={subHeading}>
      <div className="aboutWrapper">
        <div className="stepper">
          <h2
            style={{
              color: "white",
              opacity: 0.7,
              textDecoration: "underline",
            }}
          >
            Work Experience
          </h2>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginLeft: "24px",
              marginBottom: "8px",
            }}
          >
            <img src={VeersaLogo} width={180} />
            <p
              style={{
                color: "white",
                opacity: 0.9,
                fontSize: "12px",
                margin: 0,
                letterSpacing: 1,
              }}
            >
              Veersa Technologies Pvt Ltd
            </p>
          </div> */}
          <Stepper
            steps={workSteps}
            currentStepIndex={workSteps?.length - 1}
            labelPosition="right"
            styles={stylesOverRide}
          />
        </div>
        <div className="stepper">
          <h2
            style={{
              color: "white",
              opacity: 0.7,
              textDecoration: "underline",
            }}
          >
            Education
          </h2>
          <Stepper
            steps={eduSteps}
            currentStepIndex={eduSteps?.length - 1}
            labelPosition="right"
            styles={stylesOverRide}
          />
        </div>
      </div>
    </MainScreen>
  );
};

export default About;
