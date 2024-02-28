import React, { useState } from "react";
import PatientIcon from "../assets/PatientIcon.svg";

function PatientOTP() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", {
      otp,
    });

    setOtp("");
  };
  return (
    <div>
      <div style={{ width: "100%" }}>
        <img src={PatientIcon} className="img-fluid" alt="Clik Care Logo"></img>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <div className="center-container">
          <div className="card-body mb-3 g-30" style={{ width: "25rem" }}>
            <h6 className="card-title mb-5 g-10 text-center">
              We have sent a OTP to XXXXX XXX67
            </h6>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 g-10">
                <label htmlFor="otp" className="form-label required">
                  <span className="form-label-heading">
                    Enter OTP <span className="text-danger">*</span>
                  </span>
                </label>
                <input
                  style={{ height: "50px" }}
                  type="text"
                  className="form-control"
                  id="InputOtp"
                  placeholder="Enter your OTP"
                  required
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
                <div class="text-end mb-3 g-10">
                  <span style={{color: "blue"}}>Resend OTP</span>
                </div>
              </div>

              <button
                type="submit"
                className="mb-3 g-10 btn btn-primary btn-lg d-block mx-auto rounded-pill"
                style={{ width: "300px" }}
              >
                {" "}
                Verify and Login{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientOTP;
