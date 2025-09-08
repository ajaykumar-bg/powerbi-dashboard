import { Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const TechDebtSection = () => {
	const { data } = useDashboard();

	const { techDebt } = data;

	return (
		<Paper sx={{ px: 2, py: 5, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Tech Debt Reduction
			</Typography>
			<Typography
				variant='h2'
				sx={{
					color: 'secondary.main',
					fontWeight: 'bold',
					textAlign: 'center',
					my: 2,
				}}
			>
				{techDebt?.reductionPercentage}%
			</Typography>
		</Paper>
	);
};
