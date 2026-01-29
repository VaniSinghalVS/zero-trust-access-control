import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import AboutTechnology from "./AboutTechnology";


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [trustDetails, setTrustDetails] = useState([]);

  const handleLogin = () => {
    let trustScore = 0;
    let currentRole = "";

    // Simulated credentials
    if (username === "admin" && password === "admin123") {
      currentRole = "Admin";
      trustScore = 95;
      setTrustDetails([
        "✔ Valid credentials",
        "✔ Known device",
        "✔ Normal login time",
        "✔ Same IP address",
        "✔ MFA enabled",
        "✔ Geo-location matched"
      ]);
    }
    else if (username === "user1" && password === "user123") {
      currentRole = "User";
      trustScore = 75;
      setTrustDetails([
        "✔ Valid credentials",
        "✔ Known device",
        "✔ Normal login time",
        "✔ Same IP address",
        "✖ MFA not enabled",
        "✔ Geo-location matched"
      ]);
    }
    else if (username === "user2" && password === "user456") {
      currentRole = "User";
      trustScore = 55;
      setTrustDetails([
        "✔ Valid credentials",
        "✖ Unknown device",
        "✖ Unusual login time",
        "✔ Same IP address",
        "✖ MFA not enabled",
        "✔ Geo-location matched"
      ]);
    }
    else {
      setResult("Invalid credentials → ACCESS DENIED");
      setRole("");
      setLoggedIn(false);
      setTrustDetails([]);
      return;
    }

    setRole(currentRole);

    // Decision logic
    // Decision logic
    // Decision logic
    if (currentRole === "Admin" && trustScore >= 60) {
      setLoggedIn(true);
      setResult(`ACCESS GRANTED (Trust Score: ${trustScore})`);
    }
    else if (currentRole === "User" && trustScore >= 70) {
      setLoggedIn(true);
      setResult(`ACCESS GRANTED (Trust Score: ${trustScore})`);
    }
    else if (trustScore >= 40) {
      setLoggedIn(false);
      setResult(`EXTRA VERIFICATION REQUIRED (Trust Score: ${trustScore})`);
    }
    else {
      setLoggedIn(false);
      setResult("ACCESS DENIED");
    }
  };

  const getColor = () => {
    if (result.includes("GRANTED")) return "green";
    if (result.includes("VERIFICATION")) return "orange";
    if (result.includes("DENIED")) return "red";
    return "black";
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setResult("");
    setRole("");
    setTrustDetails([]);
  };

  const Home = () => (
  <div style={{ textAlign: "center", marginTop: "40px" }}>
    <h2>Welcome to Zero Trust Access Control System</h2>
    <p>
      This prototype demonstrates adaptive access control based on Zero Trust principles.
    </p>
  </div>
  );

  return (
  <>
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "Arial" }}>
      <h2>Zero Trust Access Control System</h2>

      {role && <h4>Role: {role}</h4>}

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loggedIn}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loggedIn}
      />
      <br /><br />

      <button onClick={handleLogin} disabled={loggedIn}>
        {loggedIn ? "Logged In" : "Login"}
      </button>

      {loggedIn && (
        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      )}

      <p style={{ color: getColor(), fontWeight: "bold", marginTop: "20px" }}>
        {result}
      </p>

      {result.includes("VERIFICATION") && (
        <p style={{ color: "orange" }}>
          Additional verification is required due to low trust score.
        </p>
      )}

      {trustDetails.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Trust Evaluation Details</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {trustDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <Router>
      {loggedIn && (
        <>
          <nav style={{ padding: "1rem", background: "#ddd" }}>
            <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/about-us" style={{ marginRight: "1rem" }}>About Us</Link>
            <Link to="/about-tech">About Technology</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-tech" element={<AboutTechnology />} />
          </Routes>
        </>
      )}
    </Router>

  </>
);
}

export default App;