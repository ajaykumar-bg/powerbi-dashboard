import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Details from './components/Details';
import { DashboardProvider } from './context/DashboardContext';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';

function App() {
    return (
        <ThemeProvider>
            <DashboardProvider>
                <CssBaseline />
                <Router>
                    <div className='app'>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/*" element={
                                <>
                                    <Navbar />
                                    <Container maxWidth={false} sx={{ padding: 2 }}>
                                        <Routes>
                                            <Route path="/" element={<Dashboard />} />
                                            <Route path="/details" element={<Details />} />
                                            <Route path="*" element={<Navigate to="/" replace />} />
                                        </Routes>
                                    </Container>
                                </>
                            } />
                        </Routes>
                    </div>
                </Router>
            </DashboardProvider>
        </ThemeProvider>
    );
}

export default App;