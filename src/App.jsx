import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

export default function App() {
  const projects = [
    {
      title: "Online Attendance System with SQL",
      description:
        "A web-based attendance management system for tracking and storing student records efficiently.",
      tech: ["SQL", "PHP"],
    },
    {
      title: "Deep Fake Detection using Deep Learning",
      description:
        "A deep learning model that detects manipulated or synthetic media content with high accuracy.",
      tech: ["Python", "Deep Learning", "AI"],
    },
    {
      title:
        "Scalable Application Deployment on AWS EC2 with Auto-Scaling and Load Balancing",
      description:
        "Deployed a highly available and scalable cloud application using AWS EC2, Auto Scaling, and Load Balancer.",
      tech: ["AWS", "EC2", "Auto Scaling", "Load Balancer"],
    },
  ];

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text"
        >
          <h1>
            Hi, I'm <span>Darshan</span>
          </h1>

          <p>
            Augmented Software Engineer (ASE) at Archelos Intelsense Technologies
            Pvt. Ltd., Bangalore, with a strong interest in Network and Cloud
            Engineering. Passionate about building scalable web applications,
            monitoring systems, and automation solutions while continuously
            learning and improving technical expertise.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="profile-wrapper"
        >
          <div className="profile-card">
            <img src="/profile.jpg" alt="Darshan" className="profile-img" />
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                  y: -14,
                  scale: 1.01,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.1 }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS & EXPERTISE */}
      <section className="skills-expertise">
        <h2 className="skills-title">Skills & Expertise</h2>

        <div className="skills-cards">
          {/* Soft Skills */}
          <div className="skills-box">
            <h3>👤 Soft Skills</h3>
            <div className="tags cyan">
              <span>Critical thinking</span>
              <span>Time Management</span>
              <span>Adaptability</span>
              <span>Problem Solving</span>
              <span>Collaborative</span>
            </div>
          </div>

          {/* Programming */}
          <div className="skills-box">
            <h3>{"</>"} Programming</h3>
            <div className="tags green">
              <span>Python</span>
              <span>C</span>
              <span>Core Java</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>React</span>
              <span>Bootstrap</span>
            </div>
          </div>

          {/* Python Data Analytics */}
          <div className="skills-box">
            <h3>🗄 Python Data Analytics</h3>
            <div className="tags purple">
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Matplotlib</span>
              <span>Neural Networks</span>
              <span>CNN</span>
            </div>
          </div>

          {/* System Administration */}
          <div className="skills-box">
            <h3>🖥 System Administration</h3>
            <div className="tags cyan">
              <span>Linux Commands</span>
              <span>SSH</span>
              <span>File Systems</span>
              <span>Process Management</span>
              <span>Package Management</span>
            </div>
          </div>

          {/* AWS Cloud */}
          <div className="skills-box">
            <h3>☁ AWS Cloud</h3>
            <div className="tags orange">
              <span>EC2</span>
              <span>Load Balancer</span>
              <span>S3 Bucket</span>
              <span>Web App Deployment</span>
              <span>Auto Scaling</span>
              <span>Cloud Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <h2 className="right-heading">Experience</h2>

        <div className="timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot" />

            <div className="timeline-content">
              <h3>Augmented Software Engineer (ASE)</h3>
              <h4>Archelos Intelsense Technologies Pvt. Ltd., Bangalore</h4>
              <span className="timeline-date">Present</span>

              <ul>
                <li>Contributing to software development and debugging.</li>
                <li>Working across web, networking, and cloud environments.</li>
                <li>Collaborating with cross-functional teams.</li>
                <li>Improving performance and system reliability.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications">
        <h2>Certifications & Training</h2>
        <div className="cert-grid">
          {[
            {
              title: "Web Development",
              desc: "Certified internship covering HTML, CSS, Bootstrap, DBMS, PHP, and React.",
              link: "https://drive.google.com/file/d/1iu_y-zdyi4ycAx7FUAgokjw4BpByxa9X/view?usp=drive_link",
            },
            {
              title: "Python Data Analytics",
              desc: "Hands-on internship in data analytics with real-world projects.",
              link: "https://drive.google.com/file/d/1ntsSd5nswcURdL23DZWuqZBBs7WDK-Od/view?usp=drive_link",
            },
            {
              title: "AWS Cloud Computing",
              desc: "Certification demonstrating AWS cloud architecture knowledge.",
              link: "https://drive.google.com/file/d/1kM3XQDST8a4f2cwW7jLtqbmHqF7gOXdp/view?usp=drive_link",
            },
            {
              title: "React with Python",
              desc: "Virtual internship focused on dynamic web application development.",
              link: "https://drive.google.com/file/d/1IoI2s1JwQFLy6O6Xt0zx6tG1Qbr5S0ct/view?usp=drive_link",
            },
            { title: "Cloud with DevOps", desc: "Cloud & DevOps training.", link: null },
            { title: "Java Full Development", desc: "Full-stack Java training.", link: null },
          ].map((cert, i) => (
            <div key={i} className="cert-card">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-btn">
                  Download Certificate
                </a>
              ) : (
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Open to opportunities, collaborations, and innovative projects.</p>

        <form className="contact-form" action="https://formspree.io/f/xdalkrgz" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit" className="primary-btn">Send Message</button>
        </form>

        <div className="contact-icons">
          <a href="mailto:hndarshan3110@gmail.com"><Mail /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>© {new Date().getFullYear()} Darshan. All rights reserved.</footer>
    </div>
  );
}
