import { Box, Grid } from '@mui/material';

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
		<Grid container spacing={3} sx={{ width: '100%', lg: { px: 5, py: 3 } }}>
			{/* Left Side - Three Small Widgets */}
			<Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
				<Box mb={3}>
					<TechDebtSection />
				</Box>
				<Box mb={3}>
					<AppRatWidget />
				</Box>
				<Box mb={3}>
					<AIIndexWidget />
				</Box>
			</Grid>

			{/* Middle Side - Large Sections */}
			<Grid size={{ xs: 12, sm: 6, md: 4, lg: 7 }}>
				<Box mb={3}>
					<VulnerabilitiesSection />
				</Box>
				<Box mb={3}>
					<SQLOptimizationSection />
				</Box>
				<Box mb={3}>
					<ProductRoadmapSection />
				</Box>
			</Grid>

			{/* Right Side */}
			<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
				<Box mb={3}>
					<OperationsMetricsSection />
				</Box>
				<Box mb={3}>
					<ServiceRequestSection />
				</Box>
			</Grid>
		</Grid>
	);
}

export default Dashboard;
