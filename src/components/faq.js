import React from 'react';
import { useState } from 'react';
import './faq.css'

function FAQ({question,answer}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const iconStyle = {
        color: '#f7f7f7',
        fontSize: 'large',
        cursor: 'pointer'
    };
    return(
        <>
            <div>
                <div className="question-container" onClick={() => setShowAnswer(!showAnswer)}>
                    <h2 className="question" onClick={() => setShowAnswer(!showAnswer)}> {question} </h2>
                    {
                        showAnswer ? (
                            <i onClick={() => setShowAnswer(!showAnswer)} class="fa-solid fa-minus" style={iconStyle}></i>
                        ) : (
                            <i onClick={() => setShowAnswer(!showAnswer)} class="fa-solid fa-plus" style={iconStyle}></i>
                        )
                    }
                </div>
                <div className="answer">
                    {showAnswer && <p> {answer} </p>}
                </div>
            </div>
        </>
    );
};


export default FAQ;