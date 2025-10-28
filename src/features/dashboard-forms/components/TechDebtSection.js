import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Slider,
  Box,
} from '@mui/material';
import { useDashboardForms } from '../context/DashboardFormsContext';

const TechDebtSection = () => {
  const { formData, errors, updateField } = useDashboardForms();

  const handlePercentageChange = (event, newValue) => {
    updateField('techDebt.reductionPercentage', newValue);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    updateField(
      'techDebt.reductionPercentage',
      Math.min(100, Math.max(0, value))
    );
  };

  return (
    <Card>
      <CardHeader
        title='Tech Debt Reduction'
        subheader='Configure technical debt reduction metrics'
      />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>
            Reduction Percentage: {formData.techDebt.reductionPercentage}%
          </Typography>
          <Slider
            value={formData.techDebt.reductionPercentage}
            onChange={handlePercentageChange}
            min={0}
            max={100}
            step={1}
            marks={[
              { value: 0, label: '0%' },
              { value: 25, label: '25%' },
              { value: 50, label: '50%' },
              { value: 75, label: '75%' },
              { value: 100, label: '100%' },
            ]}
            sx={{ mt: 2 }}
          />
        </Box>

        <TextField
          label='Reduction Percentage'
          type='number'
          value={formData.techDebt.reductionPercentage}
          onChange={handleInputChange}
          error={!!errors['techDebt.reductionPercentage']}
          helperText={errors['techDebt.reductionPercentage']}
          inputProps={{ min: 0, max: 100 }}
          fullWidth
        />
      </CardContent>
    </Card>
  );
};

export default TechDebtSection;
