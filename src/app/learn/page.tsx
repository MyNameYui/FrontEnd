"use client";
import Nav from '../../../components/Navbar/Nav';
import LearnComponent from '../../../components/LearnPage/LearnPage';
import NavbarBackground2 from '../../../components/Navbar/NavbarBackground2';
import LearnTitle from '../../../components/LearnPage/LearnTitle';

const Page = () => {
  return (
    <>
      <NavbarBackground2>
        <Nav />
        <LearnTitle />
      </NavbarBackground2>
      <LearnComponent />
    </>
  );
};

export default Page;
