import mms_logo from './mms_logo.png';
import homeViewImage from './homeViewImage.png';
import videoPlay from './videoPlay.png';
import aboutImage from './aboutImage.png';
import analyze from './analyze.png';
import growth from './growth.png';
import innovativeSolutions from './innovativeSolution.png';
import manual from './manual.png';
import onlineMeetings from './onlineMeetings.png';
import process from './process.png';
import strategicGuidance from './strategicGuidance.png';
import transformativeInsights from './transformativeInsights.png';

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

const Analyze = () => {
  return <img className="analyze" src={analyze} alt="sketch of analyze" />;
};

const Growth = () => {
  return <img className="growth" src={growth} alt="up arrow" />;
};

const InnovativeSolutions = () => {
  return (
    <img
      className="innovativeSolutions"
      src={innovativeSolutions}
      alt="shoes in front of arrow"
    />
  );
};

const Manual = () => {
  return <img className="manual" src={manual} alt="book" />;
};

const OnlineMeetings = () => {
  return (
    <img
      className="onlineMeetings"
      src={onlineMeetings}
      alt="laptop on a desk"
    />
  );
};

const Process = () => {
  return <img className="process" src={process} alt="puzzles" />;
};

const StrategicGuidance = () => {
  return (
    <img
      className="strategicGuidance"
      src={strategicGuidance}
      alt="signs pointing left and right"
    />
  );
};

const TransforamtiveInsights = () => {
  return (
    <img
      className="transformative"
      src={transformativeInsights}
      alt="book in puzzels"
    />
  );
};

export {
  MmsLogo,
  HomeViewImage,
  VideoPlay,
  AboutImage,
  Analyze,
  Growth,
  InnovativeSolutions,
  Manual,
  OnlineMeetings,
  Process,
  StrategicGuidance,
  TransforamtiveInsights,
};
