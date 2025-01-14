import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Calculate = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountries(countryNames.sort());
      })
      .catch((error) => {
        console.error("Error fetching country names:", error);
      });
  }, []);

  const [sector, setSector] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.tradingeconomics.com/sectors?c=7da0214fa46443e:rc2ex5dahwtlwha"
      )
      .then((response) => {
        const sectorCategory = response.data;
        // console.log(sectorCategory);
        setSector(sectorCategory);
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
      });
  }, []);

  const form = useRef();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [country_name, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_o0s6e09",
        "template_xkf5qtq",
        form.current,
        "_0-mGEcjD1gRtKHtx"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");

          setIsLoading(false);
          // Clear form
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setTitle("");
          setCategory("");
          setCountryName("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          // setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const [hours, setHours] = useState("");
  const [people, setPeople] = useState("");
  const [rate, setRate] = useState("");
  const [automationPercentage, setAutomationPercentage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmitCal = (event) => {
    event.preventDefault();

    const hoursValue = parseFloat(hours);
    const peopleValue = parseFloat(people);
    const rateValue = parseFloat(rate);
    const automationValue = parseFloat(automationPercentage) / 100;

    const totalWeeklyCost = hoursValue * peopleValue * rateValue;
    const potentialAutomatedHours = hoursValue * automationValue;
    const potentialWeeklyCostAfterAutomation =
      potentialAutomatedHours * peopleValue * rateValue;
    const estimatedWeeklyCostSavings =
      totalWeeklyCost - potentialWeeklyCostAfterAutomation;
    const weeklySavingsOverYear = estimatedWeeklyCostSavings * 52;
    const totalSavingsOverYear = weeklySavingsOverYear * peopleValue;

    const savingsPercentage =
      (estimatedWeeklyCostSavings / totalWeeklyCost) * 100;

    setResult(`
          Current Weekly Cost: $${totalWeeklyCost.toFixed(2)}
          Potential Weekly Cost After Automation: $${potentialWeeklyCostAfterAutomation.toFixed(
            2
          )}
          Estimated Weekly Cost Savings: $${estimatedWeeklyCostSavings.toFixed(
            2
          )} (${savingsPercentage.toFixed(2)}%)
          Weekly Savings Over a Year: $${weeklySavingsOverYear.toFixed(2)}
          Total Savings Over a Year (for all people): $${totalSavingsOverYear.toFixed(
            2
          )}
        `);
  };

  return (
    <Layout>
      <PageBanner pageName={"Calculator"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2 className="uppercase">Cost calculator</h2>
                <p>
                  A cost calculator is a tool designed to help users estimate
                  and manage expenses. This tool is particularly useful for
                  budgeting, financial planning, and project management,
                  allowing individuals and businesses to make informed decisions
                  based on projected costs.
                </p>
              </div>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="section-title" data-aos="fade-up">
                  <h4 className="text-uppercase text-center mb-4">
                    Cost Calculator
                  </h4>
                </div>
                <form onSubmit={handleSubmitCal}>
                  <div className="mb-3">
                    <label htmlFor="hours" className="form-label">
                      Average hours spent per week per person
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="hours"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="people" className="form-label">
                      Average number of people performing the task
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="people"
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rate" className="form-label">
                      Average hourly rate ($/hour)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rate"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="automation" className="form-label">
                      Automation percentage (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="automation"
                      value={automationPercentage}
                      onChange={(e) => setAutomationPercentage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Calculate
                    </button>
                  </div>
                </form>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "150px" }}
                    value={result}
                    readOnly
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Output</label>
                </div>
              </div>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="col-xl-6 col-md-6 col-sm-12"
            >
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div class="section-title" data-aos="fade-up">
                  <h4 className="text-uppercase text-center mb-4">
                    Detailed Assessment
                  </h4>
                </div>
                <div className="pt-5">
                  <div class="mb-3 mt-4">
                    <input
                      type="text"
                      class="form-control"
                      id="first_name"
                      placeholder="First Name"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="last_name"
                      placeholder="Last name"
                      value={last_name}
                      name="last_name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Business Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Job Title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Phone Number"
                      value={phone_number}
                      name="phone_number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      value={category}
                      name="category"
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      {sector.map((category, index) => (
                        <option key={index} value={category.Sector}>
                          {category.Sector}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      value={country_name}
                      name="country_name"
                      onChange={(e) => setCountryName(e.target.value)}
                      required
                    >
                      <option selected>Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 ">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg w-100"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                      }}
                    >
                      {isLoading ? "...Loading" : " Submit"}
                    </button>
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
export default Calculate;
