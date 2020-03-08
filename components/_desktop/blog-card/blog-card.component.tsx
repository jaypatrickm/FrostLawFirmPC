import React from 'react';
import Link from 'next/link';
import BlogCardHorizontal from '../blog-card-horizontal/blog-card-horizontal.component';
import BlogCardVertical from '../blog-card-vertical/blog-card-vertical.component';

type BlogCardProps = {
  postData: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl: string;
    caption?: string;
    author: string;
    postedDate: string;
    description: string;
    videoLink?: string;
  };
  direction?: string;
};
const BlogCard = ({ postData, direction = 'horizontal' }: BlogCardProps) => {
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption = '',
    author,
    postedDate,
    description,
    videoLink = ''
  } = postData;
  return direction == 'horizontal' ? (
    <BlogCardHorizontal
      title={title}
      urlFriendlyTitle={urlFriendlyTitle}
      imageUrl={imageUrl}
      author={author}
      postedDate={postedDate}
    />
  ) : (
    <BlogCardVertical
      title={title}
      urlFriendlyTitle={urlFriendlyTitle}
      imageUrl={imageUrl}
      author={author}
      postedDate={postedDate}
    />
  );
};

export default BlogCard;
