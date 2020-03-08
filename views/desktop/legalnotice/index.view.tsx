import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import {
  Wrapper,
  LayoutContainer,
  Header,
  ContentContainer
} from './index.styles';

type LegalNoticeDesktopProps = {
  isMobile: boolean;
  page: string;
};

const LegalNoticeDesktop = ({ isMobile, page }: LegalNoticeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs path1="Home" url1="/" path2="Veterans" url2="/veterans" />
      <Wrapper>
        <LayoutContainer>
          <Header>Legal Notice</Header>
          <ContentContainer>
            <p>
              This website provides general information about Frost Law Firm,
              PC. The use of information contained on this website does not
              constitute the offering of legal advice. Accordingly, neither this
              website nor the use of information from the website creates an
              attorney-client relationship between you and Frost Law Firm, PC.
            </p>
            <p>
              Because results obtained depend on the facts in each case, the
              results of cases published on this site are no guarantee of future
              results. Several of the cases presented on this website are
              currently pending on appeal. Award amounts published on this site
              represent monetary damages awarded by juries prior to deductions
              for attorney fees, and other expenses. Thus, award amounts are not
              actual cash amounts received by clients.
            </p>
            <p>
              The law is constantly changing and the information contained on
              this site may not necessarily be complete or correct on the date
              of access. Therefore, you should not act or rely on any
              information on this website without first seeking the advice of a
              competent, licensed attorney.
            </p>
            <p>
              This website contains links to other resources on the Internet.
              These links are provided solely as a convenience to assist you in
              locating other Internet resources that may be of interest to you.
              Access to these linked sites is undertaken at your own risk. The
              content, accuracy, reliability, and opinions expressed in these
              linked sites are not investigated, verified, monitored, or
              endorsed by Frost Law Firm, PC. The firm disclaims any warranty,
              expressed or implied, with respect to the content of such sites.
            </p>
            <p>
              To the extent that the ethical rules of any state require us to
              designate a principal office or an attorney responsible for this
              website, Frost Law Firm, PC designates Scott L. Frost as the
              attorney responsible, and designates its office in California
              located at 273 West 7th Street, San Pedro, CA 90731. Unless
              otherwise stated, our attorneys claiming certification in an area
              of law are not certified by the Texas Board of Legal
              Specialization or any other state bar legal specialization.
            </p>
            <p>THIS IS AN ADVERTISEMENT.</p>
          </ContentContainer>
        </LayoutContainer>
      </Wrapper>
    </MasterLayout>
  );
};

export default LegalNoticeDesktop;
