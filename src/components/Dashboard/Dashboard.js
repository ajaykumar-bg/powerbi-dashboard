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
      spacing={2}
      sx={{
        width: '100%',
        px: { xs: 1, sm: 2, lg: 3 },
        py: { xs: 1, lg: 2 },
        minHeight: '100vh',
      }}
    >
      {/* Top Row - Small Widgets */}
      {(permissions.canViewTechDebt ||
        permissions.canViewAppRat ||
        permissions.canViewAIIndex ||
        permissions.canViewOperationsMetrics) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewTechDebt && (
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TechDebtSection />
              </Grid>
            )}
            {permissions.canViewAppRat && (
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <AppRatWidget />
              </Grid>
            )}
            {permissions.canViewOperationsMetrics && (
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <OperationsMetricsSection />
              </Grid>
            )}
            {permissions.canViewAIIndex && (
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <AIIndexWidget />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}

      {/* Middle Row - Large Sections */}
      {(permissions.canViewVulnerabilities ||
        permissions.canViewSQLOptimization) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewVulnerabilities && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewSQLOptimization ? 7 : 12,
                }}
              >
                <VulnerabilitiesSection />
              </Grid>
            )}
            {permissions.canViewSQLOptimization && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewVulnerabilities ? 5 : 12,
                }}
              >
                <SQLOptimizationSection />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}

      {/* Bottom Row - Additional Sections */}
      {(permissions.canViewProductRoadmap ||
        permissions.canViewServiceRequest) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewProductRoadmap && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewServiceRequest ? 8 : 12,
                }}
              >
                <ProductRoadmapSection />
              </Grid>
            )}
            {permissions.canViewServiceRequest && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewProductRoadmap ? 4 : 12,
                }}
              >
                <ServiceRequestSection />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Dashboard;
