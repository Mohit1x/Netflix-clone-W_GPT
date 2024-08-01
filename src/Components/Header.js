import { signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constant";

const Header = () => {
  const modelRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [displayUserName, setDisplayUserName] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (modelRef.current && !modelRef.current.contains(e.target)) {
        setDisplayUserName(false);
        return;
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  });

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-[130px] md:w-[200px] object-contain"
        src={NETFLIX_LOGO}
      />
      {user && (
        <div className="p-2 m-2 relative">
          <img
            onClick={() => setDisplayUserName(!displayUserName)}
            className="w-10 h-10 cursor-pointer rounded-md"
            src={USER_LOGO}
          />
          {displayUserName && (
            <div
              ref={modelRef}
              className="bg-white  border border-gray-500 shadow z-30 p-2 rounded-md font-normal w-[100px] md:w-[150px] absolute top-11 right-4"
            >
              <p className="shadowd-lg">{user.displayName}</p>
              <div className="h-[1px] w-full  bg-gray-500 my-2 cursor-pointer" />
              <button onClick={handleSignOut} className="">
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
