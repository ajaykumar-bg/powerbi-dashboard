import { Grid, Paper, Typography } from '@mui/material';

export const TechDebtSection = () => {
	return (
		<Grid item xs={12}>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#00ffff' }}>
					Tech Debt Reduction
				</Typography>
				<Typography
					variant='h2'
					sx={{
						color: '#ff00ff',
						fontWeight: 'bold',
						textAlign: 'center',
						my: 2,
					}}
				>
					25%
				</Typography>
			</Paper>
		</Grid>
	);
};
