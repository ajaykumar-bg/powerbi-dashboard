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
      <Typography variant="h6" gutterBottom>
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

      {/* <Grid container spacing={2} justifyContent={'space-between'}>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							{operationsMetrics?.ricefs}
						</Typography>
						<Typography variant='body2'>RICEFs</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							{operationsMetrics?.retrofits}
						</Typography>
						<Typography variant='body2'>Retrofits</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							{operationsMetrics?.fioriApps}
						</Typography>
						<Typography variant='body2'>Fiori Apps</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							{operationsMetrics?.liveCompare?.count}
						</Typography>
						<Typography variant='body2'>Live Compare</Typography>
						<Typography variant='body2' color='success'>
							{operationsMetrics?.liveCompare?.type}
						</Typography>
					</Box>
				</Grid>
			</Grid> */}
    </Paper>
  );
};
