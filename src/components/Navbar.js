import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = () => {
	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'background.paper',
				boxShadow: 'none',
				borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
				mb: 3,
				borderRadius: 0,
			}}
		>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Typography variant='h4' component='h1' sx={{ color: 'primary.main' }}>
					SAP App Dev Scorecard
				</Typography>
				<Box
					component='img'
					src='pepsico-logo.jpg'
					alt='Pepsico Logo'
					sx={{
						height: '40px',
						width: 'auto',
					}}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
