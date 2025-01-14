import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need help with Automation ?</span>
              <h2>We’re Here to Drive Your Business Growth with Smart IT Solutions.</h2>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
                Contact us <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:+1 5589 55488 555">+49 163 102 3674</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30 ">
                <Link legacyBehavior href="/index">
                  <a>
                    <img
                      src="assets/images/hero/uilogic_logo11.jpeg"
                      alt="Logo"
                      style={{ width: "100px" }}
                    />
                  </a>
                </Link>
              </div>
              <p>
                Our journey began with a clear mission—to empower organizations
                with the transformative force of automation.
              </p>
              <Link legacyBehavior href="/about">
                <a className="read-more">
                  Learn More Us <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Newsletter</h4>
              <p>
                We have exciting updates and important news to share with
                you,Kindly provide your email to receive our newsletter.
              </p>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="sales@uilogic.io"
                  required
                />
                <button>Sign Up</button>
              </form>
              <h5>Follow Us</h5>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/">{`Home`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">{`About `}</Link>
                    </li>
                    <li>
                      {/* <Link
                        legacyBehavior
                        href="service-details"
                      >{` Services`}</Link> */}
                    </li>

                    <li>
                      <Link legacyBehavior href="blog">{`Blog`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">{`Contact us`}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="automated">
                        <a>Automation</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="app-dev">
                        <a> App Development</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="analytics-reporting">
                        <a> Analytics & Reporting</a>
                      </Link>
                    </li>
                  
                    <li>
                      <Link legacyBehavior href="integration">
                        <a>Integrations</a>
                      </Link>
                    </li>
                 

                   
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Support</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>

                    {/* <li>
                      <Link legacyBehavior href="contact">
                        <a>Password Protected</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        Licenses
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div> */}
    </footer>
  );
};
export default Footer;
