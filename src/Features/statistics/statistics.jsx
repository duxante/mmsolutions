import { useTranslation } from 'react-i18next';
import OneStatistic from './components/oneStatistic';
import { tehnicalStatistics } from '../../data/tehnicalStatistics';
import './statistics.style.css';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const Statistics = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="statisticsHolder">
      <div className="overlayStatistics"></div>
      <div className="statisticsMain">
        <div className="upperStatistics">
          <h4>{t('some')}</h4>
          <h1>{t('tehnical')}</h1>
        </div>
        {isVisible && (
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
        )}
      </div>
    </div>
  );
};
export default Statistics;
