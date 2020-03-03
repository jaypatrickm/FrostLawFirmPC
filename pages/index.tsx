import { NextPage } from 'next';
import HomeDesktop from '../views/desktop/home/index';
import HomeMobile from '../views/mobile/home/index';
import { isMobileDetector } from '../helpers/utils.helpers';

const Home: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  console.log(isMobile);
  return { isMobile };
};

export default Home;
