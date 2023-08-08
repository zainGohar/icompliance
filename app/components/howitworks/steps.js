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
                                <p>Download app</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </Card.Subtitle>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card className=' border-0  bg-light  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mt-5'>
                                <p>02.</p>
                            </Card.Title>
                            <Card.Body className='card-subs text-center'>
                                <p>Create an account</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </Card.Subtitle>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card className=' border-0  bg-light  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mt-5'>
                                <p>03.</p>
                            </Card.Title>
                            <Card.Body className='card-subs text-center'>
                                <p>Enjoy</p>
                            </Card.Body>
                            <Card.Subtitle className='card-b text-center'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
