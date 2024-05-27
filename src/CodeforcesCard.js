import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CodeforcesRatingCard() {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Rating
        </Typography>
        <Typography variant="h2" component="div">
          1038
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{marginBottom: "0.3rem"}}>
          (max: 1149)
        </Typography>
      </CardContent>
    </Card>
  );
}

export function CodeforcesParticipatedCard() {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Contests Participated
        </Typography>
        <Typography variant="h2" component="div">
          14
        </Typography>
      </CardContent>
    </Card>
  );
}

export function CodeforcesSolvedCard() {
  return (
    <Card sx={{ width: '80vw', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Codeforces Problems Solved
        </Typography>
        <Typography variant="h2" component="div">
          234
        </Typography>
      </CardContent>
    </Card>
  );
}
