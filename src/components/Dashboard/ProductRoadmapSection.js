import { Divider, Paper, Typography, Box, Chip, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDashboard } from '../../context/DashboardContext';
import { generateProductRoadmapBarData } from '../../utils/dataGenerator';
import { useMemo } from 'react';
import { getRoadMapChipColor } from '../../utils/commonUtils';

export const ProductRoadmapSection = () => {
  const { data } = useDashboard();
  const { productRoadmap } = data;

  const operationsData = useMemo(
    () => generateProductRoadmapBarData(productRoadmap?.items),
    [productRoadmap?.items]
  );

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant='h6' gutterBottom>
        Product EOL/Roadmap
      </Typography>
      <BarChart
        xAxis={[
          {
            id: 'years',
            data: operationsData.years,
            label: 'Year',
          },
        ]}
        series={operationsData.types.map((type, idx) => ({
          data: operationsData.barData[idx].data,
          label: type,
          stack: 'total',
          color: operationsData.barData[idx].color,
        }))}
        height={250}
        width={350}
        legend={{ position: { vertical: 'top', horizontal: 'right' } }}
      />
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
          {operationsData.years.map((year) => (
            <Box key={year} sx={{ minWidth: 90 }}>
              <Typography
                variant='subtitle2'
                color='text.secondary'
                sx={{ mb: 0.5 }}
              >
                {year}
              </Typography>
              <Stack spacing={0.5}>
                {productRoadmap.items
                  .filter((item) => item.year === year)
                  .map((item, idx) => (
                    <Chip
                      key={item.name + item.type + item.year}
                      label={`${item.name} (${item.type})`}
                      color={getRoadMapChipColor(item.type)}
                      size='small'
                      sx={{ mb: 0.5 }}
                    />
                  ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};
