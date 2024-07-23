import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CodeforcesRatingCard({ data }) {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Rating
        </Typography>
        <Typography variant="h2" component="div">
          {data ? data.rating : 'N/A'}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{marginBottom: "0.3rem"}}>
          (max rating: {data ? data.max_rating : 'N/A'})
        </Typography>
      </CardContent>
    </Card>
  );
}

export function CodeforcesParticipatedCard({ data }) {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Contests Participated
        </Typography>
        <Typography variant="h2" component="div">
          {data ? data.participated_contests_count : 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function CodeforcesSolvedCard({ data }) {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Problems Solved
        </Typography>
        <Typography variant="h2" component="div">
          {data ? data.solved_count: 'N/A'}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{marginBottom: "0.3rem"}}>
          <div>&#91;800,1000&#41;: {data ? data["-1000"] : 'N/A'}</div>
          <div>&#91;1000,1199&#41;: {data ? data["1000-1200"] : 'N/A'}</div>
          <div>&#91;1200,1400&#41;: {data ? data["1200-1400"] : 'N/A'}</div>
          <div>total submission: {data ? data.total_count : 'N/A'}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
