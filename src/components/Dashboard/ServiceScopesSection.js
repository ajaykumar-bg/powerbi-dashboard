import { useMemo } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
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

      <Grid container spacing={2} alignItems='center'>
        {/* Chart Section */}
        <Grid size={{ xs: 6 }}>
          <Box display='flex' justifyContent='center'>
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
        </Grid>

        {/* Numbers Section - Vertical List */}
        <Grid size={{ xs: 6 }}>
          <Box display='flex' flexDirection='column' gap={2}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='body2'>RICEFs</Typography>
              <Typography
                variant='h6'
                sx={{ color: serviceScopesData[0]?.color }}
              >
                {serviceScopes?.ricefs?.toLocaleString()}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='body2'>Retrofits</Typography>
              <Typography
                variant='h6'
                sx={{ color: serviceScopesData[1]?.color }}
              >
                {serviceScopes?.retrofits?.toLocaleString()}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='body2'>Fiori Apps</Typography>
              <Typography
                variant='h6'
                sx={{ color: serviceScopesData[2]?.color }}
              >
                {serviceScopes?.fioriApps?.toLocaleString()}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='body2'>Live Compare</Typography>
              <Typography
                variant='h6'
                sx={{ color: serviceScopesData[3]?.color }}
              >
                {serviceScopes?.liveCompare?.count?.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
