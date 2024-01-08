import img3 from '../../assets/img/png-jpg-webp/img3.jpg'
import img4 from '../../assets/img/png-jpg-webp/img4.jpg'
import '../../assets/styles/home/master.css'

export default function HomeMain() {
  return (
    <>
      <main id="home-main">
        <section id="home-main-about" className="row">
          <div className="col-12 col-md-6">
            <figure>
              <img src={img3} alt="" />
            </figure>
          </div>
          <div className="col-12 col-md-6">
            <i className="fa-solid fa-circle-info"></i>
            <h3>about us</h3>
            <p>
              Kimia Corporation is a contract research organization based in
              Santa Clara, California that focuses on custom synthesis for
              several industries such as drug discovery, diagnostics, etc. Kimia
              also has a catalog of small molecules that continues to expand.
            </p>
            <a href="#">read more</a>
          </div>
        </section>
        <section id="home-main-update">
          <figure>
            <img src={img4} alt="" />
          </figure>
          <h3>get last updates and products</h3>
          <form action="#">
            <input type="email" placeholder="enter your email" />
            <button>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
