import { Box, Paper, Typography, Grid, Divider } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';
import { useNavigate } from 'react-router-dom';

import { useMemo } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { generateVulnerabilityData } from '../../utils/dataGenerator';

const chartSettings = {
  width: 180,
  height: 120,
};

export const VulnerabilitiesSection = () => {
  const { data } = useDashboard();
  const navigate = useNavigate();

  const { vulnerabilities } = data;
  const vulnerabilityData = useMemo(
    () => generateVulnerabilityData(vulnerabilities),
    [vulnerabilities]
  );

  const handleClick = () => {
    navigate('/vulnerability-details');
  };

  return (
    <Paper
      sx={{
        p: { xs: 1.5, sm: 2 },
        height: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
      onClick={handleClick}
    >
      <Typography variant='h6' gutterBottom sx={{ mb: 1 }}>
        Vulnerabilities
      </Typography>

      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
            Custom Code Vulnerabilities
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant='h4' color='primary' sx={{ lineHeight: 1 }}>
              {vulnerabilities?.customCode?.analyzed}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              Analyzed
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              variant='h4'
              color='success.main'
              sx={{ lineHeight: 1 }}
            >
              {vulnerabilities?.customCode?.remediatedCount}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              Disposition/Remediated
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <PieChart
              series={[
                {
                  startAngle: -90,
                  endAngle: 90,
                  paddingAngle: 3,
                  innerRadius: 35,
                  outerRadius: 55,
                  cy: '75%',
                  data: vulnerabilityData.customCode,
                },
              ]}
              {...chartSettings}
            />
          </Box>
        </Grid>

        {/* <Divider orientation='vertical' flexItem sx={{ mx: 1 }} /> */}

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
            SAP Portal Vulnerabilities
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant='h4' color='error.main' sx={{ lineHeight: 1 }}>
              {vulnerabilities?.sapPortal?.detected}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              Detected (Critical, High, & Medium)
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              variant='h4'
              color='warning.main'
              sx={{ lineHeight: 1 }}
            >
              {vulnerabilities?.sapPortal?.remaining}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              Remaining (Low)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <PieChart
              series={[
                {
                  startAngle: -90,
                  endAngle: 90,
                  paddingAngle: 3,
                  innerRadius: 35,
                  outerRadius: 55,
                  cy: '75%',
                  data: vulnerabilityData.sapPortal,
                },
              ]}
              {...chartSettings}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
