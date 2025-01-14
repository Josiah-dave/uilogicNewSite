// import PageBanner from "@/components/PageBanner";
// import Layout from "@/layout";
// import Link from "next/link";
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import ReactPlayer from 'react-player'


// const ProjectGrid = () => {

//   const videoProjects = [
//     {
//       video:'https://res.cloudinary.com/debwwq9et/video/upload/f_auto:video,q_auto/v1/UI%20LOGIC/VIDEOS/qxojv46zvltdloyqidht',
//       name:'Support Ticket App',
//       cat:''
//     },
//     {
//       video:'https://res.cloudinary.com/debwwq9et/video/upload/v1723052178/UI%20LOGIC/VIDEOS/ictba4kkh9k523zvestj.mp4',
//       name:'Onboarding App',
//       cat:''
//     }
//   ]

//   const pictureProjects =[
//     {
//       pic:'https://res.cloudinary.com/debwwq9et/image/upload/v1723051724/UI%20LOGIC/PICTURES/rynasyzyasropenn2rcj.png',
//       cat:'Ticket Manager'
//     },
//     {
//       pic:'https://res.cloudinary.com/debwwq9et/image/upload/v1723051721/UI%20LOGIC/PICTURES/ldativzgl7rl7fylnm7r.png',
//       cat:'Ticket Manager'
//     },
//     {
//       pic:'https://res.cloudinary.com/debwwq9et/image/upload/v1723051720/UI%20LOGIC/PICTURES/j85gvk8fgv8g4aczw8km.jpg',
//       cat:'Housing Agent App'
//     },
//     {
//       pic:'https://res.cloudinary.com/debwwq9et/image/upload/v1723051721/UI%20LOGIC/PICTURES/pp0owtgn7r0q8dobuhnr.jpg',
//       cat:'Housing Manager'
//     },
//     {
//       pic:'https://res.cloudinary.com/debwwq9et/image/upload/v1723051720/UI%20LOGIC/PICTURES/aq8y7nkob2xiui8hcpph.jpg',
//       cat:'Job Listing App'
//     },
//   ]


//   return (
//     <Layout>
//       <PageBanner pageName={"Project Grid"} />
//       <section className="project-grid-area rel z-2 py-130 rpy-100">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-8 col-lg-10">
//               <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
//                 <h2>Explore Our Recent Project Highlights</h2>
//                 <p>
//                 Take a look inside our recent projects with our Best Work Gallery. Each project is a testament to our commitment to excellence and innovation, showcasing how we bring ideas to life with precision and creativity. Every detail reflects our dedication to quality and our passion for turning visions into reality.
//                 </p>
//               </div>
//             </div>
//           </div>


//           <Tabs
//       defaultActiveKey="profile"
//       id="fill-tab-example"
//       className="mb-3"
//       fill
//     >
//       <Tab eventKey="home" title="Project Pictures">
//           <div className="row">

//      {
//       pictureProjects.map(({pic, cat}, index)=>(
//         <div key={index} className="col-xl-4 col-md-6">
//         <div className="project-grid-item wow fadeInUp delay-0-2s">
//           <div className="image">
//             <img
//               src={pic}
//               alt="Project Grid"
//             />
//             <a
//               className="plus"
//               href={pic}
//             />
//           </div>
//           <div className="content">
//             <h4>
//               <Link legacyBehavior href="">
//               {cat}
//               </Link>
//             </h4>
//             <Link legacyBehavior href="">
//               <a className="detail-btn">
//                 <i className="far fa-arrow-right" />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//       ))
//      }
          
     
//           </div>
//       </Tab>
//       <Tab eventKey="profile" title="Project Videos">
  
//         <div className="row">
           
          
//     {
//       videoProjects.map(({video, name}, index) => (
//         <div key={index} className="col-xl-4 col-md-6">
//         <div className="project-grid-item wow fadeInUp delay-0-4s">
//           <ReactPlayer width={'100%'} height={'100%'} controls={true}  playing={true} volume={0} muted  url={video} />
         
//           <div className="content">
//             <h4>
//               <Link legacyBehavior href="#">
//                {name}
//               </Link>
//             </h4>
//             <Link legacyBehavior href="/">
//               <a className="detail-btn">
//                 <i className="far fa-arrow-right" />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//       ))
//     }

//           </div>
//       </Tab>
  
//     </Tabs>



//           {/* <div className="project-more-btn text-center">
//             <Link legacyBehavior href="/project-grid">
//               <a className="theme-btn style-two wow fadeInUp delay-0-2s">
//                 View More Gallery <i className="fas fa-long-arrow-right" />
//               </a>
//             </Link>
//           </div> */}
//         </div>
//       </section>
//     </Layout>
//   );
// };
// export default ProjectGrid;

import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <Layout>
    <PageBanner
        pageName="Portfolio"
        pageTitle="Portfolio"
        image="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"
      />
      {/* <PageBanner pageName={"Portfolio"} /> */}
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Explore Our Latest Projects</h2>
                <p>
                We take pride in delivering solutions that blend innovation, functionality, and exceptional design. Each project in our gallery reflects our commitment to excellence, showcasing how we help businesses streamline processes, automate workflows, and achieve their goals. Take a closer look at our best work—where ideas come to life and technology meets creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/ui-image2.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Performance Management Power App
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
{/*             
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Mobile Applications
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      IT Consulting
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Business Analysis
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      UX/UI Strategy
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Cyber Security
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Market Research
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Product Engineering
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid9.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Software Engineering
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <div className="project-more-btn text-center">
            <Link legacyBehavior href="/project-grid">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                View More Project <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
