import { Box, Paper, Typography, Grid, Divider } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import { useDashboard } from '../context/DashboardContext';
import { PieChart } from '@mui/x-charts';
import { useMemo } from 'react';
import { generateServiceRequestData } from '../utils/dataGenerator';

export const ServiceRequestSection = () => {
	const { data } = useDashboard();

	const { serviceNowRequest } = data;

	const serviceNowData = useMemo(
		() => generateServiceRequestData(serviceNowRequest),
		[serviceNowRequest]
	);
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Service Now Request
			</Typography>
			<Box>
				<PieChart
					series={[
						{
							data: serviceNowData,
						},
					]}
					width={200}
					height={200}
				/>
			</Box>

			<Grid container spacing={2} justifyContent={'space-between'}>
				<Grid item xs={4}>
					<Typography variant='h4' color='primary'>
						{serviceNowRequest?.processed}
					</Typography>
					<Typography variant='body2'>Processed</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning'>
						{serviceNowRequest?.inProgress}
					</Typography>
					<Typography variant='body2'>In-Progress</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='success'>
						{serviceNowRequest?.completed}
					</Typography>
					<Typography variant='body2'>Completed</Typography>
				</Grid>
			</Grid>
			<Divider sx={{ my: 2 }} />
			<Box
				sx={{
					display: 'grid',
					justifyContent: 'center',
					textAlign: 'center',
					mt: 2,
				}}
			>
				<Typography variant='h6' gutterBottom>
					% Completion
				</Typography>
				<Gauge
					width={150}
					height={150}
					value={serviceNowRequest?.completionPercentage}
					sx={(theme) => ({
						[`& .${gaugeClasses.valueText}`]: {
							color: theme.palette.text.secondary,
							fontSize: 40,
						},
						[`& .${gaugeClasses.valueArc}`]: {
							fill: theme.palette.success.main,
						},
						[`& .${gaugeClasses.referenceArc}`]: {
							fill: theme.palette.text.disabled,
						},
					})}
				/>
			</Box>
		</Paper>
	);
};
