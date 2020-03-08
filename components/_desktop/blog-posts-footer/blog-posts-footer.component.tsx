import React from 'react';
import Link from 'next/link';
import BlogPostsHorizontal from '../blog-posts-horizontal/blog-posts-horizontal.component';
import {
  BlogPostsWrapper,
  BlogPostsLayoutContainer,
  BlogPostsHeader,
  BlogPostsLinkAnchor
} from './blog-posts-footer.styles';

type BlogPostsFooterProps = {
  children?: React.ReactNode;
  title?: string;
};

const BlogPostsFooter = ({ children, title }: BlogPostsFooterProps) => {
  return children ? (
    <BlogPostsWrapper>
      <BlogPostsLayoutContainer>
        <BlogPostsHeader>{children}</BlogPostsHeader>
        <BlogPostsHorizontal title={title} />
      </BlogPostsLayoutContainer>
    </BlogPostsWrapper>
  ) : (
    <BlogPostsWrapper>
      <BlogPostsLayoutContainer>
        <BlogPostsHeader>
          Check out our&nbsp;
          <Link href="/blog">
            <BlogPostsLinkAnchor>blog</BlogPostsLinkAnchor>
          </Link>
          !
        </BlogPostsHeader>
        <BlogPostsHorizontal title={title} />
      </BlogPostsLayoutContainer>
    </BlogPostsWrapper>
  );
};

export default BlogPostsFooter;
