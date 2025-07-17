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
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '../utils/constants'; // Adjust the import path as necessary

interface ExperienceProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const MotionTypography = motion(Typography);

export default function Experience({ id }: ExperienceProps) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log(`Panel ${panel} is now ${isExpanded ? 'expanded' : 'collapsed'}; Event:`, event);
    setExpanded(isExpanded ? panel : false);
  };



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
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          fontWeight: 700,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          display: 'inline-block',
          '&:before': {
            content: '"06."',
            color: theme.palette.primary.main,
            position: 'absolute',
            left: '-60px',
            top: 0,
            fontFamily: 'monospace',
            fontSize: '0.6em',
            fontWeight: 400,
            opacity: 0.8,
          },
        }}
      >
        Professional Journey
      </Typography>

      <Box sx={{ position: 'relative',width:'100%' }}>
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

        {experiences.map((exp: any, index: number) => (
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
                    {exp.tags.map((tag: any, i: number) => (
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
                  {exp.achievements.map((item: any, i: number) => (
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