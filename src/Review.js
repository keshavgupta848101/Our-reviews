import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  function random(){
    let randomNum = Math.floor(Math.random() * 3);
    setIndex(randomNum)
    console.log(randomNum);
  }
  return <section className='review'>
    <div className="img-container">
      <img src={image} alt={name} className="person-img"></img>
      <span className="quote-icon">
        <FaQuoteRight />

      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info"> {text}</p>
    <button className="random-btn" onClick={() => {
      if (index == 3) {
        setIndex(0)
      }
      else {
        setIndex(index + 1)
      }
    }}>next</button> 
    &nbsp;
    &nbsp;
    &nbsp;
    <button className="random-btn" onClick={random}>
      Random
    </button>
  </section>;
};

export default Review;
