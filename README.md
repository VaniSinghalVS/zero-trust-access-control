# Zero Trust Access Control System  
### React + Java Prototype


## 📌 Project Overview
Traditional authentication systems rely mainly on static credentials such as usernames and passwords. Once authenticated, users are often implicitly trusted for the entire session. This approach is vulnerable to credential theft, insider threats, and contextual anomalies.

This project implements a **prototype Zero Trust Access Control System** that evaluates users dynamically based on contextual trust factors rather than relying solely on credentials. Access decisions are adaptive, role-aware, and explainable, following modern Zero Trust security principles.



## 🎯 Key Features
- Role-based access control (Admin / User)
- Context-aware trust score evaluation
- Adaptive access decisions:
  - Access Granted
  - Extra Verification Required
  - Access Denied
- Explainable trust evaluation (visible trust factors)
- Session simulation with login and logout
- Color-coded UI feedback for access decisions
- GitHub-based version control for team collaboration



## 🛠️ Technology Stack

### Frontend
- React (JavaScript)
- HTML, CSS
- Node.js & npm

### Backend
- Java (JDK 17)
- Trust evaluation logic implemented in Java

### Tools
- Git
- GitHub
- VS Code



## 🧩 Project Structure

zero-trust-access-control/
│
├── backend/
│ └── src/
│ ├── ZeroTrustServer.java
│ └── ZeroTrustServer.class
│
├── frontend-react/
│ ├── public/
│ └── src/
│ ├── App.js
│ ├── App.css
│ └── index.js
│
└── README.md



## ▶️ How to Run the Project

### Prerequisites
- Java JDK 17 or above
- Node.js (LTS)
- npm
- Git

---

### Backend (Java)
```bash
cd backend/src
javac ZeroTrustServer.java
java ZeroTrustServer

Expected output:
Zero Trust Backend Started
Trust Score: <value>
ACCESS GRANTED / VERIFICATION / DENIED

Frontend (React)
cd frontend-react
npm install
npm start

The application will open in the browser at:

http://localhost:3000

(or another port if 3000 is already in use)


## 🔐 Demo Credentials

| Username | Password | Role  | Expected Result |
|---------|----------|-------|----------------|
| admin   | admin123 | Admin | Access Granted |
| user1   | user123  | User  | Access Granted |
| user2   | user456  | User  | Extra Verification |
| any     | any      | —     | Access Denied |


## 🧠 Trust Evaluation Logic

Access decisions are not based solely on credentials. Each login attempt is evaluated using multiple contextual trust factors, including:

- Credential validity
- Device familiarity
- Login behavior and time
- IP address consistency
- Multi-factor authentication status
- Geo-location match

Each factor contributes to a cumulative **trust score**.  
The final access decision is made by comparing this score against **role-based thresholds**, resulting in:
- Access Granted
- Extra Verification Required
- Access Denied


## ⚠️ Limitations
- Prototype-level implementation
- Simulated trust factors and credentials
- No persistent database integration
- No real multi-factor authentication
- Frontend–backend communication is not API-based

---

## 🚀 Future Enhancements
- Spring Boot REST API integration
- Database-backed user and audit logs
- JWT-based authentication
- Real multi-factor authentication (OTP)
- Dynamic policy and trust-weight management
- Machine learning–based adaptive trust scoring
