import Link from "next/link";
import { Noto_Sans_Thai } from "next/font/google";
import RegisterSide from "./RegisterSide";

const RegisterPage = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div>
          <div
            style={{ width: 600 }}
            className="min-h-screen flex flex-col bg-[#E45E07] p-8"
          >
            <div>
              <div>
                <label className="text-2xl font-bold text-white">
                  Create your account.
                </label>
              </div>
              <div>
                <label className="text-2xl font-bold text-stone-800">
                  Let’s begin the journey together.
                </label>
              </div>
            </div>
            <div>
              <label className="pb-2 flex justify-start text-1xl pt-8">
                Username
              </label>
              <input
                className="text-black rounded-md w-full h-12 px-4 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="pb-2 flex justify-start text-1xl pt-4">
                Email
              </label>
              <input
                className="text-black rounded-md w-full h-12 px-4 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="pb-2 flex justify-start text-1xl pt-4">
                Password
              </label>
              <input
                className="text-black rounded-md w-full h-12 px-4 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="pb-2 flex justify-start text-1xl pt-4">
                Confirm Password
              </label>
              <input
                className="text-black rounded-md w-full h-12 px-4 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mt-auto">
              <div className="flex items-center pt-8 pb-6">
                <div className="pr-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 form-checkbox text-indigo-600 bg-indigo-200 border-2 border-indigo-600 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-white">
                    I accept the{" "}
                    <Link className="text-stone-800" href="">
                      Terms of Service
                    </Link>{" "}
                    and the{" "}
                    <Link className="text-stone-800" href="">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              <button className="transition duration-400 hover:bg-gray-200 w-full h-14 bg-white rounded-lg">
                <span className="font-bold text-orange-600 text-center">
                  Register
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto hidden md:block">
          <RegisterSide />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
