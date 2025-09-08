import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		background: {
			default: '#1a1042',
			paper: '#2a1b63',
		},
		primary: {
			main: '#00ffff',
		},
		secondary: {
			main: '#ff00ff',
		},
		success: {
			main: '#00ff00',
		},
		warning: {
			main: '#ffd700',
		},
		text: {
			primary: '#ffffff',
			secondary: '#00ffff',
		},
	},
	typography: {
		fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
		h4: {
			color: '#00ffff',
			fontWeight: 500,
		},
		h6: {
			color: '#00ffff',
			fontWeight: 400,
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#2a1b63',
					borderRadius: 16,
				},
			},
		},
	},
});
