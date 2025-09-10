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
    // typography: {
    //   fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    //   h2: {
    //     color: '#ffffff',
    //     fontWeight: 700,
    //     fontSize: '3.5em',
    //   },
    //   h4: {
    //     color: '#ffffff',
    //     fontWeight: 500,
    //     fontSize: '1.75rem',
    //   },
    //   h5: {
    //     color: '#1a1042',
    //     fontWeight: 500,
    //     fontSize: '1.5rem',
    //   },
    //   h6: {
    //     color: mode === 'dark' ? '#ffffff' : '#222222',
    //     fontWeight: 500,
    //     fontSize: '1.25rem',
    //   },
    //   subtitle1: {
    //     color: '#ffffff',
    //     fontSize: '1rem',
    //   },
    //   subtitle2: {
    //     color: '#1a1042',
    //     fontSize: '0.875rem',
    //   },
    //   body1: {
    //     color: mode === 'dark' ? '#ffffff' : '#222222',
    //   },
    //   body2: {
    //     color: mode === 'dark' ? '#ffffff' : '#222222',
    //     fontSize: '0.875rem',
    //   },
    // },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            // backgroundColor: mode === 'dark' ? '#1a1042' : '#FFFFFF',
            borderRadius: 5,
            padding: '1.5rem',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            '& > .MuiGrid-item': {
              paddingTop: '1rem',
              paddingBottom: '1rem',
            },
          },
        },
      },
    },
  });
