import '../about.style.css';
import { AboutImage } from '../../../assets';
import MainButton from '../../../common/mainButton/mainButton';
import useIntersectionObserver from '../../../utils/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

const AboutBody = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.3,
  });
  return (
    <div ref={ref} className={isVisible && 'biggerImageAndLongerText'}>
      {isVisible && (
        <>
          {' '}
          <AboutImage />
          <div className="justText">
            <h1 className="fadeinright animation-delay-200 animation-ease-in-out animation-duration-1000">
              {t('marijaMilicevic')}
            </h1>
            <p className="fadeinright animation-delay-400 animation-ease-in-out animation-duration-1000">
              {t('diveInto')}
            </p>
            <p className="bottomText animation-delay-500 fadeinright animation-ease-in-out animation-duration-1000">
              {t('explore')}
            </p>
            <MainButton
              customClass={
                'fadeinright animation-delay-1000 animation-ease-in-out animation-duration-3000'
              }
              buttonText={t('seeMore')}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AboutBody;
