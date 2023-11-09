import React from "react";
import Nav from "../../../components/Navbar/Nav";
import { Noto_Sans_Thai } from "next/font/google";
import NavbarBackground from "../../../components/Navbar/NavbarBackground";
import CyberSecText from "../../../components/CyberSecurityPage/CyberSecText";
import CyberSecCard from "../../../components/CyberSecurityPage/CyberSecCard";
const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const Page = () => {
  return (
    <>
      <NavbarBackground>
        <Nav />
      </NavbarBackground>
      <div className="pt-8">
        <CyberSecText />
      </div>

      <div className="container mx-auto pt-16 pb-32">
        <div className="scale-90 md:scale-100 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
          <CyberSecCard />
          <CyberSecCard />
          <CyberSecCard />
        </div>
      </div>
    </>
  );
};

export default Page;
