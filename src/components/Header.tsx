// src/components/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = 'hero' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'projects', label: 'Systems & Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="portfolio-container header-inner">
        <motion.a
          href="#hero"
          className="brand-logo"
          aria-label="Mohamed Ibrahim - Home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="brand-initials">MI</span>
          <span className="brand-name">Mohamed Ibrahim</span>
        </motion.a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <motion.a
            href="/Mohamed_Ibrahim_Fullstack_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-pill-link"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FileText size={14} style={{ marginRight: '6px' }} />
            Resume PDF
            <ArrowUpRight size={13} style={{ marginLeft: '4px' }} />
          </motion.a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} color="#F1F5F9" /> : <Menu size={20} color="#F1F5F9" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={activeSection === item.id ? 'active-mobile-link' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href="/Mohamed_Ibrahim_Fullstack_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}
                >
                  <FileText size={16} />
                  Inspect Full Resume PDF
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
