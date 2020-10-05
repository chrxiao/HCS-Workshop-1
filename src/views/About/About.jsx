import React, { useState } from "react";
import "./About.css";
import CutePic from "../../assets/me.png";

function FunFactItem(props) {
  return (
    <div
      className="fun-fact-clicker-background"
      onClick={() => {
        props.setActiveNum(props.num);
        props.setActiveFunFact(props.fact);
      }}
    >
      <div className="num-item">
         {props.num} &nbsp;
      </div>
    </div>
  );
}

export default function AboutScreen() {
  const [activeNum, setActiveNum] = useState("");
  const [activeFunFact, setActiveFunFact] = useState("");

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-pic">
          <img src={CutePic} className="intro-picture"/>
        </div>
        <div className="intro-item">
          <br></br><br></br>
          hi! i'm christina: lowercase texter, trash computer music fan, and bad plant parent. 
          ask me about the stash of plastic bags in the corner of my room!
        </div>
      </div>

      <div className="fun-fact-background">
        <br></br><br></br>
        some fun facts:
        <br></br><br></br>
      </div>
      <div className="fun-fact-clicker-background">
        <FunFactItem
          num="1"
          fact="i'm double jointed! but only in one finger"
          setActiveNum={setActiveNum}
          setActiveFunFact={setActiveFunFact}
        />
        <FunFactItem
          num="2"
          fact="i like milk"
          setActiveNum={setActiveNum}
          setActiveFunFact={setActiveFunFact}
        />
        <FunFactItem
          num="3"
          fact="i have tried every flavor of tea available in the dining hall (raspberry royale is the best one)"
          setActiveNum={setActiveNum}
          setActiveFunFact={setActiveFunFact}
        />
        <FunFactItem
          num="4"
          fact="snails can sleep for three years. me too"
          setActiveNum={setActiveNum}
          setActiveFunFact={setActiveFunFact}
        />
        <div className="fun-fact-item">
          {activeFunFact}
        </div>
      </div>
    </div>
  );
}
