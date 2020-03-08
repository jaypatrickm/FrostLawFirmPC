import { NextPage } from 'next';
import AboutDesktop from '../../views/desktop/about/index.view';
import { isMobileDetector } from '../../helpers/utils.helpers';

const About: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <AboutDesktop isMobile={isMobile} page={page} />;
};

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);
  return { isMobile, page: 'About' };
};

export default About;
