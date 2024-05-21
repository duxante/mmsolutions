import OneServiceOffering from './components/oneServiceOffering';
import { servicesData } from '../../data/servicesWeProvide';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import './serviceOffering.style.css';

const ServiceOffering = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.3,
  });
  return (
    <div id="services" ref={ref} className="serviceOfferingHolder">
      <div className="serviceOfferingMain">
        <div className="upperText">
          <h4>{t('servicesTitle')}</h4>
          <h1>{t('companyProvides')}</h1>
          <p>{t('serviceDescription')}</p>
        </div>
        {isVisible && (
          <div className="bottomImages">
            {servicesData.map((service) => {
              return (
                <OneServiceOffering
                  key={service.id}
                  img={service.img}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceOffering;
