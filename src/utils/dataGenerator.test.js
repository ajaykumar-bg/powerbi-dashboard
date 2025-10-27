import {
  generateDashboardData,
  generateServiceRequestData,
  generateSQLQueryData,
  generateVulnerabilityData,
  generateServiceScopesData,
} from './dataGenerator';

describe('dataGenerator', () => {
  describe('generateDashboardData', () => {
    it('should generate dashboard data with expected structure and value ranges', () => {
      const data = generateDashboardData();
      expect(typeof data.techDebt.reductionPercentage).toBe('number');
      expect(data.techDebt.reductionPercentage).toBeGreaterThanOrEqual(15);
      expect(data.techDebt.reductionPercentage).toBeLessThanOrEqual(35);
      expect(typeof data.appRat.totalSavings).toBe('string');
      expect(typeof data.aiIndex.value).toBe('string');
      expect(data.aiIndex.type).toBe('Savings');
      expect(typeof data.vulnerabilities.customCode.analyzed).toBe('number');
      expect(typeof data.serviceScopes.ricefs).toBe('number');
      expect(typeof data.sqlOptimization.queries.analyzed).toBe('number');
      expect(typeof data.serviceNowRequest.processed).toBe('number');
      expect(Array.isArray(data.productRoadmap.items)).toBe(true);
    });
  });

  describe('generateServiceRequestData', () => {
    it('should generate correct service request data array', () => {
      const input = { processed: 10, inProgress: 5, completed: 15 };
      const result = generateServiceRequestData(input);
      expect(result).toEqual([
        { id: 0, value: 10, label: 'Processed' },
        { id: 1, value: 5, label: 'In-Progress' },
        { id: 3, value: 15, label: 'Completed' },
      ]);
    });
  });

  describe('generateSQLQueryData', () => {
    it('should generate correct SQL query data array', () => {
      const input = {
        analyzed: 10,
        dispositioned: 5,
        inProgress: 3,
        optimized: 2,
      };
      const result = generateSQLQueryData(input);
      expect(result).toEqual([
        { id: 0, value: 10, label: 'Queries Analyzed' },
        { id: 1, value: 5, label: 'Queries Dispositioned' },
        { id: 3, value: 3, label: 'In Progress' },
        {
          id: 4,
          value: 2,
          label: 'High Memory/time Intensive queries optimized so far',
        },
      ]);
    });
  });

  describe('generateVulnerabilityData', () => {
    it('should generate correct vulnerability data structure', () => {
      const input = {
        customCode: { analyzed: 100, remediatedCount: 50 },
        sapPortal: { detected: 10, remaining: 2 },
      };
      const result = generateVulnerabilityData(input);
      expect(result.customCode).toEqual([
        { id: 0, value: 100, label: 'Analyzed' },
        { id: 0, value: 50, label: 'Disposition/Remediated' },
      ]);
      expect(result.sapPortal).toEqual([
        { id: 0, value: 10, label: 'Detected (Critical, High, & Medium)' },
        { id: 0, value: 2, label: 'Remaining (Low)' },
      ]);
    });
  });

  describe('generateServiceScopesData', () => {
    it('should generate correct service scopes data array', () => {
      const input = {
        ricefs: 1,
        retrofits: 2,
        fioriApps: 3,
        liveCompare: { count: 4, type: 'Executions' },
      };
      const result = generateServiceScopesData(input);
      expect(result).toEqual([
        { id: 0, value: 1, label: 'RICEFs' },
        { id: 1, value: 2, label: 'Retrofits' },
        { id: 3, value: 3, label: 'Fiori Apps' },
        { id: 4, value: 4, label: 'Live Compare' },
      ]);
    });
  });
});
