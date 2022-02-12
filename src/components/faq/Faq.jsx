import React from "react";
import './faq.css';
import Question from "./Question";
import {questions} from "./dataq";

const Faq = () => {
    return (
        <section id="faq">
            <div className="container faq">
                <div className="u-title">
                  <i class='fab fa-buffer'></i>
                    <h2>FAQS</h2>
                    <p className="u-text-small u-text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Adipisci, voluptate minima. Provident molestiae aperiam eveniet illum 
                         fugiat! Blanditiis!Provident molestiae aperiam eveniet illum.
                    </p>

                  </div>
                  
                  <div className="questions">
                  {
                        questions.map((question) => (
                            <Question  
                            title={question.title}
                            answer={question.answer}/>
                        ))
                    } 
                  
                </div> 
               </div>
        </section>
    
   
    
    );
    
};
export default Faq;