import React from 'react';
import Link from 'next/link';

const RecognitionAffiliationBlock = () => {
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
