import { Box, Paper, Typography, Grid, Divider } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

import { useMemo } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { generateVulnerabilityData } from '../utils/dataGenerator';

const chartSettings = {
	width: 200,
	height: 150,
};

export const VulnerabilitiesSection = () => {
	const { data } = useDashboard();

	const { vulnerabilities } = data;
	const vulnerabilityData = useMemo(
		() => generateVulnerabilityData(vulnerabilities),
		[vulnerabilities]
	);

	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Vulnerabilities
			</Typography>

			<Grid container spacing={2} justifyContent={'space-between'}>
				<Grid xs={6}>
					<Typography variant='body1' color='text.secondary'>
						Custom Code Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='primary'>
							{vulnerabilities?.customCode?.analyzed}
						</Typography>
						<Typography variant='body2'>Analyzed</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='success'>
							{vulnerabilities?.customCode?.remediatedCount}
						</Typography>
						<Typography variant='body2'>Disposition/Remediated</Typography>
					</Box>
					<Box>
						<PieChart
							series={[
								{
									startAngle: -90,
									endAngle: 90,
									paddingAngle: 5,
									innerRadius: 50,
									outerRadius: 70,
									cy: '75%',
									data: vulnerabilityData.customCode,
								},
							]}
							{...chartSettings}
						/>
					</Box>
				</Grid>
				<Divider orientation='vertical' />

				<Grid xs={6}>
					<Typography variant='body1' color='text.secondary'>
						SAP Portal Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='error'>
							{vulnerabilities?.sapPortal?.detected}
						</Typography>
						<Typography variant='body2'>
							Detected (Critical, High, & Medium)
						</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h4' color='warning'>
							{vulnerabilities?.sapPortal?.remaining}
						</Typography>
						<Typography variant='body2'>Remaining (Low)</Typography>
					</Box>
					<Box>
						<PieChart
							series={[
								{
									startAngle: -90,
									endAngle: 90,
									paddingAngle: 5,
									innerRadius: 50,
									outerRadius: 70,
									cy: '75%',
									data: vulnerabilityData.sapPortal,
								},
							]}
							{...chartSettings}
						/>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};
