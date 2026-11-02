// src/components/Experience.tsx
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Software Developer',
      company: 'Kruu Inc.',
      period: 'Oct 2022 – Present',
      location: 'Chennai, India',
      scope: 'End-to-end full-stack feature ownership across ed-tech SaaS and internal ERP platforms.',
      bullets: [
        'Owned end-to-end development of features across education products, translating business requirements into maintainable React interfaces, Express.js APIs, MongoDB operations, and application workflows.',
        'Designed and developed reusable React and TypeScript architectures for configurable forms, dynamic worksheets, tables, file uploads, nested inputs, and conditional workflows.',
        'Developed backend APIs and optimized MongoDB queries and aggregation pipelines for filtering, pagination, reporting, bulk data processing, and reusable data-access operations.',
        'Integrated AWS Lambda-based serverless APIs with MongoDB and AWS services, including Cognito user/group workflows, S3 file handling, and asynchronous background processing.',
        'Integrated Google Gemini, Razorpay, SendGrid, Amazon SES, and Zoom Meeting SDK to support AI-assisted evaluation, payments, notifications, and meeting workflows.',
        'Implemented real-time messaging using GraphQL queries, mutations, and subscriptions, including service-layer separation and subscription lifecycle management.',
        'Developed internal HRMS workflows for attendance, leave, and asset management, reducing manual administrative effort by approximately 75% through automated reporting and exports.',
        'Conducted code reviews and mentored junior developers on debugging, reusable components, type safety, and maintainable code. Collaborated with cross-functional teams to deliver and support production features.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'AWS Lambda', 'Google Gemini', 'Razorpay', 'Cognito']
    },
    {
      role: 'Junior Software Developer',
      company: 'PyPs.In Technologies',
      period: 'Nov 2021 – Oct 2022',
      location: 'Chennai, India',
      scope: 'Frontend web application engineering, legacy modernization, and third-party API integration.',
      bullets: [
        'Developed React applications integrated with Firebase backend services and REST APIs.',
        'Contributed to migrating a clinical booking platform from PHP to React, improving frontend usability, maintainability, and load times.',
        'Integrated APIs using Axios, Postman, and Swagger, collaborating directly with clients to translate business requirements into responsive UI components.'
      ],
      technologies: ['React', 'JavaScript', 'Firebase', 'REST APIs', 'PHP Migration', 'Axios', 'Postman']
    }
  ];

  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="portfolio-container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">02 / Trajectory</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            5+ years of verified production engineering, architectural ownership, and team leadership.
          </p>
        </motion.header>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="experience-item-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
            >
              {/* Left Column: Metadata & Tenure */}
              <div className="experience-meta">
                <span className="experience-period" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={13} color="var(--accent)" />
                  {exp.period}
                </span>
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={15} color="var(--text-secondary)" />
                  {exp.company}
                </span>
                <span className="experience-location" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={12} color="var(--text-muted)" />
                  {exp.location}
                </span>
                <p className="experience-scope">{exp.scope}</p>
              </div>

              {/* Right Column: Architectural Contributions & Impact Bullets */}
              <div className="experience-details">
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>

                <div className="experience-tech-tags">
                  {exp.technologies.map((tech, tIndex) => (
                    <motion.span
                      key={tIndex}
                      className="tech-chip-sm"
                      whileHover={{ scale: 1.05, borderColor: 'var(--accent-border)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
