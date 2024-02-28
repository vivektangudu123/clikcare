import React, { useState } from "react";
import PatientIcon from "../assets/PatientIcon.svg";

function PatientLogin() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", {
      mobileNumber,
      agreedTerms,
    });

    setMobileNumber("");
    setAgreedTerms(false);
  };
  return (
    <div>
      <div style={{ width: "100%" }}>
        <img src={PatientIcon} className="img-fluid" alt="Clik Care Logo"></img>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="center-container">
          <div className="card-body mb-3 g-30" style={{ width: "25rem" }}>
            <h1 className="card-title mb-5 g-10 text-center">
              Patient Login
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 g-10">
                <label htmlFor="MobileNumber" className="form-label required">
                  <span className="form-label-heading">
                    Mobile Number <span className="text-danger">*</span>
                  </span>
                </label>
                <input
                  style={{ height: "50px" }}
                  type="tel"
                  className="form-control"
                  id="InputMobileNumber"
                  placeholder="Enter your Mobile Number"
                  required
                  minLength="10"
                  maxLength="10"
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="mb-3 g-10 btn btn-primary btn-lg d-block mx-auto rounded-pill"
                style={{ width: "250px" }}
              >
                {" "}
                Send OTP{" "}
              </button>

              <p className="card-text mb-3 g-10 text-center">
                Don't have an account?{" "}
                <a href="#" className="card-link">
                  {" "}
                  Create account{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
