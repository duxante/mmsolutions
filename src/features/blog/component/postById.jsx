import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemById } from '../../../data/blogPosts';
import '../style/postById.style.css';

const PostById = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = getItemById(postId);
    setPost(post);
  }, [postId]);
  return (
    <div className="postByIdHolder">
      {post?.img}
      <div className="postByIdText">
        <h2>{post?.title}</h2>
        <p>{post?.description}</p>
      </div>
    </div>
  );
};
export default PostById;
