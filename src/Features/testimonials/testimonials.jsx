import { useTranslation } from 'react-i18next';
import TestimonialsSlide from './components/slider';
import './testimonials.style.css';

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="testimonialsHolder">
      <div className="testimonialsMain">
        <div className="testimonialsUpper">
          <h4>{t('testimonial')}</h4>
          <h1>{t('ourHappy')}</h1>
        </div>
        <div className="testimonialsBottom">
          <TestimonialsSlide />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
