"use client";
import Image from "next/image";
import "../globals.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useAccount, useSwitchNetwork, useNetwork } from "wagmi";
import Footer from "../components/footer";
import Logo from "../../public/logo.png";
import arrow from "../../public/arrow.png"
export default function Staking() {
  const { isConnected } = useAccount();

  const [stakeAmount, setStakeAmount] = useState("");

  const handleStake = () => {
    console.log("Stake Amount:", stakeAmount);
    // You can add additional logic here, e.g., send the stake amount to a contract
  };

  {
    /* <input
              className="p-2 rounded-lg"
              placeholder="Enter Stake Amount"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            /> 
          
           <button
            onClick={handleStake}
            className="p-2 bg-white px-5 rounded-full font-semibold border-2 border-yellow-400 hover:scale-110 transition-transform ">
              {" "}
              STAKE{" "}
            </button>
          
          */
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <div className="shadow-xl flex-col flex items-center bg-black border-4 border-yellow-400 lg:w-[90rem] lg:h-[35rem] w-80 h-[40rem] lg:mt-10   mt-2 mb-2 rounded-2xl">
        {isConnected ? (
          <div>

          <div className="flex lg:flex-row flex-col gap-4 lg:gap-x-32  bg-black rounded-xl shadow-2xl lg:p-4">

            <div className="token1container flex flex-col gap-5">
            <div className="lg:px-4 logo flex h-20 items-center ">
              <Image className="w-16 h-16 " src={Logo} />
              <h1 className="text-white font-Orbitron lg:text-lg text-xl "> $BOB </h1>
              <h2 className="text-white font-Orbitron lg:text-lg text-sm ml-6"> Balance: </h2>
              <h2 className="text-white font-mono lg:text-lg text-sm mt-1 lg:mt-0  ml-1"> 0.876523  </h2>
            </div>
         

          <div className="bubble1  lg:ml-5 flex-col p-4 flex items-center justify-center bg-gray-800 lg:w-[30rem] lg:p-6 w-72 h-36 lg:h-36 rounded-3xl self-center">
          <input
              className="px-10 p-2 rounded-lg bg-gray-800 text-white font-semibold text-center"
              placeholder="Enter Stake Amount"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            /> 
              <div className="buttons mt-5 lg:mt-7 flex gap-2 ">
              <button className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "> 25% </button>
              <button className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "> 50% </button>
              <button className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "> 75% </button>
              <button className="hover:scale-110 transition-transform border-2 border-white bg-gradient-to-r from-[#E57C23] to-[#E8AA42] rounded-full p-1 px-2 text-white font-bold "> MAX </button>
              </div>
          </div>
            </div>

            <div className="mt-24 bubble1 lg:ml-5 flex-col p-4 flex items-start bg-gray-800 lg:w-[30rem] lg:p-6 w-72 h-36 lg:h-36 rounded-3xl self-center">
              <h1 className="text-white font-Orbitron text-lg"> You Will Recieve: </h1>
              <h1 className="text-white font-mono text-lg ml-2"> {stakeAmount} </h1>
              </div> 

            <button
            onClick={handleStake}
            className="lg:hidden mt-5 w-32 h-16 p-2 self-center bg-blend-luminosity bg-white px-5 rounded-full font-semibold border-4 border-yellow-400 hover:scale-110 transition-transform ">
              {" "}
              STAKE{" "}
            </button>

            
           </div>
           <button
            onClick={handleStake}
            className=" ml-[32rem] hidden lg:flex justify-center items-center mt-10 w-32 h-16 p-2 self-center bg-blend-luminosity bg-white px-5 rounded-full font-semibold border-4 border-yellow-400 hover:scale-110 transition-transform ">
              {" "}
              STAKE{" "}
            </button>
</div>
         

        ) : (
          <h1 className="text-white lg:text-2xl font-semibold">
            {" "}
            Please Connect your wallet{" "}
          </h1>
        )}
      </div>
    </div>
  );
}
