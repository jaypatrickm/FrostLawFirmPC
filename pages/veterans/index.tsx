import { NextPage } from 'next';
import VeteransDesktop from '../../views/desktop/veterans/index';
import VeteransMobile from '../../views/mobile/veterans/index';
import { isMobileDetector } from '../../helpers/utils.helpers';

const Veterans: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <VeteransDesktop isMobile={isMobile} page={page} />;
};

Veterans.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  return { isMobile, page: 'Veterans' };
};

export default Veterans;
