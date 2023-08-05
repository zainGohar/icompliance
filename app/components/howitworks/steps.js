import React from 'react'
import { Card } from 'react-bootstrap'
import './steps.css'
const Steps = () => {
  return (
    <>
     <div className='sub-title text-center mb-3 mt-5'>
        <h4>HOW IT WORKS</h4>
        </div> 
        <div className='main-heading text-center'>
            <p>In 3 easy steps</p>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <Card className=' border-0  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mb-3'>
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
                        <Card className=' border-0  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mb-3'>
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
                        <Card className=' border-0  mt-5 mb-5 pb-5'>
                            <Card.Title className='card-tit text-center mb-3'>
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
    </>
  )
}

export default Steps
