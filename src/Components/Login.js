import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [erroMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  function onSubmit(e) {
    e.preventDefault();

    const message = checkValidation(
      email.current?.value,
      password.current?.value,
      name.current?.value || ""
    );
    setErrorMsg(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("./browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("./browse");

          // ...
        })
        .catch((error) => {
          console.log(error, "error");
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute text-white">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg" />
      </div>
      <form
        onSubmit={onSubmit}
        className=" absolute w-[400px] p-10  bg-black my-[100px] mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-white text-3xl py-2">
          {isSignIn ? "Sign In" : " Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <p className="font-bold text-red-500 text-lg">{erroMsg}</p>
        <button type="submit" className="w-full bg-red-700 my-6 p-4 rounded-lg">
          {isSignIn ? "Sign In" : " Sign Up"}
        </button>
        <p>
          {isSignIn ? "New to Netflix?" : "Already Registered?"}
          <span
            className="underline ml-2 cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
