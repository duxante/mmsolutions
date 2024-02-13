import '../style/post.style.css';

const Post = ({ img, date, title, description }) => {
  return (
    <div className="postHolder">
      {img}
      <div className="postMain">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Post;
