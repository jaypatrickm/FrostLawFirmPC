import { NextPage } from 'next';
import SiteMapDesktop from '../../views/desktop/sitemap/index';
import SiteMapMobile from '../../views/mobile/sitemap/index';
import { isMobileDetector } from '../../helpers/utils.helpers';

const SiteMap: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return isMobile ? (
    <SiteMapMobile isMobile={isMobile} page={page} />
  ) : (
    <SiteMapDesktop isMobile={isMobile} page={page} />
  );
};

SiteMap.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  return { isMobile, page: 'SiteMap' };
};

export default SiteMap;
