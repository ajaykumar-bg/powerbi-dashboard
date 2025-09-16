import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import Media from './Media';
import DenseTable from './DenseTable';
import MetricsData from './MetricsData';

function Details() {
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant='h4' component='h1' gutterBottom sx={{ mb: 3 }}>
        Details Dashboard
      </Typography>

      <Box sx={{ mb: 4 }}>
        <MetricsData />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant='h5' component='h2' gutterBottom sx={{ mb: 2 }}>
            Media Overview
          </Typography>
          <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant='h5' component='h2' gutterBottom sx={{ mb: 2 }}>
            Data Table
          </Typography>
          <DenseTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Details;
