import React from 'react'
import '../Allcss/Page2.css'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import pic5 from '../Images/5.jpg'
import pic7 from '../Images/7.png'
const Page2 = () => {
  return (
    <>
    <h5 className='page2h5css'>Our Services</h5>
    <p className='page2pcss'>Tailored packages to suit your brand's unique needs and budget, ensuring the right platform selection for maximum impact and results.</p>
   <Container fluid>
    <Row>
        <Col md={3}>
        <img src={pic5} className='imgpic5css'></img>
        </Col>
        <Col md={6}>
            <button className='buttonpage2'>1. SOCIAL MEDIA MANAGEMENT <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage2'/></button>
            <button className='buttonpage23'>2. SOCIAL MEDIA MARKETING <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage3'/></button>
            <button className='buttonpage23'>3. ONLINE REPUTATION MANAGEMENT <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage4'/></button>
            <button className='buttonpage23'>4.PRODUCT PHOTOSHOOT & REELS <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage5'/></button>
            <button className='buttonpage23'>5. SOCIAL MEDIA ADUIT<ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage6'/></button>
            <button className='buttonpage23'>6. CONTENT & SEO <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage7'/></button>
            <button className='buttonpage23'>7. CAMPAIGN MANAGEMENT <ArrowForwardRoundedIcon style={{height:'3rem',width:'3rem'}} className='buttonarrowpage8'/></button>
            <img src={pic7} className='imgcsspic7' ></img>
        
        
        </Col>
    </Row>
   </Container>
   
    </>
  )
}

export default Page2