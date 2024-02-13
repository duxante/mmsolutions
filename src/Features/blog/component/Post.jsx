import '..style/post.style.css';

const Post = ({ img, date, title, description }) => {
  return (
    <div>
      {img}
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Post;
