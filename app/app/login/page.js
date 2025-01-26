"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import heart_1 from "../assets/mdi_heart_1.png";
import heart_2 from "../assets/mdi_heart.png";

import { Container } from "postcss";

export default function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const changeEmail = () => {
    setemail(emailRef.current.value);
  };

  const changePassword = () => {
    setPassword(passwordRef.current.value);
  };

  function loginUser() {
    fetch("http://127.0.0.1:5001/createBusinessProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include",
    }).then((response) =>
      response.json().then((data) => {
        if (data.success === false) console.log(data.reason);

        // if (data.success === true) {
        //   window.location.href = "/";
        // }

        console.log("data");
        alert("working");
      })
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className="flex gap-5 items-center">
          <a
            href="https://planithacks.vercel.app/"
            className="text-xl font-bold text-secondary hover:text-blue-600"
          >
            Plan-It
          </a>
        </div>
      </nav>

      <div className="h-10 bg-secondary"></div>

      <div className="bg-primary vertical-align:middle">
        <div className="bg-secondary vertical-align:middle">
          <div className="py-4">
            <p className="text-primary text-lg font-bold">Login</p>
          </div>

          <div className="py-4">
            <input
              onChange={changeEmail}
              type="text"
              ref={emailRef}
              className="text-base text-primary placeholder:text-primary focus:outline-none bg-stone-200 rounded-md"
              placeholder="Email Address"
            ></input>
          </div>

          <div className="py-4">
            <input
              onChange={changePassword}
              type="text"
              ref={passwordRef}
              className="text-base text-primary placeholder:text-primary focus:outline-none bg-stone-200 rounded-md"
              placeholder="Password"
            ></input>
          </div>

          <div className="py-4">
            <button
              className="text-secondary bg-primary rounded-md hover:text-stone-300"
              onClick={loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
