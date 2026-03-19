import { useState, useEffect, useRef } from "react";

const SKILLS = [
  { name: "Linux", icon: "🐧", level: 90 },
  { name: "Docker", icon: "🐳", level: 85 },
  { name: "AWS EC2/S3/IAM", icon: "☁️", level: 80 },
  { name: "Bash Scripting", icon: "💻", level: 88 },
  { name: "Git & GitHub", icon: "🐙", level: 85 },
  { name: "VPC & Networking", icon: "🌐", level: 75 },
  { name: "CI/CD Pipelines", icon: "🔄", level: 72 },
  { name: "NGINX", icon: "⚡", level: 78 },
  { name: "Kubernetes (Learning)", icon: "☸️", level: 55 },
  { name: "Terraform (Learning)", icon: "🏗️", level: 50 },
];

const PROJECTS = [
  {
    title: "Dockerized Nginx Server",
    desc: "Containerized production-ready web server using Docker with custom networking, volume mounts, and automated health checks.",
    tags: ["Docker", "NGINX", "Linux"],
    link: "https://github.com/Bhavesh-0940",
    icon: "🐳",
  },
  {
    title: "Student Management System",
    desc: "Full-featured Bash CLI CRUD application with file-based storage, input validation, and formatted reporting.",
    tags: ["Bash", "Linux", "CLI"],
    link: "https://github.com/Bhavesh-0940",
    icon: "📋",
  },
  {
    title: "AWS Cloud Infrastructure",
    desc: "Secure multi-tier deployment using EC2, S3 buckets, IAM roles with least privilege, and custom VPC with public/private subnets.",
    tags: ["AWS", "IAM", "VPC", "EC2"],
    link: "https://github.com/Bhavesh-0940",
    icon: "☁️",
  },
  {
    title: "CI/CD Pipeline Setup",
    desc: "Automated deployment pipeline using GitHub Actions with Docker build, test, and push stages to DockerHub.",
    tags: ["GitHub Actions", "Docker", "CI/CD"],
    link: "https://github.com/Bhavesh-0940",
    icon: "🔄",
  },
];

const EXPERIENCE = [
  {
    role: "DevOps Intern",
    company: "Self-Directed Projects",
    period: "2024 – Present",
    points: [
      "Deployed containerized apps using Docker & NGINX on Linux servers",
      "Configured AWS EC2 instances with proper IAM roles and security groups",
      "Automated backup & log rotation scripts using Bash",
      "Set up GitHub repositories with branch protection and CI/CD workflows",
    ],
    icon: "🚀",
    color: "#00d4ff",
  },
  {
    role: "Cloud Learning Enthusiast",
    company: "AWS & Linux Self-Training",
    period: "2023 – 2024",
    points: [
      "Completed AWS Cloud Practitioner concepts and hands-on labs",
      "Built 10+ Linux administration projects on local VMs",
      "Practiced Docker containerization with real-world applications",
      "Studied networking: TCP/IP, DNS, HTTP, VPC architecture",
    ],
    icon: "📚",
    color: "#a855f7",
  },
];

const JOB_SKILLS = [
  { name: "Server Administration", icon: "🖥️" },
  { name: "Cloud Cost Optimization", icon: "💰" },
  { name: "Security & IAM", icon: "🔐" },
  { name: "Log Monitoring", icon: "📊" },
  { name: "Incident Response", icon: "🚨" },
  { name: "Documentation", icon: "📝" },
  { name: "Agile / Scrum", icon: "📌" },
  { name: "Troubleshooting", icon: "🔧" },
];

const CONTACTS = [
  { label: "WhatsApp", href: "https://wa.me/917987891653", icon: "💬", color: "#25D366" },
  { label: "GitHub", href: "https://github.com/Bhavesh-0940", icon: "🐙", color: "#6e7681" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bhujram-jat-759016369", icon: "💼", color: "#0077b5" },
  { label: "Email", href: "mailto:jatbhavesh878@gmail.com", icon: "📧", color: "#ea4335" },
];

function SkillBar({ name, icon, level, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setWidth(level), delay);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div ref={ref} style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", color: "#c8e6ff" }}>{icon} {name}</span>
        <span style={{ fontSize: "13px", color: "#00d4ff", fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div style={{ background: "#0d1b2a", borderRadius: "20px", height: "6px", overflow: "hidden" }}>
        <div style={{
          width: `${width}%`, height: "100%",
          background: "linear-gradient(90deg, #00d4ff, #a855f7)",
          borderRadius: "20px",
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "0 0 10px #00d4ff88",
        }} />
      </div>
    </div>
  );
}

function Section({ title, emoji, children }) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
        <span style={{ fontSize: "22px" }}>{emoji}</span>
        <h2 style={{
          margin: 0, fontSize: "1.3rem",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "3px",
          background: "linear-gradient(90deg, #00d4ff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
        }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #00d4ff33, transparent)" }} />
      </div>
      {children}
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [typed, setTyped] = useState("");
  const fullText = "DevOps & Cloud Engineer";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(iv);
    }, 75);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ background: "#050b14", color: "white", fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        * { box-sizing: border-box; }
      `}</style>

      {/* Grid bg */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)",
        backgroundSize: "50px 50px",
      }} />
      {/* Glow blobs */}
      <div style={{ position: "fixed", top: "-150px", right: "-150px", width: "500px", height: "500px", background: "radial-gradient(circle,#a855f718 0%,transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-150px", left: "-150px", width: "500px", height: "500px", background: "radial-gradient(circle,#00d4ff12 0%,transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ─── HERO ─── */}
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 20px", borderBottom: "1px solid #00d4ff12", position: "relative" }}>

          <div style={{ animation: "float 4s ease-in-out infinite", width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg,#00d4ff,#a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", fontWeight: "900", color: "#050b14", marginBottom: "28px", boxShadow: "0 0 50px #00d4ff44,0 0 100px #a855f722", fontFamily: "monospace", border: "3px solid #ffffff18" }}>
            BJ
          </div>

          <div style={{ background: "#0a1628", border: "1px solid #00d4ff44", borderRadius: "6px", padding: "5px 16px", marginBottom: "20px", fontFamily: "monospace", fontSize: "12px", color: "#00d4ff", letterSpacing: "1px" }}>
            $ whoami &nbsp;—— &nbsp;Available for Hire ✅
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem,6vw,3.8rem)", fontWeight: "900", margin: "0 0 14px", letterSpacing: "-1px" }}>
            Bhujram Jat
          </h1>

          <h2 style={{ fontFamily: "'Courier New',monospace", fontSize: "clamp(1rem,3vw,1.3rem)", color: "#00d4ff", fontWeight: "400", margin: "0 0 22px", minHeight: "2rem" }}>
            {typed}<span style={{ animation: "blink 1s step-end infinite" }}>|</span>
          </h2>

          <p style={{ color: "#6b8aaa", maxWidth: "560px", lineHeight: "1.8", fontSize: "15px", margin: "0 auto 36px" }}>
            Passionate about automating infrastructure, containerizing applications,
            and building reliable cloud systems. Open to DevOps, Cloud & SRE roles.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <a href="https://wa.me/917987891653" target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg,#00d4ff,#0099cc)", color: "#050b14", fontWeight: "700", padding: "13px 30px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", boxShadow: "0 0 24px #00d4ff44", letterSpacing: "0.5px" }}>
              💬 Hire Me
            </a>
            <a href="https://github.com/Bhavesh-0940" target="_blank" rel="noreferrer" style={{ background: "transparent", color: "#00d4ff", fontWeight: "700", padding: "13px 30px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", border: "1px solid #00d4ff44", letterSpacing: "0.5px" }}>
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhujram-jat-759016369" target="_blank" rel="noreferrer" style={{ background: "transparent", color: "#a855f7", fontWeight: "700", padding: "13px 30px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", border: "1px solid #a855f744", letterSpacing: "0.5px" }}>
              💼 LinkedIn
            </a>
          </div>

          <div style={{ position: "absolute", bottom: "28px", left: "50%", animation: "bounce 2s infinite", color: "#1e3050", fontSize: "13px", fontFamily: "monospace" }}>
            ↓ scroll
          </div>
        </div>

        {/* ─── MAIN ─── */}
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "70px 24px" }}>

          {/* STATS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "14px", marginBottom: "60px" }}>
            {[
              { label: "Projects Built", value: "4+", color: "#00d4ff" },
              { label: "AWS Services", value: "6+", color: "#a855f7" },
              { label: "Linux Hrs", value: "500+", color: "#00d4ff" },
              { label: "GitHub Repos", value: "10+", color: "#a855f7" },
            ].map((s) => (
              <div key={s.label} style={{ background: "linear-gradient(135deg,#0a1628,#0d1f38)", border: `1px solid ${s.color}22`, borderRadius: "12px", padding: "22px 16px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "900", color: s.color, fontFamily: "monospace" }}>{s.value}</div>
                <div style={{ fontSize: "12px", color: "#556677", marginTop: "4px", letterSpacing: "0.5px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <Section title="Skills & Tools" emoji="🛠️">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "0 48px" }}>
              {SKILLS.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80} />)}
            </div>
            <div style={{ marginTop: "28px", background: "linear-gradient(135deg,#0a1628,#10203a)", border: "1px solid #a855f722", borderRadius: "14px", padding: "24px" }}>
              <p style={{ margin: "0 0 14px", fontFamily: "monospace", color: "#a855f7", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase" }}>
                🎯 Job-Ready Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {JOB_SKILLS.map((j) => (
                  <span key={j.name} style={{ background: "#0d1b2a", border: "1px solid #a855f733", color: "#c8b4ff", padding: "6px 16px", borderRadius: "20px", fontSize: "13px" }}>
                    {j.icon} {j.name}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section title="Experience" emoji="💼">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "23px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg,#00d4ff,#a855f7,transparent)" }} />
              {EXPERIENCE.map((exp, i) => (
                <div key={i} style={{ display: "flex", gap: "28px", marginBottom: "32px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", flexShrink: 0, background: "#0a1628", border: `2px solid ${exp.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: `0 0 18px ${exp.color}44`, position: "relative", zIndex: 1 }}>
                    {exp.icon}
                  </div>
                  <div style={{ flex: 1, background: "linear-gradient(135deg,#0a1628,#0d1f38)", border: `1px solid ${exp.color}33`, borderRadius: "12px", padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{ margin: 0, fontSize: "1.05rem", color: exp.color }}>{exp.role}</h3>
                      <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#334455" }}>{exp.period}</span>
                    </div>
                    <p style={{ margin: "2px 0 14px", color: "#556677", fontSize: "13px" }}>{exp.company}</p>
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                      {exp.points.map((p, j) => (
                        <li key={j} style={{ color: "#8aa8c8", fontSize: "14px", marginBottom: "6px", lineHeight: "1.6" }}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* PROJECTS */}
          <Section title="Projects" emoji="🚀">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "16px" }}>
              {PROJECTS.map((p, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveProject(i)}
                  onMouseLeave={() => setActiveProject(null)}
                  style={{
                    background: activeProject === i ? "linear-gradient(135deg,#0d2040,#190f35)" : "linear-gradient(135deg,#0a1628,#0d1b2a)",
                    border: `1px solid ${activeProject === i ? "#00d4ff66" : "#00d4ff1a"}`,
                    borderRadius: "14px", padding: "24px",
                    cursor: "pointer", transition: "all 0.25s ease",
                    transform: activeProject === i ? "translateY(-5px)" : "none",
                    boxShadow: activeProject === i ? "0 16px 40px #00d4ff18" : "none",
                  }}
                >
                  <div style={{ fontSize: "30px", marginBottom: "14px" }}>{p.icon}</div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "1.05rem", color: "#e0f4ff" }}>{p.title}</h3>
                  <p style={{ margin: "0 0 16px", color: "#6b8aaa", fontSize: "13px", lineHeight: "1.65" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ background: "#00d4ff11", border: "1px solid #00d4ff33", color: "#00d4ff", padding: "3px 10px", borderRadius: "12px", fontSize: "12px" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "#00d4ff", fontSize: "13px", textDecoration: "none", fontFamily: "monospace", fontWeight: "700" }}>
                    View Code →
                  </a>
                </div>
              ))}
            </div>
          </Section>

          {/* CONTACT */}
          <Section title="Get In Touch" emoji="📬">
            <div style={{ background: "linear-gradient(135deg,#0a1628,#10203a)", border: "1px solid #00d4ff22", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
              <p style={{ color: "#6b8aaa", marginBottom: "28px", fontSize: "15px", lineHeight: "1.8" }}>
                Looking for <span style={{ color: "#00d4ff" }}>DevOps</span>,{" "}
                <span style={{ color: "#a855f7" }}>Cloud Engineer</span>, or{" "}
                <span style={{ color: "#00d4ff" }}>SRE</span> opportunities.
                Let's connect and build something great! 🚀
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
                {CONTACTS.map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ background: "#0d1b2a", border: `1px solid ${c.color}44`, color: c.color, padding: "12px 22px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                    {c.icon} {c.label}
                  </a>
                ))}
              </div>
              <div style={{ fontFamily: "monospace", color: "#334455", fontSize: "13px", background: "#060d14", padding: "12px 24px", borderRadius: "8px", display: "inline-block", border: "1px solid #0d1b2a" }}>
                📧 jatbhavesh878@gmail.com &nbsp;·&nbsp; 📞 +91 7987891653
              </div>
            </div>
          </Section>

          <div style={{ textAlign: "center", borderTop: "1px solid #0d1b2a", paddingTop: "28px" }}>
            <p style={{ fontFamily: "monospace", color: "#1e3050", fontSize: "13px", margin: 0 }}>
              {"</>"} Built by Bhujram Jat · 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}