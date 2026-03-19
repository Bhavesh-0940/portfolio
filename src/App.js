import React from "react";

function App() {
  return (
    <div style={{ background: "#0a0f1c", color: "white", fontFamily: "Arial", padding: "20px" }}>

      <h1>Bhujram Jat</h1>
      <h3>DevOps & Cloud Engineer</h3>
      <p>Building scalable cloud infrastructure using AWS, Docker & Linux.</p>

      <a href="https://wa.me/917987891653" target="_blank" style={btn}>
        Hire Me
      </a>

      <h2>Skills</h2>
      <ul>
        <li>Linux</li>
        <li>Docker</li>
        <li>AWS (EC2, S3, IAM, VPC, CloudWatch)</li>
        <li>Bash Scripting</li>
      </ul>

      <h2>Projects</h2>

      <div style={card}>
        <h3>Dockerized Nginx</h3>
        <p>Containerized web server using Docker</p>
        <a href="https://github.com/Bhavesh-0940" target="_blank" style={btn}>
          View Code
        </a>
      </div>

      <div style={card}>
        <h3>Student Management System</h3>
        <p>Bash CLI CRUD app</p>
        <a href="https://github.com/Bhavesh-0940" target="_blank" style={btn}>
          View Code
        </a>
      </div>

      <div style={card}>
        <h3>AWS Deployment</h3>
        <p>EC2 + S3 setup</p>
        <a href="https://github.com/Bhavesh-0940" target="_blank" style={btn}>
          View Code
        </a>
      </div>

      <h2>Contact</h2>
      <p>Email: jatbhavesh878@gmail.com</p>
      <p>Phone: 7987891653</p>

      <a href="https://github.com/Bhavesh-0940" target="_blank" style={btn}>
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/bhujram-jat-759016369" target="_blank" style={btn}>
        LinkedIn
      </a>

    </div>
  );
}

const card = {
  background: "#111",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "10px"
};

const btn = {
  display: "inline-block",
  background: "#00d4ff",
  color: "black",
  padding: "8px 15px",
  margin: "5px",
  textDecoration: "none",
  borderRadius: "5px"
};

export default App;