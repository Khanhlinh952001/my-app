"use client"
import React, { useState, useRef, useEffect } from 'react';

const VocabularyPage = () => {
  const [vocabulary, setVocabulary] = useState([]);
  const [newHan, setNewHan] = useState('');
  const [newViet, setNewViet] = useState('');
  const [showTable, setShowTable] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState('');
  const [showHan, setShowHan] = useState(true);
  const [showViet, setShowViet] = useState(true);

  const hanInputRef = useRef(null);
  const vietInputRef = useRef(null);

  useEffect(() => {
    hanInputRef.current.focus();
  }, []);

  const handleAddVocabulary = (e) => {
    if (e.key === 'Enter') {
      if (newHan && !newViet) {
        vietInputRef.current.focus();
      } else if (newHan && newViet) {
        setVocabulary([...vocabulary, { han: newHan, viet: newViet }]);
        setNewHan('');
        setNewViet('');
        setWordCount(wordCount + 1);
        setError('');
        hanInputRef.current.focus();
      } else {
        setError('Lỗi: Hãy nhập cả tiếng Hàn và tiếng Việt!');
      }
    }
  };

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };

  const handleToggleLanguage = (language) => {
    if (language === 'han') {
      setShowHan(!showHan);
    } else if (language === 'viet') {
      setShowViet(!showViet);
    }
  };

  const handleToggleAll = (language) => {
    if (language === 'han') {
      setShowHan(!showHan);
    } else if (language === 'viet') {
      setShowViet(!showViet);
    }
  };

  return (
    <div className="p-8 max-w-screen-md mx-auto h-screen bg-slate-200">
      <h1 className="text-3xl font-semibold mb-4 text-black">Vocabulary Management</h1>
      <div className="mb-4">
        <label className="block text-gray-600">Tiếng Hàn:</label>
        <input
          ref={hanInputRef}
          className="w-full text-gray-800 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={newHan}
          onChange={(e) => setNewHan(e.target.value)}
          onKeyPress={handleAddVocabulary}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Tiếng Việt:</label>
        <input
          ref={vietInputRef}
          className="w-full text-gray-800 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={newViet}
          onChange={(e) => setNewViet(e.target.value)}
          onKeyPress={handleAddVocabulary}
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleToggleTable}
      >
        {showTable ? 'Ẩn Bảng' : 'Hiện Bảng'}
      </button>
      <div className="mt-4">
        <button
          className={`mr-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 ${showHan ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => handleToggleLanguage('han')}
        >
          {showHan ? 'Ẩn Hàn' : 'Hiện Hàn'}
        </button>
        <button
          className={`mr-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 ${showViet ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => handleToggleLanguage('viet')}
        >
          {showViet ? 'Ẩn Việt' : 'Hiện Việt'}
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => handleToggleAll('han')}
        >
          {showHan ? 'Ẩn Tất Cả Hàn' : 'Hiện Tất Cả Hàn'}
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => handleToggleAll('viet')}
        >
          {showViet ? 'Ẩn Tất Cả Việt' : 'Hiện Tất Cả Việt'}
        </button>
      </div>
      <div className="mt-4 bg-blue-300">
        <label className="block text-2xl text-gray-600">Số từ vựng đã lưu: {wordCount} </label>
       
        
      </div>
      {showTable && (
        <table className="mt-4 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-400 text-white">
            {showHan && <th className="py-2 px-4 border">Tiếng Hàn</th>}
              {showViet && <th className="py-2 px-4 border">Tiếng Việt</th>}
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((word, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-700' : 'bg-blue-700'}>
                {showHan && <td className="py-2 px-4 border">{word.han}</td>}
                {showViet && <td className="py-2 px-4 border">{word.viet}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VocabularyPage;


// {showResults && isIncorrect && (
//   <div className="w-10/12 mt-1 overflow-x-auto overflow-hidden flex space-x-1">
//     {questions.map((question, questionIndex) => (
//       <button
//         key={questionIndex}
//         className={`${
//           answers[question.id]
//             ? 'bg-green-500'
//             : 'bg-[#b61e3b]'
//         } border-[#b61e3b] border text-white rounded-md py-2 px-3 mx-1 cursor-pointer`}
//         onClick={() => setCurrentQuestionIndex(questionIndex)}
//       >
//         {questionIndex + 1}
//         <span
//           className={`${
//             answers[question.id] ===
//             questions.find((q) => q.id === question.id)
//               ?.correctAnswer
//               ? 'bg-green-500'
//               : 'bg-red-500'
//           } text-white px-2 rounded font-normal`}
//         >
//           {answers[question.id]}
//         </span>
//       </button>
//     ))}
//   </div>
// )}
