import { Box, Paper, Typography, Grid } from '@mui/material';

export const VulnerabilitiesSection = () => {
	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Vulnerabilities
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant='body1' color='text.secondary'>
						Custom Code Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='warning.main'>
							11000
						</Typography>
						<Typography variant='body2'>Analyzed</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='warning.main'>
							2000
						</Typography>
						<Typography variant='body2'>Disposition/Remediated</Typography>
					</Box>
				</Grid>

				<Grid item xs={6}>
					<Typography variant='body1' color='text.secondary'>
						SAP Portal Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='warning.main'>
							125
						</Typography>
						<Typography variant='body2'>
							Detected (Critical, High, & Medium)
						</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='warning.main'>
							5
						</Typography>
						<Typography variant='body2'>Remaining (Low)</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};
