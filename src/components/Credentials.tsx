// src/components/Credentials.tsx
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar } from 'lucide-react';

export default function Credentials() {
  const courses = [
    {
      title: 'Generative AI for JavaScript Developers: LangChain, RAG',
      issued: 'Issued On: Sep 2026',
      credentialId: 'UC-9dc87507-a9cf-4825-85a8-464b5db0eca7',
      focus: 'LangChain JS, retrieval pipelines, embedding models, vector workflows, and RAG architectures.'
    },
    {
      title: 'JavaScript: Understanding the Weird Parts',
      issued: 'Issued On: Aug 2025',
      credentialId: 'UC-04c68b6d-80d9-4f06-b9ad-386918563362',
      focus: 'Deep dive into execution contexts, closures, prototypal inheritance, and JS runtime mechanics.'
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Jamal Mohamed College',
    location: 'Trichy, India',
    period: '2017 – 2020',
    description: 'Foundational coursework in computer science, software design principles, relational databases, algorithms, and application development.'
  };

  return (
    <section id="credentials" className="portfolio-section credentials-section">
      <div className="portfolio-container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">04 / Verified Learning</span>
          <h2 className="section-title">Courses & Academic Foundation</h2>
          <p className="section-subtitle">
            Continuous technical specialization in Generative AI and core JavaScript alongside formal CS education.
          </p>
        </motion.header>

        <div className="credentials-grid">
          {/* Left Column: Advanced Professional Certifications / Courses (7 Cols) */}
          <div className="credentials-courses">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Award size={16} color="var(--accent)" />
              <h3 className="subheading-label" style={{ margin: 0 }}>Specialized Certifications & Courses</h3>
            </div>
            <div className="course-cards-list">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="credential-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -2, borderColor: 'var(--border-strong)' }}
                >
                  <div className="credential-top">
                    <h4 className="credential-title">{course.title}</h4>
                    <span className="credential-date" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} />
                      {course.issued}
                    </span>
                  </div>
                  <p className="credential-desc">{course.focus}</p>
                  <div className="credential-meta">
                    <span className="credential-id">Credential ID: <code>{course.credentialId}</code></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Degree (5 Cols) */}
          <div className="credentials-education">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <GraduationCap size={16} color="var(--accent)" />
              <h3 className="subheading-label" style={{ margin: 0 }}>Formal Education</h3>
            </div>
            <motion.div
              className="credential-card education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -2, borderColor: 'var(--border-strong)' }}
            >
              <span className="education-period" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={13} color="var(--accent)" />
                {education.period}
              </span>
              <h4 className="education-degree">{education.degree}</h4>
              <p className="education-institution">{education.institution} • {education.location}</p>
              <p className="education-desc">{education.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
