import { useTranslation } from 'react-i18next';
import '../style/oneServiceOffering.style.css';

const OneServiceOffering = ({ img, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="oneServiceHolder">
      <div className="overlay"></div>
      <div className="textTransition">
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </div>
      {img}
    </div>
  );
};

export default OneServiceOffering;
