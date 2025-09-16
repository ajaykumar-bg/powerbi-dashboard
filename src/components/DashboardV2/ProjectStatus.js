import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const ProjectStatus = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'primary';
      case 'planning':
        return 'warning';
      case 'on hold':
        return 'error';
      default:
        return 'default';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'success';
    if (progress >= 60) return 'primary';
    if (progress >= 40) return 'warning';
    return 'error';
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Project Status
        </Typography>
        <TableContainer>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Deadline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <Typography variant='subtitle2'>{project.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant='determinate'
                        value={project.progress}
                        color={getProgressColor(project.progress)}
                        sx={{ width: 80, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant='caption'>
                        {project.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={project.status}
                      size='small'
                      color={getStatusColor(project.status)}
                      variant='outlined'
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2'>{project.team}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2'>
                      {new Date(project.deadline).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectStatus;
