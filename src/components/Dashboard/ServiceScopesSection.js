import { useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';

import { PieChart } from '@mui/x-charts/PieChart';

import { generateServiceScopesData } from '../../utils/dataGenerator';

export const ServiceScopesSection = () => {
  const { data } = useDashboard();

  const { serviceScopes } = data;

  const operationsData = useMemo(
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
              data: operationsData,
            },
          ]}
          width={170}
          height={200}
        />
      </Box>
    </Paper>
  );
};
