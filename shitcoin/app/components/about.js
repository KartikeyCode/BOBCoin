"use client"
import Image from "next/image"
import "../globals.css"
import "./about.css"
import { useState } from "react";
import Link from "next/link";
export default function About(){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className="xl:mt-4 mx-8 my-8 md:mx-28 md:my-32 py-10  ">
            <div className="relative z-10 mt-20">
                <div className="flex  items-center justify-between">
        <h1 className=" font-bold font-Orbitron md:text-5xl xl:text-7xl text-white">ABOUT</h1>
        <Link href="/ComingSoon">
            <button
              className={`font-semibold rounded-xl border-[#E57C23] hover:shadow-2xl hover:border-2 transition-transform font-Orbitron bg-black text-[#E57C23] p-4 ${
                isHovered ? "button-scale-animation-not-hovered" : "button-scale-animation"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Coming Soon!!!
            </button>
          </Link>
                </div>
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white">$BOB is a groundbreaking token built on the Binance Smart Chain (BSC) that aims to bridge the gap between two of the most influential cryptocurrencies - Bitcoin (BTC) and Binance Coin (BNB). As the first of its kind, $BOB embodies the robustness of Bitcoin and the flexibility of BNB, offering a unique investment opportunity in the crypto space.</h2>
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white">With a total supply of 1 billion tokens, $BOB employs a strategic transaction tax structure to foster a healthy and sustainable ecosystem. A 9% tax is applied to all sell transactions, which increases to 20-30% for transactions occurring within the first 30 minutes of purchase. This is designed to discourage rapid trading and promote long-term holding. </h2>    
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white"> Join us on this exciting journey as we venture into a new era of cryptocurrency, where Bitcoin and BNB are no longer worlds apart, but part of a unified and prosperous ecosystem. Welcome to the future. Welcome to $BOB. </h2>

            </div>
            <div className=" flex justify-center gap-8 md:gap-20  ">
                <Link href="https://pancakeswap.finance/swap?outputCurrency=0xE89715D87C33221bc76b4F3162Cc4a1CB0da0E19" target="_blank" >
                <button  id="Buy" className="bg-[#fb7405] hover:scale-125 transition-transform text-white text-2xl lg:text-4xl font-Orbitron p-3 rounded-xl border-4 border-white ">Buy Tokens</button>
                </Link>

                <Link href="https://poocoin.app/tokens/0xe89715d87c33221bc76b4f3162cc4a1cb0da0e19" target="_blank" >
                <button  id="Buy" className="bg-[#fb7405] hover:scale-125 transition-transform text-white text-2xl lg:text-4xl font-Orbitron p-3 rounded-xl border-4 border-white ">See Chart</button>
                </Link>

                <Link href="https://t.me/BTCONBNB_BOB" target="_blank" >
                <button  id="Buy" className="bg-[#fb7405] hover:scale-125 transition-transform text-white text-2xl lg:text-4xl font-Orbitron p-3 rounded-xl border-4 border-white ">Join Community</button>
                </Link>
            </div>
        </div>
    )
}