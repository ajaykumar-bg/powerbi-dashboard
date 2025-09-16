import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// import Media from './Media';
// import DenseTable from './DenseTable';
import MetricsData from './MetricsData';
import DenseTable from './DenseTable';
import ExpensiveSQLQueriesOverview from './ExpensiveSQLQueriesOverview';

function SqlOptimization() {
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant='h4' component='h1' gutterBottom sx={{ mb: 3 }}>
        SQL Optimization Details
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <MetricsData />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 10 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant='h5' component='h2' gutterBottom sx={{ mb: 2 }}>
              Expensive SQL Queries Overview
            </Typography>
            <ExpensiveSQLQueriesOverview />
          </Box>
          <Box>
            <Typography variant='h5' component='h2' gutterBottom sx={{ mb: 2 }}>
              Data Table
            </Typography>
            <DenseTable />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SqlOptimization;
