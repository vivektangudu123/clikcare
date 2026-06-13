# 🩺 ClikCare — Telemedicine Platform

ClikCare is a telemedicine web application that connects patients with doctors. Patients log in with an OTP, browse doctors by specialization and experience, book appointments, manage medical reports, and join **real-time video consultations** powered by WebRTC.

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black">
  <img alt="WebRTC" src="https://img.shields.io/badge/WebRTC-simple--peer-333333?logo=webrtc&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white">
  <img alt="Axios" src="https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white">
  <img alt="JWT" src="https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

## ✨ Features

- **Dual-role access** — separate login flows for **doctors** and **patients**.
- **OTP authentication** — passwordless login; a JWT is issued on verification and persisted in `localStorage`.
- **Doctor discovery** — browse available doctors by name, specialization and years of experience.
- **Appointment booking** — pick a doctor and schedule an appointment with a date/time slot.
- **Real-time video consultations** — peer-to-peer video calls via WebRTC (`simple-peer`) with WebSocket signaling and live connection status.
- **Medical reports** — upload, view (in-app PDF viewer via `react-pdf`), download and share patient reports; doctors can upload reports for patients.
- **Smooth UX** — animated transitions with `react-spring` and a collapsible sidebar navigation.

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React 18, React Router DOM 6 |
| Realtime | `simple-peer` (WebRTC), WebSocket signaling |
| Documents | `react-pdf` (PDF rendering) |
| Animation | `react-spring` |
| HTTP | Axios |
| Auth | JWT (`localStorage`), OTP verification |
| Tooling | Create React App (react-scripts 5) |
| Backend API | REST + WebSocket service at `http://localhost:5001` (separate repository) |

## 🧭 Main Screens

| Screen | Description |
|--------|-------------|
| Landing | Doctor / Patient role selection |
| Login | OTP-based authentication |
| Overview | Browse doctors and book appointments |
| Appointments | List of booked appointments with doctor + time |
| Reports | Upload / view / download / share medical reports |
| Video | WebRTC video consultation room |

## 🔌 Backend API

The app expects a backend at `http://localhost:5001`:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/auth/send_otp` | Send login OTP |
| `POST` | `/api/auth/verify_otp` | Verify OTP, return JWT |
| `POST` | `/api/auth/jwt` | Validate JWT |
| `GET`  | `/doctors/all` | List all doctors |
| `GET`/`POST` | `/appointments/all`, `/appointments/create` | View / create appointments |
| `GET`/`POST` | `/records/all`, `/records/add` | View / upload medical records |
| `WS`   | `ws://localhost:5001/videochat` | Video-call signaling |

## 🚀 Getting Started

```bash
# clone
git clone https://github.com/vivektangudu123/clikcare.git
cd clikcare

# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm start
```

> Requires the ClikCare backend running at `http://localhost:5001`.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the app in development mode |
| `npm run build` | Build an optimized production bundle |
| `npm test` | Run the test runner |

## 📁 Project Structure

```
clikcare/
├── src/
│   ├── pages/          # Overview, Appointments, Reports
│   ├── components/     # Video (WebRTC), Sidebar, LandingPage, logins
│   ├── apicalls/       # axiosInstance, patient, doctor, appointment, records
│   └── App.js          # routes
└── package.json
```

## 👤 Author

**Vivek Tangudu**

- GitHub: [@vivektangudu123](https://github.com/vivektangudu123)
- LinkedIn: [vivektangudu](https://www.linkedin.com/in/vivektangudu)

## 📄 License

Released under the MIT License.
