import '../about.style.css';
import { AboutImage } from '../../../assets';
import MainButton from '../../../common/mainButton/mainButton';
import useIntersectionObserver from '../../../utils/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

const AboutBody = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.2,
  });
  return (
    <div ref={ref} className={isVisible && 'biggerImageAndLongerText'}>
      {isVisible && <AboutImage />}
      <div className="justText">
        <h1 className="fadein animation-ease-in-out animation-duration-2000">
          {t('marijaMilicevic')}
        </h1>
        <p className="fadein animation-ease-in-out animation-duration-3000">
          {t('diveInto')}
        </p>
        <p className="bottomText fadein animation-ease-in-out animation-duration-3000">
          {t('explore')}
        </p>
        <MainButton
          customClass={'fadein animation-ease-in-out animation-duration-3000'}
          buttonText={t('seeMore')}
        />
      </div>
    </div>
  );
};

export default AboutBody;
