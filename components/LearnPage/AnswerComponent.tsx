import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Axios } from "../../lib/fetcher";
import { useParams } from "next/navigation";
import { errorToast, successToast } from "../../lib/toast/toast";

const AnswerComponent = ({ question }: { question: any }) => {
  const parms = useParams();
  const [t, setT] = useState();

  function h(e) {
    setT(e.target.value);
  }

  function SendAnswer() {
    Axios.post(`lesson/${parms.lessonid}/verifyQuestion`, {
      questionId: question.id,
      answer: t,
    })
      .then((res) => {
        if (res.data["status"]) {
          successToast({ text: "สำเร็จ " });
        }
        errorToast({ text: "ไม่สำเร็จ" });
      })
      .catch((err) => {
        errorToast({ text: "server error" });
      });
  }
  return (
    <>
      <div className="flex flex-col sm:justify-start md:justify-start lg:justify-start sm:flex-row sm:items-center p-4">
        <div className="flex items-center">
          {/* เพิ่มคลาส 'items-center' ใน div นี้ */}
          <div className="text-5xl pr-4 sm:pl-4">
            <AiFillQuestionCircle style={{ color: "#E45E07" }} />
          </div>
          <div className="text-5xl font-bold">คำถาม</div>
        </div>
      </div>

      <div className="text-4xl pt-6 sm:pt-0 flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
        {question.question}
      </div>
      <div className="pt-5 flex flex-col sm:flex-row justify-start sm:justify-start items-center px-4 sm:px-8 pb-8">
        <div className="mb-4 sm:mb-0 sm:mr-2">
          <input
            type="text"
            name="answer"
            onChange={h}
            className="rounded-lg w-full sm:w-96 h-12 sm:h-14 flex-shrink-0 bg-[#E45E07] rounded-8 text-gray-900 px-4 outline-none transition focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="justify-center flex sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="w-56 sm:w-xl h-12 sm:h-14 bg-[#E45E07] text-white rounded-md px-6 sm:px-16 py-3 m-2 transition duration-500 ease select-none hover:bg-orange-700 focus:outline-none focus:shadow-outline text-2xl sm:text-2xl md:text-2xl"
            onClick={SendAnswer}
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
