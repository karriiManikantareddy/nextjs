"use client";
import { useSelector, useDispatch } from "react-redux";
import { logOut, homePage } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import NavBar from "@/components/NavBar/Navbar";
import { useEffect } from "react";

const LogOut = () => {
  const userName = useSelector((state) => state.auth.userName);
  const userPassword = useSelector((state) => state.auth.userPassword);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  const router = useRouter();
  const dispatch = useDispatch();
  const activeHomePage = useSelector((state) => state.auth.activeHomePage);
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(logOut());
    dispatch(homePage(activeHomePage));
    router.push("/home");
  };
  return (
    <>
      {isAuth ? (
        <>
          <div className="bg-white">
            <NavBar />
          </div>
          <div className="flex flex-col gap-[40px] h-[86vh] bg-[#ebeef6] items-center justify-center">
            <div className="flex flex-col   justify-center items-center gap-[14px] rounded border-[1px] bg-white h-[400px] w-[700px]">
              <h2>Username: {userName}</h2>
              <h2>Password: {userPassword}</h2>
              <button className="p-[8px] bg-customBlue text-white rounded-[2px] text-[12px]" onClick={handleClick}>Logout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh] font-bold text-[30px]">
          Please Login to continue...
        </div>
      )}
    </>
  );
};

export default LogOut;
