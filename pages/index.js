import React from 'react';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/Footer";
import signin from "pages/login";
import Link from 'next/link';

//import HeroSection from "./components/HeroSection";
import Record from "./components/record";
import Care from "./components/content";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      {/* <div className="relative">
        <HeroSection />
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar className="sticky top-0" />
        </div>
      </div> */}
      
      {/* <Record/> */}
      {/* <Care /> */}
      <Header />
      <Content />
      <Footer />
      <signin />
    </div>
  );
}


