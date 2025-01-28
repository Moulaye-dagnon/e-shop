import { useEffect, useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "../../reducer/user/user-reducer";

export function SignInComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().state?.from || "/";
  console.log(location);
  const [dataForm, setDataform] = useState({});
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        email: valueInput.email,
        password: valueInput.password,
      });
      if (response.status == 200) {
        dispatch({ type: SET_CURRENT_USER, payload: response.data.user });
        navigate(location, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
    setValueInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className="mx-auto my-5 flex max-w-2xl flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl">
        Entrez votre email et votre mot de passe
      </h1>
      <form onSubmit={handleSubmit} action="">
        <InputComponent
          label="Email"
          type={"email"}
          id="email"
          name="email"
          value={valueInput.email}
          onChange={handleChange}
        />
        <InputComponent
          label="Mot de passe"
          type="text"
          name="password"
          id="password"
          value={valueInput.password}
          onChange={handleChange}
        />
        <button className="w-full bg-slate-700 py-4 text-2xl uppercase text-slate-300 ring-slate-700 hover:bg-transparent hover:text-slate-800 hover:ring-2 hover:ring-offset-2">
          Se connecter
        </button>
        <div className="relative w-full">
          <Link
            className="absolute right-1 mt-2 text-lg text-blue-400 underline"
            to={"/signUp"}
          >
            Vous n'avez pas de compte ?
          </Link>
        </div>
      </form>
    </div>
  );
}
