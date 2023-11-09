import React from "react";

interface NavbarBackgroundProps {
  children: React.ReactNode; // Define the type explicitly
}

const NavbarBackground: React.FC<NavbarBackgroundProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-orange-600 to-bg-transparent h-24">
      {children}
    </div>
  );
};

export default NavbarBackground;
