import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Axios } from '../../lib/fetcher';
import { useParams } from 'next/navigation';

const SelectCard = () => {
  const [data, setData] = useState([]);
  const params = useParams()

  useEffect(() => {
    Axios.get(`/lesson/category/${params.id}/topics?page=1&limit=30`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth.token")}`
      }
    }).then((res) => {
      setData(res.data.detail.topics)
      console.log(res.data.detail.topics)
    }).catch((err) => {

    })
  }, [])

  return (
    <>
      {data.map((x, key) => {
        return (
          <Link href={x}>
            <div key={key} className="pt-4">
              <div className="flex">
                <div className="bg-[#E45E07] w-full h-14 rounded-l-xl flex items-center">
                  <span className="line-clamp-1 text-stone-900 font-bold px-6 text-sm md:text-2xl">
                    {x.topicName}
                  </span>
                </div>
                <div className="bg-white w-72 h-14 rounded-r-xl flex items-center justify-center">
                  <div>
                    <span className="font-bold text-sm md:text-2xl text-[#E45E07]">29<span className="font-bold text-sm md:text-2xl text-stone-900">/100</span></span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  )
}

export default SelectCard
