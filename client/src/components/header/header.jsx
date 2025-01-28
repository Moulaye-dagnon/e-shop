import { useEffect, useState } from "react";
import Crown from "../../assets/crown.svg";
import iconClose from "../../assets/icon-close.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SET_CURRENT_USER } from "../../reducer/user/user-reducer";
export function Header() {
  const [Open, setOpen] = useState(true);
  const handleOnclick = () => {
    setOpen((v) => !v);
  };
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const SignOut = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/auth/signOut");
    dispatch({ type: SET_CURRENT_USER, payload: null });
  };

  return (
    <div
      className={`relative w-full md:flex md:items-center md:justify-between md:px-10 ${Open ? "h-24" : "h-72"}`}
    >
      <div className="left-6 top-6 z-10 h-16 w-16 max-md:absolute">
        <Link to="/">
          <img className="block w-full" src={Crown} alt="" />
        </Link>
      </div>
      <div
        className={`${Open ? "max-md:-translate-y-full" : "max-md:translate-y-0 max-md:py-20"} transition duration-1000 ease-in-out max-md:absolute max-md:w-full max-md:bg-slate-50 max-md:shadow-md md:flex md:items-center md:justify-between md:py-10`}
      >
        <ul className="text-center text-2xl font-bold uppercase md:flex md:items-center md:justify-between md:text-sm">
          <li className="block rounded-lg border-b-2 border-slate-500/0 py-2 transition duration-500 ease-out hover:border-slate-500/100 hover:text-slate-600">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="block rounded-lg border-b-2 border-slate-500/0 py-2 transition duration-500 ease-out hover:border-slate-500/100 hover:text-slate-600 md:mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          {currentUser ? (
            <li className="block rounded-lg border-b-2 border-slate-500/0 py-2 transition duration-500 ease-out hover:border-slate-500/100 hover:text-slate-600">
              <Link onClick={SignOut}>Se Deconnecter</Link>
            </li>
          ) : (
            <li className="block rounded-lg border-b-2 border-slate-500/0 py-2 transition duration-500 ease-out hover:border-slate-500/100 hover:text-slate-600">
              <Link to="/signIn">Se Connecter</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="absolute right-10 top-6 h-10 w-10 md:hidden">
        {Open ? (
          <img
            onClick={handleOnclick}
            className="block h-full w-full"
            src={iconHamburger}
            alt=""
          />
        ) : (
          <img
            onClick={handleOnclick}
            className="block h-full w-full"
            src={iconClose}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
