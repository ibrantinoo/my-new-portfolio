// src/components/Footer.tsx
import { motion } from 'framer-motion';
import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="portfolio-container footer-inner">
        <div className="footer-left">
          <p className="footer-copy">
            © {currentYear} Mohamed Ibrahim • Senior Full Stack Developer
          </p>
          <p className="footer-subcopy" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code2 size={13} color="var(--accent)" />
            Engineered with React 19, TypeScript, Framer Motion & CSS Grid. Source of truth: Resume.
          </p>
        </div>

        <div className="footer-right">
          <motion.a
            href="#hero"
            className="footer-back-to-top"
            whileHover={{ y: -2, color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
