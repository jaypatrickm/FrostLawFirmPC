import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import {
  Wrapper,
  LayoutContainer,
  Title,
  Image,
  ContentContainer
} from './index.styles';

type VeteransDesktopProps = {
  isMobile: boolean;
  page: string;
};

const VeteransDesktop = ({ isMobile, page }: VeteransDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs path1="Home" url1="/" path2="Veterans" url2="/veterans" />
      <Wrapper>
        <LayoutContainer>
          <Title>Our Commitment to Veterans</Title>
          <Image
            src="/images/affiliations/usdva-accredited-attorney.png"
            alt="U.S. Department of Veterans Affairs"
          />
          <ContentContainer>
            <p>Scott Frost served 6 years in the United States Army.</p>
            <p>
              Scott is a graduate of United States Army Airborne School and Air
              Assault School.
            </p>
            <p>
              Scott served in the 3rd Infantry Division, 1st Cavalry Division
              (First Team), and Third Corps.
            </p>
            <p>
              While on active duty, Scott helped soldiers and veterans obtain
              the benefits they earned through their service to their country.
            </p>
            <p>
              Because of this experience, Scott has continued to help veterans
              suffering from mesothelioma obtain benefits and is an Accredited
              Attorney for the United States Department of Veterans Affairs.
            </p>
          </ContentContainer>
        </LayoutContainer>
      </Wrapper>
    </MasterLayout>
  );
};

export default VeteransDesktop;
