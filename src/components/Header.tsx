// components/Header.tsx
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-scroll';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'My Journey' },
    { id: 'skills', label: 'My Toolkit' },
    { id: 'interests', label: 'My Passions' },
    { id: 'education', label: 'Learning Path' },
    { id: 'contact', label: 'Let\'s Connect' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        backgroundColor: theme.palette.background.default,
        height: '100%',
        padding: '20px 0'
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => {
                setActiveSection(item.id);
                setMobileOpen(false);
              }}
              style={{ width: '100%' }}
            >
              <ListItemButton>
                <ListItemText 
                  primary={item.label} 
                  sx={{
                    color: activeSection === item.id ? theme.palette.primary.main : theme.palette.text.primary,
                    textAlign: 'center',
                    '& .MuiTypography-root': {
                      fontFamily: 'monospace',
                    }
                  }} 
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: 'rgba(10, 25, 47, 0.9)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography style={{cursor:'pointer'}} onClick={()=>window.location.href='/'} variant="h6" component="div" sx={{ color: '#64ffda', fontFamily: 'monospace' }}>
            MI
          </Typography>
          
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: '#ccd6f6' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.background.default,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  <Button
                    sx={{
                      color: activeSection === item.id ? '#64ffda' : '#ccd6f6',
                      '&:hover': { color: '#64ffda' },
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}