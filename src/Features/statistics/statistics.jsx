import { useTranslation } from 'react-i18next';
import OneStatistic from './components/oneStatistic';
import { tehnicalStatistics } from '../../data/tehnicalStatistics';
import './statistics.style.css';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const Statistics = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.3,
  });
  function increaseNumberAnimation(elementId, endNumber, speed = 10) {
    const element = document.getElementById(elementId);

    if (!element) return;

    /* A dataset variable that is added to the animated element*/
    const animationRunning = JSON.parse(
      element.dataset.animationRunning ?? false
    );

    if (animationRunning) return;

    element.dataset.animationRunning = true;

    incNbrRec(0, endNumber, element, speed);
  }

  /*A recursive function to increase the number.*/
  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber;
      setTimeout(function () {
        incNbrRec(currentNumber + 1, endNumber, element, speed);
      }, speed); //Delay a bit before calling the function again.
    } else {
      element.dataset.animationRunning = false;
    }
  }
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
                  increaseNumberAnimation={increaseNumberAnimation}
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
