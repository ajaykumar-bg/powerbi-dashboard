import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, PieChart, LineChart } from '@mui/x-charts';

const ChartsSection = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {/* Sales vs Target Chart */}
      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Sales vs Target
            </Typography>
            <Box sx={{ height: 300 }}>
              <BarChart
                xAxis={[
                  {
                    scaleType: 'band',
                    data: data.salesData.map((item) => item.month),
                  },
                ]}
                series={[
                  {
                    data: data.salesData.map((item) => item.sales),
                    label: 'Sales',
                    color: '#8884d8',
                  },
                  {
                    data: data.salesData.map((item) => item.target),
                    label: 'Target',
                    color: '#82ca9d',
                  },
                ]}
                width={400}
                height={250}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Performance Distribution */}
      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Performance Distribution
            </Typography>
            <Box
              sx={{ height: 300, display: 'flex', justifyContent: 'center' }}
            >
              <PieChart
                series={[
                  {
                    data: data.performanceData.map((item, index) => ({
                      id: index,
                      value: item.value,
                      label: item.name,
                      color: item.color,
                    })),
                  },
                ]}
                width={400}
                height={250}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Trend Analysis */}
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              30-Day Trend Analysis
            </Typography>
            <Box sx={{ height: 300 }}>
              <LineChart
                xAxis={[
                  {
                    data: data.trendData.map((item) => item.day),
                  },
                ]}
                series={[
                  {
                    data: data.trendData.map((item) => item.value),
                    label: 'Trend',
                    color: '#ff7300',
                    curve: 'natural',
                  },
                ]}
                width={800}
                height={250}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ChartsSection;
