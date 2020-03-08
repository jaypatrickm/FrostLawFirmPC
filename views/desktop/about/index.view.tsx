import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import AboutContent from '../../../components/_desktop/about-content/about-content.component';
import { Wrapper, Header } from './index.styles';
import BlogPostsFooter from '../../../components/_desktop/blog-posts-footer/blog-posts-footer.component';

type AboutPageProps = {
  isMobile: boolean;
  page: string;
};

const AboutDesktop = ({ isMobile, page }: AboutPageProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs path1="Home" url1="/" path2="About" url2="about" />
      <Wrapper>
        <Header>Our Story</Header>
        <AboutContent />
      </Wrapper>
      <BlogPostsFooter />
    </MasterLayout>
  );
};

export default AboutDesktop;
