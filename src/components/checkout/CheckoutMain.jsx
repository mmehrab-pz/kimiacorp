import '../../assets/styles/checkout/master.css'
import '../../assets/styles/checkout/local.css'

export default function CheckoutMain() {
  return (
    <>
      <main id="checkout-main">
        <section className="row">
          <form className="col-12 col-lg-6" action="#">
            {/* <!-- ---------------basic section---------------- --> */}
            <div>
              <h4>basic information</h4>
              <fieldset>
                {/* <!-- <label for="fullName" id="mmd">full name</label> --> */}
                <input id="fullName" type="text" placeholder="full name" />
              </fieldset>
              <fieldset>
                {/* <!-- <label for="fullName" id="mmd">full name</label> --> */}
                <input id="fullName" type="text" placeholder="email address" />
              </fieldset>
              <fieldset>
                {/* <!-- <label for="fullName" id="mmd">full name</label> --> */}
                <input id="fullName" type="text" placeholder="password" />
              </fieldset>
              <p>
                already have an account?
                <a href="#">login here.</a>
              </p>
            </div>
            {/* <!-- ---------------payment section---------------- --> */}
            <div>
              <h4>payment details</h4>
              <fieldset className="d-flex" id="chechbox-field">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-capitalize"
                    for="flexRadioDefault1"
                  >
                    credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label text-capitalize"
                    for="flexRadioDefault2"
                  >
                    paypal
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <input id="fullName" type="text" placeholder="name on card" />
              </fieldset>
              <fieldset>
                <input id="fullName" type="text" placeholder="card number" />
              </fieldset>
              <div>
                <fieldset>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="mm/dd/yy"
                    className="text-lowercase"
                  />
                </fieldset>
                <fieldset>
                  <input id="fullName" type="text" placeholder="CVC" />
                </fieldset>
              </div>
            </div>
          </form>
          <div className="col-12 col-lg-6">
            <h3>summary</h3>
            <form action="#">
              <input type="text" placeholder="coupon here" />
              <button>apply</button>
            </form>
            <div>
              <p>subtotal</p>
              <h6>0$</h6>
            </div>
            <div>
              <p>discount</p>
              <h6>0$</h6>
            </div>
            <section>
              <p>total</p>
              <h6>0$</h6>
            </section>
            <a href="#">checkout now</a>
          </div>
        </section>
      </main>
    </>
  );
}
