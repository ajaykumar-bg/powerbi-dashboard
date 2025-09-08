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
				padding: '1rem',
			}}
		>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Typography variant='h4' component='h1' color='text.primary'>
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
