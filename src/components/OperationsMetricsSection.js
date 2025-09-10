import { useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

import { PieChart } from '@mui/x-charts/PieChart';
import { generateOperationsData } from '../utils/dataGenerator';

export const OperationsMetricsSection = () => {
	const { data } = useDashboard();

	const { operationsMetrics } = data;

	const operationsData = useMemo(
		() => generateOperationsData(operationsMetrics),
		[operationsMetrics]
	);
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Operations Metrics
			</Typography>
			<Box>
				<PieChart
					series={[
						{
							paddingAngle: 5,
							innerRadius: 60,
							outerRadius: 80,
							data: operationsData,
						},
					]}
					width={200}
					height={200}
				/>
			</Box>
		</Paper>
	);
};
