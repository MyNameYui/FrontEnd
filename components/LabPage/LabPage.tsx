import React from "react";
import { Noto_Sans_Thai } from "next/font/google";
import LabAnswerComponent from ".././LabPage/LabAnswerComponent";
import LabDesc from ".././LabPage/LabDesc";
import NavbarBackground2 from "../Navbar/NavbarBackground2";
import Nav from "../Navbar/Nav";
import LabChallenge from "./LabChallenge";
import LabTitle from "./LabTitle";
import LabFooter from "./LabFooter";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LabPage = () => {
  return (
    <div>
      <div className="pb-20">
        <NavbarBackground2>
          <Nav />
          <LabTitle />
        </NavbarBackground2>
      </div>
      <div className="w-full max-w-screen-xl justify-center mx-auto">
        <div
          className={`flex items-center justify-center ${notosansthaifont.className}`}
        >
          <div className="w-full max-w-screen-xl bg-[#230F02] rounded-bl-xl rounded-br-xl p-8 sm:p-4 md:p-4 lg:p-4 xl:p-4">
            <div className="pt-20 sm:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
              <LabChallenge />
              <LabDesc />
              <LabAnswerComponent />
            </div>
            <LabFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabPage;
