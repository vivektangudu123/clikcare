import React,  { useState } from 'react';
import DoctorIcon from '../assets/DoctorIcon.svg';
import { Link } from "react-router-dom";

function DoctorRegister() {
    const [DoctorName, setDoctorName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [age, setAge] = useState('');
    const [experience, setExperience] = useState('')
    const [specialised, setSpecialised] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', {
          DoctorName,
          dateOfBirth,
          gender,
          bloodGroup,
          mobileNumber,
          email,
          agreedTerms,
          age,
          experience,
          specialised
        });
        alert("Registration is succesfully done!");
        setDoctorName('');
        setDateOfBirth('');
        setGender('');
        setBloodGroup('');
        setMobileNumber('');
        setEmail('');
        setAgreedTerms(false);
        setAge('');
        setExperience('');
        setSpecialised('');
      };
    
    const [phonenumberotp, setphonenumberotp] = useState("");
    const [emailotp, setemailotp] = useState("");
    const [phonenumberotpSent, setphonenumberotpSent] = useState(false);
    const [emailotpSent, setemailotpSent] = useState(false);
    const [isphonenumberverified, setisphonenumberverified]=useState(false);
    const [isemailverified, setisemailverified]=useState(false);
    
    const sendphonenumberotp=()=>{
        if(mobileNumber.length!=10) {
            alert("Enter a Valid Mobile Number");
            return ;
        }
        // Logic to send OTP to the provided phone number
        setphonenumberotpSent(true);
    }
    const verifyphonenumberotp=()=>{
        if(phonenumberotp.length<6)
        {
            alert("Enter a Valid Otp to verify your Mobile Number");
            return ;
        }
          // Logic to verify phone number OTP
        setisphonenumberverified(true);
        setphonenumberotpSent(false);
    }
    const sendemailotp = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please enter a valid email address.");
            return;
        }
    
        // Logic to send OTP to the provided email
        setemailotpSent(true);
    }
    
    const verifyemailotp=()=>{
        
        if(emailotp.length<6)
        {
            alert("Enter a Valid OTP to verify your Email address");
            return ;
        }
        //logic to verify email by otp
        setisemailverified(true);
        setemailotpSent(false);
    }
  return (
    <div>
        <div style={{width:"100%"}}>
            <img src={DoctorIcon} className="img-fluid" alt="Clik Care Logo" ></img>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="center-container">
            <div className="card-body mb-3 g-30" style={{ width: '30rem' }}>
            <h1 className="card-title mb-3 g-10 text-center text-primary">Doctor Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 g-10">
                <label htmlFor="DoctorName" className="form-label required"><span className="form-label-heading">Doctor Full Name <span className="text-danger">*</span></span></label>
                <input type="text" className="form-control" id="InputDoctorName" placeholder="Enter your Full Name" required minLength="2" maxLength="20" onChange={(e) => {setDoctorName(e.target.value);}} />
                </div>

                <div className="row">
                <div className="col-md-6">
                    <div className="mb-3 g-10">
                    <label htmlFor="Gender" className="form-label required"><span className="form-label-heading" >Gender <span className="text-danger">*</span></span></label>
                    <select className="form-select" data-toggle="dropdown" required id="InputGender" onChange={(e) => {setGender(e.target.value);}}>
                        <option value="">Select</option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                    </div>
                </div>
                    <div className="col-md-6">
                        <div className="mb-3 g-10">
                        <label htmlFor="Age" className="form-label required">
                        <span className="form-label-heading">Age <span className="text-danger">*</span></span>
                        </label>
                        <input type="number" className="form-control" id="Age"
                        placeholder="Enter your age" min="1" max="100"
                        onKeyDown={(e) => {
                            if (!/^\d+$/.test(e.key) && e.keyCode !== 8) {e.preventDefault();}
                            if (e.target.value.length >= 2 && e.keyCode !== 8) {e.preventDefault(); }
                        }}
            
                        onChange={(e) => {setAge(age);}} /> 
                        </div>
                    </div>
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="MobileNumber" className="form-label required"><span className="form-label-heading">Mobile Number <span className="text-danger">*</span></span></label>
                    <div class="row">
                        <input class="col-md-9" style={{ width: '70%', marginLeft: '2%'}} type="tel" pattern="[0-9]{10}" inputMode="numeric" className="form-control" id="InputMobileNumber" placeholder="Enter your Mobile Number" required minLength="10" maxLength="10" onInput={(e) => {const inputValue = e.target.value; const numericValue = inputValue.replace(/\D/g, '');  e.target.value = numericValue; setMobileNumber(numericValue);}} onChange={(e) => {setMobileNumber(e.target.value);}} />
                        <button className={`col-md-2 offset-md-1 btn ${isphonenumberverified ? "btn-success" : "btn-primary"}`} onClick={isphonenumberverified ? null : sendphonenumberotp}> {isphonenumberverified ? "Verified" : "Verify"} </button>
                    </div>
                    
                    {phonenumberotpSent &&
                        <div className="mb-3 g-10">
                            <div className="form-text mb-3 g-10">We have sent 6 digit code to your mobile number.</div>
                            
                            <div className="mb-3 g-10">
                                <label htmlFor="MobileOtpVerification" className="form-label required"><span className="form-label-heading"> Enter the otp for complete verification<span className="text-danger">*</span></span></label>
                                <div class="row"> 
                                    <input onInput={(e) => {const inputValue = e.target.value;const numericValue = inputValue.replace(/\D/g, ''); e.target.value=numericValue;setMobileNumber(numericValue);}}  type="text" class="col-md-9" minLength={6} maxLength={6} style={{ width: '70%', marginLeft: '2%'}} className="form-control" id="InputOTP" placeholder="Enter OTP" required onChange={(e)=>{setphonenumberotp(e.target.value)}}/>
                                    <button className="col-md-2 offset-md-1 btn btn-primary" onClick={verifyphonenumberotp}> Submit </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="mb-3 g-10">
                    <label htmlFor="Email" className="form-label required"><span className="form-label-heading">Email <span className="text-danger">*</span></span></label>
                    <div class="row ">
                        <input type="email" class="col-md-9" className="form-control" style={{ width: '70%', marginLeft: '2%' }} id="InputEmail" placeholder="Enter your Email" required onChange={(e)=>{setEmail(e.target.value);}}/>
                        <button className={`col-md-2 offset-md-1 btn ${isemailverified ? "btn-success" : "btn-primary"}`} onClick={isemailverified ? null : sendemailotp}> {isemailverified ? "Verified" : "Verify"} </button>
                    </div>
                    {emailotpSent &&
                        <div className="mb-3 g-10">
                            <div className="form-text mb-3 g-10">We have sent 6 digit code to your Email.</div>
                            
                            <div className="mb-3 g-10"> 
                                <label htmlFor="EmailOtpVerification" className="form-label required"><span className="form-label-heading"> Enter the otp for Email verification<span className="text-danger">*</span></span></label>
                                <div class="row"> 
                                    <input onInput={(e) => {const inputValue = e.target.value;const numericValue = inputValue.replace(/\D/g, ''); e.target.value=numericValue;setMobileNumber(numericValue);}} onChange={(e)=>{setemailotp(e.target.value)}} type="text" class="col-md-9" minLength={6} maxLength={6} style={{ width: '70%', marginLeft: '2%'}} className="form-control" id="InputOTP" placeholder="Enter OTP" required />
                                    <button className="col-md-2 offset-md-1 btn btn-primary" onClick={verifyemailotp}> Submit </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="Specialised" className="form-label required"><span className="form-label-heading"> Specialised <span className="text-danger">*</span></span></label>
                <input type="text" className="form-control" id="InputSpecialised" placeholder="Enter your Expertise" required onChange={(e) => {setSpecialised(e.target.value);}} />
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="Experience" className="form-label required"><span className="form-label-heading"> Experience <span className="text-danger">*</span></span></label>
                <input type="number" className="form-control" id="Age"
                        placeholder="Enter your Experience in years" min="1" max="100"
                        onKeyDown={(e) => {
                            if (!/^\d+$/.test(e.key) && e.keyCode !== 8) {e.preventDefault();}
                            if (e.target.value.length >= 2 && e.keyCode !== 8) {e.preventDefault(); }
                        }}
            
                        onChange={(e) => {setExperience(experience);}} /></div>

                <div className="mb-3 g-10 form-check">    
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required onChange={(e)=>{setAgreedTerms(e.target.checked);}}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className="mb-3 g-10 btn btn-primary btn-lg d-block mx-auto rounded-pill" style={{ width: '250px' }}> Register </button>

                <p className="card-text mb-3 g-10 text-center">Already Registered? <Link to="/doctorLogin" className="card-link"> Login </Link></p>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
}

export default DoctorRegister;
