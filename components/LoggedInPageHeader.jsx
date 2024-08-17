import React from "react";
import Image from "next/image";
import Link from "next/link";


const LoggedInPageHeader = () => {

  return (
    <div className="flex flex-row justify-between items-center w-full bg-[#C0360B] h-16 px-6 shadow-md">
      <div className="text-white">
       <Link href = {"/"}> 
       <h1 className="text-2xl font-extrabold">FoodPal</h1>

       </Link>
        
        
      </div>

      <div>
        <ul className="flex flex-row space-x-10 text-white">
          <Link href={"/donate_and_sell"}>
          <li>Donate and Sell</li>
          </Link>
          <Link href={"/contributions"}>
          <li>Community</li>
          </Link>
          <Link href= {"/projects"}>
          <li>Projects</li>
          </Link>
          <Link href = {"/exchange"}>
          <li>Exchange</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-row space-x-4 items-center">
        <button className="p-2 bg-red-600 rounded-lg shadow-lg font-semibold text-white hover:bg-red-700 transition-transform transform hover:scale-105 duration-200">
          Connect Wallet
        </button>
        <div>
          <Image src="/userprofile.png" alt="userprofile" width={40} height={40} className="rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
};

export default LoggedInPageHeader;




