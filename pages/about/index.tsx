import { NextPage } from 'next';
import AboutDesktop from '../../views/desktop/about/index';
import AboutMobile from '../../views/mobile/about/index';
import { isMobileDetector } from '../../helpers/utils.helpers';

const About: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return isMobile ? (
    <AboutMobile isMobile={isMobile} page={page} />
  ) : (
    <AboutDesktop isMobile={isMobile} page={page} />
  );
};

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  console.log(isMobile);
  return { isMobile, page: 'About' };
};

export default About;
