"use client"
import "../globals.css"
import { useEffect } from "react"
import Navbar from "../components/navbar"
import { useAccount,useSwitchNetwork,useNetwork } from "wagmi"
import Footer from "../components/footer"

export default function Staking(){

    const {address,connector,isConnected} = useAccount()
    const network = useSwitchNetwork({
        chainId: 69,
      })
    return(
       <div className="flex flex-col justify-center items-center">
        <Navbar></Navbar>
        <div className="shadow-xl flex justify-center items-center bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] border-4 border-yellow-400 lg:w-[90rem] lg:h-[35rem] w-80 h-[40rem] mt-12 rounded-2xl">
            { isConnected ? <h1 className="text-white lg:text-2xl font-semibold"> Welcome </h1> : <h1 className="text-white lg:text-2xl font-semibold"> Please Connect your wallet </h1> }
        </div>
       </div>
    )
}