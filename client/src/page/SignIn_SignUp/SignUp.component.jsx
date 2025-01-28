import { useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Link, useNavigate } from "react-router";
import axios from "axios";
export function SignUpComponent() {
  const navigate = useNavigate();
  const [Error, setError] = useState(false);
  const [dataForm, setDataform] = useState({});
  const [valueInput, setValueInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataform(valueInput);
    if (valueInput.confirmPassword === valueInput.password) {
      setError(false);
      axios
        .post("http://localhost:3000/auth/signup", {
          username: valueInput.username,
          email: valueInput.email,
          password: valueInput.password,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            navigate("/signIn");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setValueInput({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError(true);
      console.log("mots de passe different");
    }
  };
  return (
    <div className="mx-auto my-5 flex max-w-2xl flex-col items-center justify-center">
      {Error && (
        <div className="absolute top-20 flex h-14 w-full items-center justify-center bg-red-400 text-2xl text-red-100">
          Ce email existe deja
        </div>
      )}
      <h1 className={`text-xl md:text-2xl ${Error ? "mt-4" : ""}`}>
        Inscrivez-vous avec votre email et votre mot de passe
      </h1>
      <form onSubmit={handleSubmit} action="">
        <InputComponent
          label="Nom et Prenom"
          type={"text"}
          id="username"
          name="username"
          value={valueInput.username}
          onChange={handleChange}
        />
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
          type="password"
          name="password"
          id="password"
          value={valueInput.password}
          onChange={handleChange}
        />
        <InputComponent
          label="Confirmer votre mot de passe"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={valueInput.confirmPassword}
          onChange={handleChange}
        />
        <button className="w-full bg-slate-700 py-4 text-2xl uppercase text-slate-300 ring-slate-700 hover:bg-transparent hover:text-slate-800 hover:ring-2 hover:ring-offset-2">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
