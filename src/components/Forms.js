import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  Rating,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Checkbox,
  Switch,
  Slider,
  Button,
  Grid,
  Chip,
  FormGroup,
  Alert,
  Snackbar,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  Save as SaveIcon,
  Clear as ClearIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Person as PersonIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';

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

function Forms() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    category: '',
    assignedTeam: [],
    priority: 'medium',
    projectRating: 0,
    technologies: [],
    budget: 50000,
    isActive: true,
    hasDocumentation: false,
    needsApproval: false,
    estimatedHours: [40, 120],
    clientFeedback: 3,
    projectType: 'internal',
    riskLevel: 2,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (formData.assignedTeam.length === 0) {
      newErrors.assignedTeam = 'At least one team member must be assigned';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      // Here you would typically send data to an API
    }
  };

  const handleClear = () => {
    setFormData({
      projectName: '',
      description: '',
      category: '',
      assignedTeam: [],
      priority: 'medium',
      projectRating: 0,
      technologies: [],
      budget: 50000,
      isActive: true,
      hasDocumentation: false,
      needsApproval: false,
      estimatedHours: [40, 120],
      clientFeedback: 3,
      projectType: 'internal',
      riskLevel: 2,
    });
    setErrors({});
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: 1400,
        mx: 'auto',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {/* Header Section */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 3,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <BusinessIcon sx={{ fontSize: 56, mb: 2, opacity: 0.9 }} />
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          sx={{ fontWeight: 300 }}
        >
          Project Dashboard Form
        </Typography>
        <Typography variant='h6' sx={{ opacity: 0.9, fontWeight: 300 }}>
          Create and manage project information with comprehensive details
        </Typography>
      </Paper>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Basic Information Card */}
          <Grid item xs={12}>
            <Card elevation={3} sx={{ overflow: 'visible' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <CodeIcon color='primary' sx={{ fontSize: 28 }} />
                  <Typography variant='h5' color='primary' fontWeight={600}>
                    Basic Information
                  </Typography>
                </Stack>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label='Project Name'
                      value={formData.projectName}
                      onChange={(e) =>
                        handleInputChange('projectName', e.target.value)
                      }
                      error={!!errors.projectName}
                      helperText={errors.projectName}
                      variant='outlined'
                      required
                      size='medium'
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
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
                        onChange={(e) =>
                          handleInputChange('category', e.target.value)
                        }
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

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='Project Description'
                      multiline
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange('description', e.target.value)
                      }
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
          </Grid>

          {/* Team & Technology Card */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ mb: 3 }}
                >
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
          </Grid>

          {/* Project Settings Card */}
          <Grid item xs={12} lg={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <SpeedIcon color='primary' sx={{ fontSize: 28 }} />
                  <Typography variant='h5' color='primary' fontWeight={600}>
                    Project Settings
                  </Typography>
                </Stack>

                <Stack spacing={3}>
                  <FormControl component='fieldset'>
                    <FormLabel
                      component='legend'
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Project Priority
                    </FormLabel>
                    <RadioGroup
                      row
                      value={formData.priority}
                      onChange={(e) =>
                        handleInputChange('priority', e.target.value)
                      }
                    >
                      <FormControlLabel
                        value='low'
                        control={<Radio />}
                        label='Low'
                      />
                      <FormControlLabel
                        value='medium'
                        control={<Radio />}
                        label='Medium'
                      />
                      <FormControlLabel
                        value='high'
                        control={<Radio />}
                        label='High'
                      />
                      <FormControlLabel
                        value='critical'
                        control={<Radio />}
                        label='Critical'
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl component='fieldset'>
                    <FormLabel
                      component='legend'
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Project Type
                    </FormLabel>
                    <RadioGroup
                      row
                      value={formData.projectType}
                      onChange={(e) =>
                        handleInputChange('projectType', e.target.value)
                      }
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
                            handleInputChange(
                              'hasDocumentation',
                              e.target.checked
                            )
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
          </Grid>

          {/* Ratings & Assessment Card */}
          <Grid item xs={12} lg={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <AssessmentIcon color='primary' sx={{ fontSize: 28 }} />
                  <Typography variant='h5' color='primary' fontWeight={600}>
                    Ratings & Assessment
                  </Typography>
                </Stack>

                <Stack spacing={4}>
                  <Box>
                    <Typography
                      component='legend'
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Project Rating
                    </Typography>
                    <Rating
                      value={formData.projectRating}
                      onChange={(event, newValue) =>
                        handleInputChange('projectRating', newValue)
                      }
                      size='large'
                      precision={0.5}
                    />
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      sx={{ display: 'block', mt: 1 }}
                    >
                      Rate the overall project quality
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      component='legend'
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      Client Feedback Rating
                    </Typography>
                    <Rating
                      value={formData.clientFeedback}
                      onChange={(event, newValue) =>
                        handleInputChange('clientFeedback', newValue)
                      }
                      size='large'
                      max={5}
                    />
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      sx={{ display: 'block', mt: 1 }}
                    >
                      Client satisfaction rating
                    </Typography>
                  </Box>

                  <Box>
                    <Typography gutterBottom sx={{ fontWeight: 600 }}>
                      Risk Level: {formData.riskLevel}/5
                    </Typography>
                    <Slider
                      value={formData.riskLevel}
                      onChange={(event, newValue) =>
                        handleInputChange('riskLevel', newValue)
                      }
                      min={1}
                      max={5}
                      step={1}
                      valueLabelDisplay='auto'
                      marks={[
                        { value: 1, label: 'Low' },
                        { value: 3, label: 'Medium' },
                        { value: 5, label: 'High' },
                      ]}
                      sx={{ mt: 2 }}
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Budget & Timeline Card */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <SecurityIcon color='primary' sx={{ fontSize: 28 }} />
                  <Typography variant='h5' color='primary' fontWeight={600}>
                    Budget & Timeline
                  </Typography>
                </Stack>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      gutterBottom
                      sx={{ fontWeight: 600, fontSize: '1.1rem' }}
                    >
                      Budget: ${formData.budget.toLocaleString()}
                    </Typography>
                    <Slider
                      value={formData.budget}
                      onChange={(event, newValue) =>
                        handleInputChange('budget', newValue)
                      }
                      min={10000}
                      max={500000}
                      step={5000}
                      valueLabelDisplay='auto'
                      valueLabelFormat={(value) => `$${value.toLocaleString()}`}
                      marks={[
                        { value: 10000, label: '$10K' },
                        { value: 100000, label: '$100K' },
                        { value: 250000, label: '$250K' },
                        { value: 500000, label: '$500K' },
                      ]}
                      sx={{ mt: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography
                      gutterBottom
                      sx={{ fontWeight: 600, fontSize: '1.1rem' }}
                    >
                      Estimated Hours: {formData.estimatedHours[0]} -{' '}
                      {formData.estimatedHours[1]} hours
                    </Typography>
                    <Slider
                      value={formData.estimatedHours}
                      onChange={(event, newValue) =>
                        handleInputChange('estimatedHours', newValue)
                      }
                      min={20}
                      max={500}
                      step={10}
                      valueLabelDisplay='auto'
                      valueLabelFormat={(value) => `${value}h`}
                      marks={[
                        { value: 20, label: '20h' },
                        { value: 100, label: '100h' },
                        { value: 250, label: '250h' },
                        { value: 500, label: '500h' },
                      ]}
                      sx={{ mt: 2 }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                borderRadius: 2,
              }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent='center'
                alignItems='center'
              >
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<ClearIcon />}
                  onClick={handleClear}
                  size='large'
                  sx={{
                    minWidth: { xs: '100%', sm: 200 },
                    py: 1.5,
                    borderWidth: 2,
                    '&:hover': { borderWidth: 2 },
                  }}
                >
                  Clear Form
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  startIcon={<SaveIcon />}
                  size='large'
                  sx={{
                    minWidth: { xs: '100%', sm: 200 },
                    py: 1.5,
                    background:
                      'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    '&:hover': {
                      background:
                        'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
                    },
                  }}
                >
                  Submit Project
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Project form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Forms;
