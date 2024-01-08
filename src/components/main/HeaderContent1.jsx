import img2 from "../../assets/img/png-jpg-webp/img2.jpg";
import molecule from "../../assets/img/png-jpg-webp/molecule.png";
import "../../assets/styles/headerContent1/master.css";
import "../../assets/styles/headerContent1/local.css";

export default function HeaderContent1() {
  return (
    <>
      <section id="headerContent1">
        <figure>
          <img src={img2} alt="" />
        </figure>
        <h2>search</h2>
        <form action="#">
          <input
            type="text"
            placeholder="search by name, CAS number, catalog number or molecular formula"
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div>
          structure search
          <span>
            <img src={molecule} alt="#" />
          </span>
        </div>
      </section>
    </>
  );
}
