import { Paper, Typography, Grid } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const ProductRoadmapSection = () => {
	const { data } = useDashboard();

	const { productRoadmap } = data;

	return (
		<Paper sx={{ p: 2, height: '100%' }}>
			<Typography variant='h6' gutterBottom>
				Product EOL/Roadmap
			</Typography>

			<Grid container spacing={2} justifyContent={'space-between'}>
				{productRoadmap?.items?.map((item, index) => (
					<Grid item xs={2} key={index}>
						<Typography variant='body1'>{item.name}</Typography>
						<Typography variant='h6' color='warning.main'>
							{item.year}
						</Typography>
						<Typography variant='body2' color='success.main'>
							{item.type}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};
