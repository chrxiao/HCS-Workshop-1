import React, { useState } from "react";
import "./Projects.css";

function ProjectItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveDate(props.date);
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="project-info">
        <h4>{props.date}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeDate, setActiveDate] = useState("");
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="project-background">
        <div className="timeline-background">
          <ProjectItem
            date="12/20/2002"
            title="birth"
            description="i was born on this day"
            setActiveDate={setActiveDate}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <ProjectItem
            date="10/4/2020"
            title="this website!"
            description="you're looking at it right now!"
            setActiveDate={setActiveDate}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <ProjectItem
            date="???"
            title="who knows"
            description="wait and see!"
            setActiveDate={setActiveDate}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h2>{activeDate}</h2>
          <br></br>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
