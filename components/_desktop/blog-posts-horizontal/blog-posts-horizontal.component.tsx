import React from 'react';
import GET_BLOG_POSTS from '../../../data/get-posts';
import BlogCard from '../blog-card/blog-card.component';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const LayoutGrid = styled.div.attrs({
  className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
})``;

type BlogPostsHorizontalProps = {
  title?: string;
};

const BlogPostsHorizontal = ({ title }: BlogPostsHorizontalProps) => {
  const reducePost = GET_BLOG_POSTS.filter(item => {
    if (item.title != title) return item;
  });

  return (
    <LayoutGrid>
      {reducePost.map(item => (
        <BlogCard postData={item} key={item.title} />
      ))}
    </LayoutGrid>
  );
};

export default BlogPostsHorizontal;
