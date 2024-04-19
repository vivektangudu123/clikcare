import React, { useEffect, useState } from 'react';
import { get_all_doctors } from '../apicalls/doctor';
import document from "../assets/Document.svg";
import view from "../assets/View.svg"
import xmlJs from 'xml-js'
import { AddAppointment } from '../apicalls/appointment';
import { verify_jwt } from "../apicalls/axiosInstance";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('JWT');
        if (token) {
          console.log("Found a JWT token");
          console.log(token)
          const respon = verify_jwt(token);
    
          if (respon === "1" || respon === "2") {
            navigator("/LandingPage")
            return;
          }
        } else {
          navigator("/LandingPage")
          return;
        }
        const response = await get_all_doctors();
        console.log(response)
        if (response === "1") {
          localStorage.removeItem("JWT")
          navigator("/LandingPage")
          return
        }
        const json = xmlJs.xml2js(response, { compact: true, spaces: 2 });
        let items = [];
  
        if (json.List && json.List.item) {
          if (Array.isArray(json.List.item)) {
            items = json.List.item;
          } else {
            items = [json.List.item];
          }
        }
        setDoctorsList(items);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };
    fetchData();
  }, []);

  const handleReportClick = (index) => {
    setSelectedDoctorIndex(index);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setAppointmentTime(time);
  };

  const handleBookAppointment = async () => {
    console.log("Doctor ID:", doctorsList[selectedDoctorIndex].doctorId._text);
    console.log("Appointment Date:", selectedDate);
    console.log("Appointment Time:", appointmentTime);
    if (selectedDate && appointmentTime) {

      try {

          const response = await AddAppointment(doctorsList[selectedDoctorIndex].doctorId._text, selectedDate,appointmentTime); 
          console.log('Appointment response:', response);
      } catch (error) {
          console.error('Error making appointment:', error);
      }
  } else {
      console.error("Please select a date and time for the appointment.");
  }
  };

  return (
    <div>
      <div style={{ paddingTop: "20px", marginLeft: "25px", fontWeight: "600", fontSize: "30px" }}>Doctors</div>
      {doctorsList.map((doctor, index) => (
        <div key={index} className='ReportItem' style={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: "25px", border: "10px", backgroundColor: "white", marginTop: "30px", marginRight: "25px" }}>
          <div>
            <img src={document} alt="Document" style={{ alignSelf: 'flex-start', height: 'auto', borderRadius: '5px', marginLeft: '5px', marginRight: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Doctor name: {doctor.doctorName._text}</p>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Specialization: {doctor.specialization._text}</p>
              <p style={{ fontWeight: 'bold' }}>Experience: {doctor.experience._text}</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <button onClick={() => handleReportClick(index)} style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={view} style={{ marginRight: "4px" }} alt="View" /><span style={{ paddingTop: "5px" }}>Get an Appointment</span></button>
          </div>
        </div>
      ))}
      {/* Appointment popup */}
      {selectedDoctorIndex !== null && (
        <div className="appointment-popup">
          <div>Select Date:</div>
          <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
          {/* Render time slots for selected date */}
          {/* Example: */}
          {selectedDate && (
            <div>
              <div>Select Time:</div>
              <select onChange={(e) => handleTimeChange(e.target.value)}>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
              </select>
            </div>
          )}
          <button onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      )}
    </div>
  );
};

export default Overview;
