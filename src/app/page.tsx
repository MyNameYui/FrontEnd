import Image from "next/image";
import Nav from "../../components/Navbar/Nav";
import LandingText from "../../components/LandingPage/LandingText";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavbarBackground from "../../components/Navbar/NavbarBackground";

export default function Home() {
  return (
    <>
      <NavbarBackground>
        <Nav />
      </NavbarBackground>
      <LandingPage />
    </>
  );
}
