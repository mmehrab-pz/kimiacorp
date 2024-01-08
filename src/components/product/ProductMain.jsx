import '../../assets/styles/product/master.css'
import svg1 from "../../assets/img/svg/img1.svg";
import svg2 from "../../assets/img/svg/img2.svg";
import svg3 from "../../assets/img/svg/img3.svg";

export default function ProductMain() {
  return (
    <>
      <main id="product-main" className="row">
        <aside className="col-4" id="quick-nav">
          <nav>
            <h3>quick navbar</h3>
            <i className="fa-solid fa-angle-down"></i>
            <ul>
              <li>
                <a href="#product-information">
                  <i className="fa-solid fa-angle-right"></i>
                  Product Information
                </a>
              </li>
              <li>
                <a href="#product-detail">
                  <i className="fa-solid fa-angle-right"></i>
                  Product Detail & Related Documents
                </a>
              </li>
              <li>
                <a href="#specification">
                  <i className="fa-solid fa-angle-right"></i>
                  Sepecification
                </a>
              </li>
              <li>
                <a href="#related-product">
                  <i className="fa-solid fa-angle-right"></i>
                  Related Products
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="col-8">
          <figure id="img-product">
            <img src={svg1} alt="" />
          </figure>
          <div id="product-information">
            <h2>product information</h2>
            <table className="table table-bordered">
              <tr>
                <th>catalog number:</th>
                <td>KMA0198</td>
              </tr>
              <tr>
                <th>CAS number:</th>
                <td>1219112-94-3</td>
              </tr>
            </table>
          </div>
          <div id="product-detail">
            <h2>PRODUCT DETAIL & RELATED DOCUMENTS</h2>
            <table className="table table-bordered">
              <tr>
                <th>unit</th>
                <th>price</th>
                <th>qty</th>
              </tr>
              <tr>
                <td>1 G</td>
                <td>100$</td>
                <td>
                  <input type="text" placeholder="0" />
                </td>
              </tr>
            </table>
            <div>
              <div>
                <i className="fa-solid fa-cart-shopping"></i>
                add to cart
              </div>
              <div>
                <i className="fa-solid fa-flask"></i>
                add custom order
              </div>
            </div>
          </div>
          <div id="specification">
            <h2>specification</h2>
            <table className="table table-bordered">
              <tr>
                <th>Catalog Number</th>
                <td>KMA0198</td>
              </tr>
              <tr>
                <th>CAS Number</th>
                <td>1219112-94-3</td>
              </tr>
              <tr>
                <th>Purity</th>
                <td>95+%</td>
              </tr>
              <tr>
                <th>Is Rare</th>
                <td>No</td>
              </tr>
              <tr>
                <th>Ships In</th>
                <td>2-3 Days</td>
              </tr>
              <tr>
                <th>SMILES</th>
                <td>CC1=NC=CC(NC(OC(C)(C)C)=O)=C1</td>
              </tr>
              <tr>
                <th>Molecular Formula</th>
                <td>C11H16N2O2</td>
              </tr>
              <tr>
                <th>Molecular Weigth</th>
                <td>208.26</td>
              </tr>
            </table>
          </div>
          <div id="related-product">
            <h2>RELATED PRODUCTS</h2>
            <section>
              <div className="product-card">
                <figure id="product-card-img">
                  <img src={svg1} alt="" />
                </figure>
                <div>
                  <h3 id="card-formula">6-(Boc-Amino)picoline</h3>
                  <p id="card-catalog-number">KMA0200</p>
                  <a href="#">
                    see more
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="product-card">
                <figure id="product-card-img">
                  <img src={svg2} alt="" />
                </figure>
                <div>
                  <h3 id="card-formula">
                    2,5-Dioxopyrrolidin-1-yl
                    7-hydroxy-2-oxo-2H-chromene-3-carboxylate
                  </h3>
                  <p id="card-catalog-number">KMA0197</p>
                  <a href="#">
                    see more
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="product-card">
                <figure id="product-card-img">
                  <img src={svg3} alt="" />
                </figure>
                <div>
                  <h3 id="card-formula">N1,N4-dibenzyl spermine</h3>
                  <p id="card-catalog-number">KMA0193</p>
                  <a href="#">
                    see more
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
