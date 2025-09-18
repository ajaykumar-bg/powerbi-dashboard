import React, { useState, useMemo } from 'react';
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
  TableSortLabel,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';

const ProjectStatus = ({ data }) => {
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = useMemo(() => {
    let filteredData = [...data];

    // Filter by search term (project name)
    if (searchTerm) {
      filteredData = filteredData.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter) {
      filteredData = filteredData.filter(
        (project) => project.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // Sort the filtered data
    return filteredData.sort((a, b) => {
      let aValue = a[orderBy];
      let bValue = b[orderBy];

      // Handle different data types
      if (orderBy === 'deadline') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      } else if (orderBy === 'progress') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      } else if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (order === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [data, orderBy, order, searchTerm, statusFilter]);

  // Get unique status values for the dropdown
  const uniqueStatuses = useMemo(() => {
    return [...new Set(data.map((project) => project.status))];
  }, [data]);

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
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', height: '100%', pb: 1 }}
      >
        {/* Header with Filter Controls */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant='h6'>Project Status</Typography>

          <Stack direction='row' spacing={2}>
            <TextField
              size='small'
              label='Search by project name'
              variant='outlined'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 200 }}
            />
            <FormControl size='small' sx={{ minWidth: 150 }}>
              <InputLabel>Filter by Status</InputLabel>
              <Select
                value={statusFilter}
                label='Filter by Status'
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value=''>All Statuses</MenuItem>
                {uniqueStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <TableContainer sx={{ maxHeight: 400, overflow: 'auto', flexGrow: 1 }}>
          <Table size='small' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleRequestSort('name')}
                  >
                    Project Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'progress'}
                    direction={orderBy === 'progress' ? order : 'asc'}
                    onClick={() => handleRequestSort('progress')}
                  >
                    Progress
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'status'}
                    direction={orderBy === 'status' ? order : 'asc'}
                    onClick={() => handleRequestSort('status')}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'team'}
                    direction={orderBy === 'team' ? order : 'asc'}
                    onClick={() => handleRequestSort('team')}
                  >
                    Team
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'deadline'}
                    direction={orderBy === 'deadline' ? order : 'asc'}
                    onClick={() => handleRequestSort('deadline')}
                  >
                    Deadline
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((project) => (
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
