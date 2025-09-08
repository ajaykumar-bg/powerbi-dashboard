import { Box, Paper, Typography, Grid } from '@mui/material';

export const OperationsMetricsSection = () => {
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Operations Metrics
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							4000
						</Typography>
						<Typography variant='body2'>RICEFs</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							7000
						</Typography>
						<Typography variant='body2'>Retrofits</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							300
						</Typography>
						<Typography variant='body2'>Fiori Apps</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							8000
						</Typography>
						<Typography variant='body2'>Live Compare</Typography>
						<Typography variant='body2' color='success.main'>
							Executions
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};
