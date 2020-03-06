import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';

type VeteransDesktopProps = {
  isMobile: boolean;
  page: string;
};

const VeteransDesktop = ({ isMobile, page }: VeteransDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <div className="bg-frost-light-gray">
        <Breadcrumbs path1="Home" url1="/" path2="Veterans" url2="/veterans" />
      </div>

      <div className="bg-white mt-4 pb-5">
        <div className="max-w-screen-xl m-auto">
          <div className="px-4">
            <h2 className="text-4xl lg:text-5xl text-center font-extrabold text-frost-blue">
              Our Commitment to Veterans
            </h2>
          </div>
          <div className="image px-4 pt-4">
            <img
              src="/images/affiliations/usdva-accredited-attorney.png"
              alt="U.S. Department of Veterans Affairs"
              className="m-auto"
            />
            <span className="py-2 px-4 block text-xs text-black leading-tight"></span>
          </div>
          <div className="lg:w-2/3 lg:m-auto bg-white pb-6">
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
              While on active duty, Scott helped soldiers and veterans obtain
              the benefits they earned through their service to their country.
            </p>
            <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
              Because of this experience, Scott has continued to help veterans
              suffering from mesothelioma obtain benefits and is an Accredited
              Attorney for the United States Department of Veterans Affairs.
            </p>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default VeteransDesktop;
