import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Checkbox,
  Switch,
  FormGroup,
  Stack,
} from '@mui/material';
import { Speed as SpeedIcon } from '@mui/icons-material';

function ProjectSettings({ formData, handleInputChange }) {
  return (
    <Card elevation={3} sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 3 }}>
          <SpeedIcon color='primary' sx={{ fontSize: 28 }} />
          <Typography variant='h5' color='primary' fontWeight={600}>
            Project Settings
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <FormControl component='fieldset'>
            <FormLabel component='legend' sx={{ mb: 2, fontWeight: 600 }}>
              Project Priority
            </FormLabel>
            <RadioGroup
              row
              value={formData.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
            >
              <FormControlLabel value='low' control={<Radio />} label='Low' />
              <FormControlLabel
                value='medium'
                control={<Radio />}
                label='Medium'
              />
              <FormControlLabel value='high' control={<Radio />} label='High' />
              <FormControlLabel
                value='critical'
                control={<Radio />}
                label='Critical'
              />
            </RadioGroup>
          </FormControl>

          <FormControl component='fieldset'>
            <FormLabel component='legend' sx={{ mb: 2, fontWeight: 600 }}>
              Project Type
            </FormLabel>
            <RadioGroup
              row
              value={formData.projectType}
              onChange={(e) => handleInputChange('projectType', e.target.value)}
            >
              <FormControlLabel
                value='internal'
                control={<Radio />}
                label='Internal'
              />
              <FormControlLabel
                value='client'
                control={<Radio />}
                label='Client'
              />
              <FormControlLabel
                value='research'
                control={<Radio />}
                label='Research'
              />
            </RadioGroup>
          </FormControl>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isActive}
                  onChange={(e) =>
                    handleInputChange('isActive', e.target.checked)
                  }
                  color='primary'
                />
              }
              label='Project Active'
              sx={{ fontSize: '1.1rem' }}
            />
          </Stack>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.hasDocumentation}
                  onChange={(e) =>
                    handleInputChange('hasDocumentation', e.target.checked)
                  }
                />
              }
              label='Has Documentation'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.needsApproval}
                  onChange={(e) =>
                    handleInputChange('needsApproval', e.target.checked)
                  }
                />
              }
              label='Needs Approval'
            />
          </FormGroup>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectSettings;
