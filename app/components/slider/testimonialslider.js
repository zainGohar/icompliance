import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Col, Row } from 'react-bootstrap';
import './sliders.css'

const  data =[
  {
    id: 1, 
    username: "Mustafa",
    testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
    date:"7:45pm.05-06-2023"
},
{
  id: 2, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 3, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 4, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 5, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 6, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 7, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?",
  date:"7:45pm.05-06-2023"
},
{
  id: 8, 
  username: "Mustafa",
  testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam magni eveniet sunt sit ea temporibus deleniti inventore dolorem voluptates?d",
  date:"7:45pm.05-06-2023"
},
]
const testimonialslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };
  return (
    <div>
    <h1 className='text-center c-header'>People who already loved us</h1>

<div className='container'>

    <Slider {...settings} >
      {data.map((user) => (
        <Container className='mx-3 '>
          <Row>
            <Col className=' mt-5 h-100 d-flex flex-column'>
             <Card className='mt-5 rounded border-0 h-100 mb-5 card bg-light'>
              <Card.Title className='mt-3 title'>{user.username}</Card.Title>
              <Card.Subtitle className="mt-2 c-subs">@mustafa hafeez</Card.Subtitle>
             <Card.Body>
               <Card.Text className=" mt-2 mx-3 text-muted justify-content-evenly fonts">{user.testimonial}</Card.Text>
               <Card.Subtitle className="mb-2 mx-3 text-muted dates">{user.date}</Card.Subtitle>
             </Card.Body>
           </Card>
           </Col>
           </Row>
           </Container>
                 ))}
    </Slider>
    </div></div>
  )
}

export default testimonialslider
