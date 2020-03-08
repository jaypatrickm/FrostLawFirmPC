import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import AttorneyCard from '../../../components/_desktop/attorney-card/attorney-card.component';
import HighlightResultsBlogBlock from '../../../components/_desktop/highlights-results-blog-block/highlights-results-blog-block.component';

import { Wrapper, Header, AttorneysLayoutContainer } from './index.styles';

type AttorneysDesktopProps = {
  isMobile: boolean;
  page: string;
};

const AttorneysDesktop = ({ isMobile, page }: AttorneysDesktopProps) => {
  const attorneyData = [
    {
      name: 'Scott L. Frost',
      urlFriendlyName: 'scott-l-frost',
      imageUrl: '/images/attorneys/scott-l-frost.jpg',
      listTitle: 'Areas of Expertise',
      listItems: [
        'Asbestos Litigation',
        'Benzene Litigation',
        'Unsafe Medical Devices',
        'Toxic Tort',
        'Product Liability'
      ],
      description:
        'Scott Frost has represented victims of asbestos related disease for over 18 years. His passion is representing families who have been harmed by corporations. Scott is an experienced litigator who tries benzene exposure and defective medical device cases along with asbestos exposure and mesothelioma cases. He is licensed to practice law by the state bars...'
    },
    {
      name: 'Andrew Seitz',
      urlFriendlyName: 'andrew-seitz',
      imageUrl: '/images/attorneys/andrew-seitz.jpg',
      listTitle: 'Areas of Expertise',
      listItems: [
        'Asbestos Litigation',
        'Personal Injury',
        'Premise Liability',
        'Toxic Tort',
        'Product Liability'
      ],
      description:
        'Andrew earned his bachelor’s degree from Penn State University and was awarded his Juris Doctor degree from Pepperdine University School of Law, where he was a Dean’s Merit Scholar. Andrew is the author of a law review article titled, “It’s a Series of Tubes: Network Neutrality in the United States,” published in the Journal of the National Association...'
    }
  ];

  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs path1="Home" url1="/" path2="Attorneys" url2="attorneys" />
      <Wrapper>
        <Header>Attorneys</Header>
        <AttorneysLayoutContainer>
          {attorneyData.map((attorney, index) => (
            <AttorneyCard key={index + '_' + attorney.name} {...attorney} />
          ))}
        </AttorneysLayoutContainer>
      </Wrapper>
      <HighlightResultsBlogBlock />
    </MasterLayout>
  );
};

export default AttorneysDesktop;
