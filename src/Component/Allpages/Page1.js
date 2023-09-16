import React from 'react'
import '../Allcss/PAge1.css'
import pic1 from '../Images/1.jpg'
import pic2 from '../Images/2.jpg'
import CallIcon from '@mui/icons-material/Call';
import { Col, Container, Row } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pic3 from '../Images/3.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import pic4 from '../Images/4.jpg'

const Page1 = () => {
  return (
    <>
    <div className='headingpagecss'>
        <img src={pic3} className='imgpiccsshead'></img>
           
    </div>
    <div className='page1csssecound'>
    <Container fluid>
        <Row>
            <Col md={6}>
                
             <p className='headingpage1csshead'>Accelerate your </p>
             <p className='headingpage1csshead1'>Business growth With SOCIAL MEDIA MARKETING</p>
             <p className='headingpage1csshead2'>Unlock your social media potential with our expert guidance and AI-Driven Social Media Marketing Solutions.</p>
             <button className='buttoncsspage1'>Let's Talk<ArrowCircleRightIcon style={{width:'5vh',height:'5vh'}} className='ArrowCircleRightIconcss'/></button>
            
            <div className='picdivcss'>
                <img src={pic4} className='pic4css'></img>
            </div>
            </Col>
            <Col md={6}>
            <form className='formcssonpage1'>
                <div className='formcssonpage1css2'>
                    <h4 className='hedingcssform1'>Get a FREE Consultation</h4>
                <h5>Your Name</h5>
   <input type='text' className='inputetype1css' placeholder='Enter your name' />
   <h5 className='inputeh5css'>Your Email</h5>
   <input type='text' className='inputetype1css' placeholder='Enter your Email Id' />
   <h5 className='inputeh5css'>Your Mobile Number</h5>
   <input type='text' className='inputetype1css' placeholder='Enter your Mobile Number' />
   <h5 className='inputeh5css'>Your Service Required</h5>
   <input type='text' className='inputetype1css' placeholder='Enter the service you are looking for' />
   <button className='buttoncsspage2'>Book a Call <ArrowCircleRightIcon style={{width:'6vh',height:'6vh'}} className='ArrowCircleRightIconcss'/> </button>
   </div>  </form>
            </Col>
        </Row>
       
    </Container>
    </div>
    </>
  )
}

export default Page1