"use client";
import React, { useState, useEffect } from "react";
import Listen from "../../json/Listen.json";
import Link from "next/link";
import { Card } from "@mui/material";
import QuestionContent from "../components/QuestionContent";
import TestingLayout from "../layouts/TestingLayout";
import { AnswerComponent } from "../components/AnswerComponent";
const SetSelection = ({ onSelectSet }) => {
  const [selectedSet, setSelectedSet] = useState(1);

  return (
    <div>
      {/* <div className="lg:items-center lg:justify-center h-screen lg:hidden bg-[#e1e8f0] text-center">
        <div className="p-8">
          <h1 className="text-gray-800 text-lg mb-10">
            Trang web hiện chưa cập nhật trên di động
          </h1>
          <Link href="/">
            <button className="bg-[#b61e3b] hover:bg-[#b61e3b] text-white font-bold py-2 px-4 rounded">
              Trở lại
            </button>
          </Link>
        </div>
      </div> */}

      <div className="bg-[#e1e8f0] h-screen lg:block text-align">
        <div className="flex justify-center  items-center h-full ">
          <div className="bg-white p-8 rounded">
            <h1 className="text-3xl font-bold mb-4 text-black mx-4">
              Chọn Bộ Đề Trước Khi Thi
            </h1>
            <div className="flex justify-around">
              <select
                className="border rounded-md text-gray-700 h-10 mt-8 bg-slate-300 p-2"
                onChange={(e) => onSelectSet(Number(e.target.value))}
              >
                <option value={1}>Bộ đề 83</option>
                <option value={2}>Bộ đề 1</option>
                <option value={3}>Bộ đề 2</option>
                <option value={4}>Bộ đề 3</option>
                <option value={5}>Bộ đề 4</option>
                <option value={6}>Bộ đề 5</option>
                <option value={7}>Bộ đề 6</option>
                <option value={8}>Bộ đề 7</option>
                <option value={9}>Bộ đề 91</option>
              </select>
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded mt-4 ml-8"
                onClick={() => onSelectSet(selectedSet)}
              >
                Bắt đầu Thi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionsSet, setQuestionsSet] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [showTracking, setShowTracking] = useState(true);
  const [audio, setAudio] = useState();
  const [score, setScore] = useState();
  const [timeLeft, setTimeLeft] = useState(3600);

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

  useEffect(() => {
    switch (selectedSet) {
      case 1:
        setQuestionsSet(Listen.Listen83);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen83%2F%5BLISTENING%20TOPIK%2083%5D%20TOPIK%20%E1%84%83%E1%85%B3%E1%86%AE%E1%84%80%E1%85%B5%2083%E1%84%92%E1%85%AC%20_%20%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%84%92%E1%85%A5%E1%86%B7%20%E1%84%83%E1%85%B3%E1%86%AE%E1%84%80%E1%85%B5%20%E1%84%8C%E1%85%B5%E1%84%86%E1%85%AE%E1%86%AB%20-%20BA%CC%80I%20NGHE%20TOPIK%20II%20ke%CC%80m%20phu%CC%A3%20%C4%91e%CC%82%CC%80.mp3?alt=media&token=0f332054-0c96-42ed-ba28-7bd54b68d23b"
        );
        break;
      case 2:
        setQuestionsSet(Listen.Listen1);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen1%2FListen1.mp3?alt=media&token=6f84d7bd-dd08-4742-9fb4-01b89f04efc7"
        );
        break;
      case 3:
        setQuestionsSet(Listen.Listen2);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen2%2FListen2.mp3?alt=media&token=33c06ab8-fd9e-4b66-bafc-7772c28680ed"
        );
        break;
      case 4:
        setQuestionsSet(Listen.Listen3);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen3%2FListen3.mp3?alt=media&token=42619370-76c5-424c-bab8-cdb34616c30d"
        );
        break;
      case 5:
        setQuestionsSet(Listen.Listen4);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen4%2FListen4.mp3?alt=media&token=9f71dbe8-b466-4656-9de7-44766f83afd0"
        );
        break;
      case 6:
        setQuestionsSet(Listen.Listen5);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen5%2FListen5.mp3?alt=media&token=e7f57b99-2fe7-476b-9484-9172d51cc2b0"
        );
        break;
      case 7:
        setQuestionsSet(Listen.Listen6);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen6%2FNGHE6.mp3?alt=media&token=b8361427-b33f-4637-9cf8-494a456d8f96"
        );
        break;
      case 8:
        setQuestionsSet(Listen.Listen7);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen7%2Fnghe7.mp3?alt=media&token=ed10fc69-8489-44fb-9dd6-c76e09bb760a"
        );
        break;
      case 9:
        setQuestionsSet(Listen.Listen8);
        setAudio(
          "https://firebasestorage.googleapis.com/v0/b/upload-9ece2.appspot.com/o/Listen8%2Fnghe8.mp3?alt=media&token=ccd4c62d-bdfb-492b-b43e-dd42d67211ed"
        );
        break;
      default:
        break;
    }
  }, [selectedSet]);

  useEffect(() => {
    setQuestions(questionsSet);
  }, [questionsSet]);

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

  const handleSubmit = () => {
    setShowResults(true);
    setShowTracking(false);

    const incorrectQuestions = answeredQuestions.filter((questionNumber) => {
      const userAnswer = answers[questionNumber];
      const correctAnswer = questions.find(
        (q) => q.id === questionNumber
      )?.correctAnswer;
      return userAnswer !== correctAnswer;
    });

    const scores = calculateScore();
    setScore(scores);
    setIsCorrect(incorrectQuestions.length === 0);
  };

  const handleJumpToQuestion = (questionNumber) => {
    const element = document.getElementById(`question${questionNumber}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  if (!selectedSet) {
    return <SetSelection onSelectSet={setSelectedSet} />;
  }

  console.log(audio);

  return (
    <TestingLayout
      scoreTrackingProps={{
        showTracking,
        timeLeft,
        questionsSet,
        answers,
        handleJumpToQuestion,
        handleSubmit,
        score,
        showResults,
        answeredQuestions,
        questions,
      }}
      selectedSet={selectedSet}
      answeredQuestions={answeredQuestions}
    >
      <div>
        <div className="lg:hidden md:block sm:block   bg-[#e1e8f0] text-center">
          {/* <QuestionsComponent questionsSet={questionsSet} /> */}
        </div>
        <div >
          {/* right */}
          <div>
            <div className=" right-0  absolute">
              {audio ? (
                <audio controls autoPlay>
                  <source src={audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <p>No audio available</p>
              )}
            </div>

            <div className="questions-list mx-4 mt-36 rounded-md">
              {questionsSet.map((question) => {
                const questionNumber = question.id;
                const userAnswer = answers[questionNumber];
                const isIncorrect =
                  userAnswer && userAnswer !== question.correctAnswer;

                return (
                  <Card
                    key={questionNumber}
                    id={`question${questionNumber}`}
                    className="mb-6 bg-slate-300 rounded-xl"
                  >
                    <QuestionContent
                      question={question}
                      questionNumber={questionNumber}
                    />

                    <div className="my-4 flex justify-center items-center">
                      {question.options.map((option, index) => (
                        <AnswerComponent
                          key={index}
                          option={option}
                          optionIndex={index}
                          questionNumber={questionNumber}
                          handleAnswerChange={(qn, selectedAnswer) =>
                            handleAnswerChange(qn, selectedAnswer)
                          }
                          userAnswer={userAnswer}
                          correctAnswer={question.correctAnswer}
                          showResults={showResults}
                        />
                      ))}
                    </div>

                    {showResults && isIncorrect && (
                      <div className="flex mb-2 justify-center">
                        <div>
                          <Card className="flex justify-center mb-1">
                            Đáp án đúng:{" "}
                            <span className="text-xl ml-1 text-blue-500">
                              {question.correctAnswer}
                            </span>
                          </Card>
                          <p className="text-gray-400 text-md">
                            Hướng dẫn giải: {question.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            <div className="w-screen flex justify-end "></div>
          </div>
        </div>
      </div>
    </TestingLayout>
  );
};
//
export default TestPage;
