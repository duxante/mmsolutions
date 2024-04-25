import { useTranslation } from 'react-i18next';
import OneStatistic from './components/oneStatistic';
import { tehnicalStatistics } from '../../data/tehnicalStatistics';
import './statistics.style.css';

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <div className="statisticsHolder">
      <div className="overlayStatistics"></div>
      <div className="statisticsMain">
        <div className="upperStatistics">
          <h4>{t('some')}</h4>
          <h1>{t('tehnical')}</h1>
        </div>
        <div className="bottomStatistics">
          {tehnicalStatistics.map((tehnicalStatistic) => {
            return (
              <OneStatistic
                key={tehnicalStatistic.id}
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
