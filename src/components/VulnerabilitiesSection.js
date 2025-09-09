import { Box, Paper, Typography, Grid } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const VulnerabilitiesSection = () => {
  const { data } = useDashboard();

  const { vulnerabilities } = data;
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Vulnerabilities
      </Typography>

      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item xs={6}>
          <Typography variant="body1" color="text.secondary">
            Custom Code Vulnerabilities
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" color="warning.main">
              {vulnerabilities?.customCode?.analyzed}
            </Typography>
            <Typography variant="body2">Analyzed</Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" color="warning.main">
              {vulnerabilities?.customCode?.remediatedCount}
            </Typography>
            <Typography variant="body2">Disposition/Remediated</Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" color="text.secondary">
            SAP Portal Vulnerabilities
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" color="warning.main">
              {vulnerabilities?.sapPortal?.detected}
            </Typography>
            <Typography variant="body2">
              Detected (Critical, High, & Medium)
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" color="warning.main">
              {vulnerabilities?.sapPortal?.remaining}
            </Typography>
            <Typography variant="body2">Remaining (Low)</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
