const getRandomValue = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatNumber = (num) => {
	if (num >= 1000000) return `${(num / 1000000).toFixed(1)} MM`;
	if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
	return num.toString();
};

export const generateDashboardData = () => {
	return {
		techDebt: {
			reductionPercentage: getRandomValue(15, 35),
		},
		appRat: {
			totalSavings: formatNumber(getRandomValue(200000, 250000)),
			sapMobilePlatform: formatNumber(getRandomValue(100000, 140000)),
			sapCE: formatNumber(getRandomValue(90000, 110000)),
		},
		aiIndex: {
			value: formatNumber(getRandomValue(300000, 500000)),
			type: 'Savings',
		},
		vulnerabilities: {
			customCode: {
				analyzed: getRandomValue(10000, 12000),
				remediatedCount: getRandomValue(1800, 2200),
			},
			sapPortal: {
				detected: getRandomValue(100, 150),
				remaining: getRandomValue(3, 8),
			},
		},
		operationsMetrics: {
			ricefs: getRandomValue(3800, 4200),
			fioriApps: getRandomValue(280, 320),
			retrofits: getRandomValue(6800, 7200),
			liveCompare: {
				count: getRandomValue(7800, 8200),
				type: 'Executions',
			},
		},
		sqlOptimization: {
			queries: {
				analyzed: getRandomValue(60, 70),
				dispositioned: getRandomValue(35, 40),
				inProgress: getRandomValue(23, 28),
				optimized: getRandomValue(11, 15),
			},
			performance: {
				memoryReduction: {
					value: formatNumber(getRandomValue(38000, 42000)),
					unit: 'GB',
				},
				executionTimeReduction: {
					value: formatNumber(getRandomValue(780000, 820000)),
					unit: 'Seconds',
				},
			},
		},
		serviceNowRequest: {
			processed: getRandomValue(9800, 9900),
			inProgress: getRandomValue(90, 105),
			completionPercentage: getRandomValue(55, 60),
		},
		productRoadmap: {
			items: [
				{
					name: 'Portal',
					year: '2027',
					type: 'Re-Platform',
				},
				{
					name: 'WM',
					year: '2027',
					type: 'Re-Platform',
				},
				{
					name: 'SolMan',
					year: '2027',
					type: 'Re-Platform',
				},
				{
					name: 'SAP Gateway/Fiori',
					year: '2027',
					type: 'Re-Platform',
				},
				{
					name: 'Live Compare',
					year: '2026',
					type: 'Upgrade',
				},
				{
					name: 'Data Masking',
					year: '2026',
					type: 'Upgrade',
				},
			],
		},
	};
};
