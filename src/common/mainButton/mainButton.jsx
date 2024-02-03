import './mainButton.style.css';

const MainButton = ({ buttonText, customClass }) => {
  return (
    <button className={`mMSolutionsButton ${customClass}`}>{buttonText}</button>
  );
};

export default MainButton;
