import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      // background: {
      //   default: mode === 'dark' ? '#ffffff' : '#ccc',
      // },
      // primary: {
      //   main: '#0033A0',
      // },
      // secondary: {
      //   main: '#ff00ff',
      // },
      // success: {
      //   main: '#00984A',
      // },
      // warning: {
      //   main: mode === 'dark' ? '#ffd700' : '#ccac00',
      // },
      // text: {
      //   primary: '#ffffff',
      //   secondary: mode === 'dark' ? '#00ffff' : '#222222',
      // },
      // cyan: {
      //   main: '#00ffff',
      // },
      // magenta: {
      //   main: '#ff00ff',
      // },
      // blue: {
      //   main: '#0096D6',
      // },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
      h2: {
        fontWeight: 700,
        fontSize: '1.5rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.1rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '0.95rem',
      },
      subtitle1: {
        fontSize: '0.95rem',
      },
      subtitle2: {
        fontSize: '0.85rem',
      },
      body1: {
        fontSize: '0.95rem',
      },
      body2: {
        fontSize: '0.85rem',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 5,
            padding: '0.75rem',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            '& > .MuiGrid-item': {
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
          },
        },
      },
    },
  });
