import RouterProtect from "@/app/router";
import PackageTable from "../../../../components/AdminPage/PackageTable/page";
import Nav from "../../../../components/Navbar/Nav";
import NavbarBackground from "../../../../components/Navbar/NavbarBackground";

export default function Page() {
  return (
    <>
      <RouterProtect isAdmin={true}>
        <NavbarBackground>
          <Nav />
        </NavbarBackground>
        <PackageTable />
      </RouterProtect>
    </>
  );
}
