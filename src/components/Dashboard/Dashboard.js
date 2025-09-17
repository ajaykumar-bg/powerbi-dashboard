import { Grid } from '@mui/material';

import { TechDebtSection } from './TechDebtSection';
import { AppRatWidget } from './AppRatWidget';
import { AIIndexWidget } from './AIIndexWidget';
import { VulnerabilitiesSection } from './VulnerabilitiesSection';
import { SQLOptimizationSection } from './SQLOptimizationSection';
import { OperationsMetricsSection } from './OperationsMetricsSection';
import { ServiceRequestSection } from './ServiceRequestSection';
import { ProductRoadmapSection } from './ProductRoadmapSection';
import { useUser } from '../../context/UserContext';

function Dashboard() {
  const { permissions } = useUser();

  return (
    <Grid
      container
      spacing={3}
      sx={{ width: '100%', px: { xs: 1, sm: 2, lg: 5 }, py: { xs: 2, lg: 3 } }}
    >
      {/* Top Row - Small Widgets */}
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={3}>
          {permissions.canViewTechDebt && (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <TechDebtSection />
            </Grid>
          )}
          {permissions.canViewAppRat && (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <AppRatWidget />
            </Grid>
          )}
          {permissions.canViewAIIndex && (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <AIIndexWidget />
            </Grid>
          )}
          {permissions.canViewOperationsMetrics && (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <OperationsMetricsSection />
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Middle Row - Large Sections */}
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={3}>
          {permissions.canViewVulnerabilities && (
            <Grid size={{ xs: 12, lg: 6 }}>
              <VulnerabilitiesSection />
            </Grid>
          )}
          {permissions.canViewSQLOptimization && (
            <Grid size={{ xs: 12, lg: 6 }}>
              <SQLOptimizationSection />
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Bottom Row - Additional Sections */}
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={3}>
          {permissions.canViewProductRoadmap && (
            <Grid size={{ xs: 12, md: 8 }}>
              <ProductRoadmapSection />
            </Grid>
          )}
          {permissions.canViewServiceRequest && (
            <Grid size={{ xs: 12, md: 4 }}>
              <ServiceRequestSection />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
