import { CssBaseline } from '@mui/material';
import { DashboardProvider } from './context/DashboardContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

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
