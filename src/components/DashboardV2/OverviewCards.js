import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  Assignment as ProjectIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const OverviewCards = ({ data }) => {
  const cards = [
    {
      title: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: 'primary.main',
      bgColor: 'primary.light',
    },
    {
      title: 'Revenue',
      value: `$${(data.totalRevenue / 1000000).toFixed(2)}M`,
      icon: <MoneyIcon sx={{ fontSize: 40 }} />,
      color: 'success.main',
      bgColor: 'success.light',
    },
    {
      title: 'Active Projects',
      value: data.activeProjects,
      icon: <ProjectIcon sx={{ fontSize: 40 }} />,
      color: 'warning.main',
      bgColor: 'warning.light',
    },
    {
      title: 'Completion Rate',
      value: `${data.completionRate}%`,
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: 'info.main',
      bgColor: 'info.light',
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Card
            sx={{ height: '100%', position: 'relative', overflow: 'visible' }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: card.bgColor,
                    color: card.color,
                    mr: 2,
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Typography variant='h4' component='div' fontWeight='bold'>
                    {card.value}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {card.title}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewCards;
