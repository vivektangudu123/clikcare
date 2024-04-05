import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from './components/PatientRegister'
import DoctorRegistration from './components/DoctorRegister'
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patientRegister" element={<PatientRegistration />} />
        <Route path="/doctorRegister" element={<DoctorRegistration />} />
        <Route path="/patientLogin" element={<PatientLogin/>} />
        <Route path="/doctorLogin" element={<DoctorLogin/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
