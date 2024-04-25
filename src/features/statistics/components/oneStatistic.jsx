import { useTranslation } from 'react-i18next';
import '../style/oneStatistic.style.css';

const OneStatistic = ({ img, number, description }) => {
  const { t } = useTranslation();
  return (
    <div className="oneStatisticHolder">
      {img}
      <div className="oneStatisticMain">
        <h3>{number}</h3>
        <p>{t(description)}</p>
      </div>
    </div>
  );
};
export default OneStatistic;
