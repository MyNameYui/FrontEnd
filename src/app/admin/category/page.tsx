import React from "react";
import CategoryTable from "../../../../components/AdminPage/CategoryTable/CategoryTable";
import NavbarBackground from "../../../../components/Navbar/NavbarBackground";
import Nav from "../../../../components/Navbar/Nav";
import RouterProtect from "@/app/router";

const page = () => {
  return (
    <div>
      <RouterProtect>
        <NavbarBackground>
          <Nav />
        </NavbarBackground>
        <CategoryTable />
      </RouterProtect>
    </div>
  );
};

export default page;
