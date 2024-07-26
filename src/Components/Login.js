import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute text-white">
        <img
          className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg"
        />
      </div>
      <form className=" absolute w-[400px] p-10 h-[500px] bg-black my-[100px] mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-white text-3xl py-2">
          {isSignIn ? "Sign Up" : " Sign In"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <button className="w-full bg-red-700 my-6 p-4 rounded-lg">
          {isSignIn ? "Sign Up" : " Sign In"}
        </button>
        <p>
          {isSignIn ? "Already registered?" : "New to Netflix?"}
          <span
            className="underline ml-2 cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign In" : " Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
