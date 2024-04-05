import React, { useEffect, useState } from 'react';
import upload from "../assets/upload.svg";
import download from "../assets/download.svg";
import view from "../assets/View.svg"
import share from "../assets/Share.svg"
import document from "../assets/Document.svg";

const UploadReportPopup = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = () => {
    if (selectedFile) {
      // Add your file upload logic here
      // Once upload is complete, you can call onClose to close the popup
      onClose(selectedFile);
    } else {
      // Show a message or alert that no file is selected
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
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('your_backend_api_endpoint');
        const data = await response.json();
        setReports(data);
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

  return (
    <div>
      <div style={{ paddingTop: "20px", marginLeft: "25px", fontWeight: "600", fontSize: "30px" }}>Reports</div>
      <div style={{ display: "flex", marginLeft: "25px", marginTop: "30px" }}>
        <button onClick={handleUploadClick} style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "5px" }} /><span style={{ paddingTop: "2px" }}>Upload a Report</span></button>
        <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={upload} style={{ marginRight: "5px" }} /><span style={{ paddingTop: "2px" }}>Download all Reports</span></button>
      </div>
      {reports.map((report, index) => (
        <div key={index} className='ReportItem' style={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: "25px", border: "10px", backgroundColor: "white", marginTop: "30px", marginRight: "25px" }}>
          <div>
            <img src={document} alt="Image" style={{ alignSelf: 'flex-start', height: 'auto', borderRadius: '5px', marginLeft: '5px', marginRight: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Report name: {report.name}</p>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Doctor name: {report.doctor}</p>
              <p style={{ fontWeight: 'bold' }}>Date: {report.date}</p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={view} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>View Report</span></button>
            <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>Download</span></button>
            <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={share} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>Share Report</span></button>
          </div>
        </div>
      ))}
      {showUploadPopup && (
        <div className="overlay">
          <UploadReportPopup onClose={handleCloseUploadPopup} />
        </div>
      )}
    </div>
  )
}

export default Reports;



// import React, { useEffect, useState } from 'react';
// import upload from "../assets/upload.svg";
// import download from "../assets/download.svg";
// import view from "../assets/View.svg"
// import share from "../assets/Share.svg"
// import document from "../assets/Document.svg";

// const Reports = () => {
//   const [reports, setReports] = useState([]);
//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
//         const response = await fetch('your_backend_api_endpoint');
//         const data = await response.json();
//         setReports(data);
//       } catch (error) {
//         console.error('Error fetching report data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div style={{ paddingTop: "20px", marginLeft: "25px", fontWeight: "600", fontSize: "30px" }}>Reports</div>
//       <div style={{ display: "flex", marginLeft: "25px", marginTop: "30px" }}>
//         <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "5px" }} /><span style={{ paddingTop: "2px" }}>Upload a Report</span></button>
//         <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "18px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={upload} style={{ marginRight: "5px" }} /><span style={{ paddingTop: "2px" }}>Download all Reports</span></button>
//       </div>
//       {reports.map((report, index) => (
//         <div key={index} className='ReportItem' style={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: "25px", border: "10px", backgroundColor: "white", marginTop: "30px", marginRight: "25px" }}>
//           <div>
//             <img src={document} alt="Image" style={{ alignSelf: 'flex-start', height: 'auto', borderRadius: '5px', marginLeft: '5px', marginRight: '10px' }} />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Report name: {report.name}</p>
//               <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Doctor name: {report.doctor}</p>
//               <p style={{ fontWeight: 'bold' }}>Date: {report.date}</p>
//             </div>
//           </div>
//           <div style={{ display: 'flex' }}>
//             <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={view} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>View Report</span></button>
//             <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={download} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>Download</span></button>
//             <button style={{ borderWidth: "2px", backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", borderColor: "#3F38FF", marginRight: "20px", color: "#3F38FF", display: "flex" }}><img src={share} style={{ marginRight: "4px" }} /><span style={{ paddingTop: "5px" }}>Share Report</span></button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Reports;
