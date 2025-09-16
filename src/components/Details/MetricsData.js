import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { Sparkline } from '@mui/x-charts';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

function MetricsData() {
  // Generate different data patterns for each sparkline
  const dailyData = Array.from(
    { length: 30 },
    (_, i) => Math.sin(i / 3) * 50 + 100
  );
  const weeklyData = Array.from(
    { length: 30 },
    (_, i) => Math.exp(i / 10) + 50
  );
  const monthlyData = Array.from({ length: 30 }, (_, i) => {
    const base = i < 15 ? i * 2 : (30 - i) * 2;
    return base + Math.random() * 20;
  });

  console.log({ dailyData, weeklyData, monthlyData });

  const cards = [
    {
      title: 'Daily Metrics',
      value: '2.3k',
      trend: '+15%',
      data: dailyData,
      color: 'primary.main',
    },
    {
      title: 'Weekly Progress',
      value: '8.7k',
      trend: '+23%',
      data: weeklyData,
      color: 'success.main',
    },
    {
      title: 'Monthly Overview',
      value: '34.5k',
      trend: '+8%',
      data: monthlyData,
      color: 'secondary.main',
    },
  ];
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                {card.title}
              </Typography>
              <Typography variant='h4' sx={{ my: 1 }}>
                {card.value}
              </Typography>
              <Typography variant='body2' color='success.main' sx={{ mb: 2 }}>
                {card.trend}
              </Typography>
              <SparkLineChart
                data={card.data}
                width={250}
                height={100}
                curve='natural'
                area={true}
                colors={[card.color]}
                showTooltip
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MetricsData;
