// components/Experience.tsx
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ExperienceProps {
  id: string;
  setActiveSection: (section: string) => void;
}

export default function Experience({ id, setActiveSection }: ExperienceProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const experiences = [
    {
      role: 'Senior Software Developer',
      company: 'Kruu Inc.',
      duration: 'Oct 2022 - Present',
      location: 'Chennai, India',
      achievements: [
        'Architected dynamic and scalable frontend features using ReactJS',
        'Created interactive dashboards with Chart.js for data visualization',
        'Integrated RESTful APIs optimized for large-scale user interactions',
        'Developed a real-time chat system using GraphQL',
        'Implemented user authentication systems with robust validation',
        'Mentored junior developers and led code reviews',
        'Automated processes reducing manual work by 75%',
      ],
      tags: ['React', 'GraphQL', 'AWS', 'Leadership'],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Ensure Investigation Service',
      duration: 'Nov 2021 - Oct 2022',
      location: 'Remote',
      achievements: [
        'Built full-stack web and mobile applications using MERN stack',
        'Developed backend services with AWS (Cognito, API Gateway, Lambda)',
        'Implemented role-based access control for different user types',
      ],
      tags: ['MERN Stack', 'AWS', 'Full-stack'],
    },
    {
      role: 'Junior Software Developer',
      company: 'PyPs.In Technologies',
      duration: 'Nov 2021 - Oct 2022',
      location: 'Chennai, India',
      achievements: [
        'Developed static sites and software solutions using React',
        'Migrated legacy PHP application to React',
        'Integrated and tested APIs using Axios and Postman',
      ],
      tags: ['React', 'API Integration', 'Migration'],
    },
    {
      role: 'Web Developer',
      company: 'SVS Infotech',
      duration: 'Sep 2020 - Oct 2021',
      location: 'Chennai, India',
      achievements: [
        'Built content management systems and web applications',
        'Worked with HTML, CSS, PHP, MySQL, and React',
        'Collaborated closely with clients to deliver tailored solutions',
      ],
      tags: ['Web Development', 'CMS', 'Client Collaboration'],
    },
  ];

  return (
    <Box
      id={id}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 4, md: 10 },
        py: 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            '&:before': {
              content: '"02."',
              color: theme.palette.primary.main,
              mr: 2,
              fontFamily: 'monospace',
            },
          }}
        >
          Professional Journey
        </Typography>
      </motion.div>

      <Box sx={{ position: 'relative' }}>
        {/* Timeline decoration */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '16px', sm: '24px' },
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: theme.palette.primary.main,
            zIndex: 0,
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                mb: 4,
                position: 'relative',
                zIndex: 1,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                marginLeft: { xs: '30px', sm: '40px' },
                '&.Mui-expanded': {
                  margin: 0,
                  marginLeft: { xs: '30px', sm: '40px' },
                  marginBottom: 4,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  },
                  '&.Mui-expanded': {
                    minHeight: '48px',
                  },
                }}
              >
                {/* <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '-38px', sm: '-50px' },
                    top: '16px',
                    width: { xs: '24px', sm: '32px' },
                    height: { xs: '24px', sm: '32px' },
                    borderRadius: '50%',
                    backgroundColor: theme.palette.background.default,
                    border: `2px solid ${theme.palette.primary.main}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <WorkIcon sx={{margin:'10px', color: theme.palette.primary.main, fontSize: { xs: '1rem', sm: '1.25rem' } }} />
                </Box> */}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 600 }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
                    {exp.company}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                    <Chip 
                      icon={<CalendarTodayIcon sx={{ fontSize: '1rem' }} />}
                      label={exp.duration}
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                      }}
                    />
                    <Chip 
                      icon={<LocationOnIcon sx={{ fontSize: '1rem' }} />}
                      label={exp.location}
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                    {exp.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.dark,
                          color: theme.palette.getContrastText(theme.palette.primary.dark),
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '4px',
                  padding: { xs: 2, sm: 3 },
                }}
              >
                <Divider sx={{ mb: 2, borderColor: theme.palette.divider }} />
                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 2,
                    listStyleType: 'none',
                    '& li': {
                      position: 'relative',
                      pl: '24px',
                      mb: 1.5,
                      '&:before': {
                        content: '"▹"',
                        position: 'absolute',
                        left: 0,
                        color: theme.palette.primary.main,
                      }
                    }
                  }}
                >
                  {exp.achievements.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Typography variant="body1">{item}</Typography>
                    </motion.li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}