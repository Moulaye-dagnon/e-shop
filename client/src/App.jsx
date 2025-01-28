import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router";
import "./App.css";
import { HomeComponent } from "./page/Home/home.component";
import { RootComponent } from "./page/Root/Root.compoent";
import { ShopComponent } from "./page/Shop/Shop.component";
import { HatsComponent } from "./page/Hats/Hats.component";
import { SneakersComponent } from "./page/Sneakers/Sneacker.component";
import { JacketComponent } from "./page/Jacket/Jacket.componemt";
import { MenComponent } from "./page/Men/Men.component";
import { WomensComponent } from "./page/Womens/Women.component";
import { SignUpComponent } from "./page/SignIn_SignUp/SignUp.component";
import { SignInComponent } from "./page/SignIn_SignUp/SignIn.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_CURRENT_USER } from "./reducer/user/user-reducer";
import axios from "axios";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const VerifyUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify");
        if (response.data.status) {
          dispatch({ type: SET_CURRENT_USER, payload: response.data.user });
        } else {
          dispatch({ type: SET_CURRENT_USER, payload: null });
        }
      } catch (error) {
        dispatch({ type: SET_CURRENT_USER, payload: null });
      }
    };
    VerifyUser();
  }, [dispatch]);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  const root = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          index: true,
          element: <HomeComponent />,
        },
        {
          path: "/shop",
          element: currentUser ? (
            <ShopComponent />
          ) : (
            <Navigate to="/signIn" state={{ from: "/shop" }} replace />
          ),
        },
        {
          path: "/hats",
          element: <HatsComponent />,
        },
        {
          path: "/jackets",
          element: <JacketComponent />,
        },
        {
          path: "/sneakers",
          element: <SneakersComponent />,
        },

        {
          path: "/men",
          element: <MenComponent />,
        },
        {
          path: "/womens",
          element: <WomensComponent />,
        },
        {
          path: "/signUp",
          element: currentUser ? <Navigate to={"/"} /> : <SignUpComponent />,
        },
        {
          path: "/signIn",
          element: currentUser ? <Navigate to={"/"} /> : <SignInComponent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={root} />;
}

export default App;
