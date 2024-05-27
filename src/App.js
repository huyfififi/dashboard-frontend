import './App.css';
import {
  CodeforcesParticipatedCard,
  CodeforcesRatingCard,
  CodeforcesSolvedCard,
} from './CodeforcesCard';
import { DailyReportCard } from './DailyReportCard';

function App() {
  return (
    <div className="App">
      <div className="App-content">
	      <div className="card-container">
	        <CodeforcesRatingCard />
	      </div>

        <div className="card-container">
          <CodeforcesParticipatedCard />
        </div>

        <div className="card-container">
          <CodeforcesSolvedCard />
        </div>

        <div className="card-container">
          <DailyReportCard />
        </div>
      </div>
    </div>
  );
}

export default App;
