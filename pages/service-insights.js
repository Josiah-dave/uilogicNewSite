import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const ServiceInsights = () => {
  return (
    <Layout>
      <PageBanner pageName={"Insights and Analytics"} />
      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-five1.jpg" alt="About" />
                <img src="assets/images/about/about-five2.jpg" alt="About" />
                <div className="experience-years">
                  <span className="years">10</span>
                  <h4>Years Of UiLogic Solutions</h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">What we offer</span>
                  <p>
                  Revolutionise operations by deploying digital agents that replicate human actions, elevating productivity and precision.
                  </p>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Data Analysis and Visualization:
                        </Link>
                      </h4>
                      <p>
                      We excel at turning complex data into clear, interactive visualizations. Our experts use state-of-the-art tools and techniques to uncover hidden patterns and trends.
                      </p>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Customized Dashboards and Reports:
                        </Link>
                      </h4>
                      <p>
                      We create customized dashboards and reports tailored to your organization's unique KPIs and metrics. Easily monitor performance and track progress towards your goals.
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Real-Time Data Access:
                        </Link>
                      </h4>
                      <p>
                      Our solutions enable real-time data access, giving you a competitive edge in today's fast-paced business environment.
                      </p>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Predictive Analytics:
                        </Link>
                      </h4>
                      <p>
                      Leverage the power of predictive analytics to anticipate future trends, make proactive decisions, and stay ahead of the curve.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
      {/* <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Simplicity
                  </Link>
                </h4>
                <p>
                At UI Logic, simplicity is at the core of our solutions. We believe that automation should streamline processes, making your work more efficient and hassle-free.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Social Good
                  </Link>
                </h4>
                <p>
                We are committed to leveraging automation for social good. We aim to drive positive change and create a lasting impact. 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-mission-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Trust Partner
                  </Link>
                </h4>
                <p>
                UI Logic stands as a trusted partner for organizations navigating the automation landscape. Our expertise, reliability, we provide the highest level of support and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Company Statistics</span>
                    <h2>Learn About Our Company  Statistics</h2>
                  </div>
                  <Link legacyBehavior href="/about">
                    <a className="read-more">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={100}
                        data-stop={85}
                      >
                        <Counter end={85} />
                      </span>
                      <span className="counter-title">Project Completed</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={100}
                        data-stop="35"
                      >
                        <Counter end={35} decimals="1" />
                      </span>
                      <span className="counter-title">Happy Clients </span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={100}
                        data-stop="10"
                      >
                        <Counter end={10} decimals="1" />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text k-plus"
                        data-speed={100}
                        data-stop={15}
                      >
                        <Counter end={15} />
                      </span>
                      <span className="counter-title">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Team Area start */}
      {/* <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
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
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section> */}
      {/* Team Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>
                  Top-Notch Software Development and Digital Transformation
                </h2>
              </div>
            </div>
          </div>
          <div className="why-choose-tab">
            <ul className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#wc-tap1"
                >
                  <i className="flaticon-creativity" />{" "}
                  <span>UX/UI Design</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap2">
                  <i className="flaticon-test" /> <span>Apps Development</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap3">
                  <i className="flaticon-cyber-security-1" />{" "}
                  <span>Cyber Security</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap4">
                  <i className="flaticon-support" /> <span>Tech Support</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="wc-tap1">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src="assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                      <li>Accurate Planning</li>
                        <li>Build Apps</li>
                        <li>Connect with Data sources</li>
                        <li>User Adoption</li>
                        <li>Share the App</li>
                        <li>Export and Publish</li>
                        <li>Improved ROI</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap2">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                      <li>Accurate Planning</li>
                        <li>Build Apps</li>
                        <li>Connect with Data sources</li>
                        <li>User Adoption</li>
                        <li>Share the App</li>
                        <li>Export and Publish</li>
                        <li>Improved ROI</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img
                        src="assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap3">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src="assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Accurate Planning</li>
                        <li>Build Apps</li>
                        <li>Connect with Data sources</li>
                        <li>User Adoption</li>
                        <li>Share the App</li>
                        <li>Export and Publish</li>
                        <li>Improved ROI</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap4">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        An impactful Application Needs an innovative and
                        interactive.
                      </h3>
                      <p>
                        Our experts help create the right website for across all
                        major platforms and devices. Taking into consideration
                        your user behavior volu promotey the optimal experience
                        we design responsive performance
                      </p>
                      <ul className="list-style-one pt-5">
                      <li>Accurate Planning</li>
                        <li>Build Apps</li>
                        <li>Connect with Data sources</li>
                        <li>User Adoption</li>
                        <li>Share the App</li>
                        <li>Export and Publish</li>
                        <li>Improved ROI</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-30">
                          Learn More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img
                        src="assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
      {/* Testimonials Area Two end */}
      {/* Partners Area start */}
      <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
        <div className="container">
          <hr className="mb-75" />
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/logos/client-1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/logos/client-2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/logos/client-6.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/logos/client-4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/logos/client-5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
          <hr className="mt-45" />
        </div>
      </div>
    </Layout>
  );
};
export default ServiceInsights;
