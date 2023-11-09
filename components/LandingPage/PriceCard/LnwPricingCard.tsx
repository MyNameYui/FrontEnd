import { Noto_Sans_Thai } from "next/font/google";
import { SiGoogledocs } from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import { LiaBrainSolid } from "react-icons/lia";
import { PiCertificateLight } from "react-icons/pi";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LnwPricingCard = () => {
  return (
    <div className="bg-gradient-to-b from-orange-600 to-yellow-400 rounded-lg flex flex-col px-10 text-white font-inter font-light">
      <div className="text-5xl mb-8 text-center pt-8">
        <p className="font-bold">LNW</p>
      </div>
      <div className="pt-2 text-center pb-16">
        <span className="text-5xl font-bold">790฿ </span>
        <span className="text-3xl font-medium">/ MONTH</span>
      </div>
      <div className="flex justify-start">
        <div
          className={`${notosansthaifont.className} flex items-center gap-4`}
        >
          <div className="flex">
            <div>
              <div className="flex">
                <div className="">
                  <SiGoogledocs
                    style={{ width: 30, height: 30 }}
                    className="text-3xl font-bold"
                  />
                </div>
                <div className="pb-12">
                  <div className="ps-3">
                    <span className="text-3xl font-bold">
                      เนื้อหาเหมือน NOOB
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-light">
                      แต่คุณจะได้รับเนื้อหาที่มากขึ้น
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="">
                  <SlGraph
                    style={{ width: 30, height: 30 }}
                    className="text-3xl font-bold"
                  />
                </div>
                <div className="pb-12">
                  <div className="ps-3">
                    <span className="text-3xl font-bold">แลปแบบประยุกต์</span>
                  </div>
                  <div>
                    <span className="text-3xl font-light">
                      ใช้เทคนิคสําหรับการทะลุช่องโหว่
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="">
                  <LiaBrainSolid
                    style={{ width: 30, height: 30 }}
                    className="text-3xl font-bold"
                  />
                </div>
                <div className="pb-12">
                  <div className="ps-3">
                    <span className="text-3xl font-bold">
                      แลปจําลองจากช่องโหว่จริง
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-light">
                      แลปจะมีความซับซ้อนมากขึ้น
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="">
                  <PiCertificateLight
                    style={{ width: 30, height: 30 }}
                    className="text-3xl font-bold"
                  />
                </div>
                <div className="pb-12">
                  <div className="ps-3">
                    <span className="text-3xl font-bold">
                      รับเกียรติบัตรหลังเรียนจบ
                    </span>
                  </div>
                  <div>
                    <span className="ps-3 text-3xl font-light">
                      ที่แสดงว่าคุณจบหลักสูตรจากเราแล้ว
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="transition hover:scale-110 w-80 h-20 bg-white rounded-lg shadow text-orange-600 text-4xl font-medium mb-4">
                  เริ่มเลย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LnwPricingCard;
