import mms_logo from './mms_logo.png';
import homeViewImage from './homeViewImage.png';

const MmsLogo = () => {
  return <img className="mmsLogo" src={mms_logo} alt="mms logo" />;
};

const HomeViewImage = () => {
  return (
    <img className="homeViewImage" src={homeViewImage} alt="womans hair" />
  );
};

export { MmsLogo, HomeViewImage };
