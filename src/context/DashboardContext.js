import { createContext, useContext, useState, useEffect } from 'react';
import dashboardData from '../data/dashboardData.json';

const DashboardContext = createContext();

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (!context) {
		throw new Error('useDashboard must be used within a DashboardProvider');
	}
	return context;
};

export const DashboardProvider = ({ children }) => {
	const [data, setData] = useState(dashboardData);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Simulate data fetching
	useEffect(() => {
		const fetchData = async () => {
			try {
				// In a real application, you would fetch data from an API here
				// For now, we'll just use the static data
				setData(dashboardData);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const updateData = (section, newData) => {
		setData((prevData) => ({
			...prevData,
			[section]: newData,
		}));
	};

	return (
		<DashboardContext.Provider value={{ data, loading, error, updateData }}>
			{children}
		</DashboardContext.Provider>
	);
};

export default DashboardContext;
