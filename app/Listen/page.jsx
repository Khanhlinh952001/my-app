"use client";
import React, { useState, useEffect } from "react";
import Listen from "../../json/Listen.json";
import Image from "next/image";
function isImage(url) {
  // Check if the URL is defined and ends with specific patterns indicating it's an image
  return (
    (url && /\.(jpeg|jpg|gif|png)$/.test(url.toLowerCase())) ||
    (url && /\?q=tbn:/.test(url)) ||
    (url && url.startsWith("http"))
  );
}

const TestPage = () => {
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [questionsSet, setQuestionsSet] = useState([]);
  const [selectedSet, setSelectedSet] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [showTracking, setShowTracking] = useState(true);
  const [score, setScore] = useState();
  // Countdown timer for 20 minutes
  useEffect(() => {
    let timer;
    if (showResults || elapsedTime >= 1200) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showResults, elapsedTime]);

  useEffect(() => {
    // Select the corresponding question set
    switch (selectedSet) {
      case 1:
        setQuestionsSet(Listen.Listen83); // Assuming De1 is Reading83
        break;
      case 2:
        setQuestionsSet(Listen.Listen84); // Assuming De1 is Reading83
        break;
      default:
        setQuestionsSet(Listen.Listen83);
    }
  }, [selectedSet]);

  useEffect(() => {
    setQuestions(Listen.Listen83); // Assuming De1 is Reading83
  }, []);
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

  const audioUrl =
    questions && questions.length > 0 ? questions[0].audio : null;
  console.log(audioUrl);

  return (
    <div className="bg-[#e1e8f0] h-full text-align">
      <div className="flex">
        <div className="bg-white w-screen ml-[280px] mb-8 mr-4 text-center rounded">
          <h1 className="text-3xl font-bold mb-4 text-black pt-8">
            한국어 능력시험
          </h1>

          <div className="mb-4 ">
            <label className="block text-2xl font-medium mt-1 mr-2 text-gray-700 ">
              제회
            </label>
            <select
              className="border rounded-md text-gray-700 h-10 bg-slate-300  p-2"
              value={selectedSet}
              onChange={(e) => setSelectedSet(Number(e.target.value))}
            >
              <option value={1}>Bộ đề 83</option>
              <option value={2}>Bộ đề 84</option>
              {/* Add more options if needed */}
            </select>
          </div>
 
          <div className="mt-4 text-center mb-2">
            <p className="text-xl font-medium text-red-600">
              Thời gian còn lại:{" "}
              <span className="text-xl text-red ">
                {Math.floor((3660 - elapsedTime) / 60)} phút{" "}
                {(1200 - elapsedTime) % 60} giây
              </span>
            </p>
          </div>
          <div class="w-full">
            {audioUrl ? (
              <audio controls autoPlay>
                <source src={audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <p>No audio available</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="flex  ">
          <div className="w-[280px]  h-full fixed top-4 overflow-y-auto  ">
            <div className="bg-white pb-10 mx-2 rounded-md mr-2">
              {showTracking && (
                <div className="text-center">
                  <h5 className="text-[18px] font-medium mb-2 text-gray-800">
                    Bảng theo dõi:
                  </h5>
                  <ul className="list-none p-0">
                    {questionsSet.map((question) => (
                      <li key={question.id} className="mb-2">
                        <button
                          className={"text-black px-4 py-2 rounded "}
                          onClick={() => handleJumpToQuestion(question.id)}
                        >
                          Câu {question.id} : Bạn chọn
                          {answers[question.id] ? (
                            <span className="font-bold ml-2 bg-green-500 text-white py-2 px-3 rounded-full">
                              {answers[question.id]}
                            </span>
                          ) : (
                            <span className="font-bold ml-2 bg-yellow-500 text-white py-2 px-3 rounded-full">
                              ?
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showResults && (
                <div className="mr-1  text-center pb-10">
                  <h1 className=" text-xl mb-8 pt-4 text-gray-500">
                    Chúc mừng bạn :
                    <span className="text-2xl font-bold text-green-600">
                      {score}
                    </span>
                    Điểm
                  </h1>
                  <h5 className="text-gray-900">Kiểm Tra đáp án</h5>
                  <ul className="list-none p-0" id="2">
                    {answeredQuestions.map((questionNumber) => (
                      <li key={questionNumber} className="mb-2 ">
                        <div className=" border-b pb-2">
                          <div className="flex ">
                            <button
                              className={`${
                                answers[questionNumber] ===
                                questions.find((q) => q.id === questionNumber)
                                  ?.correctAnswer
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              } text-white p-2 ml-2 w-16 rounded`}
                              onClick={() =>
                                handleJumpToQuestion(questionNumber)
                              }
                            >
                              Câu {questionNumber}
                              {/* {answers[questionNumber]} */}
                            </button>
                            {answers[questionNumber] && (
                              <span className="ml-1 mt-1 w-[180px] mr-1 text-gray-600">
                                {answers[questionNumber] ===
                                questions.find((q) => q.id === questionNumber)
                                  ?.correctAnswer
                                  ? "True"
                                  : "False"}
                                - Đáp án là:{" "}
                                <span className="mt-4 bg-green-500 rounded-full py-2 px-3">
                                  {
                                    questions.find(
                                      (q) => q.id === questionNumber
                                    )?.correctAnswer
                                  }
                                </span>
                              </span>
                            )}
                            <div></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="questions-list flex-1 ml-[280px] mx-4 pl-8 pt-4 pr-8 rounded-md  bg-slate-100">
            {questionsSet.map((question) => {
              const questionNumber = question.id;
              const userAnswer = answers[questionNumber];
              const isIncorrect =
                userAnswer && userAnswer !== question.correctAnswer;

              return (
                <div
                  key={questionNumber}
                  id={`question${questionNumber}`}
                  className="mb-6 bg-white pl-6 pr-6 pb-6 pt-1  rounded-xl"
                >
                  <h1 className="mb-2 text-black text-2xl mt-4">
                    {question.type}
                  </h1>
                  {isImage(question.content) ? (
                    <div className="container">
                      <div>
                        <p className="mb-2 text-gray-800 text-xl mt-4">
                          {" "}
                          {question.id}.{" "}
                        </p>
                        <img
                          style={{ width: "700px" }}
                          src={question.content}
                          alt={`Câu hỏi ${questionNumber}`}
                          className="mb-2 ml-10"
                        />
                        <h2 className="mb-2 text-black text-xl mt-4">
                          {question.type1}
                        </h2>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <p className="mb-2 text-black text-xl mt-4 pl-4 py-2 rounded-2xl flex">
                        {question.id}.
                        {question.content ? (
                          question.content
                        ) : (
                          <h2 className="mb-2 text-black text-xl ">
                            {question.type1}
                          </h2>
                        )}
                      </p>
                    </div>
                  )}
                  <div className="mb-8">
                    {question.options && (
                      <div className="flex flex-row justify-around space-x-4">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center">
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
                              checked={
                                userAnswer === (optionIndex + 1).toString()
                              }
                              className="h-5 w-5 border-gray-300 focus:ring-indigo-500 text-indigo-600"
                              disabled={showResults}
                            />
                            <label className="text-gray-700 text-xl ml-2">
                              {`. ${optionIndex + 1}   ${option}`}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* {question.options &&
                      question.options.map((option, optionIndex) => (

                        <div class="">
                          
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
                            className="mr-2"
                            disabled={showResults} // Disable radio buttons after submitting
                          />
                          {`${optionIndex + 1}. ${option}`}{" "}
                        </label>
                       </div>
                      ))} */}
                  </div>

                  {showResults && isIncorrect && (
                    <div>
                      <p className="text-red-500">
                        Đáp án đúng:{" "}
                        <span className="text-xl text-blue-500">
                          {question.correctAnswer}
                        </span>
                      </p>
                      <p className="text-green-400">{question.solution}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {showResults && (
          <div className="mt-4">
            <p className="text-xl font-medium text-black ml-20">
              Thời gian làm bài: {elapsedTime} giây
            </p>
          </div>
        )}
      </div>
      <div className="w-screen flex justify-end ">
        <button
          className={`bg-blue-500 text-white px-6 py-3 rounded mt-4 mr-10 ${
            elapsedTime >= 1200 ? "disabled" : ""
          }`}
          onClick={elapsedTime >= 1200 ? null : handleSubmit}
          disabled={elapsedTime >= 1200}
        >
          Kiểm Tra Đáp Án
        </button>
      </div>
    </div>
  );
};

export default TestPage;
