import { useTranslation } from 'react-i18next';
import '../style/oneServiceOffering.style.css';

const OneServiceOffering = ({ img, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="oneServiceHolder flipright animation-duration-1000">
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
