
import Image from "next/image"
import team1 from "../../public/team1.png"
import team2 from "../../public/team2.png"
import team3 from "../../public/team3.png"
import team4 from "../../public/team4.png"
import team5 from "../../public/team5.png"

export default function Team(){
    return(
            <div className="mx-8 my-16 xl:my-60 md:mx-28 md:my-32">
        <h1 className="font-bold text-white font-Orbitron md:text-5xl xl:text-7xl">TEAM</h1>
            <div className="xl:my-8 xl:flex justify-around gap-1 text-center ">
            
            <div className="xl:flex-col flex xl:justify-evenly justify-center  items-center mr-2 xl:h-[350px] xl:w-80 w-72 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
                <Image className="rounded-xl xl:w-80 w-48 " src={team1}></Image>
                <h2 className="text-white font-Orbitron xl:text-xl text-lg"> Jamey Boone </h2>
            </div>

            <div className="xl:flex-col flex xl:justify-evenly justify-center  items-center mr-2 xl:h-[350px] xl:w-80 w-72 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
                <Image className="rounded-xl xl:w-80 w-48 " src={team2}></Image>
                <h2 className="text-white font-Orbitron xl:text-xl text-lg"> Daniel Turner </h2>
            </div>

            <div className="xl:flex-col flex xl:justify-evenly justify-center  items-center mr-2 xl:h-[350px] xl:w-80 w-72 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
                <Image className="rounded-xl xl:w-80 w-48 " src={team3}></Image>
                <h2 className="text-white font-Orbitron xl:text-xl text-lg"> Liam Morgan </h2>
            </div>

            <div className="xl:flex-col flex xl:justify-evenly justify-center  items-center mr-2 xl:h-[350px] xl:w-80 w-72 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
                <Image className="rounded-xl xl:w-80 w-48 " src={team4}></Image>
                <h2 className="text-white font-Orbitron xl:text-xl text-lg"> Andres Morales </h2>
            </div>

            <div className="xl:flex-col flex xl:justify-evenly justify-center  items-center mr-2 xl:h-[350px] xl:w-80 w-72 my-4 rounded-2xl bg-gradient-to-r from-[#fb7405] via-[#DBA514] to-[#ffa617] p-1 shadow-xl">
                <Image className="rounded-xl xl:w-80 w-48 " src={team5}></Image>
                <h2 className="text-white font-Orbitron xl:text-xl text-lg"> Max Sterling </h2>
            </div>

        </div>
        </div>
    )
}