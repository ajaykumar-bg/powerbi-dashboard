import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
  LinearProgress,
  Chip,
  Divider,
  Grid,
  IconButton,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  FileDownload as FileDownloadIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import * as XLSX from 'xlsx';

const DataUpload = () => {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [previewData, setPreviewData] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    // Validate file type
    const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
    if (!['xlsx', 'xls', 'csv'].includes(fileExtension)) {
      setError('Please upload a valid Excel file (.xlsx, .xls) or CSV file');
      return;
    }

    setFile(uploadedFile);
    setError('');
    setSuccess('');
    setJsonData(null);
    setPreviewData(null);
  };

  const convertToJson = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const fileBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(fileBuffer, { type: 'array' });

      // Get the first worksheet
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];

      // Convert to JSON
      const jsonResult = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: '',
      });

      // Convert array of arrays to array of objects with proper headers
      if (jsonResult.length > 0) {
        const headers = jsonResult[0];
        const dataRows = jsonResult.slice(1);

        const formattedData = dataRows.map((row) => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index] || '';
          });
          return obj;
        });

        setJsonData(formattedData);
        setPreviewData(formattedData.slice(0, 5)); // Show first 5 rows for preview
        setSuccess(
          `Successfully converted ${formattedData.length} rows to JSON format`
        );
      } else {
        setError('The uploaded file appears to be empty');
      }
    } catch (err) {
      setError(`Error converting file: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadJson = () => {
    if (!jsonData) return;

    const dataStr = JSON.stringify(jsonData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${file.name.split('.')[0]}_converted.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setFile(null);
    setJsonData(null);
    setError('');
    setSuccess('');
    setPreviewData(null);
    // Reset file input
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Data Upload & Conversion
      </Typography>
      <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
        Upload Excel files (.xlsx, .xls) or CSV files and convert them to JSON
        format for dashboard integration.
      </Typography>

      <Grid container spacing={3}>
        {/* Upload Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: 'fit-content' }}>
            <Typography variant='h6' gutterBottom>
              File Upload
            </Typography>

            <Box
              sx={{
                border: '2px dashed',
                borderColor: file ? 'success.main' : 'grey.300',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                backgroundColor: file ? 'success.light' : 'grey.50',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <input
                accept='.xlsx,.xls,.csv'
                style={{ display: 'none' }}
                id='file-upload'
                type='file'
                onChange={handleFileUpload}
              />
              <label htmlFor='file-upload'>
                <IconButton
                  color='primary'
                  aria-label='upload file'
                  component='span'
                  sx={{ mb: 2 }}
                >
                  <CloudUploadIcon sx={{ fontSize: 48 }} />
                </IconButton>
                <Typography variant='h6' gutterBottom>
                  {file ? 'File Selected' : 'Choose File'}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Drag and drop or click to select Excel/CSV files
                </Typography>
              </label>
            </Box>

            {file && (
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography variant='subtitle1' fontWeight='bold'>
                        {file.name}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {formatFileSize(file.size)}
                      </Typography>
                    </Box>
                    <Box>
                      <Chip
                        label={file.name.split('.').pop().toUpperCase()}
                        color='primary'
                        size='small'
                        sx={{ mr: 1 }}
                      />
                      <IconButton
                        onClick={handleReset}
                        color='error'
                        size='small'
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                variant='contained'
                onClick={convertToJson}
                disabled={!file || loading}
                startIcon={<VisibilityIcon />}
                fullWidth
              >
                {loading ? 'Converting...' : 'Convert to JSON'}
              </Button>
              <Button
                variant='outlined'
                onClick={handleReset}
                disabled={loading}
                startIcon={<DeleteIcon />}
              >
                Reset
              </Button>
            </Box>

            {loading && <LinearProgress sx={{ mt: 2 }} />}
          </Paper>
        </Grid>

        {/* Results Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: 'fit-content' }}>
            <Typography variant='h6' gutterBottom>
              Conversion Results
            </Typography>

            {error && (
              <Alert severity='error' sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity='success' sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            {jsonData && (
              <>
                <Box sx={{ mb: 2 }}>
                  <Typography variant='body2' color='text.secondary'>
                    Total Records: <strong>{jsonData.length}</strong>
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Columns:{' '}
                    <strong>{Object.keys(jsonData[0] || {}).length}</strong>
                  </Typography>
                </Box>

                <Button
                  variant='contained'
                  onClick={downloadJson}
                  startIcon={<FileDownloadIcon />}
                  sx={{ mb: 2 }}
                  fullWidth
                >
                  Download JSON
                </Button>

                <Divider sx={{ my: 2 }} />

                <Typography variant='subtitle2' gutterBottom>
                  Preview (First 5 rows):
                </Typography>

                <Box
                  sx={{
                    maxHeight: 300,
                    overflow: 'auto',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 2,
                    backgroundColor: 'grey.50',
                  }}
                >
                  <pre
                    style={{
                      margin: 0,
                      fontSize: '12px',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {JSON.stringify(previewData, null, 2)}
                  </pre>
                </Box>
              </>
            )}

            {!jsonData && !error && !loading && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant='body2' color='text.secondary'>
                  Upload and convert a file to see results here
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataUpload;
