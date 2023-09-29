"use client"
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';
import DarkModeButton from './DarkModeButton';

const Header = () => {

  // Function to handle the GitHub button click
  const handleGitHubClick = () => {
    // Redirect to the GitHub page
    window.location.href = 'https://github.com/pranav0823/Next.js-LIVE-NEWS-APP';
  };

  return (
    <header>
      <div className='grid grid-cols-3 p-10 items-center '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>

        {/* <Bars3Icon className='h-8 w-8 cursor-pointer'/>  */}
        <Link href='/' prefetch={false}>
          <h1 className='font-serif text-4xl text-center'>The{" "}
          <span className='underline decoration-6 decoration-pink-500'>PBR
            </span>{" "}News</h1>
        </Link>

        <div className='flex items-center justify-end space-x-2'>
          {/* dark mode button */}
          {/* <DarkModeButton/> */}



          <button
            className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
            onClick={handleGitHubClick} // Add the onClick handler
          >
            Github
          </button>
        </div>
      </div>

      {/*NAVLINKS COMPONENT*/}
      <NavLinks/>

      {/*SEARCH BAR*/}
      <SearchBox/>



    </header>
  );
};

export default Header;


