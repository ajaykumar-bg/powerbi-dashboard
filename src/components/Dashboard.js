import React from 'react';
import { Grid } from '@mui/material';

import { TechDebtSection } from './TechDebtSection';
import { AppRatWidget } from './AppRatWidget';
import { AIIndexWidget } from './AIIndexWidget';
import { VulnerabilitiesSection } from './VulnerabilitiesSection';
import { SQLOptimizationSection } from './SQLOptimizationSection';
import { OperationsMetricsSection } from './OperationsMetricsSection';
import { ServiceRequestSection } from './ServiceRequestSection';
import { ProductRoadmapSection } from './ProductRoadmapSection';

function Dashboard() {
	return (
		<Grid container spacing={3}>
			{/* Left Side - Three Small Widgets */}
			<Grid item xs={12} md={2}>
				<Grid container spacing={2} direction='column'>
					<Grid item xs={12}>
						<TechDebtSection />
					</Grid>
					<Grid item xs={12}>
						<AppRatWidget />
					</Grid>
					<Grid item xs={12}>
						<AIIndexWidget />
					</Grid>
				</Grid>
			</Grid>

			{/* Middle Side - Large Sections */}
			<Grid item xs={12} md={7}>
				<Grid container spacing={3} direction='column'>
					<Grid item xs={12}>
						<VulnerabilitiesSection />
					</Grid>
					<Grid item xs={12}>
						<SQLOptimizationSection />
					</Grid>
					<Grid item xs={12}>
						<ProductRoadmapSection />
					</Grid>
				</Grid>
			</Grid>

			{/* Right Side */}
			<Grid item xs={12} md={3}>
				<Grid container spacing={3} direction='column'>
					<Grid item xs={12}>
						<OperationsMetricsSection />
					</Grid>
					<Grid item xs={12}>
						<ServiceRequestSection />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Dashboard;
