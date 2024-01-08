import "./assets/styles/normalize.css";
import Header from "./components/main/Header";
import HeaderContent1 from "./components/main/HeaderContent1";
import Footer from "./components/main/Footer";
import Copyright from "./components/main/Copyright";
import HomeMain from "./components/home/HomeMain";
import ServicesMain from "./components/services/ServicesMain";
import HeaderContent2 from "./components/main/HeaderContent2";
import AboutMain from "./components/about/AboutMain";
import ContactMain from "./components/contact/ContactMain";
import ProductsMain from "./components/products/ProductsMain";
import CheckoutMain from "./components/checkout/CheckoutMain";
import ProductMain from "./components/product/ProductMain";
import { Routes, Route } from "react-router-dom";


export default function Main() {
  return (
    <>
      <header>
        <>{<Header />}</>
        <Routes>
          <Route path="/" element={<HeaderContent1 />} />
          <Route path="services" element={<HeaderContent2 name="services"/>} />
          <Route path="about" element={<HeaderContent2 name="about"/>} />
          <Route path="contact" element={<HeaderContent2 name="contact"/>} />
          <Route path="product" element={<HeaderContent2 name="product"/>} />
        </Routes>
      </header>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="services" element={<ServicesMain />} />
        <Route path="about" element={<AboutMain />} />
        <Route path="contact" element={<ContactMain />} />
        <Route path="products" element={<ProductsMain />} />
        <Route path="checkout" element={<CheckoutMain />} />
        <Route path="product" element={<ProductMain />} />
      </Routes>
      <>{<Footer />}</>
      <>{<Copyright />}</>
    </>
  );
}
