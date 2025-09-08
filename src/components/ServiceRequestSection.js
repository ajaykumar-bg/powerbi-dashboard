import { Paper, Typography, Grid } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const ServiceRequestSection = () => {
	const { data } = useDashboard();

	const { serviceNowRequest } = data;
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Service Now Request
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						{serviceNowRequest?.processed}
					</Typography>
					<Typography variant='body2'>Processed</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						{serviceNowRequest?.inProgress}
					</Typography>
					<Typography variant='body2'>In-Progress</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						{serviceNowRequest?.completionPercentage}%
					</Typography>
					<Typography variant='body2'>% Completed</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};
