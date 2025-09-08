import { Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const AIIndexWidget = () => {
	const { data } = useDashboard();

	const { aiIndex } = data;
	return (
		<Paper sx={{ p: 2 }}>
			<Typography variant='h6' gutterBottom>
				AI Index
			</Typography>
			<Typography variant='h4' color='plum' sx={{ mb: 1 }}>
				{aiIndex?.value}
			</Typography>
			<Typography variant='body2' color='success.main'>
				{aiIndex?.type}
			</Typography>
			<Typography variant='body2'>AI Index</Typography>
		</Paper>
	);
};
