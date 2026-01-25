import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
]);