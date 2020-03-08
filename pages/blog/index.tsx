import { NextPage } from 'next';
import BlogDesktop from '../../views/desktop/blog/index.view';
import { isMobileDetector } from '../../helpers/utils.helpers';

const Blog: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <BlogDesktop isMobile={isMobile} page={page} />;
};

Blog.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);
  return { isMobile, page: 'Blog' };
};

export default Blog;
