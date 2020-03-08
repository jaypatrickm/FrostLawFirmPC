import React from 'react';
import Link from 'next/link';
import HighlightsBlock from '../highlights-block/highlights-block.component';
import ResultsBlock from '../results-block/results-block.component';
import BlogPostsVertical from '../blog-posts-vertical/blog-posts-vertical.component';
import {
  Wrapper,
  LayoutContainer,
  LayoutLeftBlock,
  LayoutRightBlock,
  BlogHeaderContainer,
  BlogLink
} from './highlights-results-blog-block.styles';

const HighlightsResultsBlogBlock = () => {
  return (
    <Wrapper>
      <LayoutContainer>
        <LayoutLeftBlock>
          <HighlightsBlock />
          <ResultsBlock />
        </LayoutLeftBlock>
        <LayoutRightBlock>
          <BlogHeaderContainer>
            From our&nbsp;
            <Link href="/blog">
              <BlogLink>blog</BlogLink>
            </Link>
            ...
          </BlogHeaderContainer>
          <BlogPostsVertical />
        </LayoutRightBlock>
      </LayoutContainer>
    </Wrapper>
  );
};

export default HighlightsResultsBlogBlock;
