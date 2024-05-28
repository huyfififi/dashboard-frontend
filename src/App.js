import React, { useEffect, useState } from 'react';
import './App.css';
import {
  CodeforcesParticipatedCard,
  CodeforcesRatingCard,
  CodeforcesSolvedCard,
} from './CodeforcesCard';
import { DailyReportCard } from './DailyReportCard';

function App() {
  const [codeforcesUserBasicInfo, setCodeforcesUserBasicInfo] = useState(null);
  const [codeforcesUserStatistics, setCodeforcesUserStatistics] = useState(null);
  const [dailyReportLiCount, setDailyReportLiCount] = useState(null);
  const [lastRefreshTime, setLastRefreshTime] = useState(null);

  useEffect(() => {
    document.title = "Dashboard";
    const fetchData = async () => {
      try {
        const codeforcesUserBasicInfoResponse = await fetch('http://localhost:8000/api/v1/codeforces/user/info/');
        const codeforcesUserBasicInfoResponseJson = await codeforcesUserBasicInfoResponse.json();
        setCodeforcesUserBasicInfo(codeforcesUserBasicInfoResponseJson);
      } catch (error) {
        console.error(error);
      }

      try {
        const codeforcesUserStatisticsResponse = await fetch('http://localhost:8000/api/v1/codeforces/user/statistics/');
        const codeforcesUserStatisticsResponseJson = await codeforcesUserStatisticsResponse.json(); 
        setCodeforcesUserStatistics(codeforcesUserStatisticsResponseJson);
      } catch (error) {
        console.error(error);
      }

      try {
        const dailyReportResponse = await fetch('https://nippo.huyfififi.com/');
        const htmlString = await dailyReportResponse.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const liTags = doc.querySelectorAll('li');
        setDailyReportLiCount(liTags.length)

        setLastRefreshTime(new Date().toLocaleString());

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60000);  // 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="App-content">
	      <div className="card-container">
	        <CodeforcesRatingCard data={codeforcesUserBasicInfo}/>
	      </div>

        <div className="card-container">
          <CodeforcesParticipatedCard data={codeforcesUserBasicInfo}/>
        </div>

        <div className="card-container">
          <CodeforcesSolvedCard data={codeforcesUserStatistics}/>
        </div>

        <div className="card-container">
          <DailyReportCard data={dailyReportLiCount}/>
        </div>

        <div className="timestamp">
          Last refreshed: {lastRefreshTime ? lastRefreshTime : 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default App;
