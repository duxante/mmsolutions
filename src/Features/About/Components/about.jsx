import { VideoPlay } from '../../../assets';
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
          <img src="" alt="" />
          <div className="justText">
            <h1>Mellisa Berlusconi A Writer & Author of the Book</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <button>See More Works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
