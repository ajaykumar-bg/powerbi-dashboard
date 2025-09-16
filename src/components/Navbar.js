import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  DarkMode,
  LightMode,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { useThemeMode } from '../context/ThemeContext';
import Sidebar from './Sidebar';

const Navbar = () => {
  const { isLive, toggleLive } = useDashboard();
  const { mode, toggleTheme } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSidebarClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position='static' sx={{ mb: 2, borderRadius: 0 }}>
        <Toolbar>
          {/* Menu Button */}
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer(true)}
            edge='start'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h2'
            component='div'
            sx={{ flexGrow: 1, fontSize: 18, fontWeight: 'bold' }}
          >
            SAP App Dev Scorecard
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Tooltip title='Toggle Theme'>
              <IconButton style={{ color: '#FFFFFF' }} onClick={toggleTheme}>
                {mode === 'dark' ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
            <Tooltip title='Toggle Live Update'>
              <IconButton style={{ color: '#FFFFFF' }} onClick={toggleLive}>
                {isLive ? <Pause /> : <PlayArrow />}
              </IconButton>
            </Tooltip>
            <Box
              component='img'
              src='/pepsico-logo.png'
              alt='PepsiCo Logo'
              sx={{ height: 40 }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation Sidebar */}
      <Sidebar open={drawerOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default Navbar;
