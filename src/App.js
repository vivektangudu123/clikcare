import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from './components/PatientRegister'
import PatientLogin from './components/PatientLogin';
import HomePage from "./components/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientLogin />} />
        <Route path="/register" element={<PatientRegistration />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
