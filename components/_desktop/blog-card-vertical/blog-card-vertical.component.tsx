import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  LayoutContainer,
  LayoutLeft,
  Image,
  LayoutRight,
  Title,
  Author,
  Date,
  LinkAnchor
} from './blog-card-vertical.styles';

type BlogCardVerticalProps = {
  imageUrl: string;
  title: string;
  author: string;
  postedDate: string;
  urlFriendlyTitle: string;
};

const BlogCardVertical = ({
  imageUrl,
  title,
  author,
  postedDate,
  urlFriendlyTitle
}: BlogCardVerticalProps) => {
  return (
    <Link href={`/blog/[title]`} as={`/blog/${urlFriendlyTitle}`} passHref>
      <LinkAnchor>
        <Wrapper>
          <LayoutContainer>
            <LayoutLeft>
              <Image src={imageUrl} />
            </LayoutLeft>
            <LayoutRight>
              <Title>{title}</Title>
              <Author>Posted By {author}</Author>
              <Date>{postedDate}</Date>
              Read more
            </LayoutRight>
          </LayoutContainer>
        </Wrapper>
      </LinkAnchor>
    </Link>
  );
};

export default BlogCardVertical;
