import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { theme } from './theme';

import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          py: 4,
        }}
      >
        <Container maxWidth>
          <Typography variant="h4" gutterBottom>
            SAP App Dev Scorecard
          </Typography>
          <Dashboard />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
