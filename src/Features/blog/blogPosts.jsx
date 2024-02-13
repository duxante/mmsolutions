import { posts } from '../../data/blogPosts';
import './blogPosts.style.css';
import Post from './component/Post';

const BlogPosts = () => {
  return (
    <div className="blogPostsHolder">
      <div className="blogPostsMain">
        {posts.map((onePost) => {
          <Post
            img={onePost.img}
            date={onePost.date}
            title={onePost.title}
            description={onePost.description}
          />;
        })}
      </div>
    </div>
  );
};
export default BlogPosts;
