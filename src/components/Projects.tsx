// src/components/Projects.tsx
import { motion, type Variants } from 'framer-motion';
import { FolderGit2, Sparkles, BarChart3, Server } from 'lucide-react';

export default function Projects() {
  const cardAnimation: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="portfolio-container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">01 / Engineering Systems</span>
          <h2 className="section-title">Flagship Architectures & Production Platforms</h2>
          <p className="section-subtitle">
            Core systems engineered from concept to production, spanning dynamic frontend architectures, GenAI workflows, and real-time analytics.
          </p>
        </motion.header>

        <div className="projects-grid">
          {/* Lead Flagship Project: 12 Columns with 7/5 Asymmetric Subgrid */}
          <motion.article
            className="project-card project-lead"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-lead-subgrid">
              <div className="project-lead-overview">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FolderGit2 size={16} color="var(--accent)" />
                  <span className="project-kicker">Flagship Enterprise Platform</span>
                </div>
                <h3 className="project-name">Kruu — Project-Based Learning Platform</h3>
                <p className="project-summary">
                  A comprehensive educational platform managing multi-stage student learning lifecycles, interactive worksheets, submission pipelines, and dynamic evaluation rubrics across institutions.
                </p>

                <ul className="project-contributions">
                  <li>
                    Built configurable frontend architectures supporting dynamic worksheets, nested questions, conditional inputs, file uploads, and reusable form workflows driven by shared schemas.
                  </li>
                  <li>
                    Engineered end-to-end learning workflows covering student milestones, submissions, progress tracking, assessment criteria, and evaluation pipelines.
                  </li>
                  <li>
                    Implemented high-efficiency backend operations, bulk data processing, educator dashboards, and institutional reporting workflows.
                  </li>
                </ul>

                <div className="project-tech-stack">
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">TypeScript</span>
                  <span className="tech-chip">Node.js</span>
                  <span className="tech-chip">Express.js</span>
                  <span className="tech-chip">MongoDB</span>
                  <span className="tech-chip">GraphQL</span>
                  <span className="tech-chip">AWS S3 / Lambda</span>
                </div>
              </div>

              <div className="project-lead-tech">
                <div className="spec-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
                    <Server size={14} color="var(--accent)" />
                    <h4 className="spec-card-title" style={{ margin: 0, padding: 0, border: 'none' }}>System Architecture</h4>
                  </div>
                  <ul className="spec-list">
                    <li>
                      <strong>Architecture:</strong> Reusable schema-driven form engines with conditional branching and dynamic validation
                    </li>
                    <li>
                      <strong>Data Layer:</strong> MongoDB aggregation pipelines for complex reporting, filtering & bulk ingestion
                    </li>
                    <li>
                      <strong>Services:</strong> Real-time GraphQL messaging & AWS serverless Lambda event pipelines
                    </li>
                    <li>
                      <strong>Scope:</strong> Supports multi-stakeholder workflows: students, teachers, and school administrators
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary Project: 7 Columns Asymmetric */}
          <motion.article
            className="project-card project-secondary"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="var(--accent)" />
                <span className="project-kicker">GenAI Assessment Pipeline</span>
              </div>
              <h3 className="project-name">AI-Assisted Assessment & Project Evaluation</h3>
            </div>
            
            <p className="project-summary">
              Integrated Google Gemini into structured academic evaluation pipelines to automate rubric-based scoring, combining machine assessment with human verification.
            </p>

            <ul className="project-contributions">
              <li>
                Integrated Google Gemini for automated worksheet and final-project evaluation using predefined rubrics and customized assessment criteria.
              </li>
              <li>
                Developed end-to-end evaluation workflows incorporating AI-generated scores, teacher review overrides, composite scoring metrics, and batch processing.
              </li>
            </ul>

            <div className="project-tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Google Gemini</span>
              <span className="tech-chip">MongoDB</span>
            </div>
          </motion.article>

          {/* Tertiary Project: 5 Columns Asymmetric */}
          <motion.article
            className="project-card project-tertiary"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BarChart3 size={16} color="var(--accent)" />
                <span className="project-kicker">Real-time Data Visualization</span>
              </div>
              <h3 className="project-name">Student & School Analytics Dashboard</h3>
            </div>

            <p className="project-summary">
              High-throughput interactive reporting dashboards visualizing real-time student enrollment, project milestones, grade-level progression, and school performance metrics.
            </p>

            <ul className="project-contributions">
              <li>
                Visualized student enrollment, project initiation and completion, and grade-level performance via responsive Chart.js components.
              </li>
              <li>
                Integrated real-time GraphQL queries to feed dynamic reporting views tracking academic progress and operational insights.
              </li>
            </ul>

            <div className="project-tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">Chart.js</span>
              <span className="tech-chip">GraphQL</span>
              <span className="tech-chip">MongoDB</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
