// components/Interests.tsx
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LetterBoxdIcon from '../assets/letterboxd.png';

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    IconButton,
    Typography,
    alpha,
    useTheme
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Image } from '@mui/icons-material';

interface InterestsProps {
    id: string;
    setActiveSection: (section: string) => void;
}

export default function Interests({ id }: InterestsProps) {
    const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [likedCards, setLikedCards] = useState<Set<number>>(new Set());

    const interests = [
        {
            title: 'Music',
            emoji: '🎶',
            icon: <MusicNoteIcon fontSize="large" />,
            description: 'Learning to play the ukulele and melodica. Enjoy exploring different music genres and creating simple melodies.',
            tags: ['Ukulele', 'Melodica', 'Composition'],
            color: '#FF6B6B',
            gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
        },
        {
            title: 'Open Source',
            emoji: '🤝',
            icon: <CodeIcon fontSize="large" />,
            description: 'Passionate about Free and Open Source Software (FOSS). Contributing to projects and advocating for open technologies.',
            tags: ['FOSS', 'GitHub', 'Community'],
            color: '#4ECDC4',
            gradient: 'linear-gradient(135deg, #4ECDC4 0%, #7FDBDA 100%)',
        },
        {
            title: 'Electronics',
            emoji: '💡',
            icon: <BuildIcon fontSize="large" />,
            description: 'Arduino beginner enthusiast. Enjoy working on small electronics projects and learning about IoT applications.',
            tags: ['Arduino', 'IoT', 'Hardware'],
            color: '#45B7D1',
            gradient: 'linear-gradient(135deg, #45B7D1 0%, #7AC8E4 100%)',
        },
        {
            title: 'Movies',
            emoji: '🎬',
            icon: <MovieIcon fontSize="large" />,
            description: 'Love watching movies across genres. Particularly enjoy sci-fi, thrillers, and classic cinema.',
            tags: ['Sci-Fi', 'Thrillers', 'Classic'],
            color: '#96CEB4',
            gradient: 'linear-gradient(135deg, #96CEB4 0%, #B8E6C1 100%)',
            actions: [
                {
                    label: "View My CineLog",
                    href: 'https://letterboxd.com/ibrantino/films/',
                    color: '#96CEB4',
                    icon: LetterBoxdIcon
                }
            ]
        },
    ];

    const handleLike = (index: number) => {
        const newLikedCards = new Set(likedCards);
        if (newLikedCards.has(index)) {
            newLikedCards.delete(index);
        } else {
            newLikedCards.add(index);
        }
        setLikedCards(newLikedCards);
    };

    // Animation variants
    const containerVariants = {
        // hidden: { opacity: 0 },
        // visible: {
        //     opacity: 1,
        //     transition: {
        //         staggerChildren: 0.1,
        //         delayChildren: 0.3,
        //     },
        // },
    };

    const titleVariants = {
        // hidden: { opacity: 0, x: -50 },
        // visible: {
        //     opacity: 1,
        //     x: 0,
        //     transition: {
        //         duration: 0.8,
        //         ease: 'easeOut',
        //     },
        // },
    };

    const cardVariants = {
        hidden: {
            // opacity: 0, 
            // y: 50,
            // scale: 0.8,
        },
        // visible: {
        //     opacity: 1,
        //     y: 0,
        //     scale: 1,
        //     transition: {
        //         duration: 0.6,
        //         ease: 'easeOut',
        //     },
        // },
    };

    // const iconVariants = {
    //     hover: {
    //         scale: 1.2,
    //         rotate: 360,
    //         transition: {
    //             duration: 0.6,
    //             ease: 'easeInOut',
    //         },
    //     },
    // };

    const chipVariants = {
        // hidden: { opacity: 0, scale: 0.8 },
        // visible: {
        //     opacity: 1,
        //     scale: 1,
        //     transition: {
        //         duration: 0.4,
        //         ease: 'easeOut',
        //     },
        // },
    };

    return (
        <Box
            id={id}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: { xs: 8, md: 12 },
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%)`,
                    pointerEvents: 'none',
                },
            }}
        >

            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Title Section */}
                    <motion.div variants={titleVariants}>
                        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
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
                                Beyond Coding
                            </Typography>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100px' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{
                                    height: '4px',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    margin: '0 auto',
                                    borderRadius: '2px',
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 3,
                                    color: theme.palette.text.secondary,
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                }}
                            >
                                When I'm not building web applications, you can find me exploring these other passions and hobbies.
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Cards Grid */}
                    <Grid container spacing={4} justifyContent="center">
                        {interests.map((interest, index) => (
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 }
                                    }}
                                    onHoverStart={() => setHoveredCard(index)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            background: hoveredCard === index
                                                ? interest.gradient
                                                : theme.palette.background.paper,
                                            borderRadius: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            border: `2px solid ${alpha(interest.color, 0.1)}`,
                                            boxShadow: hoveredCard === index
                                                ? `0 20px 40px ${alpha(interest.color, 0.3)}`
                                                : theme.shadows[4],
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'pointer',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: interest.gradient,
                                                transform: hoveredCard === index ? 'scaleX(1)' : 'scaleX(0)',
                                                transformOrigin: 'left',
                                                transition: 'transform 0.3s ease',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            p: 3,
                                            position: 'relative',
                                        }}>
                                            {/* Icon and Actions */}
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                mb: 2
                                            }}>
                                                <motion.div
                                                    // variants={iconVariants}
                                                    whileHover="hover"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '50%',
                                                        background: hoveredCard === index
                                                            ? alpha(theme.palette.common.white, 0.2)
                                                            : alpha(interest.color, 0.1),
                                                        color: hoveredCard === index
                                                            ? theme.palette.common.white
                                                            : interest.color,
                                                    }}
                                                >
                                                    {interest.icon}
                                                </motion.div>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => handleLike(index)}
                                                            sx={{
                                                                color: likedCards.has(index) ? '#FF6B6B' : 'inherit',
                                                                '&:hover': {
                                                                    backgroundColor: alpha('#FF6B6B', 0.1),
                                                                },
                                                            }}
                                                            aria-label={`Like ${interest.title}`}
                                                        >
                                                            <FavoriteIcon fontSize="small" />
                                                        </IconButton>
                                                    </motion.div>
                                                </Box>
                                            </Box>

                                            {/* Title */}
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    mb: 1.5,
                                                    fontWeight: 600,
                                                    color: hoveredCard === index
                                                        ? theme.palette.common.white
                                                        : theme.palette.text.primary,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                }}
                                            >
                                                {interest.title}
                                                <span style={{ fontSize: '0.8em' }}>{interest.emoji}</span>
                                            </Typography>

                                            {/* Description */}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: hoveredCard === index
                                                        ? alpha(theme.palette.common.white, 0.9)
                                                        : theme.palette.text.secondary,
                                                    flexGrow: 1,
                                                    lineHeight: 1.6,
                                                    mb: 2,
                                                }}
                                            >
                                                {interest.description}
                                            </Typography>

                                            {/* Tags */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                                <AnimatePresence>
                                                    {interest.tags.map((tag, tagIndex) => (
                                                        <motion.div
                                                            key={tag}
                                                            variants={chipVariants}
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{ delay: tagIndex * 0.1 }}
                                                        >
                                                            <Chip
                                                                label={tag}
                                                                size="small"
                                                                sx={{
                                                                    backgroundColor: hoveredCard === index
                                                                        ? alpha(theme.palette.common.white, 0.2)
                                                                        : alpha(interest.color, 0.1),
                                                                    color: hoveredCard === index
                                                                        ? theme.palette.common.white
                                                                        : interest.color,
                                                                    border: `1px solid ${alpha(interest.color, 0.3)}`,
                                                                    fontWeight: 500,
                                                                    '&:hover': {
                                                                        backgroundColor: hoveredCard === index
                                                                            ? alpha(theme.palette.common.white, 0.3)
                                                                            : alpha(interest.color, 0.2),
                                                                    },
                                                                }}
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </AnimatePresence>
                                            </Box>

                                            {/* Action Buttons */}
                                            {interest.actions && interest.actions.length > 0 && (
                                                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                                                    {interest.actions.map((action, actionIndex) => (
                                                        <motion.div
                                                            key={actionIndex}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Button
                                                                variant="contained"
                                                                size="small"
                                                                href={action.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"

                                                                sx={{
                                                                    backgroundColor: hoveredCard === index
                                                                        ? alpha(theme.palette.common.white, 0.2)
                                                                        : alpha(interest.color, 0.1),
                                                                    color: hoveredCard === index
                                                                        ? theme.palette.common.white
                                                                        : interest.color,
                                                                    border: `1px solid ${alpha(interest.color, 0.3)}`,
                                                                    fontWeight: 500,
                                                                    textTransform: 'none',
                                                                    '&:hover': {
                                                                        backgroundColor: hoveredCard === index
                                                                            ? alpha(theme.palette.common.white, 0.3)
                                                                            : alpha(interest.color, 0.2),
                                                                    },
                                                                }}
                                                            >

                                                                {action.label}
                                                                <Box
                                                                    component="img"
                                                                    sx={{
                                                                        height: 'auto',
                                                                        width: 20,
                                                                        marginLeft: 1,
                                                                        // maxHeight: { xs: 233, md: 167 },
                                                                        // maxWidth: { xs: 350, md: 250 },
                                                                    }}
                                                                    alt={action.label}
                                                                    src={action.icon}
                                                                />
                                                            </Button>
                                                        </motion.div>
                                                    ))}
                                                </Box>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
}