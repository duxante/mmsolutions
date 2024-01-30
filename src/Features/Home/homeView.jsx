import { Link } from 'react-router-dom';
import './homeView.style.css';
import { HomeViewImage } from '../../assets';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="homeViewMain">
        <h2>Elevate Your Success: Expert Counseling Insights.</h2>
        <div className="nameAndImage">
          <h1>MARIJA MILIĆEVIĆ</h1>
          <HomeViewImage />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
