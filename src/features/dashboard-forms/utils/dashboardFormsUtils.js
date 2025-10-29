// Format numbers for display
export const formatDisplayNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num?.toString() || '0';
};

// Parse formatted number back to numeric value
export const parseFormattedNumber = (formatted) => {
  if (typeof formatted === 'number') return formatted;
  if (!formatted || typeof formatted !== 'string') return 0;

  const numStr = formatted.replace(/[^\d.-]/g, '');
  const num = parseFloat(numStr);

  if (formatted.includes('M')) return Math.round(num * 1000000);
  if (formatted.includes('K')) return Math.round(num * 1000);
  return num || 0;
};

// Validate numeric input
export const validateNumericInput = (value, min = 0, max = Infinity) => {
  const num = Number(value);
  if (isNaN(num)) return false;
  return num >= min && num <= max;
};

// Generate years array for dropdowns
export const generateYearOptions = (startYear = 2024, endYear = 2030) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year.toString());
  }
  return years;
};

// Product roadmap type options
export const productRoadmapTypes = ['Re-Platform', 'Upgrade', 'Migration'];

// Service scope types
export const serviceScopeTypes = ['Executions', 'Operations', 'Analysis'];

// AI Index types
export const aiIndexTypes = ['Savings', 'Revenue', 'Cost Reduction'];

// Memory unit options
export const memoryUnits = ['GB', 'TB', 'MB'];

// Time unit options
export const timeUnits = ['Seconds', 'Minutes', 'Hours'];

// Default form validation messages
export const validationMessages = {
  required: 'This field is required',
  numeric: 'Must be a valid number',
  min: (min) => `Must be at least ${min}`,
  max: (max) => `Must be at most ${max}`,
  range: (min, max) => `Must be between ${min} and ${max}`,
};

// Helper to get nested object value by path
export const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Helper to set nested object value by path
export const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
  return obj;
};

export const getFormattedFormData = (formData) => {
  const formattedData = {
    ...formData,
    appRat: {
      totalSavings: formatDisplayNumber(formData.appRat.totalSavings),
      sapMobilePlatform: formatDisplayNumber(formData.appRat.sapMobilePlatform),
      sapCE: formatDisplayNumber(formData.appRat.sapCE),
    },
    sqlOptimization: {
      ...formData.sqlOptimization,
      performance: {
        memoryReduction: {
          value: formatDisplayNumber(
            formData.sqlOptimization.performance.memoryReduction.value
          ),
          unit: formData.sqlOptimization.performance.memoryReduction.unit,
        },
        executionTimeReduction: {
          value: formatDisplayNumber(
            formData.sqlOptimization.performance.executionTimeReduction.value
          ),
          unit: formData.sqlOptimization.performance.executionTimeReduction
            .unit,
        },
      },
    },
  };
  return formattedData;
};
