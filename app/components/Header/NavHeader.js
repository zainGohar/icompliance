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

    return (
       //hello

        <Navbar expand="lg" className={`bg-body-tertiary position-fixed w-100 navbar_spec ${isScrolled ? 'navbar_spec' : ''}`} >
            <Container>
                <Navbar.Brand href="/">
                    {/* <Image src={Logo} alt="logo_web" className="" width={180} height={50} /> */}
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
                    <Form className="d-flex">
                        <Link href="https://app.askdocs.com/" className='header_btn py-3 px-4'>Upload Documents</Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavHeader