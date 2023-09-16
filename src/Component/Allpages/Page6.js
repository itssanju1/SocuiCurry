import React from 'react'
import '../Allcss/Page6.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Page6 = () => {
  return (
    <>
    <div className='page6css'>
        <div>
        <h3 className='page6cssh3'>Take your Brand to new heights with </h3>
        <h3 className='page6cssh1'>customised </h3>
        <h3 className='page6cssh12'>Social Media Packages</h3>

        </div>
        <div>
        <p className='page6cssp1'>Starting with Rs 32,000/-
        
        25,000/-</p>
        </div>

        <button className='buttononpage6'>Get aQuote <ArrowForwardIcon style={{width:'2rem',height:"2rem"}} className='arowonpage6'/></button>
       
       
       <p className='page6pcss'> Offer valid for next 3 days only. Hurry up!</p>
   
    </div>
    
    </>
  )
}

export default Page6