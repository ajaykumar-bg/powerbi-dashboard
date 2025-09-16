import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

// import Media from './Media';
// import DenseTable from './DenseTable';
import SqlMetricsData from './SqlMetricsData';
import SqlDenseTable from './SqlDenseTable';
import SQLQueryCharts from './SQLQueryCharts';

function SqlOptimization() {
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <Typography variant='h4' component='h1' gutterBottom sx={{ mb: 3 }}>
        SQL Optimization Details
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <Box sx={{ pr: { lg: 2 } }}>
            <SqlMetricsData />
          </Box>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box sx={{ pl: { lg: 2 } }}>
            <Box sx={{ mb: 4 }}>
              <SQLQueryCharts />
            </Box>
            <Box>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ mb: 2 }}
              >
                Data Table
              </Typography>
              <SqlDenseTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SqlOptimization;
