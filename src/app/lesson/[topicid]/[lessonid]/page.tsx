"use client";
import RouterProtect from "@/app/router";
import LearnComponent from "../../../../../components/LearnPage/LearnPage";
import LearnTitle from "../../../../../components/LearnPage/LearnTitle";
import Nav from "../../../../../components/Navbar/Nav";
import NavbarBackground2 from "../../../../../components/Navbar/NavbarBackground2";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Axios } from "../../../../../lib/fetcher";

const Page = () => {
  const params = useParams()
  const [data,setData] = useState()
  const [TopicData , setTopicData] = useState()
  useEffect(() => {
    Axios.get(`/lesson/${params.topic}/?page=1&limit=30`).then((res) => {
      setTopicData(res.data)
    }).catch((err) =>  {
      
    })
    Axios.get(`/lesson/${params.lessonid}/detail`).then((res) => {
      setData(res.data)
    }).catch((err) =>  {
      
    })
  },[])

  return (
    <>
      <RouterProtect>
        <div className="pb-20">
          <NavbarBackground2>
            <Nav />
            <LearnTitle heading={TopicData.heading} topicName={data.topicName}/>
          </NavbarBackground2>
        </div>
        <LearnComponent data={data}/>
      </RouterProtect>
    </>
  );
};

export default Page;
// "use client";

// import { useParams } from "next/navigation";

// export default function ExampleClientComponent() {
//   const params = useParams();

//   // Route -> /shop/[tag]/[item]
//   // URL -> /shop/shoes/nike-air-max-97
//   // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
//   console.log(params.id);

//   return <></>;
// }
