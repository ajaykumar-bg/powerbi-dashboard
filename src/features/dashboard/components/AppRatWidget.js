import { Grid, Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const AppRatWidget = () => {
  const { data } = useDashboard();

  const { appRat } = data;

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        App Rat
      </Typography>
      <Grid container spacing={2} direction='column'>
        <Grid>
          <Typography variant='h2' color='success'>
            {appRat?.totalSavings}
          </Typography>
          <Typography variant='body2'>Dollars savings</Typography>
        </Grid>
        <Grid>
          <Typography variant='h2' color='warning'>
            {appRat?.sapMobilePlatform}
          </Typography>
          <Typography variant='body2'>SAP Mobile Platform</Typography>
        </Grid>
        <Grid>
          <Typography variant='h2' color='info'>
            {appRat?.sapCE}
          </Typography>
          <Typography variant='body2'>SAP CE</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
