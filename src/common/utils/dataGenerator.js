import { formatNumber } from './commonUtils';

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateDashboardData = () => {
  return {
    techDebt: {
      reductionPercentage: getRandomValue(15, 99),
    },
    appRat: {
      totalSavings: formatNumber(getRandomValue(200000, 250000)),
      sapMobilePlatform: formatNumber(getRandomValue(100000, 140000)),
      sapCE: formatNumber(getRandomValue(90000, 110000)),
    },
    aiIndex: {
      adoptionRate: parseFloat((Math.random() * 10 + 5).toFixed(2)), // 5-15%
      hoursSaved: getRandomValue(1500, 2500),
      dollarsSaved: formatNumber(getRandomValue(90000, 110000)),
      useCases: getRandomValue(2, 5),
    },
    vulnerabilities: {
      customCode: {
        detected: getRandomValue(10000, 12000),
        remediated: getRandomValue(1800, 2200),
        remaining: getRandomValue(8000, 10000),
      },
      sapPortal: {
        total: getRandomValue(100, 150),
        remediated: getRandomValue(80, 120),
        remaining: getRandomValue(10, 30),
      },
    },
    serviceScopes: {
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
    operationMetrics: {
      created: getRandomValue(13000, 13500),
      active: getRandomValue(700, 800),
      closed: getRandomValue(12800, 13300),
    },
    productRoadmap: {
      items: [
        { name: 'SSAM', year: '2026', type: 'Upgrade' },
        { name: 'Live Compare', year: '2026', type: 'Upgrade' },
        { name: 'Data Masking', year: '2026', type: 'Upgrade' },

        { name: 'Solution Manager', year: '2027', type: 'Re-Platform' },
        { name: 'Portal', year: '2027', type: 'Re-Platform' },
        { name: 'Work Manager', year: '2027', type: 'Re-Platform' },
        { name: 'SAP Gateway/Fiori', year: '2027', type: 'Re-Platform' },
      ],
    },
  };
};

export const generateOperationMetricsData = (data) => {
  const { created, active, closed } = data;
  return [
    { id: 0, value: created, label: 'Created', color: '#90caf9' },
    { id: 1, value: active, label: 'Active', color: '#ffa726' },
    { id: 2, value: closed, label: 'Closed', color: '#66bb6a' },
  ];
};

export const generateSQLQueryData = (data) => {
  const { analyzed, dispositioned, inProgress, optimized } = data;
  return [
    { id: 0, value: analyzed, label: 'Queries Analyzed' },
    {
      id: 1,
      value: dispositioned,
      label: 'Queries Dispositioned',
    },
    { id: 2, value: inProgress, label: 'In Progress' },
    {
      id: 3,
      value: optimized,
      label: 'Queries Optimized',
    },
  ];
};

export const generateVulnerabilityData = (data) => {
  const { customCode, sapPortal } = data;
  return {
    customCode: [
      {
        id: 0,
        value: customCode.detected,
        label: 'Detected',
        color: '#1976d2',
      },
      {
        id: 1,
        value: customCode.remediated,
        label: 'Remediated',
        color: '#2e7d32',
      },
      {
        id: 2,
        value: customCode.remaining,
        label: 'Remaining',
        color: '#ed6c02',
      },
    ],
    sapPortal: [
      {
        id: 0,
        value: sapPortal.total,
        label: 'Total',
        color: '#1976d2',
      },
      {
        id: 1,
        value: sapPortal.remediated,
        label: 'Remediated',
        color: '#2e7d32',
      },
      {
        id: 2,
        value: sapPortal.remaining,
        label: 'Remaining',
        color: '#ed6c02',
      },
    ],
  };
};

export const generateServiceScopesData = (data) => {
  const { ricefs, retrofits, fioriApps, liveCompare } = data;
  return [
    {
      id: 0,
      value: ricefs,
      label: 'RICEFs',
      color: '#0088FE',
    },
    {
      id: 1,
      value: retrofits,
      label: 'Retrofits',
      color: '#FFBB28',
    },
    {
      id: 2,
      value: fioriApps,
      label: 'Fiori Apps',
      color: '#FF8042',
    },
    {
      id: 3,
      value: liveCompare.count,
      label: 'Live Compare',
      color: '#00C49F',
    },
  ];
};

export const generateProductRoadmapBarData = (items) => {
  // Prepare data for BarChart
  const years = [...new Set(items?.map((item) => item.year))].sort();
  const types = [...new Set(items?.map((item) => item.type))];

  // Map colors to types
  const typeColors = {
    'Re-Platform': '#1976d2', // Blue
    Upgrade: '#2e7d32', // Green
  };

  // Group by year and type for stacked bar with colors
  const barData = types.map((type) => ({
    data: years.map(
      (year) =>
        items.filter((item) => item.year === year && item.type === type).length
    ),
    color: typeColors[type],
  }));

  return { years, types, barData };
};
