import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1721820876/Landing%20page%20images/kcbxqsi7de9o63joei8z.png"
                alt="Logo"
                title="Logo"
                width={"100%"}
                style={{ width: "3rem" }}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle px-2"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link legacyBehavior href="portfolio" >
                Portfolio
              </Link>
          
            </li>

            <li className="dropdown">
              <Link href="about">About us</Link>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="automated">Automated Solutions</Link>
                </li>
                <li>
                  <Link href="app-dev">App Development</Link>
                </li>
                <li>
                  <Link href="integration">Integration</Link>
                </li>
                <li>
                  <Link href="analytics-reporting">Analytics & Reporting</Link>
                </li>
                {/* <li>
                  <Link href="service-details">Insight & Analytics</Link>
                </li> */}
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Project
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="project-grid">Project Grid</Link>
                </li>
                <li>
                  <Link href="project-masonry">Project Masonry.</Link>
                </li>
                <li>
                  <Link href="project-details">Project Details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("shop")}>
                shop
              </a>
              <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
            <li className="dropdown">
              <Link legacyBehavior href="blog" onClick={() => active("blog")}>
                blog
              </Link>
              {/* <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul> */}
              {/* <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <Link legacyBehavior href="contact">
                Contact Us
              </Link>
            </li>
            <li className="dropdown">
              <Link legacyBehavior href="calculate">
                Calculate
              </Link>
            </li>
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("pages")}>
                pages
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="404">404 error</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="../../../public/assets/images/logos/logo-one2.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <Link legacyBehavior href="/">
              Home
            </Link>
          </li>
        <li className="dropdown">
        <Link legacyBehavior href="/portfolio" >
                Portfolio
              </Link>
          </li>
          <li className="dropdown">
            <Link href="about">About us</Link>
          </li>

          <li className="dropdown">
            <a href="#">services</a>
            <ul>
              <li>
                <Link href="automated">Automated Solutions</Link>
              </li>
              <li>
                <Link href="app-dev">App Development</Link>
              </li>
              <li>
                <Link href="integration">Integrations</Link>
              </li>
              <li>
                  <Link href="analytics-reporting">Analytics & Reporting</Link>
                </li>
              {/* <li>
                <Link href="service-details">Insight & Analytics</Link>
              </li> */}
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          {/* <li className="dropdown">
            <a href="#">Project</a>
            <ul>
              <li>
                <Link href="project-grid">Project Grid</Link>
              </li>
              <li>
                <Link href="project-masonry">Project Masonry.</Link>
              </li>
              <li>
                <Link href="project-details">Project Details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          {/* <li className="dropdown">
            <a href="#">shop</a>
            <ul>
              <li>
                <Link href="shop">shop grid</Link>
              </li>
              <li>
                <Link href="product-details">product details</Link>
              </li>
              <li>
                <Link href="cart">cart page</Link>
              </li>
              <li>
                <Link href="checkout">checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}

          <li className="dropdown">
            <Link legacyBehavior href="contact">
              Contact Us
            </Link>
            {/* <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <Link legacyBehavior href="blog">
              blog
            </Link>
            {/* <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>

          <li className="dropdown ">
            <Link
              legacyBehavior
              href="calculate"
              className="btn btn-primary text-white py-2 px-4"
            >
              Calculate
            </Link>
            {/* <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          {/* <li className="dropdown">
            <a href="#">pages</a>
            <ul>
              <li>
                <Link href="about">About us</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
