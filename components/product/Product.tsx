import ProductContent from "./ProductContent";

export default function Product() {
  return (
    <>
      <div className="text-center pt-24 lg:pt-36">
        <div>
          <h1 className="text-3xl lg:text-7xl font-semibold">
            การใช้ ESP 8266 ตัดไวไฟห้าง
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center pt-24 gap-4">
          <div className="flex flex-col">
            <img
              className="w-[500px] h-[400px] rounded-lg"
              src="https://cdn-reichelt.de/bilder/web/artikel_ws/A300/DEBO_JT_ESP8266_01.jpg"
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* เปลี่ยน flex-row เป็น flex-col สำหรับโทรศัพท์ */}
            <div className="bg-white lg:ml-40 py-8 px-12 rounded-lg text-start">
              <div>
                <p className="text-black text-3xl font-bold">Author: T0n</p>
                <p className="text-black text-3xl font-bold">Date: 12/12/200</p>
                <p className="text-black text-3xl font-bold">
                  Category: Gadget
                </p>
              </div>
              <div className="pt-12">
                <h1 className="text-black text-2xl">บทความเพิ่มเติม</h1>
                <div className="flex flex-col gap-4">
                  <div className="w-72 lg:w-96 h-14 bg-orange-500 rounded-lg" />
                  <div className="w-72 lg:w-96 h-14 bg-orange-500 rounded-lg" />
                  <div className="w-72 lg:w-96 h-14 bg-orange-500 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-40 text-center container mx-auto">
        <ProductContent />
      </div> */}
    </>
  );
}
