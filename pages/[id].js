import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import blogs from "./api/blogdata";
import { useRouter } from "next/router";
import BlogTemplate from "./BlogTemplate";

const BlogDetails = () => {
  const params = useRouter();
  const { id } = params.query;

  const item = blogs[id];
  return (
    <Layout>
      <PageBanner pageName={`${item && item.cover.title}`} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            {item && item.blog}
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>Finance</li>
                    <li>Sales and Marketing</li>
                    <li>Human Resources</li>
                    <li>Frontline Workers</li>
                    <li>Customer Service</li>
                  </ul>
                </div>
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    {blogs.slice(0, 3).map((blog, index) => (
                      <li key={index}>
                        <div className="image">
                          <img src={blog.cover.coverImg} alt="News" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link legacyBehavior href={`/${index}`}>
                              {blog.cover.title}
                            </Link>
                          </h5>
                          <span className="date">
                            <i className="far fa-calendar-alt" />
                            <a href="#">{blog.cover.date}</a>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Build Group Chat App With Vanilla JS Twilio Node
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Expand Your Horiz Desktop Wallpapers Edition See
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            Manage Accessible Design System With Colorntes
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 June 2022</a>
                        </span>
                      </div>
                    </li>
                  </ul> */}
                </div>
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <h4>To reach us, kindly click the button below</h4>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-two">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <img src="assets/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="assets/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="assets/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    {blogs.map((blog, index) => (
                      <Link legacyBehavior href={`/${index}`} index={index}>
                        {blog.cover.Blogcategory}
                      </Link>
                    ))}
                    {/* <Link legacyBehavior href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior href="blog">
                      Landing
                    </Link>
                    <Link legacyBehavior href="blog">
                      software
                    </Link>
                    <Link legacyBehavior href="blog">
                      web
                    </Link>
                    <Link legacyBehavior href="blog">
                      education
                    </Link>
                    <Link legacyBehavior href="blog">
                      email marketing
                    </Link>
                    <Link legacyBehavior href="blog">
                      SEO
                    </Link>
                    <Link legacyBehavior href="blog">
                      development
                    </Link>
                    <Link legacyBehavior href="blog">
                      wordpress
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
