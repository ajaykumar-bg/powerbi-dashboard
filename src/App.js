import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					backgroundColor: 'background.default',
					minHeight: '100vh',
				}}
			>
				<Navbar />
				<Container maxWidth sx={{ py: 4 }}>
					<Dashboard />
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
