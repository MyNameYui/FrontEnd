import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";
import OurBlog from "./OurBlog";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const LandingOurBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48">
      <p className="font-semibold font-inter text-2xl lg:text-6xl">
        Latest From Our Blog
      </p>
      <Link href="/">
        <p
          className="pb-16 text-4xl font-light font-inter underline px-4 py-2 inline-block"
          style={{ color: "#E45E07" }}
        >
          Read More
        </p>
      </Link>

      <div className="pb-64 ">
        <div className="mx-auto">
          <div className="grid grid-col-3 grid-flow-row lg:grid-cols-3  gap-4">
            <OurBlog />
            <OurBlog />
            <OurBlog />

            {/* <div>
              <OurBlog />
            </div>
            <div>
              <OurBlog />
            </div>
            <div>
              <OurBlog />
            </div> */}
            {/* <OurBlog />
          <OurBlog /> */}
          </div>
        </div>
      </div>
      <hr
        style={{ width: "100%", borderTop: "1px solid" }}
        className="text-gray-400 py-8"
      />
      <div>
        <p
          className={`text-center font-semibold font-inter text-4xl ${notosansthaifont.className}`}
        >
          มีข้อสงสัย? หรือติดต่อสอบถามข้อมูลเพิ่มเติม
        </p>
        <div className="flex justify-center py-16">
          <button
            className={`${notosansthaifont.className} transition hover:scale-110 w-56 h-14 rounded-lg shadow text-white text-4xl font-normal bg-[#E45E07]`}
          >
            ติดต่อเรา
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingOurBlog;
