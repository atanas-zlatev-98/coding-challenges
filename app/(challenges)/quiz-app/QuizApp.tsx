'use client';
import { useState } from "react";
import { Question } from "./types/questions";
import { shuffleQuestions } from "./questions/questions";

export default function QuizApp() {

  const [questions, setQuestions] = useState<Question[]>(() =>(shuffleQuestions));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(selectedOption);

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      {showScore ? (
        <div className="flex justify-center items-center h-screen flex-col gap-4">
          <h1 className="font-bold text-2xl">
            Quiz App Score: {score} / {questions.length}
          </h1>
          <button
            onClick={resetQuiz}
            className="mt-3 border p-1 rounded hover:bg-white hover:text-black cursor-pointer"
          >
            Reset Quiz
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen flex-col gap-4">
          <h2 className="text-2xl font-bold">React Quiz</h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-center">
              Question: {currentQuestionIndex + 1} / {questions.length}
            </h1>
            <p className="text-center">
              {questions[currentQuestionIndex].question}
            </p>

            <div className="flex justify-center gap-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  onClick={() => handleAnswerOptionClick(option)}
                  className={`${
                    selectedAnswer === null
                      ? "hover:bg-white hover:text-black"
                      : option === questions[currentQuestionIndex].answer
                        ? "bg-green-700 text-white"
                        : selectedAnswer === option
                          ? "bg-red-500 text-white"
                          : "hover:bg-white hover:text-black"
                  } border p-1 rounded cursor-pointer`}
                  key={index}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <button
                disabled={!selectedAnswer}
                onClick={nextQuestion}
                className="mt-3 border p-1 rounded hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:text-black cursor-pointer"
              >
                {currentQuestionIndex + 1 >= questions.length
                  ? "Show Score"
                  : "Next Question"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
