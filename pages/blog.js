import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import blogs from "./api/blogdata";

const Blog = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blogs"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                {blogs.map((blog, index) => (
                  <div
                    className="blog-standard-item wow fadeInUp delay-0-2s"
                    key={index}
                  >
                    <div className="image">
                      <img src={blog.cover.coverImg} alt="Blog" />
                    </div>
                    <div className="content">
                      <div className="blog-meta-two mb-5">
                        <Link legacyBehavior href="/blog">
                          <a className="tag">{blog.cover.Blogcategory}</a>
                        </Link>
                      </div>
                      <h4>
                        <Link legacyBehavior href={`/${index}`}>
                          {blog.cover.title}
                        </Link>
                      </h4>
                      <p>{blog.cover.BlogSummary}</p>
                      <div className="blog-meta-two">
                        <a className="author" href="#">
                          {blog.cover.author}
                        </a>
                        <a className="date" href="#">
                          <i className="far fa-calendar-alt" />{" "}
                          {blog.cover.date}
                        </a>
                      </div>
                      <hr />
                      <Link legacyBehavior href={`/${index}`}>
                        <a className="read-more">
                          Read More <i className="far fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
                {/* <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard1.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Branding</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Rethinking Server-Timing As A Critical Monitoring Tool
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard2.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Designing</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Voice Control Considerations For Visually Hidden Link
                        Names
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard3.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="blog">
                        <a className="tag">Marketing</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        How To Create Vanilva Script Gantt Adding Task Editing
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard4.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="blog">
                        <a className="tag">Development</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Web Design Done Well Delhtful Visualization Examples
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div> */}
                {/* <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard5.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Branding</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        DevFest For Ukraine Charity Conference Future Tech
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard6.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="blog">
                        <a className="tag">UI/UX strategy</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Smashing Podcast Episode 47 With Soueidan Accessibe
                        Matter?
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard7.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="blog">
                        <a className="tag">Mobile app</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        DevFest For Ukraine Charity Conference Future Tech
                      </Link>
                    </h4>
                    <p>
                      Our experts help create the right website for acrosse and
                      devices consideration user promotey
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                        Kenneth S. Denman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> June 26, 2022
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div> */}
                {/* <ul className="pagination flex-wrap wow fadeInUp delay-0-2s">
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fas fa-angle-left" />
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      01
                      <span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
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
                  {/* <li>
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
                    </li> */}
                  {/* <li>
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
                    </li> */}
                  {/* <li>
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
                    </li> */}
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
                      <Link legacyBehavior href="blog" index={index}>
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
export default Blog;
