import React from 'react';
import Card from '../../../components/BlogPage/Card';
import Nav from '../../../components/Navbar/Nav';
import Link from 'next/link';
import LastBlogCard from '../../../components/BlogPage/LastBlogCard';
import NavbarBackground2 from '../../../components/Navbar/NavbarBackground2';
import CategoryButton from '../../../components/BlogPage/CategoryButton';

const Page = () => {
  return (
    <div>
      <NavbarBackground2>
        <Nav />
        <div className='flexpl-16 md:pl-48'>
          <div className="text-5xl px-32 font-bold text-center pt-8 sm:pt-32 pb-16">
            <p>Blogs</p>
          </div>
        </div>
      </NavbarBackground2>

      <div className="pt-16 py-4 sm:py-8 pb-6 sm:pb-12 scale-75 md:scale-100">
        <CategoryButton />
      </div>

      <LastBlogCard />

      <div className="flex justify-center items-center">
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          <div className="scale-75 md:scale-100">
            <Link href=""><Card /></Link>
          </div>
          <div className="scale-75 md:scale-100">
            <Link href=""><Card /></Link>
          </div>
          <div className="scale-75 md:scale-100">
            <Link href=""><Card /></Link>
          </div>
          <div className="scale-75 md:scale-100">
            <Link href=""><Card /></Link>
          </div>
          <div className="scale-75 md:scale-100">
            <Link href=""><Card /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
