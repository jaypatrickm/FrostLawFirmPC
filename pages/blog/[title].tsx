import { NextPage } from 'next';
import BlogTitleDesktop from '../../views/desktop/blog/title/index';
import BlogTitleMobile from '../../views/mobile/blog/title/index';
import { isMobileDetector } from '../../helpers/utils.helpers';
import BLOG_POST_DATA from '../../data/blog-posts';
import { string } from 'yup';

const BlogTitle: NextPage<{
  isMobile: boolean;
  page: string;
  blogPost: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl?: string;
    caption?: string;
    author: string;
    postedDate: string;
    content: string;
    videoLink?: string;
  };
}> = ({ isMobile, page, blogPost }) => {
  return (
    <BlogTitleDesktop isMobile={isMobile} page={page} blogPost={blogPost} />
  );
};

BlogTitle.getInitialProps = async ({ query, req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);
  const { title } = query;
  const newString = title.toString();
  const post = BLOG_POST_DATA[newString];
  return { isMobile, page: 'Blog', blogPost: post };
};

export default BlogTitle;
