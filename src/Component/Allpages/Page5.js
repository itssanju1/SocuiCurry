import React from 'react'
import '../Allcss/PAge5.css'
import { Card } from 'react-bootstrap'
import card1 from '../Images/card1.jpg'
import card2 from '../Images/card2.jpg'
import card3 from '../Images/card3.jpg'
import card4 from '../Images/card4.jpg'
import card5 from '../Images/card5.jpg'
import card6 from '../Images/card6.jpg'
const Page5 = () => {
  return (
    <>
    <div className='page5csshead1'>
    <h2 className='page5csshead'>Why choose</h2>
    <h2 className='page5csshead2'>SOCIOCURRY?</h2>

    </div>
    <p className='page5csshead3'>Our social media strategy goes above beyond daily posts. We combine data driven insights, captivating brand stories and innovative digital campaigns that captivate your audience and add spie to their online presence.</p>
    
    <div >
    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)' }} className='page5csscardtitle0'>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <p className='page5csscardtitle'>ROI Driven Approach</p>
        <p className='page5csscardtitle1'>
        Maximize results with targeted campaigns on optimal platforms all within brand's budget.
        </p>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)' }} className='page5csscardtitle01' >
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <p className='page5csscardtitle'>AI-Infused Strategic Content Creation</p>
        <p className='page5csscardtitle11'>
        Expertly crafted content strategies fuellend by AI that align with your brand's objectives.
        </p>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)' }} className='page5csscardtitle01' >
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <p className='page5csscardtitle001'>Visually Appealing Grids & AI-Driven Creatives</p>
        <p className='page5csscardtitle0001'>
        Captivating Ai curated visuals for unforgettable brand experiences on Social Media Platforms.
        </p>
        
      </Card.Body>
    </Card>


    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)',marginTop:'3rem' }} className='page5csscardtitle0'>
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <p className='page5csscardtitle'>Enthralling Brand Stories & Compaigns</p>
        <p className='page5csscardtitle0001'>
        Crafting alluring brand stories & campaigns that ignite emotional connections & drive engagement
        </p>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)',marginTop:'3rem' }} className='page5csscardtitle01'>
      <Card.Img variant="top" src={card5} />
      <Card.Body>
        <p className='page5csscardtitle'>Tailored Solutions for Your Business</p>
        <p className='page5csscardtitle0001'>
        Tailored Solutions for industry-specific challenges, propelling your growth beyond industry benchmarks.
        </p>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem',height:'30rem',backgroundColor:'rgb(240, 237, 237)',marginTop:'3rem' }} className='page5csscardtitle01'>
      <Card.Img variant="top" src={card6} />
      <Card.Body>
        <p className='page5csscardtitle'>Personal Attention</p>
        <p className='page5csscardtitle0001'>
        Our team goes the extra mile, shooting content directly at your location, eliminating the hassle for you.
        </p>
        
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}

export default Page5