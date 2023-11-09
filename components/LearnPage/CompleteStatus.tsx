import { BiSolidLockAlt } from "react-icons/bi";

const CompleteStatus = () => {
  return (
    <div className="">
      <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 h-11 bg-yellow-950 rounded-2xl text-white flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="pr-2">
            <BiSolidLockAlt className="text-lg " />
          </div>
          <div className="text-lg ">INCOMPLETE</div>
        </div>
      </div>
    </div>
  );
};

export default CompleteStatus;
