// components/Footer.tsx
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, WhatsApp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 4, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <IconButton
          aria-label="GitHub"
          href="https://api.whatsapp.com/send?phone=919659489912&text=Hi%20  Ibu!"
          target="_blank"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <WhatsApp />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://linkedin.com/in/mohamed-ibrahim-linked-in"
          target="_blank"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="Email"
          href="mailto:ibumohamed818@gmail.com"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <Email />
        </IconButton>
      </Box> */}
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
        Designed & Built by Mohamed Ibrahim
      </Typography>
    </Box>
  );
}