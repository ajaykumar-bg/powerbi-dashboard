import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';

import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<DashboardProvider>
				<Box
					sx={{
						backgroundColor: 'background.default',
						minHeight: '100vh',
					}}
				>
					<Navbar />
					<Container
						maxWidth={false}
						sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}
					>
						<Dashboard />
					</Container>
				</Box>
			</DashboardProvider>
		</ThemeProvider>
	);
}

export default App;
