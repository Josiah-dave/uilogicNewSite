import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";

const ServiceDetails = () => {
  const accordionData = [
    {
      id: 1,
      title: "Why Get Our IT Services ?",
      text: " At UI Logic, we provide the best IT services tailored to the unique needs of your business. Our team of experts ensures that you get top-notch solutions that drive efficiency, innovation, and growth. We focus on delivering high-quality services that not only meet but exceed your expectations.",
    },
    {
      id: 2,
      title: "BestTeam Member Provider ?",
      text: "Our team comprises highly skilled professionals with extensive experience in IT services and automation consultancy. We carefully select our team members to ensure that they bring the best expertise and knowledge to your projects, enabling us to deliver superior services that drive your business success.",
    },
    {
      id: 3,
      title: "Learn About Our Company ?",
      text: "At UI Logic, we started our journey during the pandemic with a mission to empower organizations through automation. Our focus on innovation and customer-centric solutions has made us leaders in automation consultancy. We are committed to helping businesses transform and thrive in the digital age.",
    },
    {
      id: 4,
      title: "Payment Method ?",
      text: " We offer flexible payment methods to suit your convenience. You can choose from a variety of payment options, including credit cards, bank transfers, and online payment platforms. Our goal is to make the payment process as smooth and hassle-free as possible for you.",
    },
  ];
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Centralize and Prioritize Your Business With Ease</h2>
                </div>
                <p>
                  Beyond Intranet's SharePoint team will create a unique
                  SharePoint experience for your business.. We will help
                  integrate SharePoint with enterprise systems like SAP,
                  Microsoft Dynamics 365, Salesforce, etc. Our experts will also
                  assist your business in custom integration projects that
                  require individual approach and solutions.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>We Provide Best IT Services to Growth you Business</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research &amp; Planning</li>
                      <li>Wireframing &amp; Prototyping</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      At UI Logic, we are pioneers in the realm of automation
                      consultancy, born out of the dynamic landscape of the
                      pandemic. Our journey began with a clear mission—to
                      empower organizations with the transformative force of
                      automation.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Optimize your IT operations with our comprehensive service
                  management solutions, designed to streamline processes,
                  enhance efficiency, and ensure seamless service delivery. We
                  provide end-to-end management of your IT services, from
                  incident resolution and change management to performance
                  monitoring and continuous improvement. Trust UI Logic to
                  maintain the highest standards of service quality and
                  reliability, allowing you to focus on your core business
                  objectives.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="">
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="">
                        Sales and Marketing
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="">
                        Human Resources
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="">
                        Frontline Workers
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="">
                        Customer Service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+1558955488555" className="number">
                    <i className="fas fa-phone" /> +1 5589 55488 555
                  </a>
                  <img
                    className="bg-shape"
                    src="assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/app-dev">
                    App Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/app-dev">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <Link legacyBehavior href="/integration">
              <a className="show-all" />
            </Link> */}
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/integration">
                    Integrations
                  </Link>
                </h4>
                <Link legacyBehavior href="/integration">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;
