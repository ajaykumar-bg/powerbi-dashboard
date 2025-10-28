import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useDashboardForms } from '../context/DashboardFormsContext';
import { aiIndexTypes } from '../utils/dashboardFormsUtils';

const AIIndexSection = () => {
  const { formData, errors, updateField } = useDashboardForms();

  const handleValueChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    updateField('aiIndex.value', value);
  };

  const handleTypeChange = (event) => {
    updateField('aiIndex.type', event.target.value);
  };

  return (
    <Card>
      <CardHeader
        title='AI Index'
        subheader='Configure AI index metrics and type'
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              label='AI Index Value'
              type='number'
              value={formData.aiIndex.value}
              onChange={handleValueChange}
              error={!!errors['aiIndex.value']}
              helperText={
                errors['aiIndex.value'] || 'AI index value in dollars'
              }
              fullWidth
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={formData.aiIndex.type}
                onChange={handleTypeChange}
                label='Type'
              >
                {aiIndexTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AIIndexSection;
