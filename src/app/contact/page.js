"use client";
import { useSelector, useDispatch } from "react-redux";
import { conPage } from "@/redux/features/authSlice";
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar/Navbar";

const ContactPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    dispatch(conPage());
  }, [dispatch]);

  console.log('ContactPage component isAuth:', isAuth);

  return (
    <div>
      {isAuth ? (
        <>
          <NavBar />
          <div>ContactPage</div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh] font-bold text-[30px]">
          Please Login to continue...
        </div>
      )}
    </div>
  );
};

export default ContactPage;
