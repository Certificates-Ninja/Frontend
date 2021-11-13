import Head from "next/head";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import { HowToUse } from "../components/HowToUse";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import SetupForm from "../components/SetupForm";
import ImportSelect from "../components/ImportSelect";

export default function Import() {
  return (
    <div className="flex-column bg-gradient-to-r from-yellow-200 via-emerald-200 to-yellow-200">
      <Navbar2 />
      <ImportSelect />
      <Footer />
    </div>
  );
}
