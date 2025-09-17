import { useMemo } from 'react';
import { Paper, Typography, Box, Chip, LinearProgress } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';
import { formatNumber } from '../../utils/dataGenerator';

export const AIIndexWidget = () => {
  const { data } = useDashboard();

  const { aiIndex } = data;

  // Calculate progress percentage (assuming max AI Index value is around 500K)
  const maxValue = 500000;
  const displayValue = useMemo(
    () => formatNumber(aiIndex?.value),
    [aiIndex?.value]
  );
  // const numericValue = parseInt(aiIndex?.value?.replace(/[^\d]/g, '') || 0);
  const progressPercentage = Math.min((aiIndex?.value / maxValue) * 100, 100);

  return (
    <Paper
      sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant='h6' gutterBottom>
        AI Index
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{
              mb: 1,
              fontWeight: 'bold',
              fontSize: '2rem',
              color: 'primary.main',
            }}
          >
            {displayValue}
          </Typography>

          <Chip
            label={aiIndex?.type}
            color='success'
            size='small'
            sx={{ mb: 2 }}
          />

          <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
            AI Performance Progress
          </Typography>

          <LinearProgress
            variant='determinate'
            value={progressPercentage}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundColor: 'success.main',
              },
            }}
          />

          <Typography
            variant='caption'
            color='text.secondary'
            sx={{ mt: 1, display: 'block' }}
          >
            {progressPercentage.toFixed(1)}% of target achieved
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant='caption' color='text.secondary'>
            AI-driven cost optimization and efficiency improvements
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
