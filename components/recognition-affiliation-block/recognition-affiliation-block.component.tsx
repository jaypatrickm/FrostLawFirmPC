import React from 'react';
import Link from 'next/link';

type RecognitionAffiliationBlockProps = {
  items: {
    id: number;
    imageUrl: string;
    alt: string;
  }[];
};

const RecognitionAffiliationBlock = ({
  items
}: RecognitionAffiliationBlockProps) => {
  return (
    <div className="bg-frost-light-gray pt-8 px-4 pb-4">
      <h2 className="text-frost-light-blue font-extrabold text-4xl leading-tight">
        Recognition & Affiliation
      </h2>
      <div className="flex flex-wrap">
        {items.map((element, index) => {
          return (
            <div className="w-1/2 flex items-center">
              <div className="m-2 flex items-center justify-center h-40 w-full bg-white p-4">
                <img
                  key={element.id}
                  className="w-full h-full object-contain object-center"
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
