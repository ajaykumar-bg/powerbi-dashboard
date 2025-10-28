import React from 'react';
import { Container } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './common/components/Navbar';
import { Dashboard } from './features/dashboard';
import { Login } from './features/auth';
import DataUpload from './features/data-upload';
import DashboardForms from './features/dashboard-forms';
// Updated imports to use feature-based structure
import SqlOptimizationDetails from './features/analytics/sql-optimization';
import VulnerabilityDetails from './features/analytics/vulnerability';
import Forms from './features/forms';
import RoleSettings from './features/settings';

function AppRoutes() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/*'
            element={
              <>
                <Navbar />
                <Container maxWidth={false} sx={{ padding: 2 }}>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route
                      path='/sql-analytics'
                      element={<SqlOptimizationDetails />}
                    />
                    <Route
                      path='/vulnerability-details'
                      element={<VulnerabilityDetails />}
                    />
                    <Route path='/forms' element={<Forms />} />
                    <Route
                      path='/dashboard-forms'
                      element={<DashboardForms />}
                    />
                    <Route path='/role-settings' element={<RoleSettings />} />
                    <Route path='/data-upload' element={<DataUpload />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                  </Routes>
                </Container>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
