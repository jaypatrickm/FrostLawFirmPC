import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import GET_BLOG_POSTS from '../../../data/get-posts';
import BlogCard from '../../../components/_desktop/blog-card/blog-card.component';
import {
  Wrapper,
  LayoutContainer,
  Header,
  PostGridContainer
} from './index.styles';

type BlogDesktopProps = {
  isMobile?: boolean;
  page: string;
};

const Blog = ({ isMobile, page }: BlogDesktopProps) => (
  <MasterLayout isMobile={isMobile} page={page}>
    <Breadcrumbs path1="Home" url1="/" path2="Blog" url2="blog" />
    <Wrapper>
      <LayoutContainer>
        <Header>Blog</Header>
        <PostGridContainer>
          {GET_BLOG_POSTS.map(item => (
            <BlogCard postData={item} key={item.title} />
          ))}
        </PostGridContainer>
      </LayoutContainer>
    </Wrapper>
  </MasterLayout>
);

export default Blog;
