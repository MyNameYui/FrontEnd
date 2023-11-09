// Responsive Fix !!!!!!!!!!!

import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LastBlogCard = () => {
  return (
    <div className="justify-center items-center flex py-6 scale-90 md:scale-90">
      <Link href="">
        <div
          className="rounded w-96 lg:w-[1280px] shadow-lg"
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            flexShrink: 0,
            borderRadius: "16px",
            background: "#E45E07",
          }}
        >
          <div className="px-8 overflow-hidden">
            <p
              className={`break-all font-bold text-2xl lg:text-5xl mb-2 ${notosansthaifont.className}`}
            >
              รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่รักลุงตู่
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LastBlogCard;
