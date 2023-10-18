import Navbar from "../components/navbar"
import "../globals.css"
import NFT from "../../public/logo.jpeg"
import Game from "../../public/game.jpeg" 
import Stake from "../../public/staking.png"
import Image from "next/image"

export default function ComingSoon(){
    return(
        <div className="flex flex-col bg-[#025464] min-h-screen ">
            <Navbar/>
            <div className="mt-32  p-4">
            <h1 className="font-Orbitron text-2xl lg:text-4xl text-white mb-10"> The following features are coming soon:  </h1>
            <div className=" flex flex-col">
            <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block xl:h-auto rounded-xl bg-black p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-mono mb-5 font-bold text-white xl:text-3xl sm:text-xl">
              Exclusive DeFi Game:
              </h3>

              <Image className=" rounded-xl " src={Game} />
                
            </div>
          </div>
        </div>

        <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block xl:h-auto rounded-xl bg-black p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-mono mb-5 font-bold text-white xl:text-3xl sm:text-xl">
              New NFT Collection:
              </h3>
            <div className="flex gap-28">
              <Image className=" rounded-xl w-96 opacity-20 -rotate-12 " src={NFT} />
              <Image className=" rounded-xl w-96 " src={NFT} />
              <Image className=" rounded-xl w-96 opacity-20 rotate-12" src={NFT} />
            </div>
                
            </div>
          </div>
        </div>

        <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block xl:h-auto rounded-xl bg-black p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-mono mb-5 font-bold text-white xl:text-3xl sm:text-xl">
              Staking:
              </h3>
            <div className="flex gap-28">
              <Image className=" rounded-xl  " src={Stake} />
            </div>
                
            </div>
          </div>
        </div>


            </div>
            </div>
        </div>
    )
}