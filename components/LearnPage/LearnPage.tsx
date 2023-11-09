import React from "react";
import { Noto_Sans_Thai } from "next/font/google";
import AnswerComponent from "./AnswerComponent";
import LearnFooter from "./LearnFooter";
import QuestionComponent from "./QuestionComponent";
import LearnHeaderComponents from "./LearnHeaderComponents";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import { Axios } from "../../lib/fetcher";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const Header = () => {
  return (
    <div>
      <div className="w-full max-w-screen-xl justify-center mx-auto">
        <LearnHeaderComponents />
      </div>
      <div
        className={`flex items-center justify-center ${notosansthaifont.className}`}
      >
        <div className="w-full max-w-screen-xl bg-[#230F02] rounded-bl-xl rounded-br-xl p-8 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <div className="pt-20 sm:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
            <QuestionComponent />
            <AnswerComponent />
            <AnswerComponent />
            <AnswerComponent />
          </div>
          <LearnFooter />
        </div>
      </div>
    </div>
  );
};

export default Header;
