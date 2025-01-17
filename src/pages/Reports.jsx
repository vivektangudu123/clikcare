import React, { useEffect, useState } from 'react';
import upload from "../assets/upload.svg";
import download from "../assets/download.svg";
import view from "../assets/View.svg"
import share from "../assets/Share.svg"
import document from "../assets/Document.svg";
import { get_all_records,uploadReport} from '../apicalls/records';
import xmlJs from 'xml-js';
// import { Document, Page } from 'react-pdf'; 
import { useNavigate } from "react-router-dom";
import { verify_jwt } from "../apicalls/axiosInstance";
const UploadReportPopup = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const uploadResponse = await uploadReport(selectedFile,"bcisdk"); // Assuming uploadReport function exists in your apicalls/records module
        console.log('Upload response:', uploadResponse);
        onClose(selectedFile);
      } catch (error) {
        console.error('Error uploading report:', error);
      }
    } else {
      alert('Please select a file to upload');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <>
      <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', zIndex: '999'}}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>Upload Report</h2>
          <input type="file" onChange={handleFileChange} />
          <button style={{ padding: '10px', marginRight: '5px' }} onClick={handleFileUpload}>Upload</button>
          <button style={{ padding: '10px' }} onClick={onClose}>Close</button>
        </div>
      </div>
      <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '998'}} />
    </>
  );
};



const Reports = () => {
  const [reports, setReports] = useState([]);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [selectedReportIndex, setSelectedReportIndex] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('JWT');
        if (token) {
          console.log("Found a JWT token");
          const respon = verify_jwt(token);
    
          if (respon === "1" && respon === "2") {
            navigate("/LandingPage")
            return 
          } 
        } else {
          navigate("/LandingPage")
          return 
        }
        const response = await get_all_records();
        const json = xmlJs.xml2js(response, { compact: true, spaces: 2 });
        let items = [];

        if (json.ArrayList && json.ArrayList.item) {
          if (Array.isArray(json.ArrayList.item)) {
            items = json.ArrayList.item;
          } else {
            items = [json.ArrayList.item];
          }
        }
        setReports(items);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };
    fetchData();
  }, []);


  const handleUploadClick = () => {
    setShowUploadPopup(true);
  };

  const handleCloseUploadPopup = () => {
    setShowUploadPopup(false);
  };

  const handleReportClick = (index) => {
    setSelectedReportIndex(index);
    const report = reports[index];
    // console.log('Report data:', report); // Log the report object to inspect its structure
    console.log('File data:', report.fileData._text); // Log the file data to check its format
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Report Viewer</title>
          </head>
          <body>
            <iframe src="data:application/pdf;base64,${report.fileData._text}" width="100%" height="100%" frameborder="0"></iframe>
          </body>
        </html>
      `);
    } else {
      alert('Please allow pop-ups for this website to view reports.');
    }
  };
  

  return (
    <div>
      <div style={{ paddingTop: "20px", marginLeft: "25px", fontWeight: "600", fontSize: "30px" }}>Reports</div>
      <div style={{ display: "flex", marginLeft: "25px", marginTop: "30px" }}>
        <button onClick={handleUploadClick} style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "5px" }} alt="Download" /><span style={{ paddingTop: "2px" }}>Upload a Report</span></button>
        <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={upload} style={{ marginRight: "5px" }} alt="Upload" /><span style={{ paddingTop: "2px" }}>Download all Reports</span></button>
      </div>
      {reports.map((report, index) => (
        <div key={index} className='ReportItem' style={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: "25px", border: "10px", backgroundColor: "white", marginTop: "30px", marginRight: "25px" }}>
          <div>
            <img src={document} alt="Document" style={{ alignSelf: 'flex-start', height: 'auto', borderRadius: '5px', marginLeft: '5px', marginRight: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Report name: {report.recordId._text}</p>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Patient ID: {report.patientId._text}</p>
              <p style={{ fontWeight: 'bold' }}>Description: {report.description._text}</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <button onClick={() => handleReportClick(index)} style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={view} style={{ marginRight: "4px" }} alt="View" /><span style={{ paddingTop: "5px" }}>View Report</span></button>
            <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "4px" }} alt="Download" /><span style={{ paddingTop: "5px" }}>Download</span></button>
            <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={share} style={{ marginRight: "4px" }} alt="Share" /><span style={{ paddingTop: "5px" }}>Share Report</span></button>
          </div>
        </div>
      ))}
      {showUploadPopup && (
        <div className="overlay">
          <UploadReportPopup onClose={handleCloseUploadPopup} />
        </div>
      )}
    </div>
  );
};

export default Reports;




