import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import Link from "next/link";

const Services = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Automated Solutions"}
        Image=""
      /> */}
      <PageBanner
        pageName="Automated Solutions"
        pageTitle="Automated Solutions"
        image="https://media.licdn.com/dms/image/D5612AQGl2x7Fdp26Zg/article-cover_image-shrink_600_2000/0/1677069085632?e=2147483647&v=beta&t=Kexn7__ryFVHL1HNo_YaQ67bDgUDl_Vp0IYJJfS_pqY"
      />
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="col-xl-8 mb-5 col-lg-8 mx-auto">
          <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
            <div className="section-title mb-15">
              <span className="sub-title mb-15"></span>
              <h3 className="text-center">AUTOMATED SOLUTIONS</h3>
            </div>
            <p>
              Automation takes care of all monotonous tasks, freeing the staff
              to focus on the most crucial tasks. Rather than becoming impatient
              with the tedious manual labour, we step in and assist. Our
              consultants colaborate with your staff to ensure that they devote
              their time and energy to matters such as client care,
              problem-solving when needed, and handling any exceptional
              situations that call for human intervention.
            </p>

            <div className="section-title mb-15 mt-40">
              <span className="sub-title mb-15">Key benefits of RPA:</span>
              {/* <h2>Create, Design And Fuel Business Growth</h2> */}
            </div>
            <div className="row pt-15">
              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-trust" />
                  </div>
                  <ul className="text-dark">
                    <h3>Automate & Streamline Tasks</h3>
                    <li>
                      {" "}
                      By leveraging RPA, mundane routine workflows like data
                      entry and report generation can be automated, thereby
                      minimizing mistakes and allowing your team to spend their
                      time doing far more productive activities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-technical-support" />
                  </div>
                  <ul className="text-dark">
                    <h3>Boost Productivity & Efficiency</h3>
                    <li>
                      {" "}
                      Thanks to the automation of RPA, your employees are less
                      preoccupied or their tons of administration and are able
                      to concentrate on weighty matters, showing better customer
                      service and even quicker reactions in all aspects.
                    </li>
                  </ul>
                  <h4></h4>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-technical-support" />
                  </div>
                  <ul className="text-dark">
                    <h3>Scalable & Flexible Solutions</h3>
                    <li>
                      {" "}
                      RPA technology is flexible and can easily be expanded, allowing you to develop your automation abilities further and cater to new business requirements while not depleting your assets.

                    </li>
                  </ul>
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
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
      {/* Video Area start */}
      {/* <div className="video-area-two rel z-1">
        <div className="container">
          <div className="video-wrap-two wow fadeInUp delay-0-2s">
            <img src="assets/images/background/video.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Area end */}
      {/* Services Area start */}
      {/* <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Offer the Finest IT Solutions</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Integration services
                    </Link>
                  </h4>
                  <p>
                    What we do best is to seamlessly fit into the Microsoft
                    environment. Much more, we assist in integrating platforms
                    including Dynamics 365, SharePoint, and Teams, among others,
                    to form an optimized system for technology and business
                    process investments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      App Development
                    </Link>
                  </h4>
                  <p>
                    In simple terms, our team builds custom applications for
                    which organizations need a tailored response to their unique
                    business problems. We provide you with innovative mobile app
                    solutions while designing robust enterprise-level platforms
                    with easy interfaces to fit your requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6"></div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Automated Solutions
                    </Link>
                  </h4>
                  <p>
                  Our team provides end-to-end automation services that offer design and implementation of RPA solutions for processes that require time-consuming manual intervention. Right from exception handling to boosting customer service standards, we make sure your business operates without many human interferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="automated">
                      Analytics &amp; Reporting
                    </Link>
                  </h4>
                  <ul className="">
                    <li>
                      With advanced tools, such as Power BI, we provide
                      analytics insight and comprehensive reporting.
                    </li>
                    <li>
                      {" "}
                      Custom dashboards visualize key data in real-time to drive
                      growth and performance-enhancing business decisions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Services Area end */}
      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    Guaranteed Customer Satisfaction
                  </span>
                  <h2>Fuel your business growth with Automation</h2>
                </div>
                <p>
                  UI Logic is an experienced team of specialists who assist
                  businesses all over the globe by means of providing them with
                  the necessary tools to succeed and grow. This means we have
                  expertise in helping identify areas where change or
                  improvements can occur and zones for success to be embraced in
                  your business, as well as in your employees.
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Best Trusted Partner
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          24/7 Tehnical Support
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/about/satisfaction-two.jpg"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>10 Years Of Experience IT Solutions</h4>
                  {/* <img
                    src="assets/images/about/satisfaction-author.png"
                    alt="Author"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
