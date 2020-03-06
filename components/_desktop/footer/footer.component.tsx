import React from 'react';
import Link from 'next/link';
import LogoSvg from '../../icons/logo/logo.svg';
import LogoText from '../../icons/logo-text/logo-text.svg';
import RecognitionAffiliationBlock from '../recognition-affiliation-block/recognition-affiliation-block.component';

type FooterProps = {
  showRecognitionAffiliation?: boolean;
};

const Footer = ({ showRecognitionAffiliation = true }: FooterProps) => {
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
    <div className="flex-shrink-0 bg-frost-dark-blue pb-8">
      {showRecognitionAffiliation ? (
        <RecognitionAffiliationBlock items={affiliationImages} />
      ) : (
        ''
      )}
      <div className="flex flex-col md:flex-row max-w-screen-xl border-t border-white text-white m-auto pt-8">
        <div className="md:w-1/2 flex pl-6">
          <div className="md:w-1/3">
            <LogoSvg color="#fff" />
          </div>
          <div className="w-2/3 ml-8 mt-4">
            <LogoText className="max-w-sm" color="#fff" />
            <p className="font-bold mt-6">
              273 West 7th Street <br />
              San Pedro, CA 90731
            </p>
            <div className="mt-4">
              <span className="py-2">Tel: (866) FLF-MESO</span>
              <span className="block py-2"> Fax: (310) 861-8803</span>
            </div>
          </div>
        </div>
        <div className="ml-16 md:w-1/2 flex mt-16 pl-10">
          <nav className="flex flex-col">
            <Link href="/sitemap">
              <a className="underline hover:text-frost-orange">Site Map</a>
            </Link>
            <Link href="/contact">
              <a className="underline mt-3 hover:text-frost-orange">Contact</a>
            </Link>
            <Link href="/legalnotice">
              <a className="underline mt-3 hover:text-frost-orange">
                Legal Notice
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="text-center text-white">
        <span className="mt-6 ml-3 inline-block">
          &copy; 2020 FROST LAW FIRM, PC
        </span>
      </div>
    </div>
  );
};

export default Footer;
