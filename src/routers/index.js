import {IoLocationSharp} from 'react-icons/io5'
import OfferProducts from '../components/offerProducts';
import SearchResult from '../components/searchResult';
import ProductView from '../components/viewProduct';
import MainPage from "../pages/mainPage";
import SelectedProductsPage from '../pages/selectedProducts';

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
    },
    {
      title: "Selected products",
      path: "/selected-products",
      component: SelectedProductsPage,
      icon: <IoLocationSharp />,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
      title: "Offer products",
      path: "/offer-products",
      component: OfferProducts,
      icon: <IoLocationSharp />,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
      title: "Product view",
      path: "/product/:id",
      component: ProductView,
      icon: <IoLocationSharp />,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
      title: "Search result",
      path: "/search-result",
      component: SearchResult,
      icon: <IoLocationSharp />,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    }
]