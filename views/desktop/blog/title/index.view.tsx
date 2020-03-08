import React from 'react';
import MasterLayout from '../../../layouts/master/master.layout';
import Breadcrumbs from '../../../../components/breadcrumbs/breadcrumbs.component';
import BlogPostFooter from '../../../../components/_desktop/blog-posts-footer/blog-posts-footer.component';
import { createMarkup } from '../../../../helpers/utils.helpers';
import {
  Wrapper,
  LayoutContainer,
  ContentContainer,
  TitleContainer,
  Title,
  Author,
  Date,
  MainImageContainer,
  MainImageCaption,
  PostContent,
  BlogPostsFooterTitle
} from './index.styles';

type BlogTitleDesktopProps = {
  isMobile: boolean;
  page: string;
  blogPost: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl?: string;
    caption?: string;
    author: string;
    postedDate: string;
    content: string;
    videoLink?: string;
  };
};

const BlogTitleDesktop = ({
  isMobile,
  page,
  blogPost
}: BlogTitleDesktopProps) => {
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption,
    author,
    postedDate,
    content,
    videoLink
  } = blogPost;

  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs
        path1="Home"
        url1="/"
        path2="Blog"
        url2="blog"
        path3={title}
        url3={'/' + urlFriendlyTitle}
      />

      <Wrapper>
        <LayoutContainer>
          <ContentContainer>
            <TitleContainer>
              <Title>{title}</Title>
              <Author>Posted By {author}</Author>
              <Date>{postedDate}</Date>
            </TitleContainer>
            {videoLink ? (
              ''
            ) : (
              <MainImageContainer>
                <img
                  src={imageUrl}
                  alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
                />
                <MainImageCaption>{caption}</MainImageCaption>
              </MainImageContainer>
            )}
            <PostContent
              dangerouslySetInnerHTML={createMarkup(content)}
            ></PostContent>
          </ContentContainer>
        </LayoutContainer>
      </Wrapper>
      <BlogPostFooter title={title}>
        <BlogPostsFooterTitle>See more posts!</BlogPostsFooterTitle>
      </BlogPostFooter>
    </MasterLayout>
  );
};

export default BlogTitleDesktop;
