import Image from "next/image"
import logo from "../../public/logo.png"
import bnb from "../../public/bnb.png"
import bitcoin from "../../public/bitcoin.png"

export default function Features(){
    return(
        <div id="Features" className="mx-8 my-16 xl:my-60 md:mx-28 md:my-32 ">
        <h1 className="font-bold text-white font-Orbitron md:text-5xl xl:text-7xl">FEATURES</h1>
            <div className="xl:my-8 xl:flex items-start">
        <div 
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl xl:h-80 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8" >
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
        Dual Blockchain Functionality
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      $BOB is an innovative token that runs on both the Bitcoin and Binance Smart Chain networks, allowing it to leverage the strengths and advantages of both platforms.
      </p>
    </div>
  </div>
</div>

<div 
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block xl:h-80 rounded-xl bg-[#F8F1F1] p-4 sm:p-6 lg:p-8" >
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
      Marketing Fund
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      3% of every transaction is allocated to marketing. This fund, received in BNB, allows for continuous promotion and visibility of $BOB in the crowded crypto market.
      </p>
    </div>
  </div>
</div>


<div 
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl xl:h-80 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8" >
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
      Community Driven
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      $BOB is a community-driven token. It empowers its holders and the community is actively involved in the decision-making process, making $BOB a truly decentralized token.      </p>
    </div>
  </div>
</div>

<div
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl xl:h-80 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
      Strong Liquidity
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      3% of every transaction is automatically added to the liquidity pool. This creates a steadily increasing price floor and ensures stability in the $BOB market.
      </p>
    </div>
  </div>
</div>
  </div>
<div className="xl:my-8 xl:flex ">
<div
  class="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
>
  <div class="block rounded-xl bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
    <div class="py-4">
      <h3 class="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
      Deflationary Mechanism
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      A sell transaction tax of 7% discourages selling and promotes holding, thereby making $BOB a deflationary token. 
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
      Limited Supply
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      With a total supply of 1.5 billion, $BOB offers a balance between scarcity and accessibility. The limited supply makes each $BOB more valuable and encourages early adoption. 
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
      Developer Support
      </h3>

      <p class="md:text-lg mt-2 text-sm text-gray-500">
      1% of every transaction is sent to the developer wallet. This provides necessary resources for continuous development and improvement of $BOB.
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