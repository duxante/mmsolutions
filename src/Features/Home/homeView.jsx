import { Link } from 'react-router-dom';
import './homeView.style.css';
import { HomeViewImage } from '../../Assets';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="homeViewMain">
        {/* <Link to="/">
          <p>Home View 123</p>
        </Link> */}

        <h2>Elevate Your Success: Expert Counseling Insights.</h2>
        <div className="nameAndImage">
          <h1>Marija Milićević</h1>
          <HomeViewImage />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
