import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <DashboardProvider>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <Container maxWidth={false} sx={{ padding: 2 }}>
            <Dashboard />
          </Container>
        </div>
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
