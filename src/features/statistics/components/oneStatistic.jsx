import '../style/oneStatistic.style.css';

const OneStatistic = ({ img, number, description }) => {
  return (
    <div className="oneStatisticHolder">
      {img}
      <div className="oneStatisticMain">
        <h3>{number}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default OneStatistic;
