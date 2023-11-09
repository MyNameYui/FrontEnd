import React from 'react';

interface NavbarBackgroundProps {
  children: React.ReactNode; // Define the type explicitly
}

const NavbarBackground2: React.FC<NavbarBackgroundProps> = ({ children }) => {
  return (
    <div className="w-full max-h-screen bg-gradient-to-b from-orange-600 to-amber-900">      
    {children}
    </div>
  );
};

export default NavbarBackground2;
