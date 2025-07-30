"use client"

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="page">
      <Navbar/>
      <Banner/>
      <Experience/>
      <Project/>
    </div>
  );
}
