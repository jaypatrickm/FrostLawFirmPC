import React from 'react';
import Link from 'next/link';

type RecognitionAffiliationBlockProps = {
  items: {
    id: number;
    imageUrl: string;
    alt: string;
  }[];
  bgColor?: string;
  headerColor?: string;
  headerHide?: boolean;
};

const RecognitionAffiliationBlock = ({
  items,
  bgColor = 'bg-frost-dark-blue',
  headerColor = 'text-white',
  headerHide = false
}: RecognitionAffiliationBlockProps) => {
  return (
    <div className={bgColor + ' p-4'}>
      <div className="max-w-screen-xl m-auto">
        {headerHide ? (
          ''
        ) : (
          <h2
            className={
              headerColor +
              ' font-extrabold text-2xl leading-tight text-center mb-2'
            }
          >
            Recognition & Affiliation
          </h2>
        )}

        <div className="flex flex-row lg:flex-no-wrap flex-wrap m-auto">
          {items.map((element, index) => {
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
