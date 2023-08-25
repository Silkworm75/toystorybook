import React from "react";
import Link from "next/link";
import Logo from "@/components/Header/Logo";
import Navigation from "@/components/Header/Navigation";

interface HeaderProps {
  logo?: boolean;
  nav?: boolean;
  btn?: boolean;
}

const Header = ({ logo = true, nav = true, btn = true }: HeaderProps) => {
  return (
    <header className="max-w-full container text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {logo && (
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Logo />
            <span className="ml-3 text-xl">ToyStoryBook</span>
          </Link>
        )}

        {nav && <Navigation />}

        {btn && (
          <Link href="https://www.google.com" target='blank' id="externalLink">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            External Nav Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
