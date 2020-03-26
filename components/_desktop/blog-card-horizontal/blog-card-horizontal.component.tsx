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
    <Link
      href={`/blog/${urlFriendlyTitle}`}
      as={`/blog/${urlFriendlyTitle}`}
      passHref
    >
      <LinkAnchor>
        <LayoutWrapper>
          <ImageContainer>
            <Image src={imageUrl} />
          </ImageContainer>
          <Title>{title}</Title>
          <Author>Posted By {author}</Author>
          <Date>{postedDate}</Date>
          <LinkContainer>Read more</LinkContainer>
        </LayoutWrapper>
      </LinkAnchor>
    </Link>
  );
};

export default BlogCardHorizontal;
