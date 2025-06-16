import React from "react";
import MainScreen from "../MainScreen/MainScreen";
import { Avelo, Duly, Pharmacord } from "../../assets";

const Portfolio = () => {
  const badges = [
    {
      name: "Azure",
      url: "https://img.shields.io/badge/Azure-0078D4.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    },
    {
      name: "CrossPlatform",
      url: "https://img.shields.io/badge/CrossPlatform-4CAF50.svg?style=for-the-badge&logo=google&logoColor=white",
    },
    {
      name: "CSS",
      url: "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "Debug",
      url: "https://img.shields.io/badge/Debug-000000.svg?style=for-the-badge&logo=bugatti&logoColor=white",
    },
    {
      name: "DevTools",
      url: "https://img.shields.io/badge/DevTools-FF6F00.svg?style=for-the-badge&logo=googlechrome&logoColor=white",
    },
    {
      name: "DSA",
      url: "https://img.shields.io/badge/DSA-9C27B0.svg?style=for-the-badge&logo=codeforces&logoColor=white",
    },
    {
      name: "Firebase",
      url: "https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black",
    },
    {
      name: "GCP",
      url: "https://img.shields.io/badge/GCP-4285F4.svg?style=for-the-badge&logo=googlecloud&logoColor=white",
    },
    {
      name: "Git",
      url: "https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      name: "HTML",
      url: "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "Java",
      url: "https://img.shields.io/badge/Java-007396.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      name: "JavaScript",
      url: "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      name: "jQuery",
      url: "https://img.shields.io/badge/jQuery-0769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
    },
    {
      name: "MUI",
      url: "https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=mui&logoColor=white",
    },
    {
      name: "Next.js",
      url: "https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white",
    },
    {
      name: "Nx",
      url: "https://img.shields.io/badge/Nx-143055.svg?style=for-the-badge&logo=nx&logoColor=white",
    },
    {
      name: "Python",
      url: "https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white",
    },
    {
      name: "React Native",
      url: "https://img.shields.io/badge/React_Native-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black",
    },
    {
      name: "Redux",
      url: "https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=redux&logoColor=white",
    },
    {
      name: "Responsive",
      url: "https://img.shields.io/badge/Responsive-25A4E8.svg?style=for-the-badge&logo=responsive&logoColor=white",
    },
    {
      name: "REST API",
      url: "https://img.shields.io/badge/REST_API-FF6F00.svg?style=for-the-badge&logo=postman&logoColor=white",
    },
    {
      name: "Redux Saga",
      url: "https://img.shields.io/badge/Redux_Saga-999999.svg?style=for-the-badge&logo=redux&logoColor=white",
    },
    {
      name: "SASS",
      url: "https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=sass&logoColor=white",
    },
    {
      name: "SQL",
      url: "https://img.shields.io/badge/SQL-336791.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      name: "TypeScript",
      url: "https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "VSCode",
      url: "https://img.shields.io/badge/VSCode-007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white",
    },
    {
      name: "Webpack",
      url: "https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
    },
  ];

  const subHeading = [
    "Work Showcase",
    "Featured Projects",
    "Creative Output",
    "Pixel Projects",
    "Code Craft",
  ];

  return (
    <MainScreen heading={"Dev Portfolio"} subHeading={subHeading}>
      <div className="portfolioWrapper">
        <h2
          style={{
            color: "white",
            opacity: 0.7,
            textDecoration: "underline",
            marginTop: "3rem",
          }}
        >
          Tools & Technologies
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {badges.map((badge) => (
            <img
              key={badge.name}
              src={badge.url}
              alt={`${badge.name} Badge`}
              style={{ height: "36px", borderRadius: "8px" }}
            />
          ))}
        </div>
        <h2
          style={{
            color: "white",
            opacity: 0.7,
            textDecoration: "underline",
            marginTop: "5rem",
          }}
        >
          Works & Projects
        </h2>
        <div className="projects">
          <div className="project">
            <img src={Avelo} height={100} />
            <div>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Unified Mobile App: </span>
                Migrated legacy Blazor and React code into a single React Native
                app, improving performance by 30%.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Scalable Codebase: </span>
                Implemented Nx monorepo architecture to streamline development
                and enable cross-platform code sharing.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>
                  Optimized Dashboards:{" "}
                </span>
                Rebuilt a Blazor-based dashboard in React, reducing load times
                by 20% and enhancing performance.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Feature Development: </span>
                Built the “Manage Trip” feature, decreasing customer service
                calls by 35% and increasing user engagement.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Robust Foundations: </span>
                Architected React apps with Redux-Saga, API integration, Webpack
                config, and routing for long-term maintainability.
              </p>
            </div>
          </div>
          <div className="project">
            <img src={Pharmacord} height={100} />
            <div>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>
                  Modular Feature Development:{" "}
                </span>
                Built core Angular features like the Patient Enrollment Form
                using component-based architecture and reactive forms.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>
                  API Integration & UI Design:{" "}
                </span>
                Integrated RESTful APIs and crafted responsive, reusable UI
                components with SCSS for a seamless multi-device experience.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>
                  Cross-Functional Collaboration:{" "}
                </span>
                Worked closely with backend and QA teams to ensure efficient
                data flow, fast issue resolution, and timely delivery.
              </p>
            </div>
          </div>
          <div className="project">
            <img src={Duly} height={100} />
            <div>
              {" "}
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Feature Development: </span>
                Built core features like the Goal & Progress Tracker and
                Appointment Scheduler, ensuring on-time delivery through close
                collaboration with business and dev teams.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>
                  Modern Frontend Stack:{" "}
                </span>
                Utilized JavaScript, ReactJS, Redux, Redux-Saga, and Material UI
                to create efficient, user-centric interfaces.
              </p>
              <p className="points">
                <span className="custom-list-icon" />
                <span style={{ fontWeight: "700" }}>Team Collaboration: </span>
                Played a key role in aligning UI development with product goals
                through continuous feedback and cross-functional teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default Portfolio;
