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

  const [loggedIn, setLoggedInStatus] = useState(false); // Use boolean instead of string
  const [walletAddress, setWalletAddress] = useState('');

  const handleLoggedIn = (walletAddress) => {
    setLoggedInStatus(true); // Set loggedIn to true when user logs in
    setWalletAddress(walletAddress);
  }

  const handleLogout = () =>{
    setLoggedInStatus(false);
  }

  return (
    <>
      {loggedIn ? (
        <div>
          <LoggedInPageHeader walletAddress={walletAddress} handleLogout = {handleLogout}/> {/* Pass walletAddress here */}
          <Everything />
        </div>
      ) : (
        <div>
          <LandingPageHeader handleLoggedIn={handleLoggedIn} walletAddress={walletAddress} loggedIn = {loggedIn}/>
          <HeroSection />
          <HowItWorks />
          <Partnership />
          <CalltoAction />
        </div>
      )}
    </>
  );
}
