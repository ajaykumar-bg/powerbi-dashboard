import { CssBaseline } from '@mui/material';
import { DashboardProvider } from './features/dashboard/context/DashboardContext';
import { ThemeProvider } from './shared/context/ThemeContext';
import { UserProvider } from './shared/context/UserContext';

import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <DashboardProvider>
          <CssBaseline />
          <AppRoutes />
        </DashboardProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
