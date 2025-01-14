import Layout from "@/layout";
import ProgressBar from "@/src/components/ProgressBar";
import Hero4Slider from "@/src/components/slider/Hero4Slider";
import { projectThreeActive, servicesFiveActive } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import blogs from "./api/blogdata";

const Index4 = () => {
  return (
    <Layout header={4}>
      {/* Slider Section Start */}
      <Hero4Slider />
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-trust" />
                </div>
                <h4>
                  <Link legacyBehavior href="#">
                  Automation Expertise
                  </Link>
                </h4>
                <p>
                With a decade of experience, UiLogic delivers scalable solutions to streamline workflows and enhance efficiency.
                </p>
                <Link legacyBehavior href="#">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-technical-support" />
                </div>
                <h4>
                  <Link legacyBehavior href="#">
                    Technical Support
                  </Link>
                </h4>
                <p>
                UiLogic’s 850+ professionals provide fast and reliable support, backed by two decades of expertise.
                </p>
                <Link legacyBehavior href="#">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-45 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <h4>
                  <Link legacyBehavior href="#">
                    Digital Marketing
                  </Link>
                </h4>
                <p>Our team combines industry knowledge with innovative strategies to create impactful marketing solutions.</p>
                <Link legacyBehavior href="#">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-brainstorming" />
                </div>
                <h4>
                  <Link legacyBehavior href="#">
                  Proven Project Delivery
                  </Link>
                </h4>
                <p>
                UiLogic has completed 85+ projects, from simple builds to complex automation systems, across Automation, Integration, App Development, and Analytics.
                </p>
                <Link legacyBehavior href="#">
                  <a className="more-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(assets/images/services/features-bg.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* About Area start */}
      <section className="about-area-four pt-25 rpt-0 rel z-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-four-image rel z-1 mb-65 wow fadeInRight delay-0-2s">
                <div className="about-circle">
                  <img
                    src="assets/images/about/about-circle.png"
                    alt="Circle"
                  />
                  <img
                    className="text"
                    src="assets/images/about/about-circle-text.png"
                    alt="Circle Text"
                  />
                </div>
                <div className="image">
                  <img src="assets/images/about/about-four.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                  Transforming businesses with smart IT solutions.                
                  </h2>
                  <span className="bg-text">About</span>
                </div>
                <Tab.Container defaultActiveKey={"about-tap1"}>
                  <Nav as={"ul"} className="nav nav-pills nav-fill mb-35">
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap1"
                        eventKey="about-tap1"
                      >
                        About us
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap2"
                        eventKey="about-tap2"
                      >
                        Our Genesis
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap3"
                        eventKey="about-tap3"
                      >
                        Our Mission
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap1">
                      <p>
                        At UI Logic, we are pioneers in the realm of automation
                        consultancy, born out of the dynamic landscape of the
                        pandemic. Our journey began with a clear mission—to
                        empower organizations with the transformative force of
                        automation.
                      </p>
                      <ul className="list-style-one my-30">
                        <li>Automated Solutions</li>
                        <li>App Development</li>
                        <li>Integrated Solutions</li>
                        <li>Analytics &amp; Reporting</li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-10">
                          Learn About Us{" "}
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap2">
                      {/* <ul className="list-style-one my-30">
                        <li>Comprehensive UI/UX Assessment</li>
                        <li>Deep Contextual Research and 360° Planning</li>
                        <li>Wireframing &amp; Prototyping</li>
                      </ul> */}
                      <p>
                        Established during challenging times, UI Logic emerged
                        as a response to the evolving needs of businesses
                        seeking resilience and efficiency. We recognized the
                        transformative potential of automation and set out to
                        harness it for the benefit of organizations across
                        diverse industries.
                      </p>
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn mt-10">
                          Learn About Us{" "}
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap3">
                      <p>
                        UI Logic is on a mission to create enduring value
                        through automation. We are committed to driving
                        innovation, enhancing operational efficiency, and
                        fostering a future where automation is a strategic
                        cornerstone for organizations of all sizes.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Five Start */}
      <section className="services-area-five pt-65 rpt-35 pb-130 rpb-100 rel z-2">
        <div className="container-fluid">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services Provided by UiLogic Limited</h2>
            <span className="bg-text">Service</span>
          </div>
          <Slider {...servicesFiveActive} className="services-five-active">
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src="https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="automated">
                      Automated Solutions
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>Virtual robots mimic human actions to complete tasks</p>
                  <Link legacyBehavior href="/automated">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-4s">
              <img
                src="https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Services"
                width={"100%"}
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="app-dev">
                      App Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>Streamline Your Operations with Cognitive Automation</p>
                  <Link legacyBehavior href="/app-dev">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-6s">
              <img
                src="https://images.pexels.com/photos/8438862/pexels-photo-8438862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="integration">
                      Integrations
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>Gain Unparalleled Process Insights</p>
                  <Link legacyBehavior href="/integration">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>

            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src="https://images.pexels.com/photos/5474024/pexels-photo-5474024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Services"
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="/analytics-reporting">
                      Analytics & Reporting
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>Software application security</p>
                  <Link legacyBehavior href="/analytics-reporting">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <span className="bg-text">Service</span>
            </div>
          </Slider>
        </div>
      </section>
      {/* Services Area Five End */}
      {/* Skills Area start */}
      <section className="skills-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="skills-content mt-60 mb-70 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="section-title mb-55">
                      <span className="sub-title mb-15">
                        Skills &amp; Experience - UI Logic
                      </span>
                      <h2>Small Enough to Care Big Enough to Succeed</h2>
                      <span className="bg-text">Skills</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-secondary text-white">
                      <div className="progress-content one">
                        <ProgressBar value={100} color="#ffff" />
                      </div>
                      <h4>Automation Pioneers</h4>
                      <p>
                        We are pioneers in the realm of automation consultancy
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bgc-black text-white">
                      <div className="progress-content two">
                        <ProgressBar
                          value={95}
                          color="#ffff"
                          emptyFill={"#3d404c"}
                        />
                      </div>
                      <h4>Analytics & Reporting</h4>
                      {/* Insights & Analytics */}
                      <p>Data-Driven Decision Making</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="circle-progress-item bg-white">
                      <div className="progress-content three">
                        <ProgressBar
                          value={92}
                          color="#674df3"
                          emptyFill={"#e8e4fd"}
                        />
                      </div>
                      <h4>Integrations</h4>

                      <p>Smooth and sophisticated integrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="skills-bg"
          style={{
            backgroundImage: "url(assets/images/background/counter-bg.jpg)",
          }}
        />
      </section>
      {/* Skills Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area-two pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
          <span className="bg-text">Process</span>
        </div>
        <div className="work-process-line-two text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discover</h4>
                  <p>
                    Consult with the client for a deeper understanding of the
                    client’s requirements, analyse their current processes, and
                    discuss which aspects can be automated besides deciding on
                    targets for automation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Planning</h4>
                  <p>
                    A comprehensive plan that outlines the goals, objectives,
                    and key deliverables of the project, timelines, and key
                    performance indicators that will have to be implemented and
                    followed in unison by the business and technical teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Design &amp; Dev</h4>
                  <p>
                    Elaborate on the development of the automation solution
                    incorporating the aspects of UI/UX design as well as
                    compatibility with the target systems embodied by the RPA
                    bots.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Testing</h4>
                  <p>
                    Perform functional, performance and security test that
                    should include user acceptance test (UAT) in other to
                    ascertain that the automation solution achieves the expected
                    functionality without failure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Deployment &amp; Delivery</h4>
                  <p>
                    Implement the solution in a production environment, using
                    practices to enhance solution delivery to operate when
                    required, and on time, within budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Project Area Four Start */}
      {/* <section className="project-area-four rel z-2">
        <div className="container-fluid">
          <Slider {...projectThreeActive} className="project-three-active">
            <div className="project-item-three wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three1.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Automated Solutions
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three big-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/project-three2.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    App Development
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/project-three3.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Integrations
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/project-three1.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Insights & Analytics
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three big-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three2.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Cyber Security
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
            <div className="project-item-three wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/project-three3.jpg"
                alt="Projects"
              />
              <div className="content">
                <span className="category">IT Consulting</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Integration
                  </Link>
                </h4>
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="detail-btn">
                  <i className="flaticon-arrow" />
                </a>
              </Link>
            </div>
          </Slider>
        </div>
      </section> */}
      {/* Project Area Four End */}
      {/* Pricing Plan Area start */}
      {/* <section className="price-plan-area-two pt-110 rpt-80 pb-170 rpb-140 rel z-1">
        <div className="container pt-20">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
            <span className="bg-text">Pricing</span>
          </div>
          <div className="pricing-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">0.0</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Standard Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">19.8</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-6s">
                  <h4 className="title">Silver Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">49.6</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-plan-item style-two wow fadeInUp delay-0-8s">
                  <h4 className="title">Golden Plan</h4>
                  <span className="price-count">5 Services Included</span>
                  <div className="icon">
                    <i className="flaticon-technology" />
                  </div>
                  <ul>
                    <li>Quality Supports</li>
                    <li>IT Consultations</li>
                    <li>Product Design</li>
                    <li>Search Engine (SEO )</li>
                    <li>Market Research</li>
                  </ul>
                  <span className="price">99.5</span>
                  <Link legacyBehavior href="/pricing">
                    <a className="theme-btn style-two">
                      Choose Plan <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pricing Plan Area end */}
      {/* Testimonial Area Four start */}
      {/* <section className="testimonials-area-four rel z-1 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 ms-lg-auto">
              <div className="testimonials-four-content py-65 rpt-0 rpb-35">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>What Our Client’s Say About Our Agency</h2>
                  <span className="bg-text">Says</span>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      Sed ut perspiciatis unde omnis iste natus voluptatem accus
                      antiume dolorem queauy antium totam aperiam eaque quaey
                      abillosa inventore veritatis vitaec
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Andrew D. Bricker</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      On the other hand denounce righteous indignation and
                      dislike men who are so beguiled and demorzed charms of
                      pleasure of the moment blinde
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Michael M. Callaway</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author4.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      At vero eos et accusamuse iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatu delntc atque corrupti
                      quos dolores quas molestias
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>William G. Manno</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial-four-image"
          style={{
            backgroundImage:
              "url(assets/images/testimonials/testimonial-four.jpg)",
          }}
        />
      </section> */}
      {/* Testimonial Area Three end */}
      {/* Partners Area start */}
      <section className="partners-area-two bgc-secondary pt-80 pb-50 rel z-1">
        <div className="container">
          <div className="section-title text-white text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>Robotic process automation partners we work with</h2>
            <span className="bg-text">partners </span>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img src="assets/images/logos/client-1.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img src="assets/images/logos/client-2.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img src="assets/images/logos/client-6.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img src="assets/images/logos/client-4.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img src="assets/images/logos/client-5.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="https://uilogic.netlify.app/assets/img/clients/client-3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="partners-shapes">
          <img
            className="left-shape"
            src="../public/assets/images/services/pa"
            alt="Shape"
          />
          <img
            className="right-shape"
            src="assets/images/partners/partner-shape-right.png"
            alt="Shape"
          />
        </div> */}
      </section>
      {/* Partners Area end */}
      {/* Blog Area Four start */}
      <section className="blog-area-four pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-30">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-10">Our Blog &amp; News</span>
                <h2>Latest Blog, New &amp; Articles</h2>
                <span className="bg-text">Blog</span>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn style-four mb-30 wow fadeInRight delay-0-2s">
                  View More News <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          {blogs.slice(0, 2).map((blog, index) => (
            <div
              className="blog-item style-four wow fadeInUp delay-0-2s"
              key={index}
            >
              <div className="image">
                <img src={blog.cover.coverImg} alt="Blog" />
              </div>
              <div className="content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <a href="#">{blog.cover.date}</a>
                  </li>
                </ul>
                <h4>
                  <Link legacyBehavior href={`/${index}`}>
                    {blog.cover.title}
                  </Link>
                </h4>
                <div className="author-more">
                  <span className="author">
                    By{" "}
                    <a href="#">
                      {" "}
                      <span style={{ marginLeft: "10px" }}>
                        {blog.cover.author}
                      </span>
                    </a>
                  </span>
                  <Link legacyBehavior href={`/${index}`}>
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four1.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Jule 26, 2022</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Comments (25)</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Use Google CrUX To Analyze And Compare Performance
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  By <a href="#">Luis J. Hill</a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Jule 26, 2022</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">Comments (25)</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Voice Usabilit Consideration Partially Visually Hidden
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  By <a href="#">Luis J. Hill</a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};
export default Index4;
