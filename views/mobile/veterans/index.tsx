import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../../components/desktop/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../.././../components/blog-button/blog-button.component';
type VeteransMobileProps = {
  isMobile?: boolean;
  page: string;
};

const VeteransMobile = ({ isMobile, page }: VeteransMobileProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Mobile</h1>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Veterans"
            url2="/veterans"
          />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Our Commitment to Veterans
          </h1>
        </div>
        <div className="image px-4 pt-4">
          <img
            src="/images/affiliations/usdva-accredited-attorney.png"
            alt="U.S. Department of Veterans Affairs"
          />
          <span className="py-2 px-4 block text-xs text-black leading-tight"></span>
        </div>
        <div className="bg-white pb-6">
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott Frost served 6 years in the United States Army.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is a graduate of United States Army Airborne School and Air
            Assault School.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott served in the 3rd Infantry Division, 1st Cavalry Division
            (First Team), and Third Corps.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            While on active duty, Scott helped soldiers and veterans obtain the
            benefits they earned through their service to their country.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Because of this experience, Scott has continued to help veterans
            suffering from mesothelioma obtain benefits and is an Accredited
            Attorney for the United States Department of Veterans Affairs.
          </p>
        </div>

        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default VeteransMobile;
