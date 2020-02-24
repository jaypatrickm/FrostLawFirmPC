import React from 'react';
import Link from 'next/link';

const RecognitionAffiliationBlock = () => {
  const affiliationImages = [
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
  ];
  return (
    <div className="bg-frost-light-gray pt-8 px-4 pb-4">
      <h2 className="text-frost-light-blue font-extrabold text-4xl leading-tight">
        Recognition & Affiliation
      </h2>
      <div className="flex flex-wrap">
        {affiliationImages.map((element, index) => {
          return (
            <div className="w-1/2 flex items-center">
              <div className="m-2 flex items-center justify-center h-40 w-full bg-white p-4">
                <img
                  key={element.id}
                  className="w-full object-contain object-center"
                  src={element.imageUrl}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecognitionAffiliationBlock;
