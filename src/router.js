import { createRouter, createWebHistory } from "vue-router";

import About from './pages/About';
import Basket from "./pages/Basket";
import Campaigns from "./pages/Campaigns";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import Jewelry from "./pages/Jewelry";
import Press from "./pages/Press";
import ProductPage from "./pages/ProductPage";
import Search from "./pages/Search";
import Stocklist from "./pages/Stocklist";
import Values from "./pages/About";

const route = [{ path: "/", component: Homepage }, { path: "/About", component: About }, { path: "/Basket", component: Basket }, { path: "/Campaigns", component: Campaigns }, { path: "/ContactUs", component: ContactUs }, { path: "/Homepage", component: Homepage }, { path: "/Jewelry", component: Jewelry }, { path: "/Press", component: Press }, { path: "/ProductPage", component: ProductPage }, { path: "/Search", component: Search }, { path: "/Stocklist", component: Stocklist }, { path: "/Values", component: Values },]

const router = createRouter({
    history: createWebHistory(), route
})


export default router
