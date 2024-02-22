import OneServiceOffering from './components/oneServiceOffering';
import { servicesData } from '../../data/servicesWeProvide';
import './serviceOffering.style.css';

const ServiceOffering = () => {
  return (
    <div className="serviceOfferingHolder">
      <div className="serviceOfferingMain">
        <div className="upperText">
          <h4>SERVICES</h4>
          <h1>Service that Company Provides</h1>
          <p>
            Fortify your business journey with our consultancy, delivering a
            disciplined range of services that will propel success. Elevate your
            enterprise through strategic and thorough action.
          </p>
        </div>
        <div className="bottomImages">
          {servicesData.map((service) => {
            return (
              <OneServiceOffering
                img={service.img}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ServiceOffering;
