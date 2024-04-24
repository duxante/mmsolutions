import { useTranslation } from 'react-i18next';
import { posts } from '../../data/blogPosts';
import Post from './component/post';
import './blogPosts.style.css';

const BlogPosts = () => {
  const { t } = useTranslation();
  return (
    <div className="blogPostsHolder">
      <div className="blogPostsMain">
        <div className="blogPostsUpper">
          <h4>{t('news')}</h4>
          <h1>{t('recent')}</h1>
        </div>
        <div className="blogPostsGrid scalein animation-ease-in-out animation-duration-3000">
          {posts.map((onePost) => {
            return (
              <Post
                key={onePost.id}
                icon={onePost.icon}
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
