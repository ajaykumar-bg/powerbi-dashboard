import React, { createContext, useContext, useState } from 'react';
import { useDashboard } from '../../dashboard/context/DashboardContext';
import { formatNumber } from '../../../common/utils/dataGenerator';

const DashboardFormsContext = createContext();

export const useDashboardForms = () => {
  const context = useContext(DashboardFormsContext);
  if (!context) {
    throw new Error(
      'useDashboardForms must be used within a DashboardFormsProvider'
    );
  }
  return context;
};

// Initial form data structure based on generateDashboardData
const initialFormData = {
  techDebt: {
    reductionPercentage: 15,
  },
  appRat: {
    totalSavings: 200000,
    sapMobilePlatform: 100000,
    sapCE: 90000,
  },
  aiIndex: {
    value: 300000,
    type: 'Savings',
  },
  vulnerabilities: {
    customCode: {
      analyzed: 10000,
      remediatedCount: 1800,
    },
    sapPortal: {
      detected: 100,
      remaining: 10,
    },
  },
  serviceScopes: {
    ricefs: 3800,
    fioriApps: 280,
    retrofits: 6800,
    liveCompare: {
      count: 7800,
      type: 'Executions',
    },
  },
  sqlOptimization: {
    queries: {
      analyzed: 60,
      dispositioned: 35,
      inProgress: 23,
      optimized: 11,
    },
    performance: {
      memoryReduction: {
        value: 38000,
        unit: 'GB',
      },
      executionTimeReduction: {
        value: 780000,
        unit: 'Seconds',
      },
    },
  },
  operationMetrics: {
    processed: 9800,
    inProgress: 2500,
    completed: 5500,
    completionPercentage: 50,
  },
  productRoadmap: {
    items: [
      { name: 'Portal', year: '2027', type: 'Re-Platform' },
      { name: 'WM', year: '2027', type: 'Re-Platform' },
      { name: 'SolMan', year: '2027', type: 'Upgrade' },
      { name: 'Live Compare', year: '2026', type: 'Re-Platform' },
      { name: 'Data Masking', year: '2026', type: 'Upgrade' },
      { name: 'Cloud Migration', year: '2025', type: 'Migration' },
      { name: 'Mobile Apps', year: '2025', type: 'Upgrade' },
      { name: 'API Management', year: '2026', type: 'Re-Platform' },
      { name: 'Security Framework', year: '2025', type: 'Upgrade' },
      { name: 'DevOps Pipeline', year: '2025', type: 'Migration' },
      { name: 'Data Warehouse', year: '2026', type: 'Migration' },
      { name: 'AI/ML Platform', year: '2027', type: 'Migration' },
    ],
  },
};

export const DashboardFormsProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setDashboardData } = useDashboard();

  const updateField = (fieldPath, value) => {
    setFormData((prev) => {
      const newData = { ...prev };
      const keys = fieldPath.split('.');
      let current = newData;

      // Navigate to the parent of the target field
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }

      // Set the value
      current[keys[keys.length - 1]] = value;
      return newData;
    });

    // Clear any errors for this field
    if (errors[fieldPath]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldPath];
        return newErrors;
      });
    }
  };

  const updateProductRoadmapItem = (index, item) => {
    setFormData((prev) => ({
      ...prev,
      productRoadmap: {
        ...prev.productRoadmap,
        items: prev.productRoadmap.items.map((existing, i) =>
          i === index ? item : existing
        ),
      },
    }));
  };

  const addProductRoadmapItem = (item) => {
    setFormData((prev) => ({
      ...prev,
      productRoadmap: {
        ...prev.productRoadmap,
        items: [...prev.productRoadmap.items, item],
      },
    }));
  };

  const removeProductRoadmapItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      productRoadmap: {
        ...prev.productRoadmap,
        items: prev.productRoadmap.items.filter((_, i) => i !== index),
      },
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required numeric fields
    const numericFields = [
      'techDebt.reductionPercentage',
      'appRat.totalSavings',
      'appRat.sapMobilePlatform',
      'appRat.sapCE',
      'aiIndex.value',
      'vulnerabilities.customCode.analyzed',
      'vulnerabilities.customCode.remediatedCount',
      'vulnerabilities.sapPortal.detected',
      'vulnerabilities.sapPortal.remaining',
      'serviceScopes.ricefs',
      'serviceScopes.fioriApps',
      'serviceScopes.retrofits',
      'serviceScopes.liveCompare.count',
      'sqlOptimization.queries.analyzed',
      'sqlOptimization.queries.dispositioned',
      'sqlOptimization.queries.inProgress',
      'sqlOptimization.queries.optimized',
      'sqlOptimization.performance.memoryReduction.value',
      'sqlOptimization.performance.executionTimeReduction.value',
      'operationMetrics.processed',
      'operationMetrics.inProgress',
      'operationMetrics.completed',
      'operationMetrics.completionPercentage',
    ];

    numericFields.forEach((fieldPath) => {
      const keys = fieldPath.split('.');
      let value = formData;

      try {
        keys.forEach((key) => {
          value = value[key];
        });

        if (
          value === undefined ||
          value === null ||
          value === '' ||
          isNaN(value)
        ) {
          newErrors[fieldPath] =
            'This field is required and must be a valid number';
        }
      } catch (error) {
        newErrors[fieldPath] = 'This field is required';
      }
    });

    // Validate product roadmap items
    if (
      !formData.productRoadmap.items ||
      formData.productRoadmap.items.length === 0
    ) {
      newErrors['productRoadmap.items'] =
        'At least one product roadmap item is required';
    } else {
      formData.productRoadmap.items.forEach((item, index) => {
        if (!item.name?.trim()) {
          newErrors[`productRoadmap.items.${index}.name`] =
            'Item name is required';
        }
        if (!item.year?.trim()) {
          newErrors[`productRoadmap.items.${index}.year`] = 'Year is required';
        }
        if (!item.type?.trim()) {
          newErrors[`productRoadmap.items.${index}.type`] = 'Type is required';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Dashboard form submitted:', formData);

      // Format the data to match the expected dashboard format
      const formattedData = {
        ...formData,
        appRat: {
          totalSavings: formatNumber(formData.appRat.totalSavings),
          sapMobilePlatform: formatNumber(formData.appRat.sapMobilePlatform),
          sapCE: formatNumber(formData.appRat.sapCE),
        },
        sqlOptimization: {
          ...formData.sqlOptimization,
          performance: {
            memoryReduction: {
              value: formatNumber(
                formData.sqlOptimization.performance.memoryReduction.value
              ),
              unit: formData.sqlOptimization.performance.memoryReduction.unit,
            },
            executionTimeReduction: {
              value: formatNumber(
                formData.sqlOptimization.performance.executionTimeReduction
                  .value
              ),
              unit: formData.sqlOptimization.performance.executionTimeReduction
                .unit,
            },
          },
        },
      };

      // Update the dashboard context with the formatted data
      setDashboardData(formattedData);

      return true;
    } catch (error) {
      console.error('Submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
    formData,
    errors,
    isSubmitting,
    updateField,
    updateProductRoadmapItem,
    addProductRoadmapItem,
    removeProductRoadmapItem,
    resetForm,
    validateForm,
    submitForm,
  };

  return (
    <DashboardFormsContext.Provider value={value}>
      {children}
    </DashboardFormsContext.Provider>
  );
};
