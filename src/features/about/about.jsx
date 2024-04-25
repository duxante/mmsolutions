import { VideoPlay } from '../../assets';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import AboutBody from './components/aboutBody';
import './about.style.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="aboutHolder">
      <div className="aboutMain">
        <div className="imageAndShortText">
          <div className="fadeinleft animation-duration-3000">
            <VideoPlay />
          </div>
          <h2 className={isVisible && 'fadeinright animation-duration-3000'}>
            {t('shortAbout')}
          </h2>
        </div>
        <AboutBody />
      </div>
    </div>
  );
};

export default About;
