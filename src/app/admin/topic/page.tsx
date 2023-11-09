import React from "react";
import TopicTable from "@/../components/AdminPage/TopicTable/TopicTable";
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
        <TopicTable />
      </RouterProtect>
    </>
  );
};

export default page;
