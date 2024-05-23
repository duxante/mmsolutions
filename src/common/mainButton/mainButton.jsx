import './mainButton.style.css';

const MainButton = ({ buttonText, customClass, handleAction }) => {
  return (
    <button
      onClick={handleAction}
      className={`mMSolutionsButton ${customClass}`}
    >
      {buttonText}
    </button>
  );
};

export default MainButton;
