// components/Education.tsx
import {
  AutoStories,
  CalendarToday,
  Code,
  EmojiEvents,
  LocationOn,
  School,
  Storage,
  Web
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface EducationProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

export default function Education({ id, setActiveSection }: EducationProps) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setActiveSection(id);
    }
  }, [isInView, controls, setActiveSection, id]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // const itemVariants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 15
  //     }
  //   }
  // };

  // const cardVariants = {
  //   hidden: { 
  //     scale: 0.8, 
  //     opacity: 0,
  //     rotateY: -15
  //   },
  //   visible: {
  //     scale: 1,
  //     opacity: 1,
  //     rotateY: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 120,
  //       damping: 20,
  //       delay: 0.3
  //     }
  //   }
  // };

  const skillsData = [
    { icon: <Code />, label: "Programming Fundamentals", color: "primary" },
    { icon: <Storage />, label: "Database Management", color: "secondary" },
    { icon: <Web />, label: "Web Technologies", color: "success" },
    { icon: <AutoStories />, label: "Software Engineering", color: "warning" }
  ];

  // const achievementVariants = {
  //   hidden: { x: -50, opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 15,
  //       delay: 0.5
  //     }
  //   }
  // };

  return (
    <Box
      ref={ref}
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.95)' 
          : 'rgba(248, 250, 252, 0.8)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.palette.primary.main} 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          backgroundSize: '100% 100%'
        }}
      />

      <Container maxWidth="lg">
        <MotionBox
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <MotionBox
            // variants={itemVariants}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <MotionTypography
              variant="h3"
              // component="h2"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Learning Path
            </MotionTypography>
            
            <MotionTypography
              variant="h6"
              color="text.secondary"
              sx={{ 
                maxWidth: 600, 
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Building a strong foundation in computer science and software development
            </MotionTypography>
          </MotionBox>

          {/* Education Card */}
          <MotionCard
            // variants={cardVariants}
            sx={{
              maxWidth: 900,
              mx: 'auto',
              borderRadius: 4,
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 20px 40px rgba(0,0,0,0.3)' 
                : '0 20px 40px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 25px 50px rgba(0,0,0,0.4)' 
                  : '0 25px 50px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s ease-in-out'
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Card Header with Gradient */}
            <Box
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                p: 3,
                color: 'white',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 100,
                  height: 100,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  transform: 'translate(30px, -30px)'
                }}
              />
              
              <Grid container spacing={2} alignItems="center">
                <Grid>
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      width: 56,
                      height: 56,
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    <School sx={{ fontSize: 32 }} />
                  </Avatar>
                </Grid>
                <Grid>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                  >
                    Bachelor of Computer Application
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip
                      icon={<LocationOn />}
                      label="Jamal Mohamed College"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        '& .MuiChip-icon': { color: 'white' }
                      }}
                    />
                    <Chip
                      icon={<CalendarToday />}
                      label="2017 - 2020"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        '& .MuiChip-icon': { color: 'white' }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* Description */}
              <MotionTypography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1.1rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                My formal education in computer applications provided the foundation for my career in software development, 
                covering fundamental concepts in programming, databases, and web technologies.
              </MotionTypography>

              <Divider sx={{ my: 3 }} />

              {/* Key Learning Areas */}
              <MotionBox
                // variants={achievementVariants}
                sx={{ mb: 3 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <EmojiEvents color="primary" />
                  Key Learning Areas
                </Typography>

                <Grid container spacing={2}>
                  {skillsData.map((skill, index) => (
                    <Grid size={{xs:12,sm:6}} key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.02)' 
                              : 'rgba(0,0,0,0.02)',
                            border: `1px solid ${theme.palette.divider}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(255,255,255,0.05)' 
                                : 'rgba(0,0,0,0.05)',
                              transform: 'translateX(5px)'
                            }
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              // backgroundColor: `${theme.palette[skill.color as keyof typeof theme.palette].main}20`,
                              // color: theme.palette[skill.color as keyof typeof theme.palette].main
                            }}
                          >
                            {skill.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500 }}
                          >
                            {skill.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </CardContent>
          </MotionCard>
        </MotionBox>
      </Container>
    </Box>
  );
}