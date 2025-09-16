import { Box, Paper, Typography } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { getColorFromPath, getGaugeColor } from '../../utils/commonUtils';

export const TechDebtSection = () => {
  const { data } = useDashboard();

  const { techDebt } = data;

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        Tech Debt Reduction
      </Typography>
      <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          textAlign: 'center',
          mt: 2,
        }}
      >
        <Gauge
          width={140}
          height={140}
          value={techDebt?.reductionPercentage}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              color: theme.palette.text.secondary,
              fontSize: 35,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: getColorFromPath(
                theme,
                getGaugeColor(techDebt?.reductionPercentage, 'debt')
              ),
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
      </Box>
    </Paper>
  );
};
