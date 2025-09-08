import { Box, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const SQLOptimizationSection = () => {
	const { data } = useDashboard();

	const { sqlOptimization } = data;
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Expensive SQL Optimization
			</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.queries?.analyzed}
					</Typography>
					<Typography variant='body2'>Queries Analyzed</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.queries?.dispositioned}
					</Typography>
					<Typography variant='body2'>Queries Dispositioned</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.queries?.inProgress}
					</Typography>
					<Typography variant='body2'>In Progress</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.queries?.optimized}
					</Typography>
					<Typography variant='body2'>
						High Memory/time Intensive queries optimized so far
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 3 }}
			>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.performance?.memoryReduction?.value}
					</Typography>
					<Typography variant='body2'>Memory Usage Reduction/day</Typography>
					<Typography variant='body2' sx={{ color: 'gray' }}>
						{sqlOptimization?.performance?.memoryReduction?.unit}
					</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='blue'>
						{sqlOptimization?.performance?.executionTimeReduction?.value}
					</Typography>
					<Typography variant='body2'>Execution Time Reduction/day</Typography>
					<Typography variant='body2' sx={{ color: 'gray' }}>
						{sqlOptimization?.performance?.executionTimeReduction?.unit}
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};
