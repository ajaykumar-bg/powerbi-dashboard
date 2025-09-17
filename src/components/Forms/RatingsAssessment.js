import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Slider,
  Stack,
  Box,
} from '@mui/material';
import { Assessment as AssessmentIcon } from '@mui/icons-material';

function RatingsAssessment({ formData, handleInputChange }) {
  return (
    <Card elevation={3} sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 3 }}>
          <AssessmentIcon color='primary' sx={{ fontSize: 28 }} />
          <Typography variant='h5' color='primary' fontWeight={600}>
            Ratings & Assessment
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Box>
            <Typography component='legend' sx={{ mb: 2, fontWeight: 600 }}>
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
            <Typography component='legend' sx={{ mb: 2, fontWeight: 600 }}>
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
  );
}

export default RatingsAssessment;
