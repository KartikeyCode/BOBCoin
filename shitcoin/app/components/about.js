import Image from "next/image"
import "../globals.css"

export default function About(){
    return(
        <div className="xl:mt-4 mx-8 my-8 md:mx-28 md:my-32 ">
            <div className="relative z-10">
        <h1 className=" font-bold font-Orbitron md:text-5xl xl:text-7xl text-white">ABOUT</h1>
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white">$BOB is a groundbreaking token built on the Binance Smart Chain (BSC) that aims to bridge the gap between two of the most influential cryptocurrencies - Bitcoin (BTC) and Binance Coin (BNB). As the first of its kind, $BOB embodies the robustness of Bitcoin and the flexibility of BNB, offering a unique investment opportunity in the crypto space.</h2>
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white">With a total supply of 1.5 billion tokens, $BOB employs a strategic transaction tax structure to foster a healthy and sustainable ecosystem. A 7% tax is applied to all sell transactions, which increases to 20-30% for transactions occurring within the first 30 minutes of purchase. This is designed to discourage rapid trading and promote long-term holding. </h2>    
        <h2 className="xl:text-3xl md:text-xl font-Roboto my-8 md:my-12 text-white"> Join us on this exciting journey as we venture into a new era of cryptocurrency, where Bitcoin and BNB are no longer worlds apart, but part of a unified and prosperous ecosystem. Welcome to the future. Welcome to $BOB. </h2>
            </div>
        </div>
    )
}