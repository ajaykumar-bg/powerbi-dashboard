import React from 'react';
import { Container } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import Details from './components/Details/Details';
import { DashboardV2 } from './components/DashboardV2';
import SqlOptimization from './components/SqlOptimization/SqlOptimization';

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
                    <Route path='/details' element={<Details />} />
                    <Route path='/dashboardV2' element={<DashboardV2 />} />
                    <Route
                      path='/sql-analytics'
                      element={<SqlOptimization />}
                    />
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
