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
  let count = 0;

  return (
    <div className="bg-frost-dark-blue p-4">
      <div className="max-w-screen-xl m-auto">
        <h2 className="font-extrabold text-white text-2xl leading-tight text-center">
          Recognition & Affiliation
        </h2>
        <div className="mt-2 flex flex-row lg:flex-no-wrap flex-wrap m-auto">
          {items.map((element, index) => {
            count++;

            return (
              <div
                key={element.id}
                className="xl:w-1/6 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex items-center"
              >
                <div className="m-2 p-4 flex items-center justify-center h-32 w-full bg-white shadow">
                  <img
                    className="w-full h-full object-contain object-center"
                    src={element.imageUrl}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecognitionAffiliationBlock;
