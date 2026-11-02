// src/components/Hero.tsx
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, Layers, Terminal, Activity, MapPin, Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 13, color = 'var(--accent)' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.25,
      },
    },
  };

  return (
    <section id="hero" className="portfolio-section hero-section">
      <div className="portfolio-container">
        <div className="hero-grid">
          {/* Left Column: Asymmetric Statement & Content */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="status-badge">
              <span className="status-dot"></span>
              <span className="status-label">Senior Full Stack Developer • 5+ Years Production Experience</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Mohamed Ibrahim
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-lead">
              Architecting production web applications, data-intensive workflows, AWS serverless pipelines, and AI-assisted evaluation systems.
            </motion.p>

            <motion.p variants={itemVariants} className="hero-description">
              Senior Software Developer at Kruu Inc. with end-to-end feature ownership across high-scale education platforms and enterprise operations. Experienced in designing reusable TypeScript architectures, high-throughput MongoDB pipelines, and real-time GraphQL subscriptions.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Engineering Systems</span>
                <ArrowRight size={17} style={{ marginLeft: '8px' }} />
              </motion.a>
              <motion.a
                href="/Mohamed_Ibrahim_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Inspect Resume PDF</span>
                <ArrowUpRight size={16} style={{ marginLeft: '6px' }} />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-contact-inline">
              <a href="mailto:ibumohamed818@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={13} color="var(--accent)" />
                ibumohamed818@gmail.com
              </a>
              <span className="separator">•</span>
              <a
                href="https://linkedin.com/in/mohamed-ibrahim-linked-in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <LinkedInIcon size={13} color="var(--accent)" />
                LinkedIn
              </a>
              <span className="separator">•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={13} color="var(--text-muted)" />
                Chennai, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Engineering Telemetry / Architectural Spec Card */}
          <motion.div
            className="hero-asset"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <aside className="telemetry-card" aria-label="Engineering System Specifications">
              <div className="telemetry-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={15} color="var(--accent)" />
                  <span className="telemetry-title">System Profile & Telemetry</span>
                </div>
                <span className="telemetry-status">
                  <Activity size={11} style={{ display: 'inline', marginRight: '4px' }} />
                  Production Active
                </span>
              </div>

              <div className="telemetry-grid">
                <div className="telemetry-item">
                  <span className="telemetry-label">Production Tenure</span>
                  <span className="telemetry-value">5+ Years</span>
                </div>

                <div className="telemetry-item">
                  <span className="telemetry-label">Current Role</span>
                  <span className="telemetry-value">Senior Software Dev</span>
                </div>

                <div className="telemetry-item telemetry-full-width">
                  <span className="telemetry-label">Primary Enterprise</span>
                  <span className="telemetry-value" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Layers size={14} color="var(--accent)" />
                    Kruu Inc. (Chennai, India)
                  </span>
                </div>

                <div className="telemetry-item telemetry-full-width">
                  <span className="telemetry-label">Core Technical Stack</span>
                  <div className="tech-tags-list">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>GraphQL</span>
                    <span>AWS Lambda</span>
                    <span>Google Gemini</span>
                  </div>
                </div>

                <div className="telemetry-item telemetry-full-width">
                  <span className="telemetry-label">High-Value Production Impact</span>
                  <p className="telemetry-note" style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                    <Cpu size={14} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>75% reduction in administrative overhead via internal automated HRMS reporting and export workflows.</span>
                  </p>
                </div>
              </div>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
