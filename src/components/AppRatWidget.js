import { Grid, Paper, Typography } from '@mui/material';

export const AppRatWidget = () => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#00ffff' }}>
          App Rat
        </Typography>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Typography variant="h5" color="success.main">
              220K
            </Typography>
            <Typography variant="body2">Dollars savings</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="success.main">
              120k
            </Typography>
            <Typography variant="body2">SAP Mobile Platform</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="success.main">
              100k
            </Typography>
            <Typography variant="body2">SAP CE</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
