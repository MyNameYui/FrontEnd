"use client";
import RouterProtect from "@/app/router";
import LearnComponent from "../../../../../components/LearnPage/LearnPage";
import LearnTitle from "../../../../../components/LearnPage/LearnTitle";
import Nav from "../../../../../components/Navbar/Nav";
import NavbarBackground2 from "../../../../../components/Navbar/NavbarBackground2";

const Page = () => {
  return (
    <>
      <RouterProtect>
        <div className="pb-20">
          <NavbarBackground2>
            <Nav />
            <LearnTitle />
          </NavbarBackground2>
        </div>
        <LearnComponent />
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
