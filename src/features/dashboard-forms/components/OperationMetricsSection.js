import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Grid,
  Typography,
  LinearProgress,
  Box,
} from '@mui/material';
import { useDashboardForms } from '../context/DashboardFormsContext';

const OperationMetricsSection = () => {
  const { formData, errors, updateField } = useDashboardForms();

  const handleInputChange = (field) => (event) => {
    const value = parseInt(event.target.value) || 0;
    updateField(field, value);
  };

  // Calculate total for completion percentage
  const total =
    formData.operationMetrics.processed +
    formData.operationMetrics.inProgress +
    formData.operationMetrics.completed;

  const processedPercent =
    total > 0 ? (formData.operationMetrics.processed / total) * 100 : 0;
  const inProgressPercent =
    total > 0 ? (formData.operationMetrics.inProgress / total) * 100 : 0;
  const completedPercent =
    total > 0 ? (formData.operationMetrics.completed / total) * 100 : 0;

  return (
    <Card>
      <CardHeader
        title='Operation Metrics'
        subheader='Configure operational metrics and completion tracking'
      />
      <CardContent>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <TextField
              label='Processed'
              type='number'
              value={formData.operationMetrics.processed}
              onChange={handleInputChange('operationMetrics.processed')}
              error={!!errors['operationMetrics.processed']}
              helperText={
                errors['operationMetrics.processed'] || 'Items processed'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <TextField
              label='In Progress'
              type='number'
              value={formData.operationMetrics.inProgress}
              onChange={handleInputChange('operationMetrics.inProgress')}
              error={!!errors['operationMetrics.inProgress']}
              helperText={
                errors['operationMetrics.inProgress'] || 'Items in progress'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <TextField
              label='Completed'
              type='number'
              value={formData.operationMetrics.completed}
              onChange={handleInputChange('operationMetrics.completed')}
              error={!!errors['operationMetrics.completed']}
              helperText={
                errors['operationMetrics.completed'] || 'Items completed'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <TextField
              label='Completion Percentage'
              type='number'
              value={formData.operationMetrics.completionPercentage}
              onChange={handleInputChange(
                'operationMetrics.completionPercentage'
              )}
              error={!!errors['operationMetrics.completionPercentage']}
              helperText={
                errors['operationMetrics.completionPercentage'] ||
                'Overall completion %'
              }
              fullWidth
              inputProps={{ min: 0, max: 100 }}
            />
          </Grid>
        </Grid>

        {total > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant='h6' gutterBottom>
              Distribution Overview (Total: {total.toLocaleString()})
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                Processed:{' '}
                {formData.operationMetrics.processed.toLocaleString()} (
                {processedPercent.toFixed(1)}%)
              </Typography>
              <LinearProgress
                variant='determinate'
                value={processedPercent}
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                In Progress:{' '}
                {formData.operationMetrics.inProgress.toLocaleString()} (
                {inProgressPercent.toFixed(1)}%)
              </Typography>
              <LinearProgress
                variant='determinate'
                value={inProgressPercent}
                color='warning'
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                Completed:{' '}
                {formData.operationMetrics.completed.toLocaleString()} (
                {completedPercent.toFixed(1)}%)
              </Typography>
              <LinearProgress
                variant='determinate'
                value={completedPercent}
                color='success'
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default OperationMetricsSection;
