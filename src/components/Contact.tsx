// components/Contact.tsx
import {
  AccessTime,
  AutoAwesome,
  Close,
  Code,
  Coffee,
  Email,
  GitHub,
  Handshake,
  LinkedIn,
  LocationOn,
  RocketLaunch,
  WhatsApp
} from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface ContactProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
// const MotionButton = motion(Button);

export default function Contact({ id, setActiveSection }: ContactProps) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSnackbar, setShowSnackbar] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setActiveSection(id);
    }
  }, [isInView, controls, setActiveSection, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    // setIsSubmitting(false);
    setShowSnackbar(true);
  };

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

  const itemVariants = {
    hidden: { y: 50, opacity: 1},
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: <WhatsApp />,
      label: 'WhatsApp',
      href: 'https://wa.me/919659489912?text=Hi%20Ibu',
      color: '#25D366',
      description: 'Quick chat'
    },
    {
      icon: <Email />,
      label: 'Email',
      href: 'mailto:ibumohamed818@proton.me',
      color: '#EA4335',
      description: 'Send message'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohamed-ibrahim-linked-in',
      color: '#0077B5',
      description: 'Connect professionally'
    }, 
    {
      icon: <GitHub />,
      label: 'GitHub',
      href: 'https://github.com/ibrantinoo',
      color: theme.palette.mode === 'dark' ? '#fff' : '#333',
      description: 'View code'
    }
  ];

  const quickInfo = [
    { icon: <LocationOn />, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
    { icon: <AccessTime />, label: 'Response Time', value: 'Within 24 hours' },
    { icon: <Code />, label: 'Status', value: 'Available for work' }
  ];

  const reasons = [
    { icon: <RocketLaunch />, text: 'New opportunities' },
    { icon: <Coffee />, text: 'Collaboration ideas' },
    { icon: <Handshake />, text: 'Freelance projects' },
    { icon: <AutoAwesome />, text: 'Just say hello' }
  ];

  return (
    <Box
      ref={ref}
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(248, 250, 252, 0.8)'} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <MotionBox
        // variants={floatingVariants}
        animate="animate"
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 100,
          height: 100,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          borderRadius: '50%',
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />
      
      <MotionBox
        // variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: 60,
          height: 60,
          background: `linear-gradient(45deg, ${theme.palette.secondary.main}20, ${theme.palette.primary.main}20)`,
          borderRadius: '30%',
          filter: 'blur(1px)',
          zIndex: 0
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
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                '&:before': {
                  content: '"05."',
                  color: theme.palette.primary.main,
                  mr: 2,
                  fontFamily: 'monospace',
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get In Touch
            </MotionTypography>
            
            <MotionTypography
              variant="h6"
              color="text.secondary"
              sx={{ 
                maxWidth: 600, 
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </MotionTypography>
          </MotionBox>

          <Grid container spacing={4}>
            {/* Contact Form */}
            {/* <Grid size={{ xs: 12, md: 12 }}>
              <MotionCard
                variants={itemVariants}
                sx={{
                  borderRadius: 4,
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 20px 40px rgba(0,0,0,0.3)' 
                    : '0 20px 40px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 25px 50px rgba(0,0,0,0.4)' 
                      : '0 25px 50px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Send color="primary" />
                    Send me a message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 2,
                          }
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 2,
                          }
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 2,
                          }
                        }
                      }}
                    />

                    <MotionButton
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? null : <Send />}
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </MotionButton>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid> */}

            {/* Contact Info & Social Links */}
            <Grid size={{ xs: 12, md: 12 }}>
                {/* Social Links */}
                <MotionCard
                  // variants={itemVariants}
                  sx={{
                    borderRadius: 4,
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 20px 40px rgba(0,0,0,0.3)' 
                      : '0 20px 40px rgba(0,0,0,0.1)',
                      width: '100%',
                      opacity: 0.9,
                  }}
                  style={{width: '100%',opacity: 0.9}}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Let's Connect
                    </Typography>
                    <Grid container spacing={2}>
                      {socialLinks.map((social, index) => (
                        <Grid size={{xs:6}} key={index}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Tooltip title={social.description} arrow>
                              <Button
                                fullWidth
                                variant="outlined"
                                startIcon={social.icon}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  borderRadius: 2,
                                  py: 1.5,
                                  borderColor: social.color,
                                  color: social.color,
                                  '&:hover': {
                                    borderColor: social.color,
                                    backgroundColor: `${social.color}20`,
                                  }
                                }}
                              >
                                {social.label}
                              </Button>
                            </Tooltip>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </MotionCard>

                {/* Reasons to Connect */}
                {/* <MotionCard
                  variants={itemVariants}
                  sx={{
                    borderRadius: 4,
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 20px 40px rgba(0,0,0,0.3)' 
                      : '0 20px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Perfect for
                    </Typography>
                    <Stack spacing={1}>
                      {reasons.map((reason, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <Chip
                            icon={reason.icon}
                            label={reason.text}
                            variant="outlined"
                            sx={{
                              justifyContent: 'flex-start',
                              width: '100%',
                              py: 1,
                              '& .MuiChip-label': {
                                paddingLeft: 1
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </MotionCard> */}
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setShowSnackbar(false)}
            >
              <Close fontSize="small" />
            </IconButton>
          }
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}