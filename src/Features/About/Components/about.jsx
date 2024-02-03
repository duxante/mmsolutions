import { AboutImage, VideoPlay } from '../../../assets';
import MainButton from '../../../common/mainButton/mainButton';
import '../style/about.style.css';

const About = () => {
  return (
    <div className="aboutHolder">
      <div className="aboutMain">
        <div className="imageAndShortText">
          <VideoPlay />
          <h2>
            "I'm Marija Milićević, Your consummate and unparalleled expert in
            optimizing production for resounding success."
          </h2>
        </div>
        <div className="biggerImageAndLongerText">
          <AboutImage />
          <div className="justText">
            <h1>
              Marija Milićević Engineer, Scientist & Author of Notable Columns
            </h1>
            <p>
              Dive into the intellectual realm guided by your consummate
              scientist and seasoned consultant. A master of thought and
              expression, someone who crafts captivating narratives in
              prestigious newspapers, seamlessly blending profound insights with
              real-world applicability.
            </p>
            <p className="bottomText">
              Explore a world where each cooperation is a journey, meticulously
              designed to engage your mind and spark curiosity. Embark on a
              voyage of discovery with your safe companion, where expertise
              converges with eloquence, leaving an indelible mark on the
              landscape of thought.
            </p>

            <MainButton buttonText="See More Works" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
