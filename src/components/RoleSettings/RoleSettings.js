import React from 'react';
import { Box, Grid } from '@mui/material';
import { useUser } from '../../context/UserContext';
import RoleSettingsHeader from './RoleSettingsHeader';
import UserInfoCard from './UserInfoCard';
import RoleManagementCard from './RoleManagementCard';
import CurrentPermissionsCard from './CurrentPermissionsCard';
import RoleComparisonTable from './RoleComparisonTable';

const RoleSettings = () => {
  const { user, permissions, switchRole } = useUser();

  const permissionLabels = {
    canViewAIIndex: 'AI Index Widget',
    canViewProductRoadmap: 'Product Roadmap',
    canViewTechDebt: 'Tech Debt Section',
    canViewAppRat: 'App Rationalization',
    canViewVulnerabilities: 'Vulnerabilities',
    canViewSQLOptimization: 'SQL Optimization',
    canViewServiceScopes: 'Service Scopes',
    canViewOperationMetrics: 'Operation Metrics',
  };

  const handleRoleSwitch = (newRole) => {
    switchRole(newRole);
  };

  return (
    <Box sx={{ p: 3 }}>
      <RoleSettingsHeader />

      <Grid container spacing={3}>
        {/* User Information */}
        <Grid item xs={12} md={6}>
          <UserInfoCard user={user} />
        </Grid>

        {/* Role Switching */}
        <Grid item xs={12} md={6}>
          <RoleManagementCard user={user} onRoleSwitch={handleRoleSwitch} />
        </Grid>

        {/* Current Permissions */}
        <Grid item xs={12}>
          <CurrentPermissionsCard
            user={user}
            permissions={permissions}
            permissionLabels={permissionLabels}
          />
        </Grid>

        {/* Permission Comparison */}
        <Grid item xs={12}>
          <RoleComparisonTable permissionLabels={permissionLabels} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoleSettings;
