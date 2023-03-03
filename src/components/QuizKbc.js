import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sound/play.mp3";
import correct from "../sound/correct.mp3";
import wrong from "../sound/wrong.mp3";
// import Timer from "./Timer";

export const QuizKbc = ({
  data,
  setStopTimer,
  setQuestionNumber,
  questionNumber,
}) => {
  const [question, setQuestion] = useState(null); //for render current question  in ui
  const [selectedAnswer, setSelectedAnswer] = useState(null); //for ansnwer selected

  const [className, setClassName] = useState("answer"); //for hover effect on that buttonb or animation effect   

  //for sound effect
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // for beginning
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  //by useEffect we have to render current question  and dependnies  is data and question changes it will be render the next
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  //for check the answer
  //for delay after clicking the option
  //custom function i made
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  //After click on answer button we have to call a onClick event for checking answer like correct or wrong
  const handleClickAnswer = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct " : "answer wrong")
    );

    //another delay for rendering another question
    delay(7000, () => {
      if (a.correct) {
        correctAnswer(); //sound effect
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer(); //sound effect
        delay(1000, () => {
          setStopTimer(true);
        });
      }
    });
  };
  return (
    <div className="kbc">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClickAnswer(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};
