"use client";
import "../globals.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useAccount, useSwitchNetwork, useNetwork } from "wagmi";
import Footer from "../components/footer";

export default function Staking() {
  const { isConnected } = useAccount();

  const [stakeAmount, setStakeAmount] = useState("");

  const handleStake = () => {
    console.log("Stake Amount:", stakeAmount);
    // You can add additional logic here, e.g., send the stake amount to a contract
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <div className="shadow-xl flex justify-center items-center bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] border-4 border-yellow-400 lg:w-[90rem] lg:h-[35rem] w-80 h-[40rem] mt-12 rounded-2xl">
        {isConnected ? (
          <div className="flex gap-5">
            <input
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
