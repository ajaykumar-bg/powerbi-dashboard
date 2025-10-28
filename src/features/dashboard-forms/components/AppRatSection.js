import React from 'react';
import { Card, CardContent, CardHeader, TextField, Grid } from '@mui/material';
import { useDashboardForms } from '../context/DashboardFormsContext';

const AppRatSection = () => {
  const { formData, errors, updateField } = useDashboardForms();

  const handleInputChange = (field) => (event) => {
    const value = parseInt(event.target.value) || 0;
    updateField(field, value);
  };

  return (
    <Card>
      <CardHeader
        title='App Rationalization (AppRat)'
        subheader='Configure application rationalization savings metrics'
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Total Savings'
              type='number'
              value={formData.appRat.totalSavings}
              onChange={handleInputChange('appRat.totalSavings')}
              error={!!errors['appRat.totalSavings']}
              helperText={
                errors['appRat.totalSavings'] || 'Total savings in dollars'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label='SAP Mobile Platform Savings'
              type='number'
              value={formData.appRat.sapMobilePlatform}
              onChange={handleInputChange('appRat.sapMobilePlatform')}
              error={!!errors['appRat.sapMobilePlatform']}
              helperText={
                errors['appRat.sapMobilePlatform'] ||
                'SAP Mobile Platform savings'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label='SAP CE Savings'
              type='number'
              value={formData.appRat.sapCE}
              onChange={handleInputChange('appRat.sapCE')}
              error={!!errors['appRat.sapCE']}
              helperText={errors['appRat.sapCE'] || 'SAP CE savings'}
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AppRatSection;
