import ScoreComponent from "./ScoreComponent";
import { Noto_Sans_Thai } from "next/font/google";
const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LabTitle = () => {
  return (
    <div className="px-4 sm:px-32">
      {/* Main title */}
      <div className="line-clamp-2 text-center text-white text-4xl lg:text-8xl font-bold font-inter">
        Lab Hacking
      </div>

      {/* Title and Score Component container */}
      <div className="text-center flex flex-col sm:flex-row justify-center items-center pt-4 pl-4">
        <div>
          <div className="justify-center">
            {/* Center the subtitle and category */}
            {/* Subtitle and Category */}
            <div className="text-white text-3xl font-bold font-inter mb-2 sm:mb-0">
              <div className="pb-4">
                <div className="">
                  {/* Centered title */}
                  <div className="text-center">
                    <p className="line-clamp-2 text-2xl lg:text-6xl">
                      DeekitZa
                    </p>
                  </div>
                </div>
              </div>
              {/* Category information */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex flex-col lg:flex-row justify-content-end">
                  <span className="text-white lg:text-3xl font-bold lg:ml-72">
                    Category :{" "}
                  </span>
                  <span className="text-white text-3xl font-medium">
                    Web Application
                  </span>
                </div>
                <div className="mb-8">
                  <p className="font-semibold mb-2">ให้คะแนน</p>
                  <div className="w-72 h-12 bg-zinc-300 rounded-lg justify-content-start" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTitle;
