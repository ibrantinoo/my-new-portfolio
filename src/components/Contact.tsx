// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const LinkedInIcon = ({ size = 18, color = 'var(--accent)' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contactChannels = [

    {
      label: 'Email Address',
      value: 'ibumohamed818@gmail.com',
      href: 'mailto:ibumohamed818@gmail.com',
      note: 'Direct technical inquiries & opportunities',
      icon: <Mail size={18} color="var(--accent)" />
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/mohamed-ibrahim-linked-in',
      href: 'https://linkedin.com/in/mohamed-ibrahim-linked-in',
      note: 'Professional network & messaging',
      icon: <LinkedInIcon size={18} color="var(--accent)" />
    },
    {
      label: 'Phone / WhatsApp',
      value: '+91 96594 89912',
      href: 'tel:+919659489912',
      note: 'Direct voice / messaging',
      icon: <Phone size={18} color="var(--accent)" />
    },
    {
      label: 'Base Location',
      value: 'Chennai, India',
      href: '#',
      note: 'Available for on-site, hybrid & remote roles',
      icon: <MapPin size={18} color="var(--accent)" />
    }
  ];

  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="portfolio-container">
        <div className="contact-grid">
          {/* Left Column: Direct Statement */}
          <motion.div
            className="contact-narrative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">05 / Initiate Contact</span>
            <h2 className="section-title">Let's build reliable, data-intensive systems together.</h2>
            <p className="contact-lead">
              Whether you are looking for an experienced Senior Full Stack Developer to lead a core feature, architect serverless infrastructure on AWS, or integrate Gemini AI pipelines—my inbox is open.
            </p>
            <div className="contact-cta-wrap">
              <motion.a
                href="mailto:ibumohamed818@gmail.com"
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send an Email Directly</span>
                <Send size={15} style={{ marginLeft: '8px' }} />
              </motion.a>
              <motion.a
                href="/Mohamed_Ibrahim_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight size={15} style={{ marginLeft: '6px' }} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Channels Matrix */}
          <div className="contact-channels">
            {contactChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="channel-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3, borderColor: 'var(--accent-border)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span className="channel-label">{channel.label}</span>
                  {channel.icon}
                </div>
                {channel.href !== '#' ? (
                  <a
                    href={channel.href}
                    className="channel-value-link"
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="channel-value-text">{channel.value}</span>
                )}
                <span className="channel-note">{channel.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
