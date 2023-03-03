import { useEffect, useState } from "react";
import "./App.css";
import { QuizKbc } from "./components/QuizKbc";
import Timer from "./components/Timer";
import Start from "./components/Start";
import data from "./components/Data";

function App() {
  //for  that whenever we have to on which question we have to take use state hookand also which question is active on that time

  const [questionNumber, setQuestionNumber] = useState(1);

  //for dusplay the user name in main display
  let userName = JSON.parse(localStorage.getItem("userName"));

  // for login
  const [user, SetUser] = useState(null);

  //for timer
  const [stopTimer, setStopTimer] = useState(false);

  //for display amount after quit
  const [earned, setEarn] = useState(" Rs 0");

  //for Quit the game

  const handleQuit = () => {
    alert(`Your winning amount is ${earned}`);
    SetUser(null);
    setQuestionNumber(1);
    setEarn(0);
    localStorage.removeItem("userName");
  };
  const moneyPramid = [
    {
      id: 1,
      amount: "Rs 1,000",
    },
    {
      id: 2,
      amount: "Rs 2,000",
    },
    {
      id: 3,
      amount: "Rs 3,000",
    },
    {
      id: 4,
      amount: "Rs 4,000",
    },
    {
      id: 5,
      amount: "Rs 5,000",
    },
    {
      id: 6,
      amount: "Rs 10,000",
    },
    {
      id: 7,
      amount: "Rs 20,000",
    },
    {
      id: 8,
      amount: "Rs 40,000",
    },
    {
      id: 9,
      amount: "Rs 80,000",
    },
    {
      id: 10,
      amount: "Rs 1,60,000",
    },
    {
      id: 11,
      amount: "Rs 3,20,000",
    },
    {
      id: 12,
      amount: "Rs 6,40,000",
    },
    {
      id: 13,
      amount: "Rs 12,50,000",
    },
    {
      id: 14,
      amount: "Rs 25,00,000",
    },
    {
      id: 15,
      amount: "Rs 50,00,000",
    },
    {
      id: 16,
      amount: "Rs 1 Crore",
    },
    {
      id: 17,
      amount: "Rs 7 Crore",
    },
  ].reverse();

  //for amount  display after winning and losing
  useEffect(() => {
    questionNumber > 1 &&
      setEarn(moneyPramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPramid, questionNumber]);

  return (
    <div className="App">
      {/* login  */}
      {user ? (
        <>
          <div className="main">
            {stopTimer ? (
              <h1 className="earnText">
                Congratulations {userName} <br />
                You Earned {earned}
              </h1>
            ) : (
              <>
                <div className="top">
                  {/* Quit the Game   */}
                  <button className="quitButton" onClick={handleQuit}>
                    Quit
                  </button>

                  {/* display the name  */}
                  <h1 className="userName">{`Hello ${userName}, Welcome to KBC `}</h1>

                  {/* for showing timer  */}

                  <div className="timer">
                    <Timer
                      setStopTimer={setStopTimer}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                {/* for questions  */}

                <div className="bottom">
                  {/* pass all data through prop in child one  */}
                  <QuizKbc
                    data={data}
                    setStopTimer={setStopTimer}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber} //passing all data into kbc.jsx file by props
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              <div className="field">
                <h2 className="username">{userName}</h2>
                <h2 className="score">Score : {earned}</h2>
              </div>
              {moneyPramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem current"
                      : "moneyListItem"
                  }
                  key={`""+${m.id}`}
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItenAmount">{m.amount}</span>
                </li>
              ))}
              <br />
              <br />
            </ul>
          </div>
        </>
      ) : (
        <Start SetUser={SetUser} setEarn={setEarn} />
      )}
    </div>
  );
}

export default App;