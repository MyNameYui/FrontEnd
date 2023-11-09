import Image from "next/image";
import testimage from "../../src/assets/testimage2.jpeg";
import { Noto_Sans_Thai } from "next/font/google";
const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const Card = () => {
  return (
    <div
      className="first-letter:max-w-sm rounded max-w-sm overflow-hidden shadow-lg"
      style={{
        flexShrink: 0,
        borderRadius: "16px",
        background: "#E45E07",
      }}
    >
      <Image className="w-full" src={testimage} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div
          className={`font-bold text-2xl mb-2 ${notosansthaifont.className}`}
        >
          การ Copy Code ใส่ ESP 8266 ไปหลอกขายคนอื่นแล้วบอกว่าทําขึ้นเอง
        </div>
        <p
          className={`line-clamp-6 text-white text-base ${notosansthaifont.className}`}
        >
          ก่อนอื่นเราต้องเข้าใจหลักการทํางานของไฮโซปิงก่อนไฮโซปิง
          เป็นเด็กน่ารักมากเป็นเด็กที่ทําข้าวผัดกลางถนนแล้วก็ต้มมาม่าในส้วม
          พร้อมกินข้าวอร่อยๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ
        </p>
      </div>
    </div>
  );
};

export default Card;
