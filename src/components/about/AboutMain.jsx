import img5 from '../../assets/img/png-jpg-webp/img5.jpg'
import '../../assets/styles/about/master.css'
import '../../assets/styles/about/local.css'

export default function AboutMain() {
  return (
    <>
      <main id="about-main">
        <section id="about-us" className="row">
          <div className="col-12  col-lg-7 row">
            <span className="col-12 col-lg-2">
              <div>
                <i className="fa-brands fa-connectdevelop"></i>
              </div>
            </span>
            <div className="col-12 col-lg-10">
              <h2>about kimia corp.</h2>
              <p>
                Kimia Corporation is a Santa Clara, California based contract
                research organization founded in 1994 and specialized in the
                synthesis of small organic molecules. Encompassing a highly
                qualified and diversified team of chemists, our expertise allows
                us to cover a wide range of organic compounds and processes. At
                Kimia we focus on the preparation of high purity special
                compounds for facilitating your research. Whether you know the
                exact compounds you desire or have reached a state of
                frustration with your research and desperately seeking
                alternative specialty compounds, Kimia is standing by to serve
                you. In addition Kimia has developed and contributed to various
                technologies which have proven fundamental towards research in
                this field. A superior dedication to confidentiality, research
                and service, shall prove Kimia your dependable source for years
                to come.
              </p>
            </div>
          </div>
          <div className="d-none d-md-flex col-lg-5">
            <figure>
              <img src={img5} alt="" />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
