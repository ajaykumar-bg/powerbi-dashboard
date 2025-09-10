import { Paper, Typography } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';

export const AIIndexWidget = () => {
  const { data } = useDashboard();

  const { aiIndex } = data;
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        AI Index
      </Typography>
      <Typography
        variant="h4"
        sx={{ mb: 1, fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        {aiIndex?.value}
      </Typography>
      <Typography variant="body2" color="success.main">
        {aiIndex?.type}
      </Typography>
      <Typography variant="body2">AI Index</Typography>
    </Paper>
  );
};
