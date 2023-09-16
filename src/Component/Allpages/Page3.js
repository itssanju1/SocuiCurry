import React from 'react'
import '../Allcss/Page3.css'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../Images/c.jpg'
import c2 from '../Images/c2.jpg'
import c3 from '../Images/c3.jpg'
import c4 from '../Images/c4.jpg'
import c5 from '../Images/c5.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const Page3 = () => {
  return (
   <>
   <h5 className='page3css'>Trusted by Leading Brands across Sectors</h5>
   <Carousel >
      <Carousel.Item>
        <img src={c1} ></img>
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={c1} ></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={c1} ></img>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='page3divcss'>
        <h3 className='page3h3css'>
        Our Numebr Speak For Us
        </h3>
   <Container fluid>
    <Row >
        
        <Col md={2}>
            <div className='colpage3css01'>
            <h5 className='page3h5csscol'>100+</h5>
            <h4 className='page3h5csscol2'>Happy Clients</h4></div>
        </Col>
        <Col md={2}>
        <div className='colpage3css01'>
            <h5 className='page3h5csscol'>45+</h5>
            <h4 className='page3h5csscol2'>Industries</h4></div>
        </Col>
        <Col md={2}>
        <div className='colpage3css01'>
            <h5 className='page3h5csscol'>10X</h5>
            <h4 className='page3h5csscol2'>Growth</h4></div>
        </Col>
        <Col md={4}>
        <div className='colpage3css01'>
            <h5 className='page3h5csscol'>3245+</h5>
            <h4 className='page3h5csscol2'>Compaigns Cooked</h4></div>
        </Col>
        <Col md={2}>
        
            <h5 className='page3h5csscol'>100%</h5>
            <h4 className='page3h5csscol2'>
                Satisfaction
            </h4>
        </Col>
    </Row>

   </Container>
    </div>
   </>
  )
}

export default Page3