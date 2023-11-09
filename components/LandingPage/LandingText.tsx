import React from "react";
import { Noto_Sans_Thai } from "next/font/google";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LandingText: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <div className={`${notosansthaifont.className}`}>
          <div className="">
            <div className="pb-3">
              <span className="text-2xl lg:text-4xl font-bold">
                ยินดีต้อนรับสู่การเรียนรู้ด้าน
              </span>
            </div>
            <div className="pb-4">
              <span className="text-orange-600 text-5xl md:text-6xl font-bold">
                Cyber Security
              </span>
            </div>
            <div className="pb-2">
              <span className="text-2xl lg:text-4xl font-bold">
                การเรียนรู้ที่ไม่มีขีดจํากัด
              </span>
            </div>
            <div className="pb-5">
              <span className="text-2xl lg:text-4xl font-bold">
                พร้อมทั้งลงมือทํา LAB
              </span>
            </div>
            <div>
              <span className="text-4xl lg:text-6xl font-bold">
                ที่เสมือน "
                <span
                  style={{ textDecoration: "underline" }}
                  className="text-orange-600 lg:text-6xl font-bold"
                >
                  แฮกจริง
                </span>
                "
              </span>
            </div>
          </div>
          <div className="">
            <div className="pt-8 flex flex-col lg:flex-row gap-4">
              <div>
                <button className="lg:text-3xl w-72 lg:w-56 h-14 bg-orange-600 rounded-lg">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>
              <div className="">
                <button className="lg:text-3xl w-72 lg:w-80 h-14 bg-black bg-opacity-0 rounded-lg transition duration-500 ease select-none hover:bg-orange-600 border-2 border-orange-600">
                  เริ่มเลย! ไม่มีค่าใช้จ่าย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
