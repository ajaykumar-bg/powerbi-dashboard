import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Autocomplete,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const teamMembers = [
  'John Smith',
  'Sarah Johnson',
  'Mike Chen',
  'Emma Wilson',
  'David Brown',
  'Lisa Garcia',
  'Tom Anderson',
  'Jane Davis',
];

const technologies = [
  'React',
  'Node.js',
  'Python',
  'Java',
  'TypeScript',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'MongoDB',
  'PostgreSQL',
  'Redis',
];

function TeamTechnology({ formData, handleInputChange, errors }) {
  return (
    <Card elevation={3}>
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 3 }}>
          <PersonIcon color='primary' sx={{ fontSize: 28 }} />
          <Typography variant='h5' color='primary' fontWeight={600}>
            Team & Technology
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Autocomplete
              multiple
              options={teamMembers}
              value={formData.assignedTeam}
              onChange={(event, newValue) =>
                handleInputChange('assignedTeam', newValue)
              }
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant='outlined'
                    label={option}
                    {...getTagProps({ index })}
                    key={option}
                    color='primary'
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Assigned Team Members'
                  error={!!errors.assignedTeam}
                  helperText={errors.assignedTeam}
                  required
                  size='medium'
                />
              )}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Autocomplete
              multiple
              options={technologies}
              value={formData.technologies}
              onChange={(event, newValue) =>
                handleInputChange('technologies', newValue)
              }
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant='outlined'
                    label={option}
                    {...getTagProps({ index })}
                    key={option}
                    color='secondary'
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Technologies Used'
                  placeholder='Select technologies...'
                  size='medium'
                />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TeamTechnology;
