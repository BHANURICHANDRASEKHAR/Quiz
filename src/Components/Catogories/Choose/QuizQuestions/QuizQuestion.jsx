import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gettypecard } from '../getcardsdata';
import Loader from '../../../../../Loader';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import './questions.css';
import { typeofdata } from '../../../../reacticons';
import { check, wronganswerscheck } from './checking';

import QuickLinks from './QuickLinks';

const QuizQuestion = () => {
  const { type } = useParams();
  const [loader, setLoader] = useState(false);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    gettypecard(type, setCardData, setLoader);
  }, [type]);

  return (
    <div className='container body'>
      {loader && <Loader />}
      {cardData.length > 0 && (
        <div className='row'>
          <h2 className=' mt-5 typename'>
            {type} <span className='text-success'>::</span> General Questions
          </h2>
          <div className='col-sm-8 mt-1 questionscard'>
            <Questions questionsData={cardData} />
          </div>
          <div className='col-sm-1'></div>
          <div className='col-sm-3 linkscard mt-5'>
            <QuickLinks typedata={type} type={typeofdata} />
          </div>
        </div>
      )}
    </div>
  );
};

const Questions = ({ questionsData }) => {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState({ id: '', status: '' });
  const [numberOfPages, setNumberOfPages] = useState(Math.floor(questionsData.length / 10));
  const [pageNumber, setPageNumber] = useState(1);

  const check1 = (item, answer, id) => {
    setCorrectAnswer((prevCorrectAnswer) => {
      const updatedAnswer = { ...prevCorrectAnswer, id, status: item === answer };

      if (answer === item) {
        setCorrectAnswers((prevCorrectAnswers) => [...prevCorrectAnswers, { id, answer }]);
      }

      if (item !== answer) {
        setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, { id, item }]);
      }

      return updatedAnswer;
    });
  };

  return (
    <div className='m-4'>
      <div className='row'>
        <div className='col-sm'>
          {questionsData.slice((pageNumber - 1) * numberOfPages, numberOfPages * pageNumber).map((data, index) => (
            <div className='m-1' key={data.id || index}>
              <label className='m-2'>
                {index + 1}. {data.question}
              </label>
              <ul>
                {['a', 'b', 'c', 'd'].map((item, innerIndex) => (
                  <QuestionItem
                    key={`${data.id || index}-${innerIndex}`}
                    item={item}
                    answer={data.answer}
                    answerList={data.answerList}
                    explanation={data.explanation}
                    id={data.id}
                    correctAnswer={correctAnswer}
                    check1={check1}
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                  />
                ))}
                <div className='d-flex'><span className='text-success' style={{fontSize:'20px'}}>Answer </span>{check(correctAnswers, data.id, data.answer)&&<div data-aos='fade-down'><li > <span style={{fontSize:'20px'}}>::({data.answer})</span> </li>
                <li style={{lineHeight:'24px'}}><span className='text-success '>Explanation</span> :{data.explanation}</li></div>
                }</div>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Pages numberOfPages={numberOfPages} questionsData={questionsData} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
};

const QuestionItem = ({ item, answer, answerList, explanation, id, correctAnswer, check1, correctAnswers, wrongAnswers }) => (
  <li key={`${id}-${item}`} className='m-2' onClick={() => check1(item, answer, id)}>
    {`(${item})`} {answerList[item]}{' '}
    {answer === item && check(correctAnswers, id, answer) ? (
      <CheckMark />
    ) : wrongAnswers.length > 0 && wronganswerscheck(wrongAnswers, id, item) ? (
      <CrossMark />
    ) : null}
  </li>
);

const CheckMark = () => (
  <span className='text-success' style={{ fontSize: '25px' }}>
    <IoMdCheckmarkCircle />
  </span>
);

const CrossMark = () => (
  <span className='text-danger' style={{ fontSize: '25px' }}>
    <RxCrossCircled />
  </span>
);

const Pages = ({ questionsData, numberOfPages, setPageNumber, pageNumber }) => (
  <div className='row '>
    <hr />
    <div className='col-sm'>
      <ul className='pagination mt-4'>
        <li className='page-item'>
          <button className='page-link' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
            Previous
          </button>
        </li>
        {Array.from({ length: numberOfPages }, (_, index) => (
          <li key={index} className='page-item'>
            <button className='page-link' onClick={() => setPageNumber(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className='page-item'>
          <button className='page-link' onClick={() => pageNumber < numberOfPages && setPageNumber(pageNumber + 1)}>
            Next
          </button>
        </li>
      </ul>
    </div>
    <hr />
  </div>
);

export default QuizQuestion;
