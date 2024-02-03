import mms_logo from './mms_logo.png';
import homeViewImage from './homeViewImage.png';
import videoPlay from './videoPlay.png';
import aboutImage from './aboutImage.png';

const MmsLogo = () => {
  return <img className="mmsLogo" src={mms_logo} alt="mms logo" />;
};

const HomeViewImage = () => {
  return (
    <img className="homeViewImage" src={homeViewImage} alt="womans hair" />
  );
};

const VideoPlay = () => {
  return <img className="videoPlay" src={videoPlay} alt="video play button" />;
};

const AboutImage = () => {
  return (
    <img
      className="aboutImage"
      src={aboutImage}
      alt="business woman at the airport"
    />
  );
};

export { MmsLogo, HomeViewImage, VideoPlay, AboutImage };
