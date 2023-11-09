import { IoIosArrowForward } from "react-icons/io";

const LabChallenge = () => {
  return (
    <>
      <div className="pb-8">
        <div className="text-4xl pl-4 font-bold pb-4">
          <p>Challenge</p>
        </div>
        <div className="text-2xl font-light">
          <div className="flex items-center">
            <div>
              <IoIosArrowForward />
            </div>
            <div>
              <p className="text-sm break-all lg:text-6xl">
                https://challenge-url.konhackweb.co.th/
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabChallenge;
