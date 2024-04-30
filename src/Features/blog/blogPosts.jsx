import { useTranslation } from 'react-i18next';
import { posts } from '../../data/blogPosts';
import Post from './component/post';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import './blogPosts.style.css';

const BlogPosts = () => {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.6,
  });
  const { t } = useTranslation();
  return (
    <div ref={ref} className="blogPostsHolder">
      <div className="blogPostsMain">
        <div className="blogPostsUpper">
          <h4>{t('news')}</h4>
          <h1>{t('recent')}</h1>
        </div>
        {isVisible && (
          <div className="blogPostsGrid">
            {posts.map((onePost) => {
              return (
                <Post
                  id={onePost.id}
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
        )}
      </div>
    </div>
  );
};
export default BlogPosts;
