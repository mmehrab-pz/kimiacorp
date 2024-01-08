import "../../assets/styles/footer/master.css";
import "../../assets/styles/footer/local.css";
import logo from "../../assets/img/png-jpg-webp/logo2.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <footer id="footer" className="">
        <div className="">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <ul>
            <li>
              <i className="fa-solid fa-phone-flip"></i>
              (408) 748-1046
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
                info@kimiacorp.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-address-card"></i>
                3048 scott blvd. santa clara, CA 95054
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6>menu</h6>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="products">products</Link>
            </li>
            <li>
              <Link to="services">services</Link>
            </li>
            <li>
              <Link to="#">blog</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h6>Products</h6>
          <ul>
            <li>
              <a href="#">fine chemicals</a>
            </li>
            <li>
              <a href="#">rare chemicals</a>
            </li>
            <li>
              <a href="#">linkers</a>
            </li>
            <li>
              <a href="#">kits</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
