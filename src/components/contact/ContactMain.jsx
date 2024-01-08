import img2 from '../../assets/img/png-jpg-webp/img2.jpg'
import img4 from '../../assets/img/png-jpg-webp/img4.jpg'
import '../../assets/styles/contact/master.css'
import '../../assets/styles/contact/local.css'

export default function ContactMain() {
  return (
    <>
      <main id="contact-main">
        <section id="contact-ask" className="row">
          <figure>
            <img src={img2} alt="" />
          </figure>
          <div className="col-12 col-lg-6">
            <h2>ask us anything. anytime.</h2>
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
          <div className="col-12 col-lg-6">
            <form action="#" id="contact-form">
              <input type="text" name="" id="" placeholder="name" />
              <input
                type="text"
                name=""
                id=""
                placeholder="company / institution"
              />
              <div>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="phone" />
              </div>
              <input type="text" placeholder="subject" />
              <textarea name="" id="" placeholder="tell us more"></textarea>
              <button>
                send
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </section>
        <section id="contact-main-update">
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
