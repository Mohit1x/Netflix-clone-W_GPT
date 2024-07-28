import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [displayImg, setDisplayImg] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-28 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        className="w-[200px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex p-2 m-2 items-center">
          <img
            onClick={() => setDisplayImg(!displayImg)}
            className="w-12 h-12 cursor-pointer"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
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
