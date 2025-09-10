import { Box, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export const TechDebtSection = () => {
	const { data } = useDashboard();

	const { techDebt } = data;

	return (
		<Paper sx={{ px: 2, py: 5, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Tech Debt Reduction
			</Typography>
			{/* <Typography
				variant='h2'
				sx={{
					color: 'secondary.main',
					fontWeight: 'bold',
					textAlign: 'center',
					my: 2,
				}}
			>
				{techDebt?.reductionPercentage}%
			</Typography> */}
			<Box
				sx={{
					display: 'grid',
					justifyContent: 'center',
					textAlign: 'center',
					mt: 2,
				}}
			>
				<Gauge
					width={150}
					height={150}
					value={techDebt?.reductionPercentage}
					sx={(theme) => ({
						[`& .${gaugeClasses.valueText}`]: {
							color: theme.palette.text.secondary,
							fontSize: 40,
						},
						[`& .${gaugeClasses.valueArc}`]: {
							fill: theme.palette.warning.main,
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
