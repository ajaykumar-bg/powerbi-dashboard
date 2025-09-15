import React from 'react';

import Media from './Media';
import DenseTable from './DenseTable';
import { Box } from '@mui/material';
import MetricsData from './MetricsData';

function Details() {
	return (
		<Box>
			<Box>
				<MetricsData />
			</Box>
			<Box sx={{ overflow: 'hidden' }}>
				<Media loading />
				<Media />
			</Box>
			<Box>
				<DenseTable />
			</Box>
		</Box>
	);
}

export default Details;
