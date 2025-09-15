import { CssBaseline } from '@mui/material';
import { DashboardProvider } from './context/DashboardContext';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <DashboardProvider>
        <CssBaseline />
        <AppRoutes />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
