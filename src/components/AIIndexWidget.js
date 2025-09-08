import { Grid, Paper, Typography } from '@mui/material';

export const AIIndexWidget = () => {
	return (
		<Grid item xs={12}>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#00ffff' }}>
					AI Index
				</Typography>
				<Typography variant='h4' sx={{ color: '#00ffff', mb: 1 }}>
					0.4 MM
				</Typography>
				<Typography variant='body2' color='success.main'>
					Savings
				</Typography>
				<Typography variant='body2'>AI Index</Typography>
			</Paper>
		</Grid>
	);
};
