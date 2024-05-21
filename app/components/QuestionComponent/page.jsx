"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircularProgress from "@mui/material/CircularProgress";

const QuestionsComponent = ({ questionsSet }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setQuestions(questionsSet);
  }, [questionsSet]);

  const question = questions[currentQuestionIndex];
  const questionNumber = question ? question.id : null;
  const userAnswer = question ? answers[questionNumber] : null;
  const isIncorrect = userAnswer && userAnswer !== question.correctAnswer;

  const handleAnswerChange = (questionNumber, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedAnswer,
    }));

    if (!answeredQuestions.includes(questionNumber)) {
      setAnsweredQuestions((prevQuestions) => [
        ...prevQuestions,
        questionNumber,
      ]);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setImageLoading(true); // Set image loading state to true
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setImageLoading(true); // Set image loading state to true
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const scores = calculateScore();
    alert(scores);
  };

  const calculateScore = () => {
    const scorePerQuestion = 2;
    return answeredQuestions.reduce((totalScore, questionNumber) => {
      const userAnswer = answers[questionNumber];
      const correctAnswer = questions.find(
        (q) => q.id === questionNumber
      )?.correctAnswer;
      const isCorrect = userAnswer === correctAnswer;

      return totalScore + (isCorrect ? scorePerQuestion : 0);
    }, 0);
  };

  return (
    <div className="rounded-md w-screen h-screen flex flex-col items-center">
      <div className="flex justify-between w-full p-4 bg-white fixed top-0 z-10 shadow-md">
        <div className="flex items-center text-lg">
          <AccessTimeIcon className="text-gray-500" />
          <span className="ml-2 text-gray-400 font-medium">
            {formatTime(timeLeft)}
          </span>
        </div>
        <Button onClick={handleSubmit} variant="contained" color="secondary">
         Nộp bài 
        </Button>
      </div>
      <div className="flex flex-col items-center mt-20 w-full px-4">
        {question && (
          <div className="w-full">
            <Card className="w-full p-4 mb-4">
              <h1 className="mb-4 text-gray-700 text-md">{question.type}</h1>
              {question.content ? (
                <div>

               
                <div className="flex items-center justify-between">
                  <button
                    onClick={goToPreviousQuestion}
                    className={`w-10 h-10 flex items-center justify-center ${
                      currentQuestionIndex === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#b61e3b] text-white"
                    }`}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ChevronLeftIcon />
                  </button>
                  <div className="relative w-full flex items-center justify-center">
                    {imageLoading && (
                      <CircularProgress
                        className="absolute"
                        size={50}
                        color="secondary"
                      />
                    )}
                    <img
                      src={question.content}
                      alt={`Question ${questionNumber}`}
                      className={`mb-2 p-2 bg-slate-100 w-full rounded-xl transition-opacity duration-500 ${
                        imageLoading ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => setImageLoading(false)} // Remove loading indicator when image is loaded
                    />
                   
                  </div> 
                  
                  
                  <button
                    onClick={goToNextQuestion}
                    className={`w-10 h-10 flex items-center justify-center ${
                      currentQuestionIndex === questions.length - 1
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#b61e3b] text-white"
                    }`}
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
                <div>
                    {showResults && isIncorrect && (
                      <div className="w-full flex flex-col items-center mt-4">
                        <Card className="w-full p-4 mb-2">
                       Đáp án đúng:{" "}
                          <span className="text-blue-500">
                            {question.correctAnswer}
                          </span>
                        </Card>
                        <p className="text-gray-400">
                          Hướng dẫn : {question.solution}
                        </p>
                      </div>
                    )}
                  </div>
              </div> ) : (
                <div>Loading</div>
              )}
            </Card>
            <div className="w-full flex flex-wrap justify-center">
              {question.options.map((option, optionIndex) => (
                <Card
                  key={optionIndex}
                  className={`w-full mb-2 p-4 cursor-pointer ${
                    userAnswer === (optionIndex + 1).toString()
                      ? "bg-green-500"
                      : "bg-green-200"
                  }`}
                >
                  <label
                    className={`w-full h-full flex items-center  pl-2 rounded ${
                      userAnswer === (optionIndex + 1).toString()
                        ? "bg-green-700"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={`q${questionNumber}`}
                      value={(optionIndex + 1).toString()}
                      onChange={() =>
                        handleAnswerChange(
                          questionNumber,
                          (optionIndex + 1).toString()
                        )
                      }
                      onClick={() => {
                        setCurrentQuestionIndex(currentQuestionIndex + 1),
                          setImageLoading(true);
                      }}
                      className="h-4 w-4 border-gray-300 hidden"
                      disabled={showResults}
                    />

                    {`${optionIndex + 1}. ${option}`}
                  </label>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsComponent;
