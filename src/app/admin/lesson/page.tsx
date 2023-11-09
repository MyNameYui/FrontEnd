import React from "react";
import LessonTable from "@/../components/AdminPage/LessonTable/LessonTable";
import NavbarBackground from "../../../../components/Navbar/NavbarBackground";
import Nav from "../../../../components/Navbar/Nav";
import RouterProtect from "@/app/router";

const page = () => {
  return (
    <>
      <RouterProtect>
        <NavbarBackground>
          <Nav />
        </NavbarBackground>
        <LessonTable />
      </RouterProtect>
    </>
  );
};

export default page;
