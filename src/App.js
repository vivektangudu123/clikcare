import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from './components/PatientRegister'
import DoctorRegistration from './components/DoctorRegister'
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
// import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import Overview from './pages/Overview.jsx';
import Appointments from './pages/Appointments.jsx';
import Reports from './pages/Reports.jsx';
import DirectMessaging from './pages/DirectMessaging.jsx';
import Settings from './pages/Settings.jsx';
import Logout from './pages/Logout.jsx';
import './App.css'
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patientRegister" element={<PatientRegistration />} />
        <Route path="/doctorRegister" element={<DoctorRegistration />} />
        <Route path="/patientLogin" element={<PatientLogin/>} />
        <Route path="/doctorLogin" element={<DoctorLogin/>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path='/Overview' element={<Overview/>}></Route>
        <Route path='/Appointments' element={<Appointments/>}></Route>
        <Route path='/Reports' element={<Reports/>}></Route>
        <Route path='/DirectMessaging' element={<DirectMessaging/>}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
      </Routes>
      {/* <Sidebar>
         <Routes>
            <Route path='/Overview' element={<Overview/>}></Route>
            <Route path='/Appointments' element={<Appointments/>}></Route>
            <Route path='/Reports' element={<Reports/>}></Route>
            <Route path='/DirectMessaging' element={<DirectMessaging/>}></Route>
            <Route path='/Settings' element={<Settings/>}></Route>
            <Route path='/Logout' element={<Logout/>}></Route>
         </Routes>
      </Sidebar> */}

    </BrowserRouter>
  );
}

export default App;
