import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Box,
} from '@mui/material';
import {
  CheckCircle as SuccessIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

const RecentActivities = ({ data }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <SuccessIcon sx={{ color: 'success.main' }} />;
      case 'info':
        return <InfoIcon sx={{ color: 'info.main' }} />;
      case 'warning':
        return <WarningIcon sx={{ color: 'warning.main' }} />;
      case 'error':
        return <ErrorIcon sx={{ color: 'error.main' }} />;
      default:
        return <InfoIcon sx={{ color: 'info.main' }} />;
    }
  };

  const getChipColor = (type) => {
    switch (type) {
      case 'success':
        return 'success';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Recent Activities
        </Typography>
        <List sx={{ pt: 0 }}>
          {data.map((activity) => (
            <ListItem key={activity.id} sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {getIcon(activity.type)}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant='subtitle2'>
                      {activity.title}
                    </Typography>
                    <Chip
                      label={activity.type}
                      size='small'
                      color={getChipColor(activity.type)}
                      variant='outlined'
                    />
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      {activity.description}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {activity.timestamp}
                    </Typography>
                  </Box>
                }
                primaryTypographyProps={{
                  variant: 'subtitle2',
                  component: 'div',
                }}
                secondaryTypographyProps={{
                  component: 'div',
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
