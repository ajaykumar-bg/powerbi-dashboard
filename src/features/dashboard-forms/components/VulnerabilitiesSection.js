import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import { useDashboardForms } from '../context/DashboardFormsContext';

const VulnerabilitiesSection = () => {
  const { formData, errors, updateField } = useDashboardForms();

  const handleInputChange = (field) => (event) => {
    const value = parseInt(event.target.value) || 0;
    updateField(field, value);
  };

  return (
    <Card>
      <CardHeader
        title='Vulnerabilities'
        subheader='Configure vulnerability analysis and remediation metrics'
      />
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Custom Code Vulnerabilities
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              label='Lines Analyzed'
              type='number'
              value={formData.vulnerabilities.customCode.analyzed}
              onChange={handleInputChange(
                'vulnerabilities.customCode.analyzed'
              )}
              error={!!errors['vulnerabilities.customCode.analyzed']}
              helperText={
                errors['vulnerabilities.customCode.analyzed'] ||
                'Lines of code analyzed'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label='Remediated Count'
              type='number'
              value={formData.vulnerabilities.customCode.remediatedCount}
              onChange={handleInputChange(
                'vulnerabilities.customCode.remediatedCount'
              )}
              error={!!errors['vulnerabilities.customCode.remediatedCount']}
              helperText={
                errors['vulnerabilities.customCode.remediatedCount'] ||
                'Number of vulnerabilities remediated'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Typography variant='h6' gutterBottom>
          SAP Portal Vulnerabilities
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label='Detected'
              type='number'
              value={formData.vulnerabilities.sapPortal.detected}
              onChange={handleInputChange('vulnerabilities.sapPortal.detected')}
              error={!!errors['vulnerabilities.sapPortal.detected']}
              helperText={
                errors['vulnerabilities.sapPortal.detected'] ||
                'Vulnerabilities detected'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label='Remaining'
              type='number'
              value={formData.vulnerabilities.sapPortal.remaining}
              onChange={handleInputChange(
                'vulnerabilities.sapPortal.remaining'
              )}
              error={!!errors['vulnerabilities.sapPortal.remaining']}
              helperText={
                errors['vulnerabilities.sapPortal.remaining'] ||
                'Vulnerabilities remaining'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VulnerabilitiesSection;
