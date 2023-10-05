export default function Tokenomics() {
  return (
    <div className="mx-16 my-16 xl:my-60 md:mx-28 md:my-32">
      <h1 className="font-bold text-white font-Orbitron md:text-5xl xl:text-7xl">
        TOKENOMICS
      </h1>
      <h1 className="mt-4 xl:mt-8 font-bold text-white font-Orbitron md:text-5xl xl:text-5xl">
        Total Supply: 1,000,000,000
      </h1>
      <div className="xl:my-8 xl:flex justify-around text-center ">
        <div
          id="Tokenomics"
          className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl"
        >
          <div className="block rounded-xl xl:w-72 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
                TAX
              </h3>

              <p className="md:text-lg mt-2 text-sm xl:text-2xl text-gray-500">
                9/9
              </p>
            </div>
          </div>
        </div>
        <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block rounded-xl xl:w-72 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
                MARKETING
              </h3>

              <p className="text-center md:text-lg mt-2 xl:text-2xl text-gray-500">
                4%
              </p>
            </div>
          </div>
        </div>
        <div className=" my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block rounded-xl xl:w-72 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="xl:-ml-1 md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
                BUYBACKS
              </h3>

              <p className=" md:text-lg mt-2 text-sm xl:text-2xl text-gray-500 ">
                2%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:my-8 xl:flex justify-evenly text-center ">
        <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block rounded-xl xl:w-72 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
                LIQUIDITY POOL
              </h3>

              <p className="text-center md:text-lg mt-2 xl:text-2xl text-gray-500">
                1%
              </p>
            </div>
          </div>
        </div>
        <div className="mr-2 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
          <div className="block rounded-xl xl:w-72 bg-[#F8F1F1] p-4 sm:p-6 lg:p-8">
            <div className="py-4">
              <h3 className="md:text-2xl font-bold text-black xl:text-3xl sm:text-xl">
                BUSD REWARDS
              </h3>

              <p className="text-center md:text-lg mt-2 xl:text-2xl text-gray-500">
                2%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
