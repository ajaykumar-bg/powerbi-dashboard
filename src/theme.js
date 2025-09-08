import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		background: {
			default: '#0a0521',
			paper: '#1a1042',
		},
		primary: {
			main: '#00ffff', // cyan
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
			primary: '#ffffff',
			secondary: '#00ffff',
		},
		cyan: {
			main: '#00ffff',
		},
		magenta: {
			main: '#ff00ff',
		},
	},
	typography: {
		fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
		h4: {
			color: '#00ffff',
			fontWeight: 500,
			fontSize: '1.75rem',
		},
		h5: {
			color: '#00ffff',
			fontWeight: 500,
			fontSize: '1.5rem',
		},
		h6: {
			color: '#00ffff',
			fontWeight: 400,
			fontSize: '1.25rem',
		},
		subtitle1: {
			color: '#ffffff',
			fontSize: '1rem',
		},
		subtitle2: {
			color: '#00ffff',
			fontSize: '0.875rem',
		},
		body1: {
			color: '#ffffff',
		},
		body2: {
			color: '#a0a0a0',
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
