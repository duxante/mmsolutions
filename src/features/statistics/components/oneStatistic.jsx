import { useTranslation } from 'react-i18next';
import '../style/oneStatistic.style.css';
import { useEffect } from 'react';

const OneStatistic = ({
  increaseNumberAnimation,
  img,
  number,
  description,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    increaseNumberAnimation(`stats-${number}`, number);
  }, [number]);
  return (
    <div className="oneStatisticHolder">
      {img}
      <div className="oneStatisticMain">
        <h3 id={`stats-${number}`}>{number}</h3>
        <p>{t(description)}</p>
      </div>
    </div>
  );
};
export default OneStatistic;
