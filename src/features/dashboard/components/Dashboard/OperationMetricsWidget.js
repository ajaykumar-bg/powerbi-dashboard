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

export const OperationMetricsWidget = () => {
  const { data } = useDashboard();

  const { operationMetrics } = data;

  const operationMetricsData = useMemo(
    () => generateOperationMetricsData(operationMetrics),
    [operationMetrics]
  );

  // Calculate completion percentage based on created and closed
  const completionPercentage = useMemo(() => {
    if (!operationMetrics?.created || operationMetrics.created === 0) return 0;
    return Math.round(
      (operationMetrics.closed / operationMetrics.created) * 100
    );
  }, [operationMetrics?.created, operationMetrics?.closed]);

  const progressColor = useMemo(() => {
    return getColorFromColorPath(
      getGaugeColor(completionPercentage, 'completion')
    );
  }, [completionPercentage]);

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
            {operationMetrics?.created?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Created</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant='h4' color='warning'>
            {operationMetrics?.active?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Active</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant='h4' color='success'>
            {operationMetrics?.closed?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Closed</Typography>
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
            value={completionPercentage}
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
              {`${completionPercentage}%`}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ mt: 1, textAlign: 'center' }}
        >
          Closed / Created
        </Typography>
      </Box>
    </Paper>
  );
};
