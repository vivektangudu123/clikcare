import React, { useEffect, useState } from 'react';
import { get_all_doctors } from '../apicalls/doctor';
import document from "../assets/Document.svg";
import xmlJs from 'xml-js';




const Overview = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_all_doctors();
        console.log(response)
        if (response === "1") {
          localStorage.removeItem("JWT")
          navigator("/");
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
        setReports(items);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <div>
      <div style={{ paddingTop: "20px", marginLeft: "25px", fontWeight: "600", fontSize: "30px" }}>Reports</div>
      {reports.map((report, index) => (
        <div key={index} className='ReportItem' style={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: "25px", border: "10px", backgroundColor: "white", marginTop: "30px", marginRight: "25px" }}>
          <div>
            <img src={document} alt="Document" style={{ alignSelf: 'flex-start', height: 'auto', borderRadius: '5px', marginLeft: '5px', marginRight: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Report name: {report.doctorId._text}</p>
              <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Patient ID: {report.doctorName._text}</p>
              <p style={{ fontWeight: 'bold' }}>Description: {report.phoneNumber._text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Overview;