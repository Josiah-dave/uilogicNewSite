import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const integration = () => {
  return (
    //     <Layout>
    //       <PageBanner pageName={"integrations"} pageTitle="Integrations" />
    //       <section className="services-area-three overflow-hidden pt-130 rpt-100 pb-100 rpb-70 rel z-1">
    //         <div className="container">
    //           <div className="row gap-100 align-items-center">
    //             <div className="col-lg-5">
    //               <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
    //                 <div className="section-title mb-30">
    //                   <span className="sub-title mb-15">Integrations</span>
    //                   <h3>Seamless System Integration for a Connected Business</h3>
    //                 </div>
    //                 <p>
    //                   Through platform integration, you are, in a sense, detaching a
    //                   channel from its organization in order to preserve the
    //                   well-organized and efficient categories.
    //                 </p>
    //                 <p>
    //                   Our goal is to create flawlessly smooth and sophisticated
    //                   integrations that assist in managing your business processes
    //                   and tools, allowing you to concentrate on what really matters
    //                   –growth
    //                 </p>
    //                 {/* 
    //                 <ul className="list-style-one pt-5">
    //                 <ul>
    //                 <ul>
    //     <li>Accurate Planning: Get help in designing and planning your tailored solution.</li>
    //     <li>Build Apps: Develop scalable, cost-effective apps for your business.</li>
    //     <li>Connect Data Sources: Link your app to the right data source for accurate access.</li>
    //     <li>User Adoption: Train your team to use and adopt the app smoothly.</li>
    //     <li>Share the App: Easily share and collaborate on your app with others.</li>
    //     <li>Export and Publish: Export and publish solutions for customer trials.</li>
    //     <li>Improve ROI: Lower deployment costs and enhance project outcomes.</li>
    // </ul>

    // </ul> */}

    //                 {/* </ul> */}
    //                 <Link legacyBehavior href="/">
    //                   <a className="theme-btn mt-45">
    //                     View All Services <i className="fas fa-long-arrow-right" />
    //                   </a>
    //                 </Link>
    //               </div>
    //             </div>
    //             <div className="col-lg-7">
    //               <div className="row">
    //                 <div className="col-sm-6">
    //                   <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
    //                     <h4>Microsoft 365</h4>
    //                   </div>
    //                   <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
    //                     <h4>SharePoint Premium - NEW</h4>
    //                   </div>
    //                   <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
    //                     <h4>Copilot - NEW</h4>
    //                   </div>
    //                   <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
    //                     <h4>Power Platform</h4>
    //                   </div>
    //                   <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
    //                     <h4>Power Apps</h4>
    //                   </div>
    //                 </div>
    //                 <div className="col-sm-6">
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>Power Apps</h4>
    //                   </div>
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>Power BI</h4>
    //                   </div>
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>Microsoft Viva</h4>
    //                   </div>
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>SharePoint</h4>
    //                   </div>
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>Microsoft Teams</h4>
    //                   </div>
    //                   <div className="feature-item style-two wow fadeInDown delay-0-2s">
    //                     <h4>Microsoft Purview</h4>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="servcies-bg-shape">
    //           <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
    //         </div>
    //       </section>
    //       {/* Services Area Three end */}
    //       {/* Statistics Area start */}
    //       <section
    //         className="statistics-area-four text-white bgs-cover pt-80 pb-20"
    //         style={{
    //           backgroundImage: "url(assets/images/background/statistics-three.jpg)",
    //         }}
    //       >
    //         <div className="container">
    //           <div className="row align-items-xl-start align-items-center">
    //             <div className="col-xl-5 col-lg-6">
    //               <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
    //                 <div className="section-title mb-30">
    //                   <span className="sub-title mb-15">Company Statistics</span>
    //                   <h2>Learn About Our Company Statistics</h2>
    //                 </div>
    //                 <Link legacyBehavior href="/about">
    //                   <a className="read-more">
    //                     Learn More <i className="fas fa-long-arrow-right" />
    //                   </a>
    //                 </Link>
    //               </div>
    //             </div>
    //             <div className="col-xl-7 col-lg-6">
    //               <div className="row">
    //                 <div className="col-xl-3 col-6">
    //                   <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
    //                     <i className="flaticon-target" />
    //                     <span
    //                       className="count-text plus"
    //                       data-speed={100}
    //                       data-stop={85}
    //                     >
    //                       <Counter end={85} />
    //                     </span>
    //                     <span className="counter-title">Project Completed</span>
    //                   </div>
    //                 </div>
    //                 <div className="col-xl-3 col-6">
    //                   <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
    //                     <i className="flaticon-target-audience" />
    //                     <span
    //                       className="count-text percent"
    //                       data-speed={100}
    //                       data-stop="35"
    //                     >
    //                       <Counter end={99} decimals="1" />
    //                     </span>
    //                     <span className="counter-title">Happy Clients </span>
    //                   </div>
    //                 </div>
    //                 <div className="col-xl-3 col-6">
    //                   <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
    //                     <i className="flaticon-customer-experience" />
    //                     <span
    //                       className="count-text plus"
    //                       data-speed={100}
    //                       data-stop="10"
    //                     >
    //                       <Counter end={10} decimals="1" />
    //                     </span>
    //                     <span className="counter-title">Years Experience</span>
    //                   </div>
    //                 </div>
    //                 <div className="col-xl-3 col-6">
    //                   <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
    //                     <i className="flaticon-medal" />
    //                     <span
    //                       className="count-text k-plus"
    //                       data-speed={100}
    //                       data-stop={15}
    //                     >
    //                       <Counter end={15} />
    //                     </span>
    //                     <span className="counter-title">Award Winning</span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       {/* Statistics Area end */}
    //       {/* What We Provide Area Start */}
    //       <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
    //         <div className="container">
    //           <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
    //             <span className="sub-title mb-10">What We Provides</span>
    //             <h2>Digital Core Services</h2>
    //           </div>
    //           <Slider {...serviceThreeSlider} className="service-three-slider">
    //             <div className="service-item-three wow fadeInUp delay-0-2s">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three1.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three1.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">01</span>
    //                   <div className="icon">
    //                     <i className="flaticon-coding-1" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Automation & Software Development
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                     We create tailor-made software solutions that address your
    //                     unique business needs, enhancing efficiency and driving
    //                     innovation.
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="service-item-three active wow fadeInUp delay-0-4s">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three2.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three2.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">02</span>
    //                   <div className="icon">
    //                     <i className="flaticon-layers" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Web Design (UI/UX) &amp; Development
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                     Our web design and development services deliver visually
    //                     stunning, user-centric websites that offer an exceptional
    //                     user experience.
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="service-item-three wow fadeInUp delay-0-6s">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three3.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three3.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">03</span>
    //                   <div className="icon">
    //                     <i className="flaticon-cyber-security-1" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Cyber Security and IT Management
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                     Protect your digital assets with our comprehensive cyber
    //                     security and IT management services, ensuring robust
    //                     protection
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             {/* <div className="service-item-three wow fadeInUp delay-0-2s">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three1.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three1.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">01</span>
    //                   <div className="icon">
    //                     <i className="flaticon-coding-1" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Custom Software Development
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                   We create tailor-made software solutions that address your unique business needs, enhancing efficiency and driving innovation.
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="service-item-three active">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three2.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three2.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">02</span>
    //                   <div className="icon">
    //                     <i className="flaticon-layers" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Web Design (UI/UX) &amp; Development
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                   Our web design and development services deliver visually stunning, user-centric websites that offer an exceptional user experience.
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="service-item-three">
    //               <div className="image">
    //                 <img
    //                   src="assets/images/services/service-three3.jpg"
    //                   alt="Service"
    //                 />
    //                 <a
    //                   className="plus"
    //                   href="assets/images/services/service-three3.jpg"
    //                 >
    //                   <i className="fal fa-plus" />
    //                 </a>
    //               </div>
    //               <div className="content">
    //                 <div className="top-part">
    //                   <span className="number">03</span>
    //                   <div className="icon">
    //                     <i className="flaticon-cyber-security-1" />
    //                   </div>
    //                   <h4>
    //                     <Link legacyBehavior href="service-details">
    //                       Cyber Security and IT Management
    //                     </Link>
    //                   </h4>
    //                 </div>
    //                 <div className="bottom-part">
    //                   <p>
    //                   Protect your digital assets with our comprehensive cyber security and IT management services, ensuring robust protection
    //                   </p>
    //                   <Link legacyBehavior href="/service-details">
    //                     <a className="read-more">
    //                       Read More <i className="far fa-arrow-right" />
    //                     </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div> */}
    //           </Slider>
    //         </div>
    //         <div className="about-bg-shape">
    //           <img src="assets/images/background/what-we-provide.png" alt="Shape" />
    //         </div>
    //       </section>
    //       {/* What We Provide Area End */}
    //       {/* Pricing Plan Area start */}
    //       {/* <section className="price-plan-area overflow-hidden bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
    //         <div className="container">
    //           <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
    //             <span className="sub-title mb-15">Amazing Pricing Plan</span>
    //             <h2>Affordable Pricing Packages</h2>
    //           </div>
    //           <div className="row justify-content-center">
    //             <div className="col-xl-4 col-md-6">
    //               <div className="pricing-plan-item wow fadeInUp delay-0-2s">
    //                 <span className="badge">Best Package</span>
    //                 <h4 className="title">Basic Plan</h4>
    //                 <span className="price-count">5 Services Included</span>
    //                 <span className="price">29.85</span>
    //                 <Link legacyBehavior href="/pricing">
    //                   <a className="theme-btn style-two">
    //                     Choose Package <i className="fas fa-long-arrow-right" />
    //                   </a>
    //                 </Link>
    //                 <h5>This Plan Included :</h5>
    //                 <ul>
    //                   <li>
    //                     <a href="#">Premium Quality Supports (24/7)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">IT Consultations (Business Growth)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Web Design &amp; Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Search Engine Optimization (SEO )</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">User &amp; Market Research</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4 col-md-6">
    //               <div className="pricing-plan-item wow fadeInUp delay-0-4s">
    //                 <span className="badge">Best Package</span>
    //                 <h4 className="title">standard Plan</h4>
    //                 <span className="price-count">7 Services Included</span>
    //                 <span className="price">49.64</span>
    //                 <Link legacyBehavior href="/pricing">
    //                   <a className="theme-btn style-two">
    //                     Choose Package <i className="fas fa-long-arrow-right" />
    //                   </a>
    //                 </Link>
    //                 <h5>This Plan Included :</h5>
    //                 <ul>
    //                   <li>
    //                     <a href="#">Premium Quality Supports (24/7)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">IT Consultations (Business Growth)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Web Design &amp; Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Search Engine Optimization (SEO )</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">User &amp; Market Research</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Product Engineering</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4 col-md-6">
    //               <div className="pricing-plan-item wow fadeInUp delay-0-6s">
    //                 <span className="badge">Best Package</span>
    //                 <h4 className="title">Golden Package</h4>
    //                 <span className="price-count">7 Services Included</span>
    //                 <span className="price">98.73</span>
    //                 <Link legacyBehavior href="/pricing">
    //                   <a className="theme-btn style-two">
    //                     Choose Package <i className="fas fa-long-arrow-right" />
    //                   </a>
    //                 </Link>
    //                 <h5>This Plan Included :</h5>
    //                 <ul>
    //                   <li>
    //                     <a href="#">Premium Quality Supports (24/7)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">IT Consultations (Business Growth)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Web Design &amp; Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Search Engine Optimization (SEO )</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">User &amp; Market Research</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Product Engineering</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="price-shapes">
    //           <img
    //             className="shape one wow fadeInLeft delay-0-5s"
    //             src="assets/images/shapes/price-left.png"
    //             alt="Shape"
    //           />
    //           <img
    //             className="shape two w-50"
    //             src="assets/images/shapes/price-right.png"
    //             alt="Shape"
    //           />
    //         </div>
    //       </section> */}
    //       {/* Pricing Plan Area end */}
    //       {/* Testimonials Area Two start */}
    //       {/* <section className="testimonials-area-two py-130 rpy-100 rel z-1">
    //         <div className="container">
    //           <TestimonialsSlider />
    //         </div>
    //       </section> */}
    //     </Layout>
    <Layout>
      {/* <PageBanner pageName={"Integrations"} /> */}
      <PageBanner
        pageName="Integration"
        pageTitle="Integration"
        image="https://cdn.prod.website-files.com/62375700635d76646ef2457f/63bf5ae8884ff5f7073423c2_softwareintegration.png"
      />
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="col-xl-8 mb-5 col-lg-8 mx-auto">
          <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
            <div className="section-title mb-15">
              {/* <span className="sub-title mb-15">Better, Faster</span> */}
              <h3 className="text-center">Seamless System Integration for a Connected Business</h3>
            </div>
            <p>
              Through platform integration, you are, in a sense, detaching a channel from its organization in order to preserve the well-organized and efficient categories. Our goal is to create flawlessly smooth and sophisticated integrations that assist in managing your business processes and tools, allowing you to concentrate on what really matters –growth.
            </p>

            <div className="section-title mb-15 mt-40">
              <span className="sub-title mb-15">Core benefits of Seamless System
                Integrations</span>
              {/* <h2>Create, Design And Fuel Business Growth</h2> */}
            </div>
            <div className="row pt-15">
              <div className="col-sm-6">
                <div className="service-item style-two">
                  <div className="icon">
                    <i className="flaticon-trust" />
                  </div>
                  <ul className="text-dark">
                    <h3>Custom Integrations</h3>
                    <li>
                      {" "}
                      Our team designs and implements tailored integration solutions that align with your unique business needs, ensuring seamless connectivity across all systems.
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
                    <h3>Microsoft Ecosystem Expertise</h3>
                    <li>
                      {" "}
                      Whether it's integrating SharePoint with Microsoft Dynamics 365, SAP, Salesforce, or other enterprise platforms, we make sure your systems work together flawlessly.
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
                    <h3>Optimized Workflows</h3>
                    <li>
                      {" "}
                      By automating data flow between systems, we reduce manual work, improve data accuracy, and enhance overall operational efficiency.

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
                    <h3>Comprehensive Approach
                    </h3>
                    <li>
                      {" "}
                      From planning to deployment, our experts take a personalized approach to every integration project, ensuring solutions that fit your specific requirements.
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
                  <h2>Fuel your business growth with Seamless Integration</h2>
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
export default integration;
