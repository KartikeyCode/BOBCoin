import wallet from "../../public/wallet.webp"
import bn from "../../public/whitebnb.png"
import pan from "../../public/pancake.png"
import swap from "../../public/swap.png"

import Image from "next/image"

export function How(){
    return(
        <div id="How" className="mx-8 my-16 xl:my-60 md:mx-28 md:my-32 ">

<h1 className="font-bold text-white font-Orbitron md:text-5xl xl:text-7xl">HOW TO BUY</h1>

            <div className="xl:-ml-12 xl:justify-around flex flex-col lg:flex-row xl:mt-28">

            <a target="_blank" href="https://metamask.io/" class="xl:mt-0 mt-5 lg:w-80 group relative block h-64 sm:h-80 lg:h-96">
  <span class="rounded-xl absolute inset-0 border-2 border-dashed border-[#E57C23]"></span>

  <div
    class="rounded-xl relative flex h-full transform items-end border-2 border-[#E8AA42] bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <Image className="w-40 xl:mb-10" src={wallet}></Image>

      <h2 class=" mt-4 text-xl font-medium sm:text-2xl">Create Wallet</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 duration-300 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Create Wallet</h3>

      <p class="mt-4 text-sm sm:text-base">
      Download metamask or your wallet of choice from the app store or google play store for free. Desktop users download the google chrome extension by going to metamask.io.
      </p>

      <p class="mt-8 font-bold">Create Now</p>
    </div>
  </div>
</a>

<a target="_blank" href="https://www.binance.com/en/bnb" class="xl:mt-0 mt-5 lg:w-80 group relative block h-64 sm:h-80 lg:h-96">
  <span class="rounded-xl absolute inset-0 border-2 border-dashed border-[#E57C23]"></span>

  <div
    class="rounded-xl relative flex h-full transform items-end border-2 border-[#E8AA42] bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <Image className="w-40 xl:mb-10" src={bn}></Image>

      <h2 class=" mt-4 text-xl font-medium sm:text-2xl">Get Some BNB</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 duration-300 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Get Some BNB</h3>

      <p class="mt-4 text-sm sm:text-base">
      Have BNB in your wallet to switch to $BOB. If you don't have any BNB,you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
      </p>

      <p class="mt-8 font-bold">Get Some Now</p>
    </div>
  </div>
</a>

<a target="_blank" href="https://pancakeswap.finance/" class="xl:mt-0 mt-5 lg:w-80 group relative block h-64 sm:h-80 lg:h-96">
  <span class="rounded-xl absolute inset-0 border-2 border-dashed border-[#E57C23]"></span>

  <div
    class="rounded-xl relative flex h-full transform items-end border-2 border-[#E8AA42] bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <Image className="w-40 xl:mb-10" src={pan}></Image>

      <h2 class=" mt-4 text-xl font-medium sm:text-2xl">Go to PancakeSwap</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 duration-300 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go to PancakeSwap</h3>

      <p class="mt-4 text-sm sm:text-base">
      connect to PancakeSwap. Go to pancakewap.finance, connect your wallet. Paste the $BOB token address into PancakeSwap,select BOB,and confirm When Metamask prompts you for a wallet signature,sign.
      </p>

      <p class="mt-8 font-bold">Go Now</p>
    </div>
  </div>
</a>

<a target="_blank" href="https://pancakeswap.finance/" class="xl:mt-0 mt-5 lg:w-80 group relative block h-64 sm:h-80 lg:h-96">
  <span class="rounded-xl absolute inset-0 border-2 border-dashed border-[#E57C23]"></span>

  <div
    class="rounded-xl relative flex h-full transform items-end border-2 border-[#E8AA42] bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <Image className="w-80 xl:mb-10" src={swap}></Image>

      <h2 class=" mt-4 text-xl font-medium sm:text-2xl">Swap BNB for BOB</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 duration-300 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Swap BNB for BOB</h3>

      <p class="mt-4 text-sm sm:text-base">
      switch BNB for $BOB. We have ZERO taxes so you don't need to warry about buying with a specigi slippage,although you may need to use slippage during times of market volatity.
      </p>

      <p class="mt-8 font-bold">Go Now</p>
    </div>
  </div>
</a>


            </div>
        </div>
    )
}