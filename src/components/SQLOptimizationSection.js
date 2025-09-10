import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { useMemo } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { generateSQLQueryData } from '../utils/dataGenerator';

const donutSettings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  // hideLegend: true,
};

export const SQLOptimizationSection = () => {
  const { data } = useDashboard();

  const { sqlOptimization } = data;

  const queryData = useMemo(
    () => generateSQLQueryData(sqlOptimization.queries),
    [sqlOptimization.queries]
  );
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Expensive SQL Optimization
      </Typography>
      <Box>
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 100,
              data: queryData,
              arcLabel: 'value',
            },
          ]}
          {...donutSettings}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* <Grid
        container
        sx={{ justifyContent: 'space-between', gap: 2 }}
        size={{ md: 12 }}
      >
        <Grid item>
          <Typography variant="h4" color="blue">
            {sqlOptimization?.queries?.analyzed}
          </Typography>
          <Typography variant="body2">Queries Analyzed</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="blue">
            {sqlOptimization?.queries?.dispositioned}
          </Typography>
          <Typography variant="body2">Queries Dispositioned</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="blue">
            {sqlOptimization?.queries?.inProgress}
          </Typography>
          <Typography variant="body2">In Progress</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="blue">
            {sqlOptimization?.queries?.optimized}
          </Typography>
          <Typography variant="body2">
            High Memory/time Intensive queries optimized so far
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container sx={{ justifyContent: 'space-between', gap: 2, mt: 3 }}>
        <Grid item>
          <Typography variant="h4">
            {sqlOptimization?.performance?.memoryReduction?.value}
          </Typography>
          <Typography variant="body2">Memory Usage Reduction/day</Typography>
          <Typography variant="body2" color="text.secondary">
            {sqlOptimization?.performance?.memoryReduction?.unit}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            {sqlOptimization?.performance?.executionTimeReduction?.value}
          </Typography>
          <Typography variant="body2">Execution Time Reduction/day</Typography>
          <Typography variant="body2" color="text.secondary">
            {sqlOptimization?.performance?.executionTimeReduction?.unit}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
