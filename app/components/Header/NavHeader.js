'use client'
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/assets/Images/logo.png'
import Modal from 'react-bootstrap/Modal';
const NavHeader = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100; // Adjust the scroll position as needed
            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <Navbar expand="lg" className={`bg-body-tertiary position-fixed w-100 navbar_spec ${isScrolled ? 'navbar_spec' : ''}`} >
            <Container>
                <Navbar.Brand href="/">
                    <Image src={Logo} alt="logo_web" className="" width={180} height={50} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#mainsec">How its works</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#faq">FAQs</Nav.Link>
                        
                    </Nav>
                    <Form className='d-flex header_btn py-3 px-4' onClick={handleShow} style={{cursor:"pointer"}}>Upload Documents
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavHeader