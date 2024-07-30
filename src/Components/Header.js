import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [displayImg, setDisplayImg] = useState(false);
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

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-[150px]" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex p-2 m-2 items-center">
          <img
            onClick={() => setDisplayImg(!displayImg)}
            className="w-8 h-8 cursor-pointer rounded-md"
            src={USER_LOGO}
          />
          {displayImg && (
            <span
              onClick={() => setDisplayImg(false)}
              className="p-2 m-2 font-bold text-white cursor-pointer"
            >
              {user.displayName}
            </span>
          )}

          <button onClick={handleSignOut} className="font bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
