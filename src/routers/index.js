import {IoLocationSharp} from 'react-icons/io5'
import MainPage from "../pages/mainPage";

export const public_routes = [
    {
      title: "Main page",
      path: "/",
      component: MainPage,
      icon: <IoLocationSharp />,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    }
]