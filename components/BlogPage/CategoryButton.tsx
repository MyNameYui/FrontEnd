import Link from "next/link";

const CategoryButton = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-28 sm:w-32 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            All
          </div>
        </Link>
      </div>
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-64 sm:w-72 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            Web Application
          </div>
        </Link>
      </div>
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-36 sm:w-40 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            Network
          </div>
        </Link>
      </div>
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-48 sm:w-56 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            Tip & Tricks
          </div>
        </Link>
      </div>
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-36 sm:w-40 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            Write Up
          </div>
        </Link>
      </div>
      <div className="px-3 py-2">
        <Link href="#">
          <div className="w-28 sm:w-32 h-12 bg-white rounded-lg text-black flex justify-center items-center content-center text-2xl transition-transform transform hover:scale-110 text-center">
            News
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryButton;
