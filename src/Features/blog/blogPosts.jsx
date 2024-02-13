import { posts } from '../../data/blogPosts';
import Post from './component/post';
import './blogPosts.style.css';

const BlogPosts = () => {
  return (
    <div className="blogPostsHolder">
      <div className="blogPostsMain">
        <div className="blogPostsUpper">
          <h4>OUR BLOG</h4>
          <h1>Recent From Blog</h1>
        </div>
        <div className="blogPostsGrid">
          {posts.map((onePost) => {
            return (
              <Post
                img={onePost.img}
                date={onePost.date}
                title={onePost.title}
                description={onePost.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BlogPosts;
