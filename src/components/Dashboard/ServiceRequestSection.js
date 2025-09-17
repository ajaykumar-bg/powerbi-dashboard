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
import { generateServiceRequestData } from '../../utils/dataGenerator';
import { getColorFromColorPath, getGaugeColor } from '../../utils/commonUtils';

export const ServiceRequestSection = () => {
  const { data } = useDashboard();

  const { serviceNowRequest } = data;

  const serviceNowData = useMemo(
    () => generateServiceRequestData(serviceNowRequest),
    [serviceNowRequest]
  );

  const progressColor = useMemo(() => {
    return getColorFromColorPath(
      getGaugeColor(serviceNowRequest?.completionPercentage, 'completion')
    );
  }, [serviceNowRequest?.completionPercentage]);

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        Service Now Request
      </Typography>
      <Box>
        <PieChart
          series={[
            {
              data: serviceNowData,
            },
          ]}
          width={200}
          height={200}
        />
      </Box>

      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item xs={4}>
          <Typography variant='h4' color='primary'>
            {serviceNowRequest?.processed}
          </Typography>
          <Typography variant='body2'>Processed</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h4' color='warning'>
            {serviceNowRequest?.inProgress}
          </Typography>
          <Typography variant='body2'>In-Progress</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h4' color='success'>
            {serviceNowRequest?.completed}
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
            value={serviceNowRequest?.completionPercentage || 0}
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
              {`${Math.round(serviceNowRequest?.completionPercentage || 0)}%`}
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
