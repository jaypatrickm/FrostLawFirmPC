import { NextPage } from 'next';
import ContactDesktop from '../../views/desktop/contact/index.view';
import { isMobileDetector } from '../../helpers/utils.helpers';

const Contact: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <ContactDesktop isMobile={isMobile} page={page} />;
};

Contact.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  return { isMobile, page: 'Contact' };
};

export default Contact;
