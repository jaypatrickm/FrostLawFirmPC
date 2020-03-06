import React from 'react';

const ResultsBlock = () => {
  return (
    <div className="bg-frost-light-gray pt-8 px-4 pb-10">
      <h2 className="text-frost-light-blue font-extrabold text-4xl leading-tight">
        Results
      </h2>
      <ul className="mt-2">
        <li className="pb-4">
          <a className="underline text-frost-blue" href="#" target="_blank">
            $7M+ Verdict(link opens pdf file)
          </a>
        </li>
        <li className="pb-4">
          <a className="underline text-frost-blue" href="#" target="_blank">
            $8.66M Verdict (link opens pdf file)
          </a>
        </li>
        <li className="pb-4">
          <a className="underline text-frost-blue" href="#" target="_blank">
            $9.9M Verdict(link opens pdf file)
          </a>
        </li>
        <li className="pb-4">
          <a
            className="underline text-frost-blue"
            href="https://www.americanbar.org/content/dam/aba/administrative/tips/asbestos_tf/SPHCOfficial1-9-13%20Transcript.authcheckdam.pdf"
            target="_blank"
          >
            $9.7M Verdict (link opens pdf file)
          </a>
        </li>
        <li className="pb-4">
          <a
            className="underline text-frost-blue"
            href="https://www.americanbar.org/content/dam/aba/administrative/tips/asbestos_tf/SPHCOfficial1-9-13%20Transcript.authcheckdam.pdf"
            target="_blank"
          >
            $1.6 Billion Bankruptcy Trust Award (link opens pdf file)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ResultsBlock;
