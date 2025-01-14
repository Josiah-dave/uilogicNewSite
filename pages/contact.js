import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  // State to handle form data
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_w70j62w",
        "template_e32neo4",
        form.current,
        "Hs9kyRKzmcO50ATUI"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
          setStatus("Message sent successfully!");
          setIsLoading(false);
          // Clear form
          setName("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Helps</span>
                <h2>Contact Informations</h2>
              </div>
              <p>
                We are a team consultants who are highly motivated and we're on
                a misson to save money and accelerate growth through automation
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span>Enfield, co Meath, Ireland</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:supportitinfo@gmail.com">sales@uilogic.io</a>
                <br />
                <a href="" className="text-white">
                  support@uilogic.io
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Locations</h4>
                <span>
                  Mobile:
                  <a href="callto:+1 5589 55488 555">+1 5589 55488 555</a>
                </span>
                {/* <span>
                  Teliphone : <a href="callto:+1 5589 55488 555">+1 5589 55488 555</a>
                </span> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b>Monday _ Friday,</b>
                <span>08:00am - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow mb-90 fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s ">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Send Us Message</h2>
                </div>
                <p>
                  Have questions or need assistance? Reach out to our team using
                  the contact details below, or fill out the form to send us a
                  message directly. We're here to help!
                </p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="contactForm mt-5"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      {isLoading ? "...Loading" : " Send Message "}
                      <i className="far fa-long-arrow-right" />
                    </button>
                    {/* {status && <p>{status}</p>} */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
export default Contact;
