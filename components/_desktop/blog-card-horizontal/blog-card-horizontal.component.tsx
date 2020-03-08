import React from 'react';
import Link from 'next/link';

import {
  LayoutWrapper,
  ImageContainer,
  Image,
  Title,
  Author,
  Date,
  LinkContainer,
  LinkAnchor
} from './blog-card-horizontal.styles';

type BlogCardHorizontalProps = {
  imageUrl: string;
  title: string;
  author: string;
  postedDate: string;
  urlFriendlyTitle: string;
};

const BlogCardHorizontal = ({
  imageUrl,
  title,
  author,
  postedDate,
  urlFriendlyTitle
}: BlogCardHorizontalProps) => {
  return (
    <LayoutWrapper>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <Title>{title}</Title>
      <Author>Posted By {author}</Author>
      <Date>{postedDate}</Date>
      <LinkContainer>
        <Link href={`/blog/${urlFriendlyTitle}`}>
          <LinkAnchor>Read more</LinkAnchor>
        </Link>
      </LinkContainer>
    </LayoutWrapper>
  );
};

export default BlogCardHorizontal;
