import React from 'react';
import { useState } from 'react';
import { data } from '../faq_data';
import FAQ from '../faq';


function FAQS() {
    const [questions, setQuestions] = useState(data);
    return(
        <>
            <div className="faqs-container">
                <div>
                    <p className="title">FREQUENTLY ASKED QUESTIONS</p>
                </div>
                <div className="questions-container">
                    {questions.map((question) => (
                        <FAQ {...question}/>
                    ))}
                </div>
            </div>
        </>
    );
};


export default FAQS;