import React from 'react'
import '../Allcss/Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import footerpic from '../Images/1.jpg'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
// import insta from '../Images/insta.jpg'
import { Instagram, LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
    <div className='footer'>
   <Container fluid>
    <Row>
        <Col md={4}>
         <img alt='arro' src={footerpic} className='picfooter1'></img>  
         <p className='footerpcss1'>Welcome to Socio Curry - Where your brand meets a blend of 360 Degree Design, Branding & Digital Marketing Approach</p>
     <p className='footerpiccss2'>CONTACT INFO</p>
     <div className='footerpic5'>
      <p>SocioCurry Studio,</p>
      <p>Q Block, DLF Phase 2,</p>
      <p>Gurgaon, Haryana</p>
     </div>
        </Col>
        <Col md={5}>
           
        </Col>
        <Col md={3}>
          <div >
      <p className='divfooter0'>SOCIOCURRY SUPORT</p>
      <p className='divfooterp01'>Available 7 days a week</p>
      </div>
      <button style={{marginTop:'1rem',height:'3.5rem',width:'14rem',textAlign:'left'}}><EmailIcon style={{height:'2.5rem',width:'2.5rem'}}/> sociocurry@gmail.com</button>
      <button style={{marginTop:'1rem',height:'3.5rem',width:'14rem',textAlign:'left'}}><PhoneIcon style={{height:'2.5rem',width:'2.5rem'}}/> +91 9818777620</button>
      <button style={{marginTop:'1rem',height:'3.5rem',width:'14rem',textAlign:'left'}}><QuestionAnswerTwoToneIcon style={{height:'2.5rem',width:'2.5rem'}}/> Chat with Us</button>
        <p className='divfooter023'> CONNECT WITH US</p>
        {/* <img src={insta}></img> */}
        <Instagram className='iconcssfooter' style={{height:'2.5rem',width:'2.5rem'}}/>
        <Facebook className='iconcssfooter' style={{height:'2.5rem',width:'2.5rem'}}/>
        <LinkedIn className='iconcssfooter' style={{height:'2.5rem',width:'2.5rem'}}/>
        <WhatsApp className='iconcssfooter' style={{height:'2.5rem',width:'2.5rem'}}/>


        </Col>
    </Row>
   </Container>
    </div>
    </>
  )
}

export default Footer