'use client'
import React, { useState, useEffect } from 'react';
import './Body.css'
import Link from 'next/link';

const SassSec3 = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    return (
        <div className='container mt-5 pt-5'>
            <div className='container mt-5 py-5' id='faq'>
                <div className='text-center'>
                    <h1 className='fw-bold'>Frequently Asked <br />  Questions</h1>
                    <p className='keyfeatures'>Youve got Qs, we’ve got As.</p>
                </div>

                <div className='row mt-5 py-5'>
                    <div className="col-md-12 col-12 ">
                        <div className={`${isActive.key == 1 ? "querstion_active" : "querstion_disable"} hover_question py-3 px-4  faq_card `} onClick={() => handleToggle(1)}>
                            <div className='d-flex justify-content-between align-items-center'> <h5 className="fw-bold">Where are my documents stored?</h5> <i class="bi bi-chevron-down"></i></div>
                            <div className="animation_faq" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>Your documents are securely hosted on Amazon Web Services (AWS)</p></div>
                        </div>
                    </div>
                    <div className="col-md-12 col-12 mt-5">
                        <div className={`${isActive.key == 2 ? "querstion_active" : "querstion_disable"} hover_question py-3 px-4  faq_card `} onClick={() => handleToggle(2)}>
                            <div className='d-flex justify-content-between align-items-center'> <h5 className="fw-bold">How accurate is the AI in providing answers?</h5> <i class="bi bi-chevron-down"></i></div>
                            <div className="animation_faq" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>Our AI-powered tool provides accurate answers to your questions by analyzing the PDF, DOC, TXT or CSV document you upload. We are constantly improving our software to ensure the highest level of accuracy. The more specific your questions, the more accurate the answer will be.</p></div>
                        </div>
                    </div>
                    <div className="col-md-12 col-12 mt-5">
                        <div className={`${isActive.key == 3 ? "querstion_active" : "querstion_disable"} hover_question py-3 px-4  faq_card `} onClick={() => handleToggle(3)}>
                            <div className='d-flex justify-content-between align-items-center'> <h5 className="fw-bold">What kind of documents can I ask questions to?</h5> <i class="bi bi-chevron-down"></i></div>
                            <div className="animation_faq" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>You can ask questions to PDF, DOCX, TXT, CSV Files & Youtube link at the moment.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SassSec3