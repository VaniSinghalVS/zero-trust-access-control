# Zero Trust Access Control System (React)

## 📌 Project Overview
This project is a frontend prototype of a **Zero Trust Access Control System** built using **React**.  
It demonstrates how access decisions can be made dynamically based on **user identity, role, and trust score**, instead of assuming implicit trust.

The application simulates adaptive authentication by evaluating multiple trust factors before granting access to protected resources.

---

## 🔐 Key Features
- Role-based access control (Admin / User)
- Dynamic trust score calculation
- Adaptive access decisions:
  - Access Granted
  - Extra Verification Required
  - Access Denied
- Protected routes and navigation
- Conditional rendering based on authentication state
- Zero Trust UI enforcement (no access before login)

---

## 🧠 Zero Trust Logic
Each login attempt is evaluated using simulated trust factors such as:
- Credential validity
- Device familiarity
- Login time behavior
- IP address consistency
- MFA availability
- Geo-location match

Based on the trust score:
- **Admin** requires ≥ 60 trust score
- **User** requires ≥ 70 trust score
- Medium trust triggers additional verification
- Low trust results in access denial

---

## 🧭 Application Flow
1. User enters credentials
2. System evaluates trust factors
3. Trust score is calculated
4. Access decision is made
5. Protected pages become visible only after successful login

---

## 🛡️ Security Implementation
- All internal pages (Home, About Us, About Technology) are hidden until authentication is successful
- Navigation menu is conditionally rendered based on login status
- This aligns with **Zero Trust principles**: *never trust, always verify*

---

## 🛠️ Technologies Used
- React.js
- React Hooks (`useState`)
- React Router DOM
- JavaScript (ES6)

---

## 🚀 How to Run the Project
```bash
npm install
npm start
