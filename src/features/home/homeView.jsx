import { useTranslation } from 'react-i18next';
import { HomeViewImage } from '../../assets';
import './homeView.style.css';

const HomeView = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="homeViewHolder fadeinright animation-duration-1000">
      <div className="homeViewMain">
        <div className="elevate">
          <h2 className="elevateUpper">{t('elevate')}</h2>
          <h2 className="elevateDown">{t('expert')}</h2>
        </div>
        <div className="nameAndImage">
          <h1>{t('consultantName')}</h1>
          <button onClick={() => changeLanguage('sr')}>SR</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <HomeViewImage />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
