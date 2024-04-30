import '../style/post.style.css';

const Post = ({ img, icon, date, title, description }) => {
  return (
    <div className="postHolder flipright animation-duration-1000">
      {img}
      <div className="postMain">
        <div className="date">
          {icon}
          <h6>{date}</h6>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Post;
