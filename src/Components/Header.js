import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { configLang, NETFLIX_LOGO, USER_LOGO } from "../utils/Constant";
import { changeLang, toogleGptSearch } from "../utils/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearchPage = useSelector((store) => store.gptsearch.showGpt);
  const [displayImg, setDisplayImg] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguage = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleToogle = () => {
    dispatch(toogleGptSearch());
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
        <div className="flex p-2 m-2 items-center font-bold text-sm ">
          {showGptSearchPage && (
            <select
              className=" bg-gray-500 text-white cursor-pointer"
              onChange={handleLanguage}
            >
              {configLang.map((config) => (
                <option
                  className="font-bold text-sm bg-slate-900"
                  key={config.identifier}
                  value={config.identifier}
                >
                  {config.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleToogle}
            className="py-[5px] px-2 bg-red-600 hover:bg-red-700 mr-2 my-2 mx-2 text-sm text-white font-bold rounded-md "
          >
            {!showGptSearchPage ? "GPT Search" : "Home"}
          </button>
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
