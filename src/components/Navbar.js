import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Box,
	Tooltip,
} from '@mui/material';
import { PlayArrow, Pause, DarkMode, LightMode } from '@mui/icons-material';
import { useDashboard } from '../context/DashboardContext';
import { useThemeMode } from '../context/ThemeContext';

const Navbar = () => {
	const { isLive, toggleLive } = useDashboard();
	const { mode, toggleTheme } = useThemeMode();

	return (
		<AppBar position='static' sx={{ mb: 2, borderRadius: 0 }}>
			<Toolbar>
				<Typography
					variant='h2'
					component='div'
					sx={{ flexGrow: 1, fontSize: 24 }}
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
	);
};

export default Navbar;
