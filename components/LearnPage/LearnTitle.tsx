import { useParams } from "next/navigation";
import CompleteStatus from "./CompleteStatus";
import { useEffect, useState } from "react";
import { Axios } from "../../lib/fetcher";

const LearnTitle = ({heading,topicName} : {
  heading: string,
  topicName: string
}) => {
  // const params = useParams()
  // const [data,setData] = useState()
  // const [TopicData , setTopicData] = useState()
  // useEffect(() => {
  //   Axios.get(`/lesson/${params.topic}/?page=1&limit=30`).then((res) => {
  //     setTopicData(res.data)
  //   }).catch((err) =>  {
      
  //   })
  //   Axios.get(`/lesson/${params.lessonid}/detail`).then((res) => {
  //     setData(res.data)
  //   }).catch((err) =>  {
      
  //   })
  // },[])

  return (
    <div className="px-4 sm:px-32">
      <div className="pb-4">
        <span className="line-clamp-2 lg:text-7xl text-center text-white font-bold font-inter">
          {heading}
        </span>
      </div>

      <div className="pb-16 flex justify-center items-center pt-12">
        <div className="flex flex-row">
          <div className="text-white text-3xl font-bold font-inter mb-2 sm:mb-0 w-full ">
            <p className="line-clamp-2">
              Topic: <span className="font-light">{topicName}</span>
            </p>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-16">
            <CompleteStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTitle;
