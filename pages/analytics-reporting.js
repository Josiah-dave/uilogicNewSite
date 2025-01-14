import PageBanner from '@/src/components/PageBanner'
import Layout from '@/src/layout/Layout'
import Link from 'next/link'
import React from 'react'

const analytics = () => {
  return (
    <div>
        <Layout>
        {/* <PageBanner pageName={"Analytics & Reporting"} /> */}
        <PageBanner
        pageName="Analytics and Reporting"
        pageTitle="Analytics and Reporting"
        image="https://www.inexpanse.com/wp-content/uploads/2018/01/research_0.jpg"
      />
        <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="col-xl-8 mb-5 col-lg-8 mx-auto">
          <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
            <div className="section-title mb-15">
              {/* <span className="sub-title mb-15">Better, Faster</span> */}
              <h3 className="text-center">Analytics & Reporting for Smarter Business Decisions</h3>
            </div>
            <p>
            We work on making wise decisions first, as this is the cornerstone of any successful business. Our commitment is to use our cutting-edge reporting and analytical tools to give you pertinent and helpful information. Utilizing your data whenever and whenever it is possible to do so can help you optimize performance and spur growth. One such tool is Power BI.
            </p>

            <div className="section-title mb-15 mt-40">
              <span className="sub-title mb-15">Core benefits</span>
              {/* <h2>Create, Design And Fuel Business Growth</h2> */}
            </div>
            <div className="row pt-15">
              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-trust" />
                  </div>
                  <ul className="text-dark">
                    <h3>Make Confident Decisions with Less Guesswork</h3>
                    <li>
                      {" "}
                      Real-time data means you’re not relying on guesswork. Imagine always having a clear picture of what’s working and what isn’t. With accurate insights at your fingertips, you can make decisions confidently, knowing they’re grounded in facts, not hunches.
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
                    <h3>Save Time and Money by Streamlining Operations</h3>
                    <li>
                      {" "}
                      When you can see where things are slowing down or resources are being overused, it’s much easier to fix the issues. Analytics shows you exactly where to make adjustments, allowing you to save time and reduce unnecessary expenses—keeping things running as smoothly as possible.
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
                    <h3>Understand What Really Matters to Your Customers</h3>
                    <li>
                      {" "}
                      Data analytics gives you a closer look at what your customers care about, from their buying habits to their preferences. With this knowledge, you can focus on what resonates with them, offering better products and services that build loyalty and keep them coming back.

                    </li>
                  </ul>
                  <h4></h4>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-trust" />
                  </div>
                  <ul className="text-dark">
                    <h3>Stay Ahead of the Competition with an Eye on Growth
                    </h3>
                    <li>
                      {" "}
                      Using analytics, you can spot trends and opportunities before they’re obvious to everyone else. This allows you to adapt, innovate, and expand, ensuring your business stays relevant and ready to grow, no matter how the market changes.
                    </li>
                  </ul>
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
                  <h2>Fuel your business growth with Analytics & Reporting</h2>
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
      </section>
        </Layout>
    </div>
  )
}

export default analytics