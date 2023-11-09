"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoweb from "../../src/assets/konhackweblogo.png";
import { Noto_Sans_Thai } from "next/font/google";
import { useAsyncList } from "@react-stately/data";
import { Button } from "@nextui-org/react";
import { Axios } from "../../lib/fetcher";
import Link from "next/link";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const CyberSecCard = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("auth.token");
    Axios.get(`/lesson/category/all?page=1&limit=30`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data.detail);
      })
      .catch((err) => {});
  }, []);
  return (
    // <div className="container mx-auto pt-32">
    //   <div className="grid grid-cols-4 gap-4">
    //     {data.map((x, key) => (
    //       <Link href={x.categoryId.toString()}>
    //         <div className={`${notosansthaifont.className}`}>
    //           <div
    //             style={{ height: "550px" }}
    //             className="relative bg-gradient-to-b from-slate-700 to-transparent rounded-2xl"
    //           >
    //             <div>
    //               <Image
    //                 src={logoweb}
    //                 alt="Logo"
    //                 height={600}
    //                 className="w-[250px] lg:w-[900px] left-36 top-32 absolute mix-blend-color-dodge"
    //                 style={{ opacity: "0.3" }}
    //               />
    //             </div>

    //             <div className="line-clamp-1 pt-16 left-11 top-500 absolute text-center text-6xl font-bold" style={{
    //               background: 'linear-gradient(91deg, #F09454 13.86%, rgba(255, 109, 7, 0.00) 144.31%)',
    //               WebkitBackgroundClip: 'text',
    //               backgroundClip: 'text',
    //               WebkitTextFillColor: 'transparent'
    //             }}>
    //               {x.categoryName}
    //             </div>
    //             <div className="text-sm">
    //               <div className="line-clamp-5 pb-32 inset-x-0 bottom-0 absolute text-center text-white text-5xl font-bold w-96 left-1/2 transform -translate-x-1/2">
    //                 The Quick Brown Fox Jump Over The Dog Shit
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className={`${notosansthaifont.className}`}>
      <div
        style={{ height: "550px" }}
        className="relative bg-gradient-to-b from-slate-700 to-black rounded-2xl"
      >
        <div>
          <Image
            src={logoweb}
            alt="Logo"
            height={600}
            className="w-[250px] lg:w-[900px] left-36 top-32 absolute mix-blend-color-dodge"
            style={{ opacity: "0.3" }}
          />
        </div>

        <div
          className="line-clamp-1 pt-16 left-11 top-500 absolute text-center text-6xl font-bold"
          style={{
            background:
              "linear-gradient(91deg, #F09454 13.86%, rgba(255, 109, 7, 0.00) 144.31%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ระบบเน็ต
        </div>

        <div className="text-sm">
          <div className="line-clamp-5 pb-32 inset-x-0 bottom-0 absolute text-center text-white text-5xl font-bold w-96 left-1/2 transform -translate-x-1/2">
            The Quick Brown Fox Jump Over The Dog Shit
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecCard;
