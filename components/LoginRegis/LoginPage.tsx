"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Axios } from "../../lib/fetcher";
import { errorToast, successToast } from "../../lib/toast/toast";
import { Input } from "@nextui-org/react";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../../reducer/state";

const Login = () => {
  const isauth = useSetRecoilState(isLogin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function LoginApi() {
    Axios.post("/authentication/login", {
      username: username,
      password: password,
    })
      .then((res) => {
        localStorage.setItem("auth.token", res.data["access_token"]);
        isauth((e) => {
          return { ...e, token: res.data["access_token"], isLogin: true };
        });

        successToast({ text: "ล็อกอินสำเร็จ" });
      }).catch((e) => {
        errorToast({ text: "ล็อกอินไม่สำเร็จ" });

      })

  }

  return (
    <div className="flex justify-center min-h-screen pt-0 md:pt-16 text-center scale-75 md:scale-100">
      <div
        style={{ height: 550 }}
        className="flex flex-col justify-between bg-[#E45E07] w-96 rounded-lg p-8"
      >
        <div>
          <div className="text-4xl font-bold">LOGIN</div>
          <div>
            <label className="pb-2 flex justify-start text-1xl pt-8">
              Username
            </label>
            <Input
              value={username}
              onValueChange={setUsername}
              classNames={{
                input:
                  "rounded-md w-full h-12 px-4 transition-all duration-300",
              }}
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="pb-2 flex justify-start text-1xl pt-4">
              Password
            </label>
            <Input
              value={password}
              onValueChange={setPassword}
              classNames={{
                input:
                  "bg-white rounded-md w-full h-12 px-4 transition-all duration-300",
              }}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="pt-4">
            <label className="text-1xl text-gray-100">
              <Link href="">Forgot password?</Link>
            </label>
          </div>
        </div>

        <div>{/* Cloudflare ติ๊ก */}</div>

        <div>
          <button
            className="transition duration-400 hover:bg-gray-200 w-full h-14 bg-white rounded-lg"
            onClick={LoginApi}
          >
            <span className="font-bold text-orange-600 text-center">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
