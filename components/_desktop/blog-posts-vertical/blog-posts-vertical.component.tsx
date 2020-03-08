import React from 'react';
import BlogCard from '../blog-card/blog-card.component';
import GET_BLOG_POSTS from '../../../data/get-posts';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div.attrs({
  className: 'grid grid-cols-1'
})`
  ${tw`mt-4`}
`;

const BlogPostVertical = () => {
  return (
    <Wrapper>
      {GET_BLOG_POSTS.map(item => (
        <BlogCard postData={item} key={item.title} direction="vertical" />
      ))}
    </Wrapper>
  );
};

export default BlogPostVertical;
