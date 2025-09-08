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
import { AppRatWidget } from './components/AppRatWidget';
import { AIIndexWidget } from './components/AIIndexWidget';
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
        <Container maxWidth>
          <Typography variant="h4" gutterBottom>
            SAP App Dev Scorecard
          </Typography>

          <Grid container spacing={3}>
            {/* Left Side - Three Small Widgets */}
            <Grid item xs={12} md={3}>
              <Grid container spacing={2} direction="column">
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
            <Grid item xs={12} md={6}>
              <Grid container spacing={3} direction="column">
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
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <OperationsMetricsSection />
                </Grid>
                <Grid item>
                  <ServiceRequestSection />
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
