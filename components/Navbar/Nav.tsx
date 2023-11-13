"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../../src/assets/konhackweblogo.png";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLogin } from "../../reducer/state";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isauth, setIsAuth] = useRecoilState(isLogin);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout = () => {
    setIsAuth({ isLogin: false, token: "" });
  };

  return (
    <div className="bg-gradient-to-b from-transparent to-transparent pt-2">
      <div className="py-4 pb-6 sm:pb-16 sm:items-center sm:justify-center sm:flex">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16">
          <div className="flex items-center">
            <Image src={LogoImage} width={48} height={48} alt="Logo" />
            <Link href="/">
              <div className="ml-3 text-white font-inter text-2xl font-bold">
                KONHACKWEB
              </div>
            </Link>
            {/* Hamburger Menu Icon */}
            <div className="sm:hidden mt-1">
              <button
                onClick={toggleMobileMenu}
                className="text-2xl text-white ml-4"
              >
                <FaBars />
              </button>
            </div>
          </div>

          <div className="md:ml-auto md:flex hidden">
            <div className="space-x-3 text-lg">
              <Link href="/learn">Learn</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/pricing">Pricing</Link>
              {isauth.isLogin ? (
                <>
                  <button className="font-semibold text-sm w-24 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="font-semibold text-sm w-24 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Learn Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 text-white animate-fade-in flex justify-center items-center z-50">
          <div className="p-4 text-center">
            <div className="flex justify-center items-center mb-4">
              <Image src={LogoImage} alt="Logo" className="w-12 h-12" />
            </div>
            <div className="mb-4">
              <Link href="/learn">
                <span className="block text-2xl font-semibold hover:text-orange-500">
                  Learn
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link href="/lab">
                <span className="block text-2xl font-semibold hover:text-orange-500">
                  Lab
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link href="/blog">
                <span className="block text-2xl font-semibold hover:text-orange-500">
                  Blog
                </span>
              </Link>
            </div>
            <div className="mb-4">
              <Link href="/pricing">
                <span className="block text-2xl font-semibold hover:text-orange-500">
                  Pricing
                </span>
              </Link>
            </div>
            <div>
              {isauth.isLogin ? (
                <>
                  <button className="font-semibold text-sm w-24 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="font-semibold text-sm w-24 h-9 flex-shrink-0 rounded-lg border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-200">
                    Learn Now
                  </button>
                </>
              )}
            </div>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
          >
            &times; {/* Close icon */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
