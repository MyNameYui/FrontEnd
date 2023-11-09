import React from "react";
import Image from "next/image";
import db from "../../src/assets/db.png";
import docs from "../../src/assets/docs.png";
import cert from "../../src/assets/cert.png";

const LandingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 justify-center">
      <div className=" bg-orange-600 rounded-lg">
        <div className="flex flex-col items-center">
          <Image src={db} alt="db" width={250} height={250} />
          <div className="font-bold text-3xl mt-4">มีแล็ปให้ลงมือทำจริง</div>
          <div className="font-normal text-2xl mt-4 mb-6">
            คัดสรรจากประสบการณ์จริง
          </div>
        </div>
      </div>

      <div className=" bg-orange-600 rounded-lg  max-w-md flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src={docs} alt="db" width={250} height={250} />
          <div className="font-bold text-3xl mt-4">เนื้อหาเข้าใจง่าย</div>
          <div className="font-normal text-2xl mt-4 mb-6">English / ไทย</div>
        </div>
      </div>

      <div className=" bg-orange-600 rounded-lg  max-w-md flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src={cert} alt="db" width={250} height={250} />
          <div className="font-bold text-3xl mt-4">เรียนจบรับเกียรติบัตร</div>
          <div className="font-normal text-xl lg:text-2xl mt-4 mb-6">
            เกียรติบัตรที่แสดงว่าคุณพิชิตเราแล้ว
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
