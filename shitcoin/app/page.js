
import Navbar from "./components/navbar"
import About from "./components/about"
import Features from "./components/features"
import Tokenomics from "./components/tokenomics"
import {How}  from "./components/how"
import Roadmap from "./components/roadmap"
import Footer from "./components/footer"

export default function Home() {
  return (
      <div className="overflow-x-hidden bg-[#025464]">
        <Navbar></Navbar>
        <About></About>
        <Features></Features>
        <Tokenomics></Tokenomics>
        <How></How>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </div>
  )
}
