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
        remaining: getRandomValue(10, 20),
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
      inProgress: getRandomValue(2500, 1050),
      completed: getRandomValue(5500, 6000),
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

export const generateServiceRequestData = (data) => {
  const { processed, inProgress, completed } = data;
  // const percentage = {
  //   processed: (processed / (processed + inProgress + completed)) * 100,
  //   inProgress: (inProgress / (processed + inProgress + completed)) * 100,
  //   completed: (completed / (processed + inProgress + completed)) * 100,
  // };
  return [
    { id: 0, value: processed, label: 'Processed' },
    { id: 1, value: inProgress, label: 'In-Progress' },
    { id: 2, value: completed, label: 'Completed' },
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
        value: customCode.analyzed,
        label: 'Analyzed',
        // color: '#0088FE',
      },
      {
        id: 1,
        value: customCode.remediatedCount,
        label: 'Remediated',
        // color: '#00C49F',
      },
    ],
    sapPortal: [
      {
        id: 0,
        value: sapPortal.detected,
        label: 'Detected',
        // color: '#fe000dff',
      },
      {
        id: 1,
        value: sapPortal.remaining,
        label: 'Remaining',
        // color: '#5cc400ff',
      },
    ],
  };
};

export const generateOperationsData = (data) => {
  const { ricefs, retrofits, fioriApps, liveCompare } = data;
  return [
    {
      id: 0,
      value: ricefs,
      label: 'RICEFs',
      // color: '#0088FE'
    },
    {
      id: 1,
      value: retrofits,
      label: 'Retrofits',
      // color: '#FFBB28'
    },
    {
      id: 2,
      value: fioriApps,
      label: 'Fiori Apps',
      // color: '#FF8042'
    },
    {
      id: 3,
      value: liveCompare.count,
      label: 'Live Compare',
      //   color: '#00C49F',
    },
  ];
};
