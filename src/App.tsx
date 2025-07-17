// App.tsx
import { createTheme, CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { lazy, Suspense, useState } from 'react';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Interests = lazy(() => import('./components/Interests'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#1e88e5',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#ccd6f6',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#8892b0',
    },
  },
});

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Suspense  fallback={<div style={{width:'100vw', textAlign:'center',padding:10}}><LinearProgress /></div>}>

          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          <main className="main-content">

            <About id="about" setActiveSection={setActiveSection} />
            <Experience id="experience" setActiveSection={setActiveSection} />
            <Skills id="skills" setActiveSection={setActiveSection} />
            <Education id="education" setActiveSection={setActiveSection} />
            <Interests id="interests" setActiveSection={setActiveSection} />
            <Contact id="contact" setActiveSection={setActiveSection} />
          </main>
          <Footer />
        </Suspense>

      </div>
    </ThemeProvider>
  );
}

export default App;