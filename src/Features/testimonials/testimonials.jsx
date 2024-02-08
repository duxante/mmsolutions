import TestimonialsSlide from './components/slider';
import './testimonials.style.css';

const Testimonials = () => {
  return (
    <div className="testimonialsHolder">
      <div className="testimonialsMain">
        <div className="testimonialsUpper">
          <h4>TESTIMONIAL</h4>
          <h1>Our Happy Clients</h1>
        </div>
        <div className="testimonialsBottom">
          <TestimonialsSlide />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
