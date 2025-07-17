// components/Skills.tsx
import {
  Dns as BackendIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Storage as DatabaseIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  School as LearnIcon,
  Lightbulb as LightbulbIcon,
  PhoneIphone as MobileIcon,
  Star as StarIcon,
  Build as ToolsIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import type { JSX } from 'react';
import { useState } from 'react';

interface SkillsProps {
  id: string;
  setActiveSection: (section: string) => void;
}

interface Skill {
  name: string;
  level: number;
  yearsOfExperience?: number;
  description?: string;
  trending?: boolean;
  certification?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
  description: string;
}

const skillIcons: Record<string, JSX.Element> = {
  'Frontend': <CodeIcon />,
  'Backend': <BackendIcon />,
  'Mobile': <MobileIcon />,
  'Database': <DatabaseIcon />,
  'Cloud & DevOps': <CloudIcon />,
  'Tools': <ToolsIcon />
};

const SkillBar = ({ skill, index, categoryColor }: { skill: Skill; index: number; categoryColor: string }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Box
        sx={{
          mb: 2,
          position: 'relative',
          '&:hover': {
            '& .skill-progress': {
              '& .MuiLinearProgress-bar': {
                transition: 'transform 0.3s ease',
                transform: 'scaleX(1.02)',
              }
            }
          }
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: theme.palette.text.primary,
                transition: 'color 0.3s ease'
              }}
            >
              {skill.name}
            </Typography>

            {skill.trending && (
              <Tooltip title="Trending Technology" arrow>
                <TrendingUpIcon
                  sx={{
                    fontSize: 16,
                    color: theme.palette.warning.main,
                    animation: 'pulse 2s infinite'
                  }}
                />
              </Tooltip>
            )}

            {skill.certification && (
              <Tooltip title="Certified" arrow>
                <StarIcon
                  sx={{
                    fontSize: 16,
                    color: theme.palette.success.main
                  }}
                />
              </Tooltip>
            )}
          </Box>

          <Chip
            label={`${skill.level}%`}
            size="small"
            sx={{
              minWidth: 50,
              height: 20,
              fontSize: '0.75rem',
              fontWeight: 600,
              backgroundColor: isHovered ? categoryColor : theme.palette.background.default,
              color: isHovered ? theme.palette.getContrastText(categoryColor) : theme.palette.text.secondary,
              transition: 'all 0.3s ease',
              '& .MuiChip-label': {
                px: 1
              }
            }}
          />
        </Box>

        <Box sx={{ position: 'relative' }}>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            className="skill-progress"
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.palette.divider,
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: `linear-gradient(90deg, ${categoryColor}, ${theme.palette.primary.light})`,
                transition: 'transform 0.8s ease-out',
                transformOrigin: 'left',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
                borderRadius: 4,
                animation: isHovered ? 'shimmer 1.5s infinite' : 'none',
              }
            }}
          />
        </Box>

        {skill.description && (
          <Collapse in={isHovered}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                mt: 0.5,
                display: 'block',
                fontStyle: 'italic'
              }}
            >
              {skill.description}
            </Typography>
          </Collapse>
        )}
      </Box>
    </motion.div>
  );
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Card
            elevation={isHovered ? 12 : 4}
            sx={{
              height: '100%',
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: category.color,
                boxShadow: `0 12px 40px rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0,0,0'}, 0.1), 0 0 0 1px ${category.color}20`,
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${category.color}, ${theme.palette.primary.light})`,
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease',
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: category.color,
                    color: theme.palette.getContrastText(category.color),
                    mr: 2,
                    width: 48,
                    height: 48,
                    boxShadow: `0 4px 12px ${category.color}40`,
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  {skillIcons[category.title]}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 0.5
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: '0.875rem'
                    }}
                  >
                    {category.description}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <AnimatePresence>
                  {category.skills.slice(0, isExpanded ? undefined : 3).map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={i}
                      categoryColor={category.color}
                    />
                  ))}
                </AnimatePresence>
              </Box>

              {category.skills.length > 3 && (
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                    endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{
                      color: category.color,
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: `${category.color}10`,
                      }
                    }}
                  >
                    {isExpanded ? 'Show Less' : `Show ${category.skills.length - 3} More`}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Grid>
  );
};

export default function Skills({ id }: SkillsProps) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      description: 'Building beautiful, responsive user interfaces',
      color: theme.palette.primary.main,
      skills: [
        { name: 'React', level: 95, yearsOfExperience: 4, description: 'Advanced component architecture & hooks', trending: true },
        { name: 'TypeScript', level: 90, yearsOfExperience: 3, description: 'Type-safe development practices' },
        { name: 'Next.js', level: 85, yearsOfExperience: 2, description: 'Full-stack React framework', trending: true },
        { name: 'Material UI', level: 90, yearsOfExperience: 3, description: 'Component library expertise' },
        { name: 'JavaScript', level: 95, yearsOfExperience: 5, description: 'ES6+ and modern JS patterns' },
        { name: 'HTML/CSS', level: 95, yearsOfExperience: 6, description: 'Semantic markup & advanced styling' }
      ],
    },
    {
      title: 'Backend',
      description: 'Server-side development and API design',
      color: theme.palette.success.main,
      skills: [
        { name: 'Node.js', level: 85, yearsOfExperience: 3, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 80, yearsOfExperience: 3, description: 'RESTful API development' },
        { name: 'RESTful APIs', level: 90, yearsOfExperience: 4, description: 'API design & implementation' },
        { name: 'GraphQL', level: 75, yearsOfExperience: 2, description: 'Query language for APIs', trending: true }
      ],
    },
    {
      title: 'Mobile',
      description: 'Cross-platform mobile development',
      color: theme.palette.warning.main,
      skills: [
        { name: 'React Native', level: 80, yearsOfExperience: 2, description: 'iOS & Android app development' }
      ],
    },
    {
      title: 'Database',
      description: 'Data storage and management solutions',
      color: theme.palette.info.main,
      skills: [
        { name: 'MongoDB', level: 85, yearsOfExperience: 3, description: 'NoSQL database design' },
        { name: 'SQL', level: 80, yearsOfExperience: 4, description: 'Relational database management' },
        { name: 'Firebase', level: 75, yearsOfExperience: 2, description: 'Real-time database & auth' }
      ],
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and deployment',
      color: theme.palette.secondary.main,
      skills: [
        { name: 'AWS', level: 80, yearsOfExperience: 2, description: 'Amplify, Cognito, S3, Lambda', certification: true },
        { name: 'CI/CD', level: 75, yearsOfExperience: 2, description: 'Automated deployment pipelines' },
        { name: 'Docker', level: 70, yearsOfExperience: 1, description: 'Containerization & orchestration' }
      ],
    },
    {
      title: 'Tools',
      description: 'Development tools and productivity',
      color: theme.palette.error.main,
      skills: [
        { name: 'Git', level: 90, yearsOfExperience: 5, description: 'Version control & collaboration' },
        { name: 'VS Code', level: 95, yearsOfExperience: 5, description: 'IDE customization & extensions' },
        { name: 'Figma', level: 80, yearsOfExperience: 3, description: 'UI/UX design collaboration' },
        { name: 'Jira', level: 85, yearsOfExperience: 3, description: 'Agile project management' },
        { name: 'Postman', level: 90, yearsOfExperience: 4, description: 'API testing & documentation' },
        { name: 'Sentry', level: 75, yearsOfExperience: 2, description: 'Error tracking & monitoring' }
      ],
    },
  ];

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const avgLevel = Math.round(
    skillCategories.reduce((acc, cat) =>
      acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
    ) / totalSkills
  );

  // Add keyframes for animations
  const keyframes = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <Box
        id={id}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 2, md: 4, lg: 8 },
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}10 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}10 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  position: 'relative',
                  '&:before': {
                    content: '"03."',
                    color: theme.palette.primary.main,
                    position: 'absolute',
                    left: { xs: 0, md: -60 },
                    top: 0,
                    fontFamily: 'monospace',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                  },
                }}
              >
                Technical Arsenal
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                A comprehensive overview of my technical skills, tools, and expertise
              </Typography>

              {/* Stats */}
              <Stack
                direction="row"
                spacing={4}
                sx={{
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 2
                }}
              >
                <Chip
                  icon={<CodeIcon />}
                  label={`${totalSkills} Technologies`}
                  variant="outlined"
                  sx={{
                    px: 2,
                    py: 1,
                    height: 40,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}10`,
                    }
                  }}
                />
                <Chip
                  icon={<TrendingUpIcon />}
                  label={`${avgLevel}% Avg Proficiency`}
                  variant="outlined"
                  sx={{
                    px: 2,
                    py: 1,
                    height: 40,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderColor: theme.palette.success.main,
                    color: theme.palette.success.main,
                    '&:hover': {
                      backgroundColor: `${theme.palette.success.main}10`,
                    }
                  }}
                />
              </Stack>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </Grid>

          {/* Learning Badge */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Chip
                icon={<LearnIcon />}
                label="Always Learning • Always Growing"
                sx={{
                  px: 4,
                  py: 2,
                  height: 48,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: theme.palette.primary.contrastText,
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 32px ${theme.palette.primary.main}60`,
                  },
                  '& .MuiChip-label': {
                    padding: '0 12px',
                  },
                }}
              />
            </motion.div>
          </Box>

          {/* Disclaimer Section */}
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  maxWidth: 700,
                  mx: 'auto',
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <IconButton
                  onClick={() => setShowDisclaimer(!showDisclaimer)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: theme.palette.text.secondary
                  }}
                >
                  <LightbulbIcon />
                </IconButton>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <WarningAmberIcon sx={{ color: theme.palette.warning.main, mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    A Note on Self-Assessment
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                  Let's be honest - self-rating skills is about as accurate as predicting the weather with a magic 8-ball.
                </Typography>

                <Collapse in={showDisclaimer}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    These progress bars are visual representations based on my experience and comfort level with each technology.
                    Real expertise is demonstrated through actual work, problem-solving, and continuous learning.
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}>
                    The percentages are meant to give you a relative sense of my proficiency levels - not absolute measures of mastery.
                  </Typography>
                </Collapse>

                <Button
                  size="small"
                  onClick={() => setShowDisclaimer(!showDisclaimer)}
                  sx={{
                    mt: 2,
                    textTransform: 'none',
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      backgroundColor: `${theme.palette.text.secondary}10`,
                    }
                  }}
                >
                  {showDisclaimer ? 'Show Less' : 'Learn More'}
                </Button>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
}