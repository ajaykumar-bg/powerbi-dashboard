import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  CircularProgress,
} from '@mui/material';

import { useDashboard } from '../../context/DashboardContext';
import { PieChart } from '@mui/x-charts';
import { useMemo } from 'react';
import { generateOperationMetricsData } from '../../../../common/utils/dataGenerator';
import {
  getColorFromColorPath,
  getGaugeColor,
} from '../../../../common/utils/commonUtils';

export const OperationMetricsSection = () => {
  const { data } = useDashboard();

  const { operationMetrics } = data;

  const operationMetricsData = useMemo(
    () => generateOperationMetricsData(operationMetrics),
    [operationMetrics]
  );

  const progressColor = useMemo(() => {
    return getColorFromColorPath(
      getGaugeColor(operationMetrics?.completionPercentage, 'completion')
    );
  }, [operationMetrics?.completionPercentage]);

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        Operation Metrics
      </Typography>
      <Box>
        <PieChart
          series={[
            {
              data: operationMetricsData,
            },
          ]}
          width={200}
          height={200}
        />
      </Box>

      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid size={{ xs: 4 }}>
          <Typography variant='h4' color='primary'>
            {operationMetrics?.processed}
          </Typography>
          <Typography variant='body2'>Processed</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant='h4' color='warning'>
            {operationMetrics?.inProgress}
          </Typography>
          <Typography variant='body2'>In-Progress</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant='h4' color='success'>
            {operationMetrics?.completed}
          </Typography>
          <Typography variant='body2'>Completed</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Typography variant='h6' gutterBottom>
          % Completion
        </Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant='determinate'
            value={operationMetrics?.completionPercentage || 0}
            size={80}
            thickness={6}
            sx={{
              color: progressColor,
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h4'
              component='div'
              color='text.secondary'
              sx={{ fontWeight: 'bold' }}
            >
              {`${Math.round(operationMetrics?.completionPercentage || 0)}%`}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ mt: 1, textAlign: 'center' }}
        >
          Current Progress
        </Typography>
      </Box>
    </Paper>
  );
};
