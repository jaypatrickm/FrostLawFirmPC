import React from 'react';
import {
  RecognitionAffiliationWrapper,
  LayoutContainer,
  Title,
  ImageLayoutContainer,
  ImageContainer,
  ImageMask,
  Image
} from './recognition-affiliation-block.styles';

type RecognitionAffiliationBlockProps = {
  items?: {
    id: number;
    imageUrl: string;
    alt: string;
  }[];
  bgColor?: string;
  headerColor?: string;
  headerHide?: boolean;
};

const RecognitionAffiliationBlock = ({
  items = [
    {
      id: 1,
      imageUrl: '/images/affiliations/ntl-top-100-member-b.png',
      alt: 'The National Trial Lawyers Top 100 - Frost Law Firm'
    },
    {
      id: 2,
      imageUrl: '/images/affiliations/american-association-for-justice.png',
      alt: 'American Association For Justice - Frost Law Firm'
    },
    {
      id: 3,
      imageUrl: '/images/affiliations/american-board-of-trial-advocates.jpg',
      alt: 'American Board of Trial Advocates - Frost Law Firm'
    },
    {
      id: 4,
      imageUrl: '/images/affiliations/KTI-LOGO-FACULTY1.jpg',
      alt: 'Keenan Trial Institute - Frost Law Firm'
    },
    {
      id: 5,
      imageUrl: '/images/affiliations/NTL-Top-40-Brass-Badge.png',
      alt: 'The National Top 40 Under 40 Trial Lawyers - Frost Law Firm'
    },
    {
      id: 6,
      imageUrl: '/images/affiliations/superlawyers2.png',
      alt: 'Super Lawyers - Frost Law Firm'
    },
    {
      id: 7,
      imageUrl: '/images/affiliations/triallawyerscollege.jpg',
      alt:
        'Graduate of Trial Lawyers College Thunderhead Ranch Durgis, Wyoming - Frost Law Firm'
    },
    {
      id: 8,
      imageUrl: '/images/affiliations/usdva-accredited-attorney.png',
      alt:
        'U.S. Department of Veterans Affairs Accredited Attorney - Frost Law Firm'
    }
  ],
  bgColor = 'bg-frost-dark-blue',
  headerColor = 'text-white',
  headerHide = false
}: RecognitionAffiliationBlockProps) => {
  return (
    <RecognitionAffiliationWrapper className={bgColor}>
      <LayoutContainer>
        {headerHide ? (
          ''
        ) : (
          <Title className={headerColor}>Recognition & Affiliation</Title>
        )}

        <ImageLayoutContainer>
          {items.map(element => {
            return (
              <ImageContainer key={element.id}>
                <ImageMask>
                  <Image src={element.imageUrl} />
                </ImageMask>
              </ImageContainer>
            );
          })}
        </ImageLayoutContainer>
      </LayoutContainer>
    </RecognitionAffiliationWrapper>
  );
};

export default RecognitionAffiliationBlock;
