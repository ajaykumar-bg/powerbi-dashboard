import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Details as DetailsIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { useThemeMode } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isLive, toggleLive } = useDashboard();
  const { mode, toggleTheme } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = [
    { label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
    { label: 'Details', path: '/details', icon: <DetailsIcon /> },
    { label: 'Dashboard V2', path: '/dashboardV2', icon: <AnalyticsIcon /> },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
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
              src='pepsico-logo.jpg'
              alt='Pepsico Logo'
              sx={{ height: 40 }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              Navigation
            </Typography>
          </Box>
          <Divider />
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  selected={location.pathname === item.path}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.light',
                      '&:hover': {
                        backgroundColor: 'primary.light',
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        location.pathname === item.path
                          ? 'primary.main'
                          : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight:
                          location.pathname === item.path ? 'bold' : 'normal',
                        color:
                          location.pathname === item.path
                            ? 'primary.main'
                            : 'inherit',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
