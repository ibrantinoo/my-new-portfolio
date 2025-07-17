// components/About.tsx
import {
  Code as CodeIcon,
  Coffee as CoffeeIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  EmojiEmotions as JokeIcon,
  LinkedIn as LinkedInIcon,
  Palette as PaletteIcon,
  Psychology as PsychologyIcon,
  Refresh as RefreshIcon,
  Rocket as RocketIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import { experiences } from '../utils/constants';
import { caluclateOverallExperience } from '../utils/utils';

interface AboutProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ display: 'inline-block', width: '2px', height: '1em', backgroundColor: 'currentColor', marginLeft: '2px' }}
        />
      )}
    </span>
  );
};

const FloatingElements = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </Box>
  );
};

export default function About({ id, setActiveSection }: AboutProps) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [joke, setJoke] = useState('');
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);
  const [jokeError, setJokeError] = useState(false);
  // const [showJoke, setShowJoke] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const fetchJoke = async () => {
    setIsLoadingJoke(true);
    setJokeError(false);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Programming?blacklistFlags=racist,sexist,explicit&type=single');
      const data = await response.json();

      if (!data.error) {
        setJoke(data.joke);
        // setShowJoke(true);
      } else {
        setJokeError(true);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJokeError(true);
    } finally {
      setIsLoadingJoke(false);
    }
  };

  useEffect(() => {
    fetchJoke();
    // const { year, month, totalMonths }: any = caluclateOverallExperience();
    // console.log(`Overall Experience: ${year} years and ${month} months (${totalMonths} months total)`);

  }, []);



  const highlights = [
    { icon: <CodeIcon />, text: `${caluclateOverallExperience()} of Experience`, color: theme.palette.primary.main },
    { icon: <PaletteIcon />, text: 'UI/UX Focused', color: theme.palette.secondary.main },
    { icon: <SpeedIcon />, text: 'Performance Optimized', color: theme.palette.success.main },
    { icon: <PsychologyIcon />, text: 'Problem Solver', color: theme.palette.warning.main },
  ];

  const socialLinks = [
    { icon: <EmailIcon />, label: 'Email', href: 'mailto:your.ibumohamed818@proton.me', color: theme.palette.error.main },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/in/mohamed-ibrahim-linked-in', color: '#0077b5' },
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/ibrantinoo', color: theme.palette.text.primary },
  ];

  return (
    <Box
      id={id}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: { xs: 2, md: 4, lg: 8 },
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FloatingElements />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { xs: 'flex-start', lg: 'center' },
          gap: { xs: 4, lg: 8 },
          width: '100%'
        }}>

          {/* Main Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '60%' } }}>
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onAnimationComplete={() => setHasAnimated(true)}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 2,
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                👋 Hi, my name is
              </Typography>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  lineHeight: 1.2
                }}
              >
                Mohamed Ibrahim
              </Typography>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.3
                }}
              >
                {hasAnimated ? (
                  <TypewriterText text="I build things for the web." speed={80} />
                ) : (
                  "I build things for the web."
                )}
              </Typography>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mb: 4,
                  flexWrap: 'wrap',
                  gap: 1
                }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Chip
                      icon={highlight.icon}
                      label={highlight.text}
                      variant="outlined"
                      sx={{
                        borderColor: highlight.color,
                        color: highlight.color,
                        '&:hover': {
                          backgroundColor: `${highlight.color}10`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        fontWeight: 600,
                        fontSize: '0.875rem'
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '600px',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary
                }}
              >
                I'm a passionate frontend developer with <strong>{`${caluclateOverallExperience()}`} of experience</strong> crafting beautiful,
                user-friendly web applications. I specialize in <strong>React</strong> and love creating interactive
                experiences that are both functional and delightful to use.
              </Typography>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Tooltip title={link.label} arrow>
                      <IconButton
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: link.color,
                          backgroundColor: `${link.color}10`,
                          '&:hover': {
                            backgroundColor: `${link.color}20`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                          width: 48,
                          height: 48
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Link to="contact" smooth={true} duration={500} onSetActive={() => setActiveSection('contact')}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<RocketIcon />}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: 'none',
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                          boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </Link>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    endIcon={<DownloadIcon />}
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        backgroundColor: `${theme.palette.primary.main}10`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      // Place the PDF in the public folder and use the absolute path
                      window.open('/Mohamed_Ibrahim_Developer.pdf', '_blank');
                    }}
                  >
                    View CV
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>

          {/* Joke Card */}
          <Box sx={{
            flex: { xs: '1', lg: '0 0 400px' },
            width: { xs: '100%', lg: '400px' }
          }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Card
                elevation={8}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <JokeIcon sx={{ color: theme.palette.primary.main }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Daily Dose of Humor
                      </Typography>
                    </Box>
                    <Tooltip title="Get new joke" arrow>
                      <IconButton
                        onClick={fetchJoke}
                        disabled={isLoadingJoke}
                        size="small"
                        sx={{
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.main}10`,
                          }
                        }}
                      >
                        <motion.div
                          animate={isLoadingJoke ? { rotate: 360 } : {}}
                          transition={{ duration: 1, repeat: isLoadingJoke ? Infinity : 0 }}
                        >
                          <RefreshIcon />
                        </motion.div>
                      </IconButton>
                    </Tooltip>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Box sx={{ minHeight: 80, display: 'flex', alignItems: 'center' }}>
                    <AnimatePresence mode="wait">
                      {isLoadingJoke ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{ width: '100%' }}
                        >
                          <Stack spacing={1}>
                            <Skeleton variant="text" width="100%" height={20} />
                            <Skeleton variant="text" width="80%" height={20} />
                            <Skeleton variant="text" width="60%" height={20} />
                          </Stack>
                        </motion.div>
                      ) : jokeError ? (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.error.main,
                              fontStyle: 'italic',
                              textAlign: 'center'
                            }}
                          >
                            Oops! Couldn't fetch a joke right now. <br />
                            But hey, my code is probably funnier anyway! 😄
                          </Typography>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="joke"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontStyle: 'italic',
                              lineHeight: 1.6,
                              color: theme.palette.text.secondary
                            }}
                          >
                            "{joke}"
                          </Typography>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Chip
                      icon={<CoffeeIcon />}
                      label="Powered by coffee & curiosity"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.text.secondary,
                        color: theme.palette.text.secondary,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}