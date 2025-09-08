import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
	createTheme({
		palette: {
			mode,
			background: {
				default: mode === 'light' ? '#ffffff' : '#0a0521',
				paper: mode === 'light' ? '#f5f5f5' : '#1a1042',
			},
			primary: {
				main: '#1a1042', // cyan
				light: '#40ffff',
				dark: '#00cccc',
			},
			secondary: {
				main: '#ff00ff', // magenta
				light: '#ff40ff',
				dark: '#cc00cc',
			},
			success: {
				main: '#00ff00', // bright green
				light: '#40ff40',
				dark: '#00cc00',
			},
			warning: {
				main: '#ffd700', // yellow
				light: '#ffdf40',
				dark: '#ccac00',
			},
			text: {
				primary: mode === 'light' ? '#000000' : '#ffffff',
				secondary: '#00ffff',
			},
			cyan: {
				main: '#00ffff',
			},
			magenta: {
				main: '#ff00ff',
			},
			blue: {
				main: '#00bfff',
			},
			plum: {
				main: '#dda0dd',
			},
		},
		typography: {
			fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
			h4: {
				color: '#ffffff',
				fontWeight: 500,
				fontSize: '1.75rem',
			},
			h5: {
				color: '#1a1042',
				fontWeight: 500,
				fontSize: '1.5rem',
			},
			h6: {
				color: '#ffffff',
				fontWeight: 500,
				fontSize: '1.25rem',
			},
			subtitle1: {
				color: '#ffffff',
				fontSize: '1rem',
			},
			subtitle2: {
				color: '#1a1042',
				fontSize: '0.875rem',
			},
			body1: {
				color: '#ffffff',
			},
			body2: {
				color: '#ffffff',
				fontSize: '0.875rem',
			},
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: '#1a1042',
						borderRadius: 16,
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
