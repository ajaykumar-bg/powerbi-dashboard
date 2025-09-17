import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Stack,
} from '@mui/material';
import { Code as CodeIcon } from '@mui/icons-material';

const projectCategories = [
  'Web Development',
  'Mobile Development',
  'Data Analytics',
  'AI/ML',
  'Infrastructure',
  'Security',
  'DevOps',
  'Testing',
];

function BasicInformation({ formData, handleInputChange, errors }) {
  return (
    <Card elevation={3} sx={{ overflow: 'visible' }}>
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 3 }}>
          <CodeIcon color='primary' sx={{ fontSize: 28 }} />
          <Typography variant='h5' color='primary' fontWeight={600}>
            Basic Information
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label='Project Name'
              value={formData.projectName}
              onChange={(e) => handleInputChange('projectName', e.target.value)}
              error={!!errors.projectName}
              helperText={errors.projectName}
              variant='outlined'
              required
              size='medium'
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl
              fullWidth
              error={!!errors.category}
              required
              size='medium'
            >
              <InputLabel>Project Category</InputLabel>
              <Select
                value={formData.category}
                label='Project Category'
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                {projectCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {errors.category && (
                <Typography
                  variant='caption'
                  color='error'
                  sx={{ mt: 0.5, ml: 1.5 }}
                >
                  {errors.category}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label='Project Description'
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              error={!!errors.description}
              helperText={errors.description}
              variant='outlined'
              required
              size='medium'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default BasicInformation;
