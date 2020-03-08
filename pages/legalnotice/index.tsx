import { NextPage } from 'next';
import LegalNoticeDesktop from '../../views/desktop/legalnotice/index.view';
import { isMobileDetector } from '../../helpers/utils.helpers';

const LegalNotice: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <LegalNoticeDesktop isMobile={isMobile} page={page} />;
};

LegalNotice.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  return { isMobile, page: 'LegalNotice' };
};

export default LegalNotice;
