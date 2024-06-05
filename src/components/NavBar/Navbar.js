"use client";
import React from "react";
import Link from 'next/link';
import { useSelector } from "react-redux";
const NavBar = () => {
  const activeHomePage = useSelector(
    (state) => state.auth.activeHomePage
  );
  const activeContactPage = useSelector(
    (state) => state.auth.activeContactPage
  );
  const activeAboutPage = useSelector(
    (state) => state.auth.activeAboutPage
  );
  return (
    <>
      <nav className="flex items-center justify-end p-[20px] mr-[40px]">
        <ul className="flex space-x-10 text-lg p-[6px]  text-black right-0 bg-light-blue-200">
          {activeHomePage ? (
            <li className="cursor-pointer text-[14px] hover:text-blue-500 text-customBlue  font-bold">
              <Link href="/logout">Home</Link>
            </li>
          ) : (
            <li className="cursor-pointer text-[14px] hover:text-blue-500">
              <Link href="/logout">Home</Link>
            </li>
          )}
          {activeContactPage ? (
            <li className="cursor-pointer text-[14px] hover:text-blue-500 text-customBlue  font-bold">
              <Link href="/contact">Contact Us</Link>
            </li>
          ) : (
            <li className="cursor-pointer text-[14px] hover:text-blue-500">
              <Link href="/contact">Contact Us</Link>
            </li>
          )}
          {activeAboutPage ? (
            <li className="cursor-pointer text-[14px] hover:text-blue-500 text-customBlue  font-bold">
              <Link href="/about">About</Link>
            </li>
          ) : (
            <li className="cursor-pointer text-[14px] hover:text-blue-500">
              <Link href="/about">About</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
