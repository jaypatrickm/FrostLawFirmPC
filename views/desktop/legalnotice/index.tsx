import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';

type LegalNoticeDesktopProps = {
  isMobile: boolean;
  page: string;
};

const LegalNoticeDesktop = ({ isMobile, page }: LegalNoticeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <div className="bg-frost-light-gray">
        <Breadcrumbs path1="Home" url1="/" path2="Veterans" url2="/veterans" />
      </div>
      <div className="bg-white mt-4 pb-5">
        <div className="max-w-screen-xl m-auto">
          <div className="px-4">
            <h2 className="text-4xl lg:text-5xl text-center font-extrabold text-frost-blue">
              Legal Notice
            </h2>
          </div>
          <div className="lg:w-2/3 lg:m-auto bg-white pb-6">
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              This website provides general information about Frost Law Firm,
              PC. The use of information contained on this website does not
              constitute the offering of legal advice. Accordingly, neither this
              website nor the use of information from the website creates an
              attorney-client relationship between you and Frost Law Firm, PC.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              Because results obtained depend on the facts in each case, the
              results of cases published on this site are no guarantee of future
              results. Several of the cases presented on this website are
              currently pending on appeal. Award amounts published on this site
              represent monetary damages awarded by juries prior to deductions
              for attorney fees, and other expenses. Thus, award amounts are not
              actual cash amounts received by clients.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              The law is constantly changing and the information contained on
              this site may not necessarily be complete or correct on the date
              of access. Therefore, you should not act or rely on any
              information on this website without first seeking the advice of a
              competent, licensed attorney.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              This website contains links to other resources on the Internet.
              These links are provided solely as a convenience to assist you in
              locating other Internet resources that may be of interest to you.
              Access to these linked sites is undertaken at your own risk. The
              content, accuracy, reliability, and opinions expressed in these
              linked sites are not investigated, verified, monitored, or
              endorsed by Frost Law Firm, PC. The firm disclaims any warranty,
              expressed or implied, with respect to the content of such sites.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              To the extent that the ethical rules of any state require us to
              designate a principal office or an attorney responsible for this
              website, Frost Law Firm, PC designates Scott L. Frost as the
              attorney responsible, and designates its office in California
              located at 273 West 7th Street, San Pedro, CA 90731. Unless
              otherwise stated, our attorneys claiming certification in an area
              of law are not certified by the Texas Board of Legal
              Specialization or any other state bar legal specialization.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              THIS IS AN ADVERTISEMENT.
            </p>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default LegalNoticeDesktop;
