import React from 'react';
import { Paper, Button, Stack } from '@mui/material';
import { Save as SaveIcon, Clear as ClearIcon } from '@mui/icons-material';

function ActionButtons({ handleClear, isSubmitting = false }) {
  return (
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
          sx={{
            minWidth: { xs: '100%', sm: 200 },
            py: 1.5,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
            },
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Project'}
        </Button>
      </Stack>
    </Paper>
  );
}

export default ActionButtons;
