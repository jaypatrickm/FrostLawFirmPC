import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Hero from '../../../components/_desktop/hero/hero.component';
import TeamPhoto from '../../../components/_desktop/team-photo/team-photo.component';
import HomeContent from '../../../components/_desktop/home-content/home-content.component';
import AboutCta from '../../../components/_desktop/about-cta/about-cta.component';
import HighlightsResultsBlogBlock from '../../../components/_desktop/highlights-results-blog-block/highlights-results-blog-block.component';

type HomeDesktopProps = {
  isMobile?: boolean;
  page: string;
};

const HomeDesktop = ({ isMobile, page }: HomeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Hero />
      <TeamPhoto />
      <HomeContent />
      <AboutCta />
      <HighlightsResultsBlogBlock />
    </MasterLayout>
  );
};

export default HomeDesktop;
