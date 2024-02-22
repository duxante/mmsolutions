import OneStatistic from './components/oneStatistic';
import { tehnicalStatistics } from '../../data/tehnicalStatistics';
import './statistics.style.css';

const Statistics = () => {
  return (
    <div className="statisticsHolder">
      <div className="overlayStatistics"></div>
      <div className="statisticsMain">
        <div className="upperStatistics">
          <h4>SOME REVIEWS OF OUR SERVICES</h4>
          <h1>Tehnical Statistics</h1>
        </div>
        <div className="bottomStatistics">
          {tehnicalStatistics.map((tehnicalStatistic) => {
            return (
              <OneStatistic
                img={tehnicalStatistic.img}
                number={tehnicalStatistic.number}
                description={tehnicalStatistic.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Statistics;
