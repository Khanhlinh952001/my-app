"use client";
import { Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import Reading from "../../json/Reading.json";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
const SetSelection = ({ onSelectSet }) => {
  const [selectedSet, setSelectedSet] = useState(1);

  return (
    <div>
      <div className="lg:hidden lg:items-center lg:justify-center h-screen bg-[#e1e8f0] text-center">
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
      </div>
      <div className="bg-[#e1e8f0] h-screen lg:block text-align">
        <div className="flex justify-center items-center h-full">
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
                {/* Add more options if needed */}
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
      </div>{" "}
    </div>
  );
};

const TestPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSet, setSelectedSet] = useState(null);
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [questionsSet, setQuestionsSet] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [showTracking, setShowTracking] = useState(true);
  const [score, setScore] = useState();
  const [timeLeft, setTimeLeft] = useState(3600);

  // time left
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
  const handleClick = () => {
    // Đảo ngược giá trị của trạng thái expanded khi click
    setExpanded(!expanded);
  };

  // Countdown timer for 20 minutes

  useEffect(() => {
    // Select the corresponding question set
    switch (selectedSet) {
      case 1:
        setQuestionsSet(Reading.Reading83);
        break;
      case 2:
        setQuestionsSet(Reading.De1); // Change this to the correct data source
        break;
      case 3:
        setQuestionsSet(Reading.De2); // Change this to the correct data source
        break;
      case 4:
        setQuestionsSet(Reading.De3); // Change this to the correct data source
        break;
      case 5:
        setQuestionsSet(Reading.De4); // Change this to the correct data source
        break;
      case 6:
        setQuestionsSet(Reading.De5); // Change this to the correct data source
        break;
      case 7:
        setQuestionsSet(Reading.De6); // Change this to the correct data source
        break;
      case 8:
        setQuestionsSet(Reading.De7); // Change this to the correct data source
        break;
      case 9:
        setQuestionsSet(Reading.De8); // Change this to the correct data source
        break;
      default:
        setQuestionsSet(Reading.Reading83);
    }
  }, [selectedSet]);

  useEffect(() => {
    // Set questions based on the selected set
    setQuestions(questionsSet);
  }, [questionsSet]);

  // Hàm tính điểm
  const calculateScore = () => {
    const scorePerQuestion = 2; // Số điểm cho mỗi câu trả lời đúng
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

  //  su ly su kien khi nap bai
  const handleSubmit = () => {
    setShowResults(true);
    setShowTracking(false); // Ẩn phần theo dõi

    const incorrectQuestions = answeredQuestions.filter((questionNumber) => {
      const userAnswer = answers[questionNumber];
      const correctAnswer = questions.find(
        (q) => q.id === questionNumber
      )?.correctAnswer;
      return userAnswer !== correctAnswer;
    });

    const scores = calculateScore(); // Tính điểm
    alert(scores);
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

  return (
    <div>
      <div className="bg-[#e1e8f0] h-full ">
        {/* left */}
       <div className="w-2/12 h-full top-4 fixed overflow-y-auto  ">
          <Card className=" bg-slate-100  rounded-md ">
            {showTracking && (
              <div className="text-center">
                <h5 className="text-lg font-medium text-gray-700">
                  Bảng theo dõi:
                </h5>
                <span className="text-gray-500">
                  {formatTime(timeLeft)} phút
                </span>
                <ul className="list-none flex flex-wrap">
                  {questionsSet.map((question, index) => (
                    <li
                      key={question.id}
                      className="m-1"
                      style={{ width: "20%" }}
                    >
                      <Card className=" border-b p-1">
                        <button
                          className={"text-black rounded "}
                          onClick={() => handleJumpToQuestion(question.id)}
                        >
                          <span className="ml-1 ">{question.id}</span>
                          {answers[question.id] ? (
                            <span className="font-bold ml-2 bg-green-500 text-white py-2 px-3 rounded-sm">
                              {answers[question.id]}
                            </span>
                          ) : (
                            <span className="font-bold text-gray-400 ml-2 rounded-sm">
                              ?
                            </span>
                          )}
                        </button>
                      </Card>{" "}
                      {index % 5 === 4 && <br />}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {showResults && (
              <Card className="flex justify-center text-center pb-10">
                <div>
                  <h1 className=" text-xl mb-8 pt-4 text-gray-500">
                    Chúc mừng bạn :
                    <span className="text-2xl font-bold text-green-600">
                      {score}
                    </span>
                    Điểm
                  </h1>
                  <h5 className="text-gray-900">Kiểm Tra đáp án</h5>
                  <p className="text-gray-400 text-sm">Xanh là đúng</p>
                    <p className="text-gray-400 text-sm">Đỏ là sai</p>
                    <ul className="list-none flex flex-wrap">
                      {answeredQuestions.map((questionNumber, index) => (
                        <li
                          key={questionNumber}
                          className="m-1"
                          style={{ width: "20%" }}
                        >
                          <Card className=" border-b p-1">
                            <div className="flex ">
                              <button
                                className={
                                  "text-black w-20 flex justify-between rounded "
                                }
                                onClick={() =>
                                  handleJumpToQuestion(questionNumber)
                                }
                             >
                                <span className="mr-1 ">{questionNumber}</span>
                                {/* { answers[questionNumber] } */}
                                <span
                                  className={`${
                                    answers[questionNumber] ===
                                    questions.find(
                                      (q) => q.id === questionNumber
                                    )?.correctAnswer
                                      ? "bg-green-500"
                                      : "bg-red-500"
                                  } text-white px-2  rounded font-normal`}
                                >
                                  {answers[questionNumber]}
                                </span>
                              </button>
                            </div>
                          </Card>
                          {index % 5 === 4 && <br />}
                        </li>
                      ))}
                    </ul>
                </div>
              </Card>
            )}
          </Card>
        </div>
      
       {/* right */}
        <div className="">
              <Card className="bg-white mb-8 ml-72 mr-1  text-center rounded">
                <h1 className="text-3xl font-bold mb-4 text-black pt-8">
                  한국어 능력시험
                </h1>

                <div className="mb-4 ">
                  <h3 className="block text-2xl font-medium mt-1 mr-2 text-gray-700 ">
                    {selectedSet === 1 ? "83" : selectedSet - 1} 제회
                  </h3>
                </div>
              </Card>

            <div className="questions-list mx-4 ml-[300px] pl-8 pt-4 pr-8 rounded-md">
              {questionsSet.map((question) => {
                const questionNumber = question.id;
                const userAnswer = answers[questionNumber];
                const isIncorrect =
                  userAnswer && userAnswer !== question.correctAnswer;

                return (
                  <Card
                    key={questionNumber}
                    id={`question${questionNumber}`}
                    className="mb-6 bg-slate-300 rounded-xl "
                  >
                    <h1 className="mb-2 text-gray-700 ml-4 text-xl mt-4">
                      {question.type}
                    </h1>
                    <div className="container">
                      <div className="flex justify-center ">
                        <img
                          src={question.content}
                          alt={`Câu hỏi ${questionNumber}`}
                          className="mb-2 p-4 bg-slate-100 lg:w-6/12 md:w-8/12 sm:w-full rounded-xl "
                          onClick={handleClick}
                        />
                      </div>
                    </div>

                    <div className="my-4 flex justify-center">
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="block mb-2 pl-12 text-gray-700 text-xl "
                        >
                          <input
                            type="checkbox"
                            name={`q${questionNumber}`}
                            value={(optionIndex + 1).toString()} // Use (optionIndex + 1) as the value
                            onChange={() =>
                              handleAnswerChange(
                                questionNumber,
                                (optionIndex + 1).toString()
                              )
                            }
                            checked={
                              userAnswer === (optionIndex + 1).toString()
                            }
                            className="mr-2 h-4 w-4 border-gray-300 focus:ring-indigo-500 text-indigo-600"
                            disabled={showResults} // Disable radio buttons after submitting
                          />
                          {`${option}. ${optionIndex + 1}`}
                        </label>
                      ))}
                    </div>

                    {showResults && isIncorrect && (
                      <div className="flex mb-2 justify-center">
                        <div>
                          <Card className="flex justify-center mb-1">
                            Đáp án đúng :{" "}
                            <span className="text-xl ml-1 text-blue-500">
                              {question.correctAnswer}
                            </span>
                          </Card>
                          <p className="text-gray-400 text-md">
                            Hướng dẫn giải : {question.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

          <div className="w-screen flex justify-end ">
            <button
              className={`bg-blue-500 text-white px-6 py-3 rounded mt-4 mr-10 ${
                elapsedTime >= 3660 ? "disabled" : ""
              }`}
              onClick={elapsedTime >= 3660 ? null : handleSubmit}
              disabled={elapsedTime >= 3660}
            >
              Kiểm Tra Đáp Án
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
