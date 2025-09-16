import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import OverviewCards from './OverviewCards';
import ChartsSection from './ChartsSection';
import RecentActivities from './RecentActivities';
import ProjectStatus from './ProjectStatus';
import { dashboardV2Data } from './mockData';

const DashboardV2 = () => {
  return (
    <Container maxWidth='xl' sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h4' component='h1' fontWeight='bold' gutterBottom>
          Dashboard V2
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Advanced analytics and insights for your business
        </Typography>
      </Box>

      {/* Overview Cards */}
      <Box sx={{ mb: 4 }}>
        <OverviewCards data={dashboardV2Data.overview} />
      </Box>

      {/* Charts Section */}
      <Box sx={{ mb: 4 }}>
        <ChartsSection data={dashboardV2Data.charts} />
      </Box>

      {/* Activities and Projects Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <RecentActivities data={dashboardV2Data.recentActivities} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ProjectStatus data={dashboardV2Data.projectStatus} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardV2;
