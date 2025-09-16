import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  queryId,
  queryDescription,
  executionTime,
  cpuTime,
  ioReads,
  executionCount
) {
  return {
    queryId,
    queryDescription,
    executionTime,
    cpuTime,
    ioReads,
    executionCount,
  };
}

const rows = [
  createData(
    'Q001',
    'Customer Order Join Query - Retrieve orders with customer details since 2023',
    2500,
    1800,
    15000,
    245
  ),
  createData(
    'Q002',
    'Electronics Price Update - Bulk price increase for electronics category',
    3200,
    2100,
    8500,
    78
  ),
  createData(
    'Q003',
    'Transaction Count with Account Join - Count transactions with account details',
    1850,
    1200,
    12000,
    156
  ),
  createData(
    'Q004',
    'Audit Log Insert - Add user action to audit trail',
    450,
    280,
    1200,
    892
  ),
  createData(
    'Q005',
    'Temp Data Cleanup - Delete temporary data older than 30 days',
    4100,
    3200,
    22000,
    12
  ),
  createData(
    'Q006',
    'Product Category Join - Retrieve products with category names',
    1650,
    980,
    9800,
    324
  ),
  createData(
    'Q007',
    'User Session Update - Update last activity timestamp for session',
    680,
    420,
    2100,
    1245
  ),
  createData(
    'Q008',
    'Payment Average Calculation - Calculate average payment amount for date range',
    2200,
    1650,
    11500,
    89
  ),
  createData(
    'Q009',
    'Bulk Notification Insert - Send notifications to all active users',
    3800,
    2900,
    18000,
    24
  ),
  createData(
    'Q010',
    'Complex Order Product Join - Retrieve order details with product information',
    5200,
    4100,
    28000,
    67
  ),
];

function SqlDenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Query ID</TableCell>
            <TableCell>Query Description</TableCell>
            <TableCell align='right'>Execution Time (ms)</TableCell>
            <TableCell align='right'>CPU Time (ms)</TableCell>
            <TableCell align='right'>IO Reads</TableCell>
            <TableCell align='right'>Execution Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.queryId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.queryId}
              </TableCell>
              <TableCell
                sx={{
                  maxWidth: 400,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {row.queryDescription}
              </TableCell>
              <TableCell align='right'>{row.executionTime}</TableCell>
              <TableCell align='right'>{row.cpuTime}</TableCell>
              <TableCell align='right'>{row.ioReads}</TableCell>
              <TableCell align='right'>{row.executionCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SqlDenseTable;
