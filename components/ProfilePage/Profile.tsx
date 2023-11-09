"use client";
import { useEffect, useState } from "react";
import { Axios } from "../../lib/fetcher";

export default function Profile() {
  const [data, setData] = useState();
  useEffect(() => {
    Axios.get("/user/@me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth.token")}`,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  });

  return (
    <>
      <div className="flex flex-row flex-warp pt-6">
        <div className="mx-auto lg:w-2/3">
          <div className="rounded-lg shadow-lg bg-orange-600/95 drop-shadow-md shadow-orange-400  w-full md:flex md:flex-row md:flex-warp p-16">
            <div className="md:ml-16 w-full">
              <img
                className="rounded-full"
                width={300}
                height={300}
                src="https://i.pinimg.com/200x/d8/a9/f3/d8a9f34eed4cbfbf19261395d4166004.jpg"
              />
            </div>
            <div className="md:w-2/3 w-full px-3 flex  flex-col">
              <div className="text-gray-700 font-bold relative pt-6 md:pt-0">
                <div className="lg:pl-4 space-y-4 mb-6">
                  <div className="">
                    <p className="text-white lg:text-3xl">Full Name</p>
                    <input
                      className="border-4 p-1 border-white rounded-md lg:w-[500px]"
                      disabled
                      value={data?.username}
                    />
                  </div>
                  <div className="">
                    <p className="text-white lg:text-3xl">Username</p>
                    <input
                      className="border-4 p-1 border-white rounded-md lg:w-[500px]"
                      disabled
                      value={data?.username}
                    />
                  </div>
                  <div className="">
                    <p className="text-white lg:text-3xl">Email</p>
                    <input
                      className="border-4 p-1 border-white rounded-md lg:w-[500px]"
                      disabled
                      value={data?.email}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <div className="flex flex-col lg:flex-row justify-end gap-2">
                  <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Change Password
                  </button>
                  <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Cancle
                  </button>
                  <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="flex flex-row flex-wrap pt-44">
            <div className="mx-auto lg:w-full">
              <div className="rounded-t-lg shadow-lg bg-orange-600/60 w-full flex flex-col md:flex-row md:flex-wrap px-4">
                <div className="w-full px-3 flex md:flex-col text-center">
                  <div>
                    <p className="text-5xl font-semibold px-8 py-8">
                      Subscribe
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="card">
                      <div className="bg-orange-600 rounded-t-lg">
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">Package</h1>
                        </div>
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">Free</h1>
                        </div>
                        <div className="pt-4">
                          <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200 mb-4">
                            OWNED
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="bg-orange-600 rounded-t-lg">
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">Package</h1>
                        </div>
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">LNW</h1>
                        </div>
                        <div className="pt-4">
                          <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200 mb-4">
                            OWNED
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="bg-orange-600 rounded-t-lg">
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">Package</h1>
                        </div>
                        <div className="pt-6">
                          <h1 className="text-4xl font-semibold">GOD</h1>
                        </div>
                        <div className="pt-4">
                          <button className="font-semibold text-sm py-2 px-8 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200 mb-4">
                            OWNED
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
