import './Body.css';
import Image from 'next/image';
import HeroImage from '@/public/assets/Images/main.png'
import Link from 'next/link';
import React ,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const SaasSec = () => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleOptionChange}
              />
              Option 4
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option5"
                checked={selectedOption === "option5"}
                onChange={handleOptionChange}
              />
              Option 5
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link  href={"https://app.askdocs.com/"} >
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
        <div className="main_content mb-5 pb-5" id='mainsec'>
            <div className='content_class pt-5 mt-5 d-flex flex-column justify-content-center align-items-center gap-3'>
                <h1 className='heading_top text-center'>Get Insights From Your <br /> Documents In Seconds</h1>
                <p className='w-75  text-center keyfeatures'>AskDocs is your digital assistant that research and get actionable insights from lengthy documents.</p>
                <div className='py-3 px-5  d-flex justify-content-between top_btn'onClick={handleShow} style={{cursor:"pointer"}}>
                    <span></span>
                    <span >Get Started</span>
                    <i class="bi bi-chevron-right "></i>
                </div>

                <div className='img-box'>
                    <Image src={HeroImage} className="img-fluid img_edit" />
                </div>
            </div>
        
        </div>
        </>
    )
}

export default SaasSec