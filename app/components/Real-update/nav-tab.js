import React from 'react'
import './nav-tabs.css'
import Image from 'next/image';
import { useState } from 'react';
const Navs = () => {
  const [activeTab, setActiveTab] = useState(1); // Set the initial active tab

  const handleNavLinkClick = (id) => {
   
    setActiveTab(id); 
    console.log(id,"hello g")// Update the active tab when a link is clicked
  };

  return (
    <>
    <div className='container mt-5'>
      <div className='navhead text-center mt-5 mb-5' style={{fontSize:"30px"}}>
        <h1>Our Products</h1>
      </div>
      <div className='naav mt-5 text-center'>
        <ul  className='mb-0'>
            <li style={{borderBottom:activeTab==1?"1px solid blue":"none",paddingBottom:"10px",cursor:"pointer"}} className='h-100' onClick={()=> handleNavLinkClick(1)}>Medical Devices Regulations (MDR)</li>
            <li style={{borderBottom:activeTab==2?"1px solid blue":"none",paddingBottom:"10px",cursor:"pointer"}} onClick={()=> handleNavLinkClick(2)}>Saftey</li>
            <li  style={{borderBottom:activeTab==3?"1px solid blue":"none",paddingBottom:"10px",cursor:"pointer"}} onClick={()=> handleNavLinkClick(3)}>Environment 
            </li>
        </ul>
      </div>


{activeTab == 3&&<div id="3" className="tab-content tab">
  <div className="row">
    <div className="col-lg-6">
      <div className=" tittle ">
        <p style={{fontSize:"35px",fontWeight:'bold'}} className='px-3' >Get more customer insight</p>
        <p  className='px-3' style={{fontSize:"20px"}}>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="align-item-center mt-5 mb-5">
      <Image
      className=''
        src="/11.jpg"
        alt="Alternative text for the image"
        width={500}
        height={334}
        
      />
      </div>
    </div>
  </div>
</div>}

{activeTab==1&&<div id="1" className="tab-content tab">
  <div className="row">
    <div className="col-lg-6">
      <div className=" tittle ">
        <p style={{fontSize:"35px",fontWeight:'bold'}} className='px-3' >Rise conversation rate</p>
        <p  className='px-3' style={{fontSize:"20px"}}>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="align-item-center mt-5 mb-5">
      <Image
        src="/11.jpg"
        alt="Alternative text for the image"
        width={500}
        height={334}
      />
      </div>
    </div>
  </div>
</div>}


{activeTab==2&&<div id="2" className="tab-content tab">
  <div className="row">
    <div className="col-lg-6">
      <div className=" tittle ">
        <p style={{fontSize:"35px",fontWeight:'bold'}} className='px-3' >Save Labour costs</p>
        <p  className='px-3' style={{fontSize:"20px"}}>Lörem ipsum bolundare exor. Nerade vipysa, inte pose. Åpybangen ivase Facebookfest. Benir spehet diabel.</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="align-item-center mt-5 mb-5">
      <Image
        src="/11.jpg"
        alt="Alternative text for the image"
        width={500}
        height={334}
      />
      </div>
    </div>
  </div>
</div>} 



      </div>
      
    </>
  )
}

export default Navs

