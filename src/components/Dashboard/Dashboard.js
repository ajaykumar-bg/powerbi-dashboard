import { Grid } from '@mui/material';

import { TechDebtSection } from './TechDebtSection';
import { AppRatWidget } from './AppRatWidget';
import { AIIndexWidget } from './AIIndexWidget';
import { VulnerabilitiesSection } from './VulnerabilitiesSection';
import { SQLOptimizationSection } from './SQLOptimizationSection';
import { ServiceScopesSection } from './ServiceScopesSection';
import { OperationMetricsSection } from './OperationMetricsSection';
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
      {/* First Row - Tech Debt Reduction, Vulnerabilities, Expensive SQL Optimization */}
      {(permissions.canViewTechDebt ||
        permissions.canViewVulnerabilities ||
        permissions.canViewSQLOptimization) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewTechDebt && (
              <Grid
                size={{
                  xs: 12,
                  md:
                    permissions.canViewVulnerabilities &&
                    permissions.canViewSQLOptimization
                      ? 2
                      : permissions.canViewVulnerabilities ||
                        permissions.canViewSQLOptimization
                      ? 4
                      : 12,
                }}
              >
                <TechDebtSection />
              </Grid>
            )}
            {permissions.canViewVulnerabilities && (
              <Grid
                size={{
                  xs: 12,
                  md:
                    permissions.canViewTechDebt &&
                    permissions.canViewSQLOptimization
                      ? 6
                      : permissions.canViewTechDebt ||
                        permissions.canViewSQLOptimization
                      ? 8
                      : 12,
                }}
              >
                <VulnerabilitiesSection />
              </Grid>
            )}
            {permissions.canViewSQLOptimization && (
              <Grid
                size={{
                  xs: 12,
                  md:
                    permissions.canViewTechDebt &&
                    permissions.canViewVulnerabilities
                      ? 4
                      : permissions.canViewTechDebt ||
                        permissions.canViewVulnerabilities
                      ? 8
                      : 12,
                }}
              >
                <SQLOptimizationSection />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}

      {/* Second Row - App Rat, Service Scopes, AI Index */}
      {(permissions.canViewAppRat ||
        permissions.canViewServiceScopes ||
        permissions.canViewAIIndex) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewAppRat && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewAIIndex
                    ? 2
                    : permissions.canViewServiceScopes
                    ? 3
                    : 12,
                }}
              >
                <AppRatWidget />
              </Grid>
            )}
            {permissions.canViewServiceScopes && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewAIIndex
                    ? 7
                    : permissions.canViewAppRat
                    ? 9
                    : 12,
                }}
              >
                <ServiceScopesSection />
              </Grid>
            )}
            {permissions.canViewAIIndex && (
              <Grid size={{ xs: 12, md: 3 }}>
                <AIIndexWidget />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}

      {/* Third Row - Product EOL/Roadmap, Operation Metrics */}
      {(permissions.canViewProductRoadmap ||
        permissions.canViewOperationMetrics) && (
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {permissions.canViewProductRoadmap && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewOperationMetrics ? 8 : 12,
                }}
              >
                <ProductRoadmapSection />
              </Grid>
            )}
            {permissions.canViewOperationMetrics && (
              <Grid
                size={{
                  xs: 12,
                  md: permissions.canViewProductRoadmap ? 4 : 12,
                }}
              >
                <OperationMetricsSection />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Dashboard;
