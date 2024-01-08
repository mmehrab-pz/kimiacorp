import logo from "../../assets/img/png-jpg-webp/logo2.png";
import "../../assets/styles/header/master.css";
import { Link } from "react-router-dom";

function activeMenu() {
  document.getElementById("mobile-menu").classList.add("active-menu");
}
function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("active-menu");
}

export default function Header() {
  return (
    <>
      <nav className="row" id="navBar">
        <a href="#" className="col-6 col-lg-1">
          <figure>
            <img src={logo} alt="kiamiacorp logo" />
          </figure>
        </a>
        <ul className="d-none d-lg-flex col-7 col-xl-8 col-xxl-9">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="products">
              products
              <i className="fa-solid fa-caret-down"></i>
            </Link>
            <ul>
              <li>
                <Link to="#">amine</Link>
              </li>
              <li>
                <Link to="#">acid</Link>
              </li>
              <li>
                <Link to="#">aldehyde</Link>
              </li>
              <li>
                <Link to="#">halide</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="services">services</Link>
          </li>
          <li>
            <Link to="about">about</Link>
          </li>
          <li>
            <Link to="contact">contact</Link>
          </li>
        </ul>
        <div className="d-none d-lg-flex col-4 col-xl-3 col-xxl-2">
          <a href="#">
            search
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </a>
          <Link to="checkout">
            checkout
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>
        </div>
        <div id="mobile-menu-btn" className="col-6 d-lg-none">
          <span onClick={activeMenu}>
            <i className="fa-solid fa-bars-staggered"></i>
          </span>
        </div>
        <div id="mobile-menu" className="d-lg-none">
          <ul>
            <li>
              <Link to="#">home</Link>
            </li>
            <li>
              <Link to="#">product</Link>
            </li>
            <li>
              <Link to="#">services</Link>
            </li>
            <li>
              <Link to="#">about</Link>
            </li>
            <li>
              <Link to="#">contact</Link>
            </li>
            <li>
              <div onClick={closeMenu}>
                <i class="fa-solid fa-angle-up"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
