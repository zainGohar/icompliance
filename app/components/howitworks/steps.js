import React from 'react'
import { Card } from 'react-bootstrap'
import './steps.css'
const Steps = () => {
  return (
    <>
     <div className='container'> 
        <div className='main-heading text-center mt-5 py-5'>
            <h1>In 3 easy steps</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <Card className=' bg-light border-0  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mt-5'>
                                <p>01.</p>
                            </Card.Title>
                            <Card.Body className='card-subs text-center'>
                                <p>	Select Region</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>The app begins by ingesting a variety of regulatory sources such as government websites, legal documents, and industry publications.<br/>The AI algorithms then analyze and extract key information</p>
                            </Card.Subtitle>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card className=' border-0  bg-light  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mt-5'>
                                <p>02.</p>
                            </Card.Title>
                            <Card.Body className='card-subs text-center'>
                                <p>Signup</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>The AI app continuously monitors the regulatory landscape for updates, amendments, and new regulations. When changes occur, the app promptly alerts users through notifications.</p>
                            </Card.Subtitle>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card className=' border-0  bg-light  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mt-5'>
                                <p>03.</p>
                            </Card.Title>
                            <Card.Body className='card-subs text-center'>
                                <p>Ask Regulation</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>Based on the identified regulations and their updates, the AI app generates personalized compliance reports for businesses. These reports outline specific actions that need to be taken to achieve and maintain compliance. </p>
                            </Card.Subtitle>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Steps
