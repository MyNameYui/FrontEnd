import { AiFillQuestionCircle } from "react-icons/ai";

const AnswerComponent = () => {
  return (
    <>
      <div className="flex flex-col sm:justify-start md:justify-start lg:justify-start sm:flex-row sm:items-center p-4">
        <div className="flex items-center">
          {" "}
          {/* เพิ่มคลาส 'items-center' ใน div นี้ */}
          <div className="text-5xl pr-4 sm:pl-4">
            <AiFillQuestionCircle style={{ color: "#E45E07" }} />
          </div>
          <div className="text-5xl font-bold">คำถาม</div>
        </div>
      </div>

      <div className="text-4xl pt-6 sm:pt-0 flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
        Port 22 คืออะไร
      </div>
      <div className="pt-5 flex flex-col sm:flex-row justify-start sm:justify-start items-center px-4 sm:px-8 pb-8">
        <div className="mb-4 sm:mb-0 sm:mr-2">
          <input
            type="text"
            name="answer"
            className="rounded-lg w-full sm:w-96 h-12 sm:h-14 flex-shrink-0 bg-[#E45E07] rounded-8 text-gray-900 px-4 outline-none transition focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="justify-center flex sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="w-56 sm:w-xl h-12 sm:h-14 bg-[#E45E07] text-white rounded-md px-6 sm:px-16 py-3 m-2 transition duration-500 ease select-none hover:bg-orange-700 focus:outline-none focus:shadow-outline text-2xl sm:text-2xl md:text-2xl"
          >
            ส่งคำตอบ
          </button>
        </div>
        <div className="justify-center flex sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="w-56 sm:w- h-12 sm:h-14 border border-orange-600 bg-white text-orange-500 rounded-md px-6 sm:px-16 py-3 m-2 transition duration-500 ease select-none hover:bg-orange-600 hover:text-white focus:outline-none focus:shadow-outline text-2xl  md:text-2xl lg:text-2xl"
          >
            คำใบ้
          </button>
        </div>
      </div>
    </>
  );
};

export default AnswerComponent;
