"use client";
import NavbarBackground from "../../../../components/Navbar/NavbarBackground";
import Nav from "../../../../components/Navbar/Nav";
import SelectText from "../../../../components/SelectTopic/SelectText";
import SelectTopic from "../../../../components/SelectTopic/SelectTopic";
import RouterProtect from "@/app/router";

const page = () => {
  return (
    <>
      <RouterProtect>
        <NavbarBackground>
          <Nav />
        </NavbarBackground>
        <SelectText />
        <SelectTopic />
      </RouterProtect>
    </>
  );
};

export default page;
