import React from 'react'
import '../Allcss/Page9.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import handpic from '../Images/7.png'
import pic9 from '../Images/page9pic.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import arrows from '../Images/5.jpg'


const Page9 = () => {
  return (
    <>
    <div className='page9css'>
     <p className='page9csshead'>Request Your </p>
     <p className='page9csshea1'>Free 1-Month Custom Social Media</p>
     <p className='page9csshea2'>Roadmap</p>
     <p className='page9csshead3'>for you Brand</p>
     <p className='page9css0'>Offer valid for next 3 days only. Hurry up!</p>
     <button className='buttononpage9'>Book a Call <ArrowForwardIcon style={{width:'2rem',height:"2rem"}} className='arowonpage9'/></button>
     <img src={handpic} alt='arro' className='handpicpage9'></img>
    </div>
   <div>
    <p className='page9cssheadsecound'>Innovative AI- Software Solutions We Leverage</p>
    <img alt='arro' src={pic9} style={{marginTop:'5rem'}}></img>
   </div>
   <Container fluid>
    <Row>
        <Col md={6}>
        <form className='formcssonpage10'>
                <div className='formcssonpage1css20'>
                    <h4 className='hedingcssform10'>Get a FREE Consultation</h4>
                <h5>Your Name</h5>
   <input type='text' className='inputetype1css0' placeholder='Enter your name' />
   <h5 className='inputeh5css'>Your Email</h5>
   <input type='text' className='inputetype1css0' placeholder='Enter your Email Id' />
   <h5 className='inputeh5css'>Your Mobile Number</h5>
   <input type='text' className='inputetype1css0' placeholder='Enter your Mobile Number' />
   <h5 className='inputeh5css'>Your Service Required</h5>
   <input type='text' className='inputetype1css0' placeholder='Enter the service you are looking for' />
   <button className='buttoncsspage20'>Book a Call <ArrowCircleRightIcon style={{width:'6vh',height:'6vh'}} className='ArrowCircleRightIconcss0'/> </button>
  
   </div>  </form>
        </Col>
        <Col md={4}>
<p className='page9cssready'>Ready to create a Social Media Buzz?</p>
<p className='page9cssready0'>Let's craft inspiring Brand Stories, stunning Creatives, and engaging Campaigns for your brand's Social Media success.</p>
       
       <img alt='arro' src={arrows} style={{width:'12rem',height:"10rem",marginLeft:"6rem"}}></img>
       <button className='buttoncsspage200'>LET'S TALK <ArrowCircleRightIcon style={{width:'6vh',height:'6vh'}} className='ArrowCircleRightIconcss0'/> </button>
  
        </Col>
    </Row>
   </Container>
    </>
  )
}

export default Page9