import React from 'react';
import './Body.css';
import Image from 'next/image';
import HeroImage from '@/public/assets/Images/main1.png'

const SaasSec2 = () => {
    return (
        <div className='container-fluid __main_sec mt-5 pt-5 d-flex flex-column justify-content-center align-items-center position-relative '>
            <div className='row px-5 pt-4'>
                <div className='col-md-8 col-12'>
                    <h1 className='text-light fw-bold'>Read and get instant answers <br /> <span className='text-primary'>like never before.</span></h1>
                    <p className='w-100 text-light'>
                        AskDocs is your AI assistant that can quickly read, understand, find, and summarize information from your documents.
                    </p>
                </div>
                <div className='col-md-4  col-12 d-flex flex-column gap-3'>
                    <div className='d-flex gap-4'>
                        <i class="bi bi-check-circle text-primary"></i>
                        <p className='text-light'>Smart Regulation Identification</p>
                    </div>
                    <div className='d-flex gap-4'>
                        <i class="bi bi-check-circle text-primary"></i>
                        <p className='text-light'>Real-time Notifications</p>
                    </div>
                    <div className='d-flex gap-4'>
                        <i class="bi bi-check-circle text-primary"></i>
                        <p className='text-light'>Customized Compliance Reports</p>
                    </div>
                    <div className='d-flex gap-4'>
                        <i class="bi bi-check-circle text-primary"></i>
                        <p className='text-light'>Automated Data Analysis </p>
                    </div>
                </div>
            </div>

            <div className='px-4 __ptsec mt-5 mb-0'>
                <Image src={HeroImage} className='img_edit img-fluid' />
            </div>

        </div>
    )
}

export default SaasSec2