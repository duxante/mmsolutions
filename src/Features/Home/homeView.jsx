import { HomeViewImage } from '../../assets';
import './homeView.style.css';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="homeViewMain">
        <div className="elevate">
          <h2 className="elevateUpper">Elevate Your Success: </h2>
          <h2 className="elevateDown"> Expert Counseling Insights.</h2>
        </div>
        <div className="nameAndImage">
          <h1>MARIJA MILIĆEVIĆ</h1>
          <HomeViewImage />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
