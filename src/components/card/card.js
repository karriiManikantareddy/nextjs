"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "../../../public/cart.svg";
import Link from "next/link";
import user from "../../../public/user.svg";
import lock from "../../../public/lock.svg";
import { logIn, toggleAuth} from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";


const LoginCard = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 
  const dispatch = useDispatch();

  const router = useRouter();
  const handleClick = () => {
    if (name !== "" && password !== "") {
      const userData = {
        userName: name,
        userPassword: password,
      };
      dispatch(logIn(userData));
      dispatch(toggleAuth())
      router.push("/logout");
    } else if (name == "" && password == "") {
      alert("Please enter user name and password to continue");
    } else if (name !== "") {
      alert("Please enter password to continue");
    } else {
      alert("Please enter user name to continue");
    }
  };

  return (
    <div className="h-[398px] w-[300px]  flex flex-col gap-[48px] justify-center items-center">
      <Image src={cart} alt="cart" width={120} height={98} />
      <div className="flex flex-col gap-[20px]">
        <div className="relative flex items-center">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="USERNAME"
            className="w-[300px] h-[45px] text-white rounded-[2px] border-[1.2px] border-white bg-inherit focus:outline-none placeholder-white text-[14px] font-Montserrat pl-[51px] opacity-60 hover:opacity-100"
          />
          <Image src={user} alt="user" className="absolute left-[12px]" />
        </div>
        <div className="relative flex items-center">
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className="w-[300px] h-[45px] text-white rounded-[2px] border-[1.2px] border-white bg-inherit focus:outline-none placeholder-white text-[14px] font-Montserrat pl-[51px] font-light opacity-60 hover:opacity-100"
          />
          <Image src={lock} alt="lock" className="absolute left-[12px]" />
        </div>
      </div>
      <div className="flex flex-col justify-end items-end gap-[11px]">
        <div className="w-[300px] h-[45px] rounded-[2px] bg-white flex justify-center items-center gap-[11px] ">
          <button
            onClick={handleClick}
            className="cursor-pointer text-[16px] font-Montserrat text-customBlue font-bold"
          >
            LOGIN
          </button>
        </div>
        <Link
          href="/"
          className="text-[16px] font-Montserrat font-medium text-white"
        >
          {" "}
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;
