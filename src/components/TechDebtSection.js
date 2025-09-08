import { Box, Paper, Typography } from '@mui/material';

export const TechDebtSection = () => {
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Tech Debt Reduction
			</Typography>
			<Typography variant='h2' color='secondary' sx={{ fontWeight: 'bold' }}>
				25%
			</Typography>

			<Box sx={{ mt: 2 }}>
				<Typography variant='h4' color='success.main'>
					220K
				</Typography>
				<Typography variant='body2' color='text.primary'>
					Dollars savings
				</Typography>
			</Box>

			<Box sx={{ mt: 2 }}>
				<Typography variant='h4' color='success.main'>
					120k
				</Typography>
				<Typography variant='body2' color='text.primary'>
					SAP Mobile Platform
				</Typography>
			</Box>

			<Box sx={{ mt: 2 }}>
				<Typography variant='h4' color='success.main'>
					100k
				</Typography>
				<Typography variant='body2' color='text.primary'>
					SAP CE
				</Typography>
			</Box>

			<Box sx={{ mt: 2 }}>
				<Typography variant='h6'>AI Index</Typography>
				<Typography variant='h4' color='text.primary'>
					0.4 MM
				</Typography>
				<Typography variant='body2' color='success.main'>
					Savings
				</Typography>
				<Typography variant='body2' color='text.primary'>
					AI Index
				</Typography>
			</Box>
		</Paper>
	);
};
