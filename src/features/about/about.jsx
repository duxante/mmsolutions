import { VideoPlay } from '../../assets';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import AboutBody from './components/aboutBody';
import { useTranslation } from 'react-i18next';
import './about.style.css';

const About = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.4,
  });

  return (
    <div ref={ref} className="aboutHolder">
      <div className="aboutMain">
        {isVisible && (
          <div className="imageAndShortText">
            <div className="fadeinleft animation-duration-1000">
              <VideoPlay />
            </div>
            <h2 className="fadeinright animation-duration-1000">
              {t('shortAbout')}
            </h2>
          </div>
        )}
        <AboutBody />
      </div>
    </div>
  );
};

export default About;
