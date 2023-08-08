import React from 'react';
import { data } from '../faq_data';
import FAQ from '../faq';


function FAQS() {
    return(
        <>
            <div className="faqs-container">
                <div>
                    <p className="title">FREQUENTLY ASKED QUESTIONS</p>
                </div>
                <div className="questions-container">
                    {data.map((question) => (
                        <FAQ {...question}/>
                    ))}
                </div>
            </div>
        </>
    );
};


export default FAQS;