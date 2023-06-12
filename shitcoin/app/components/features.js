import Image from "next/image"
import logo from "../../public/logo.png"
import bnb from "../../public/bnb.png"
import bitcoin from "../../public/bitcoin.png"

export default function Features(){
    return(
        <div id="Features" className="mx-8 my-16 xl:my-60 md:mx-28 md:my-32 ">
        <h1 className="font-bold text-white font-Orbitron md:text-5xl xl:text-7xl">FEATURES</h1>
            <div className="xl:my-8 xl:flex justify-evenly  ">
        <div 
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl bg-[#F8F1F1] p-4 sm:p-6 lg:p-8" >
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
        Best Coin Periodt
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p>
    </div>
  </div>
</div>
<div
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
        Tumhari mummy lol
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p>
    </div>
  </div>
</div>
<div
  class=" my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl bg-[#F8F1F1] p-4 sm:p-6 lg:p-8" >
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
        Anal without lube
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p>
    </div>
  </div>
</div>

<div className="box z-0 opacity-50">
                <div className="">
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bnb}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bitcoin}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bnb}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bitcoin}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bnb}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={bitcoin}></Image>
                </div>
        </div>
            </div>
        </div>
    )
}