import React from 'react'
import '../Allcss/Page7.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Face3Icon from '@mui/icons-material/Face3';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WeekendIcon from '@mui/icons-material/Weekend';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import pic7page from '../Images/page7pic.jpg'

const Page7 = () => {
  return (
   <>
   <p className='page7cssp'>Industries We Have Served So Far</p>
   <Carousel>
      <Carousel.Item>
      <div className='divforpage7css'>
      <div className='div2forpage7css'>
            <p className='div2forpage7cssp'><RestaurantIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Food, Beverages & Hospitality</p>
           
          
          </div>
          <div className='div2forpage7css'>
            <p className='div2forpage7cssp'><Face3Icon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Beauty & Wellness</p>
           
          
          </div>
          <div className='div2forpage7css'>
            <p className='div2forpage7cssp'><FastfoodIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Fast Moving Consumer Good</p>
           
          
          </div>
          <div className='div2forpage7css'>
            <p className='div2forpage7cssp'><CardGiftcardIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Fashion & Lifestyle</p>
           
          
          </div>

       </div>

       
        




      </Carousel.Item>
      <Carousel.Item>
      
      
      <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><PsychologyIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Tech & AI</p>
           
          
          </div>
          <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><CarRepairIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Automobile &  Electronics</p>
           
          
          </div>
          <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><SportsKabaddiIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Sports & Entertainment</p>
           
          
          </div>



      </Carousel.Item>
      <Carousel.Item>
      <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><TrendingUpIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>B2B, Finance & Corporates</p>
           
          
          </div>
          <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><ApartmentIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Real Estate, Architecture & Interrior Design</p>
           
          
          </div>
          <div className='div2forpage7css1'>
            <p className='div2forpage7cssp'><WeekendIcon style={{width:'3rem',height:'3rem',margin:'0.5rem',color:'white'}}/></p>
            <p className='div2forpage7cssp1'>Homeware & Furniture</p>
           
          
          </div>
      </Carousel.Item>
    </Carousel>
    <Container fluid className='containercsspage7'>
      <Row>
        <Col md={6}>
        <h4 className='page6cssh4col1'>Goals</h4>
        <h4 className='page6cssh4col2'>we help you achieve</h4>
        <h4 className='page6cssh4col4'> with our </h4>
        <h4 className='page6cssh4col3'>Expert Guidance</h4>


        <div className='divpage7cssforhead'>
          <p className='divpage7cssforhead1'>Create Brand Awareness</p>
          <p className='divpage7cssforhead1'>Generate Leads & Sales</p>
          <p className='divpage7cssforhead1'>Community & Brand Building</p>
          <p className='divpage7cssforhead1'>Organic Social media Growth</p>
          <p className='divpage7cssforhead2'>Multiple Platform Management</p>
        </div>
        </Col>
        <Col md={6}>
          <p className='colpage7pcss89'>Is your brand rocking the social scene but lacking in conversions and sales? Or are you hungry for more likes and shares? Fear not, we've got the magic touch to turn things around!</p>
<img alt='arro' src={pic7page} className='colpage7pcss80'></img>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Page7
