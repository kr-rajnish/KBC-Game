import React, { useRef } from "react";

function Start({ SetUser }) {
  const inputRef = useRef();
  const handleClickaName = () => {
    inputRef.current.value && SetUser(inputRef.current.value);
    localStorage.setItem("userName", JSON.stringify(inputRef.current.value));
  };
  return (
    <div className="main-start">
    <div className="input-div"> 
        <h1> Welcome to Money Quiz App(MQA) 💰</h1>
      <div className="start">
      
        <input
          placeholder="Enter your Name"
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClickaName}>
          Start
        </button>
      </div>
      </div>
      <div className="instruction">
        <h3>Instructions and rules for playing this game</h3>
        <ol type="number">
          <li>This is Money Quiz app</li>
          <li>In this, User is entroll your name</li>
          <li>User name is shown on main Screen</li>
          <li>This app is having 17 questions</li>
          <li>Each question having 4 answers</li>
          <li>On click answer it take 5 second for validation of <br/> answer is correct/wrong</li>
          <li>Timing of giving answer is 60 second</li>
          <li>There is quiz option for exit that game</li>
        </ol>
      </div>
    </div>
  );
}

export default Start;