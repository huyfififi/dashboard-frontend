import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function DailyReportCard({ data }) {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Daily Report Count
        </Typography>
        <Typography variant="h2" component="div">
          {data ? data : 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}
