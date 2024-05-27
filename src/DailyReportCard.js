import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function DailyReportCard() {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Daily Report Count
        </Typography>
        <Typography variant="h2" component="div">
          45
        </Typography>
        <Typography variant="caption" color="text.secondary">
          last updated: 12:27 12/09/2021
        </Typography>
      </CardContent>
    </Card>
  );
}
