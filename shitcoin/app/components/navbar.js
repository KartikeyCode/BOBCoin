"use client"
import Image from "next/image"
import menu from "../../public/menu.png"
import logo from "../../public/logo.png"
import { useState } from "react"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link'

export default function Navbar(){
    const [hide,setHide] = useState(true)
    return(
        <div className="relative z-10">
        <div className=" w-screen md:py-0 py-4 md:h-16 xl:h-24 bg-gradient-to-r from-[#E57C23] to-[#E8AA42] md:justify-between md:flex md:items-center">
            <div className="flex justify-between">
            <Image alt="" src={logo} className="ml-4 w-16 xl:ml-16 xl:w-32 xl:h-28"></Image>
            <a href="/" className="text-white -ml-48 xl:-ml-0 self-center font-Orbitron xl:text-6xl select-none">$BOB</a>
            <Image alt="" onClick={()=>setHide((current)=>!current)} className="self-center md:hidden mr-6 cursor-pointer" src={menu}></Image>    
            </div>
            
            <div className={`md:my-0 z-15 md:z-auto mr-20 md:px-0 md:py-0 px-4 py-2 md:block ${hide ? "hidden" : ""}`}>
                <div className="flex flex-col md:flex-row">
                <Link href="/staking" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> Staking </Link>
                <a href="#Features" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> Features </a>
                <a href="#Tokenomics" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> Tokenomics </a> 
                <a href="#Roadmap" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> Roadmap </a>
                <a href="#How" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> How To Buy </a>
                <a href="#Contact" className="text-white text-sm font-Orbitron mr-6 xl:text-lg"> Contact Us </a>
                <ConnectButton/>
                </div>
                </div>
        </div>
        </div>
    )
}