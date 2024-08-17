'use client';
import LandingPageHeader from "@/components/LandingPageHeader";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import HowItWorks from "@/components/LandingPageSections/Intro";
import Intro from "@/components/LandingPageSections/Intro";
import { useState } from "react";
import Partnership from "@/components/LandingPageSections/Parternship";
import CalltoAction from "@/components/LandingPageSections/CalltoAction";
import LoggedInPageHeader from "@/components/LoggedInPageHeader";
import Everything from "@/components/LoggedInPageSection/Everything"

export default function Home() {

  const[loggedIn,setLoggedInStatus] = useState('false');

  const handleLoggedIn = ()=>{
    setLoggedInStatus(!loggedIn);
  }


  return (
    <>
    {loggedIn? <div>
        <LoggedInPageHeader/>
        <Everything/>
    </div> :
        
    <div>
      <LandingPageHeader handleLoggedIn = {handleLoggedIn}/>
      <HeroSection/>
      <HowItWorks/>
      <Partnership/>
      <CalltoAction/>
      
      </div>}
    
    
    </>
    
    
  );
}
