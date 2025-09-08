import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import { generateDashboardData } from '../utils/dataGenerator';

const DashboardContext = createContext();
const UPDATE_INTERVAL = 5000; // 5 seconds

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (!context) {
		throw new Error('useDashboard must be used within a DashboardProvider');
	}
	return context;
};

export const DashboardProvider = ({ children }) => {
	const [data, setData] = useState(generateDashboardData());
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const isLive = false;

	const updateData = useCallback(() => {
		try {
			const newData = generateDashboardData();
			setData(newData);
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	}, []);

	// Initial data load
	useEffect(() => {
		updateData();
	}, [updateData]);

	// Set up real-time updates
	useEffect(() => {
		let intervalId;

		if (isLive) {
			intervalId = setInterval(() => {
				updateData();
			}, UPDATE_INTERVAL);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [isLive, updateData]);

	return (
		<DashboardContext.Provider
			value={{
				data,
				loading,
				error,
				isLive,
				updateData,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export default DashboardContext;
