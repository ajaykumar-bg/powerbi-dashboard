import {
	ThemeProvider,
	CssBaseline,
	Container,
	Grid,
	Typography,
	Box,
} from '@mui/material';
import { theme } from './theme';
import { TechDebtSection } from './components/TechDebtSection';
import { VulnerabilitiesSection } from './components/VulnerabilitiesSection';
import { SQLOptimizationSection } from './components/SQLOptimizationSection';
import { OperationsMetricsSection } from './components/OperationsMetricsSection';
import { ServiceRequestSection } from './components/ServiceRequestSection';
import { ProductRoadmapSection } from './components/ProductRoadmapSection';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					backgroundColor: 'background.default',
					minHeight: '100vh',
					py: 4,
				}}
			>
				<Container maxWidth='xl'>
					<Typography variant='h4' gutterBottom>
						SAP App Dev Scorecard
					</Typography>

					<Grid container spacing={3}>
						<Grid item xs={12} md={3}>
							<TechDebtSection />
						</Grid>

						<Grid item xs={12} md={9}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<VulnerabilitiesSection />
								</Grid>

								<Grid item xs={12}>
									<OperationsMetricsSection />
								</Grid>

								<Grid item xs={12}>
									<SQLOptimizationSection />
								</Grid>

								<Grid item xs={12} md={4}>
									<ServiceRequestSection />
								</Grid>

								<Grid item xs={12} md={8}>
									<ProductRoadmapSection />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
