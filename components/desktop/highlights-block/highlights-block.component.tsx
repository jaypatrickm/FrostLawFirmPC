import React from 'react';

const HighlightsBlock = () => {
  return (
    <>
      <h2 className="font-extrabold text-2xl lg:text-3xl text-frost-blue">
        Highlights
      </h2>
      <ul className="mt-2 lg:text-lg">
        <li className="py-2 border-t border-b border-gray-400">
          <a
            className="text-link"
            href="https://pages.cvn.com/clips/mealeys/511-hub?utm_campaign=Mealeys%20Clips&amp;utm_source=SBSC0"
            target="_blank"
            title="Link opens in a new window outside of this website"
          >
            Mineral Company Knew of Dangers of Asbestos in Its Talc
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="http://blog.cvn.com/vanderbilt-settles-potentially-11.5m-talc-mesothelioma-lawsuit-during-jury-deliberations"
            target="_blank"
            title="Link opens in a new window outside of this website"
          >
            Vanderbilt Settles Potentially $11.5M Talc Meso Case
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="http://civiljusticemagazine.com/2013/12/18/lawyer-of-the-week-mesothelioma-attorney-scott-frost/"
            target="_blank"
            title="Link opens in a new window outside of this website"
          >
            Lawyer of the Week: Mesothelioma Attorney Scott Frost
          </a>
        </li>
        <li className="py-2 border-t-0 border-b border-gray-400">
          <a
            className="text-link"
            href="https://topverdict.com/lists/2016/california/50-pi"
            target="_blank"
            title="Link opens in a new window outside of this website"
          >
            $7M Verdict reached and placed in Asbestos trial, Top 50 Personal
            Injury Verdicts in California in 2016
          </a>
        </li>
      </ul>
    </>
  );
};

export default HighlightsBlock;
