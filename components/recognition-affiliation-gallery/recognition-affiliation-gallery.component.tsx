import React from 'react';
import Link from 'next/link';

const RecognitionAffiliationBlock = () => {
  const affiliationImages = [
    {
      id: '1',
      imageUrl: '/images/affiliations/ntl-top-100-member-b.png',
      alt: 'The National Trial Lawyers Top 100 - Frost Law Firm'
    },
    {
      id: '2',
      imageUrl: '/images/affiliations/american-association-for-justice.png',
      alt: 'American Association For Justice - Frost Law Firm'
    },
    {
      id: '3',
      imageUrl: '/images/affiliations/american-board-of-trial-advocates.jpg',
      alt: 'American Board of Trial Advocates - Frost Law Firm'
    },
    {
      id: '4',
      imageUrl: '/images/affiliations/KTI-LOGO-FACULTY1.jpg',
      alt: 'Keenan Trial Institute - Frost Law Firm'
    },
    {
      id: '5',
      imageUrl: '/images/affiliations/NTL-Top-40-Brass-Badge.png',
      alt: 'The National Top 40 Under 40 Trial Lawyers - Frost Law Firm'
    },
    {
      id: '6',
      imageUrl: '/images/affiliations/superlawyers2.png',
      alt: 'Super Lawyers - Frost Law Firm'
    },
    {
      id: '7',
      imageUrl: '/images/affiliations/triallawyerscollege.jpg',
      alt:
        'Graduate of Trial Lawyers College Thunderhead Ranch Durgis, Wyoming - Frost Law Firm'
    },
    {
      id: '8',
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
      <div className="flex items-center mt-6 px-2 py-6 h-72 bg-white rounded-xl">
        <img
          className="h-56 w-full object-contain object-center"
          src="/images/affiliations/ntl-top-100-member-b.png"
        />
      </div>
      <div className="flex flex-col items-center mt-6 px-2 py-6 h-72 bg-white rounded-xl shadow">
        <img
          className="h-56 w-full object-contain object-center"
          src="/images/affiliations/usdva-accredited-attorney.png"
        />
        <div className="text-center">
          <Link href="/veterans">
            <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
              Veterans
            </a>
          </Link>
        </div>
        <span className="-mt-2 text-gray-900 text-xs tracking-tight leading-tight block text-center">
          *Tap this button to learn more.
        </span>
      </div>
    </div>
  );
};

export default RecognitionAffiliationBlock;
