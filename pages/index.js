import Head from "next/head";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import { HowToUse } from "../components/HowToUse";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex-column bg-gradient-to-r from-yellow-200 via-emerald-200 to-yellow-200">
      <Navbar />
      <Hero />
      <Features />
      <div id="howtouse">
        <HowToUse />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </div>
  );
}
