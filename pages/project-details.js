import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Details"} />
      <section className="project-details-area pt-130 rpt-100 pb-60 rpb-30">
        <div className="container">
          <div className="project-details-content">
            <div className="section-title mb-25">
              <h2>Performance Management Power App</h2>
            </div>
            <p>
            The Performance Management Power App was developed to streamline the employee appraisal process for both managers and employees. This internal solution aimed to digitize performance reviews, ensuring a structured approach to tracking objectives, providing feedback, and managing ratings.
            </p>
            {/* <div className="image my-45">
              <img
                src="assets/images/projects/project-details.jpg"
                alt="Project Details"
              />
            </div> */}
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <h4>Project Information</h4>
                <div className="project-information mt-20">
                  <div className="project-info-item">
                    <span>Project Type</span>
                    <h5>Internal Solution</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Role</span>
                    <h5>Power Apps Business Analyst</h5>
                  </div>
                  <div className="project-info-item">
                    <span>Tools Used</span>
                    <h5>Microsoft Power Apps (Canvas App), Power Automate, Dataverse</h5>
                  </div>
                  {/* <div className="project-info-item">
                    <span>Location</span>
                    <h5>33 Main Street, USA</h5>
                  </div> */}
                  <div className="project-info-item">
                    <span>Project Durations</span>
                    <h5>2 Month 6 Days</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title mt-60 mb-25">
              <h4>App Features Overview</h4>
            </div>
            <ul className="list-style-one pt-5">
              <p className="section-title">Welcome Dashboard</p>
              <li>The home screen provides users with two main options:
             <br /> My Profile: Allows employees to view and update their personal details.
              <br /> Appraisal: Provides access to performance objectives and review processes.</li>
              <li>Employee Profile Management:
              <br />Employees can maintain accurate and up-to-date records of their department, profile, and supervisor details, ensuring seamless communication across teams.</li>
              <li>Employee Review Screen:
              <br />The Employee Review section enables employees to record their objectives and track their achievements. The app allows them to input specific objectives, define measurable targets, and log accomplishments throughout the review cycle.</li>
              <li>Mid-Year Review Section:
              <br />Includes details such as Employee Name, Supervisor Name, Department, and Employee Number.
              <br />Users can add new objectives and provide updates on progress.
              <br />Each objective can be tracked for its corresponding Targets/Volumes and Achievements.</li>
              <li>Supervisor View: 
              <br />Managers can view their team members' performance reviews and ratings through a dedicated Supervisor View.
              <br />The app displays employees’ ratings with clear, color-coded indicators (e.g., Outstanding, Meets Expectations).
              <br />Supervisors can access detailed appraisal reports for each employee and provide their feedback directly within the app.</li>

            </ul>
            <div className="row mt-50">
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/ui-image1.png"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/ui-image2.png"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/ui-image3.png"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/ui-image4.png"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="assets/images/projects/ui-image5.png"
                  alt="Project"
                />
              </div>
            </div>
            <div className="section-title mt-20 mb-25">
            <h3>App Features Overview</h3>
            </div>
            <h4>Business Impact
            </h4>
            <p>The Performance Management Power App significantly transformed the organization’s performance review process by reducing manual effort and improving transparency.</p>
            <ul className="list-style-one pt-5">
            <li>Efficiency Gains: The app reduced manual data entry processes, previously handled through Excel, by 60%.</li>
              <li>Real-Time Tracking: Managers can access employee performance data in real time, allowing for quicker and more informed decision-making.</li>
              <li>Employee Engagement: The app empowers employees to actively participate in their performance management, making the process more transparent and collaborative.</li>
            </ul>
            <p className="mt-20">This project demonstrates my ability to manage end-to-end Power Apps projects, from gathering requirements to delivering a functional and impactful solution.</p>
          </div>
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Next Prev Project start */}
      <div className="next-prev-project pb-80 rpb-50">
        <div className="container">
          <hr />
          {/* <div className="next-prev-service next-prev-project mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-prev.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-left" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Cyber Security
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/project-grid">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    UI/UX Strategy
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/projects/project-next.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default ProjectDetails;
