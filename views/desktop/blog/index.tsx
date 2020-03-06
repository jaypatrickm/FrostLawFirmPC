import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import GET_BLOG_POSTS from '../../../data/get-posts';
import BlogCard from '../../../components/_desktop/blog-card/blog-card';

type BlogDesktopProps = {
  isMobile?: boolean;
  page: string;
};

const Blog = ({ isMobile, page }: BlogDesktopProps) => (
  <MasterLayout isMobile={isMobile} page={page}>
    <div className="bg-frost-light-gray">
      <Breadcrumbs path1="Home" url1="/" path2="Blog" url2="blog" />
    </div>
    <div className="bg-white mt-4 pb-5">
      <div className="max-w-screen-xl m-auto">
        <div className="px-4">
          <h2 className="text-4xl lg:text-5xl text-center font-extrabold text-frost-blue">
            Blog
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {GET_BLOG_POSTS.map(item => (
            <BlogCard postData={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  </MasterLayout>
);

export default Blog;
