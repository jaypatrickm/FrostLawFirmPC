import React from 'react';

const ResultsBlock = () => {
  return (
    <>
      <h2 className="font-extrabold text-2xl lg:text-3xl text-frost-blue">
        Results
      </h2>
      <ul className="mt-2 lg:text-lg">
        <li className="py-2 border-t border-b border-gray-400">
          <a
            className="text-link"
            href="/pdfs/LaMonica (5).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $7M+ Verdict
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="/pdfs/Saller (4).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $8.66M Verdict
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="/pdfs/Conway (2).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $9.9M Verdict
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="/pdfs/Brewer (1).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $9.7M Verdict
          </a>
        </li>
        {/* <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="https://www.americanbar.org/content/dam/aba/administrative/tips/asbestos_tf/SPHCOfficial1-9-13%20Transcript.authcheckdam.pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $1.6 Billion Bankruptcy Trust Award
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default ResultsBlock;
