
const LabAnswerComponent = () => {
  return (
    <>
      <div className="text-4xl pt-6 sm:pt-0 flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
        Port 22 คืออะไร Port 22 คืออะไร Port 22 คืออะไร
        Port 22 คืออะไร Port 22 คืออะไร Port 22 คืออะไร
        Port 22 คืออะไร Port 22 คืออะไร Port 22 คืออะไร
      </div>
      <div className="pt-5 flex flex-col sm:flex-row justify-start sm:justify-start items-center px-4 sm:px-8 pb-8">
        <div className="mb-4 sm:mb-0 sm:mr-2">
          <input
            type="text"
            name="answer"
            className="rounded-lg w-72 h-12 sm:h-14 bg-[#E45E07] rounded-8 text-gray-900 px-4 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="justify-center flex sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="w-72 h-12 sm:h-14 bg-[#E45E07] text-white rounded-md px-6 sm:px-16 py-3 m-2 transition duration-500 ease select-none hover:bg-orange-700 focus:outline-none focus:shadow-outline text-2xl sm:text-2xl md:text-2xl"
          >
            ส่งคำตอบ
          </button>
        </div>
        <div className="justify-center flex sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="w-72 sm:w- h-12 sm:h-14 border border-orange-600 bg-white text-orange-500 rounded-md px-6 sm:px-16 py-3 m-2 transition duration-500 ease select-none hover:bg-orange-600 hover:text-white focus:outline-none focus:shadow-outline text-2xl  md:text-2xl lg:text-2xl"
          >
            คำใบ้
          </button>
        </div>
      </div>
    </>
  );
}

export default LabAnswerComponent;
