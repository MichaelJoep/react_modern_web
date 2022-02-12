import React from "react";
import {useState} from 'react';
import './question.css';

const Question = ({title, answer}) => {
    const [showAnswer, setShowAnser] = useState(false);

    const handleClick = () => {
        setShowAnser(!showAnswer);
    }

    return (
           <section className="container questionContainer">
               <div className="question-title">
                  <h4>{title}</h4>
                    <button className="question-icon" onClick={handleClick}>
                    {
                        showAnswer ? (<i className="fas fa-minus"></i> ) : 
                        ( <i className="fas fa-plus"></i> )
                    }
                    </button>
                </div> 
               <div className="question-answer">

                 {
                    showAnswer && 
                     (
                       <p className="u-text-small u-tex-dark">
                            {answer}
                       </p> 
                    )
                  }
                   
               </div>
            </section> 
        
    );
};
export default Question;