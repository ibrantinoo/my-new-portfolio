// src/components/Skills.tsx
import { motion } from 'framer-motion';
import { Layout, Database, Bot, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      className: 'skill-col-frontend',
      category: 'Frontend Architecture & Languages',
      icon: <Layout size={18} color="var(--accent)" />,
      subtitle: 'Component systems, state management, and responsive interfaces.',
      skills: [
        'TypeScript',
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'Ionic React',
        'Redux Toolkit',
        'React Context API',
        'HTML5 & Modern CSS',
        'Tailwind CSS',
        'Ant Design',
        'Bootstrap',
        'Chart.js'
      ]
    },
    {
      className: 'skill-col-backend',
      category: 'Backend, Serverless & Data Pipelines',
      icon: <Database size={18} color="var(--accent)" />,
      subtitle: 'APIs, asynchronous operations, and distributed database architecture.',
      skills: [
        'Node.js',
        'Express.js',
        'GraphQL (Queries, Mutations, Subscriptions)',
        'RESTful APIs',
        'Serverless Functions',
        'MongoDB',
        'MongoDB Aggregation Pipelines',
        'CRUD Operations & Indexing',
        'AWS Lambda',
        'Amazon S3',
        'API Gateway',
        'AWS Cognito',
        'Amazon SES & SNS'
      ]
    },
    {
      className: 'skill-col-ai',
      category: 'GenAI & Platform Integrations',
      icon: <Bot size={18} color="var(--accent)" />,
      subtitle: 'LLM orchestration, prompt pipelines, and mission-critical payment/video gateways.',
      skills: [
        'Google Gemini',
        'OpenAI API',
        'LangChain',
        'RAG (Retrieval-Augmented Generation)',
        'Razorpay Payment Gateway',
        'Zoom Meeting SDK',
        'SendGrid & AWS SES Notifications',
        'Firebase Admin & Auth'
      ]
    },
    {
      className: 'skill-col-tools',
      category: 'Testing, Observability & Tooling',
      icon: <Wrench size={18} color="var(--accent)" />,
      subtitle: 'Automated testing, continuous monitoring, and developer workflow tooling.',
      skills: [
        'Playwright End-to-End Testing',
        'Postman API Testing',
        'Sentry Error Tracking',
        'Git & GitHub',
        'Chrome DevTools & React DevTools',
        'Google Lighthouse Performance Audit',
        'VS Code',
        'Figma UI Design Hand-off',
        'Jira & Slack Collaboration'
      ]
    }
  ];

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="portfolio-container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">03 / Matrix</span>
          <h2 className="section-title">Technical Capabilities & Architecture Matrix</h2>
          <p className="section-subtitle">
            Categorized production competencies proven across live enterprise and SaaS products.
          </p>
        </motion.header>

        <div className="skills-matrix-grid">
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              className={`skill-category-card ${group.className}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ borderColor: 'var(--border-strong)' }}
            >
              <div className="skill-category-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                  {group.icon}
                  <h3 className="skill-category-title" style={{ margin: 0 }}>{group.category}</h3>
                </div>
                <p className="skill-category-subtitle">{group.subtitle}</p>
              </div>

              <div className="skill-chips-wrap">
                {group.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    className="skill-pill"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
