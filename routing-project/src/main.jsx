import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router";
import Errror404 from "./components/pages/Errror404";
import Faq from "./components/pages/Faq";
import Layout from "./components/common/Layout";
import Login from "./components/pages/Login";
import ProductsPage from "./components/pages/Product";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* http://localhost:5173/ */}
      <Route element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        {/* http://localhost:5173/about-us */}
        <Route path={"/about-us"} element={<About />} />
        {/* http://localhost:5173/services */}
        <Route path={"/services"} element={<Services />} />
        {/* http://localhost:5173/contact */}
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/product"} element={<ProductsPage />} />

        <Route path={"*"} element={<Errror404 />} />

      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);
