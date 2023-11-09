import Nav from "../../../components/Navbar/Nav";
import NavbarBackground from "../../../components/Navbar/NavbarBackground";
import Profile from "../../../components/ProfilePage/Profile";
import RouterPeotect from "../router";

export default function Page() {
  return (
    <>
      <NavbarBackground>
        <Nav />
      </NavbarBackground>
      <RouterPeotect>
        <Profile />
      </RouterPeotect>
    </>
  );
}
