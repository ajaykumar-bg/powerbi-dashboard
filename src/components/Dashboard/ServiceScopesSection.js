import { useMemo } from 'react';
import { Box, Paper, Typography, Grid, Divider } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';

import { PieChart } from '@mui/x-charts/PieChart';

import { generateServiceScopesData } from '../../utils/dataGenerator';

export const ServiceScopesSection = () => {
  const { data } = useDashboard();

  const { serviceScopes } = data;

  const serviceScopesData = useMemo(
    () => generateServiceScopesData(serviceScopes),
    [serviceScopes]
  );
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        Service Scopes
      </Typography>
      <Box>
        <PieChart
          series={[
            {
              paddingAngle: 5,
              innerRadius: 60,
              outerRadius: 80,
              data: serviceScopesData,
            },
          ]}
          width={170}
          height={200}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item xs={6}>
          <Typography variant='h5' sx={{ color: serviceScopesData[0]?.color }}>
            {serviceScopes?.ricefs?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>RICEFs</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' sx={{ color: serviceScopesData[1]?.color }}>
            {serviceScopes?.retrofits?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Retrofits</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' sx={{ color: serviceScopesData[2]?.color }}>
            {serviceScopes?.fioriApps?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Fiori Apps</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' sx={{ color: serviceScopesData[3]?.color }}>
            {serviceScopes?.liveCompare?.count?.toLocaleString()}
          </Typography>
          <Typography variant='body2'>Live Compare</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
