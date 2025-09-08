import { Grid, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const AppRatWidget = () => {
	const { data } = useDashboard();

	const { appRat } = data;

	return (
		<Grid item xs={12}>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h6' gutterBottom>
					App Rat
				</Typography>
				<Grid container spacing={1} direction='column'>
					<Grid item xs={12}>
						<Typography variant='h5' color='success.main'>
							{appRat?.totalSavings}
						</Typography>
						<Typography variant='body2'>Dollars savings</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' color='success.main'>
							{appRat?.sapMobilePlatform}
						</Typography>
						<Typography variant='body2'>SAP Mobile Platform</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' color='success.main'>
							{appRat?.sapCE}
						</Typography>
						<Typography variant='body2'>SAP CE</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};
