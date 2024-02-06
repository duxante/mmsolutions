import '../style/oneServiceOffering.style.css';

const OneServiceOffering = ({ img, title, description }) => {
  return (
    <div className="oneServiceHolder">
      <div className="overlay"></div>
      <div className="textTransition">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {img}
    </div>
  );
};

export default OneServiceOffering;
