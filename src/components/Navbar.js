import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import {
	PlayArrow,
	Pause,
	Brightness4,
	Brightness7,
} from '@mui/icons-material';
import { useDashboard } from '../context/DashboardContext';
import { useThemeMode } from '../context/ThemeContext';

const Navbar = () => {
	const { isLive, toggleLive } = useDashboard();
	const { mode, toggleTheme } = useThemeMode();

	return (
		<AppBar position='static' sx={{ mb: 2, borderRadius: 0 }}>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					SAP App Dev Scorecard
				</Typography>
				<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
					<IconButton color='inherit' onClick={toggleTheme}>
						{mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					<IconButton color='inherit' onClick={toggleLive}>
						{isLive ? <Pause /> : <PlayArrow />}
					</IconButton>
					<Box
						component='img'
						src='pepsico-logo.jpg'
						alt='Pepsico Logo'
						sx={{ height: 40 }}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
