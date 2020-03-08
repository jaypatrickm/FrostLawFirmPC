import React from 'react';
import {
  Header,
  ListContainer,
  ListItem,
  ListAnchor
} from './highlights-block.styles';

const HighlightsBlock = () => {
  return (
    <>
      <Header>Highlights</Header>
      <ListContainer>
        <ListItem>
          <ListAnchor
            href="https://pages.cvn.com/clips/mealeys/511-hub?utm_campaign=Mealeys%20Clips&amp;utm_source=SBSC0"
            target="_blank"
            title="Link opens in a new window outside of this
            website"
          >
            Mineral Company Knew of Dangers of Asbestos in Its Talc
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="http://blog.cvn.com/vanderbilt-settles-potentially-11.5m-talc-mesothelioma-lawsuit-during-jury-deliberations"
            target="_blank"
            title="Link opens in a new window outside of this
            website"
          >
            Vanderbilt Settles Potentially $11.5M Talc Meso Case
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="http://civiljusticemagazine.com/2013/12/18/lawyer-of-the-week-mesothelioma-attorney-scott-frost/"
            target="_blank"
            title="Link opens in a new window outside of this
            website"
          >
            Lawyer of the Week: Mesothelioma Attorney Scott Frost
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="https://topverdict.com/lists/2016/california/50-pi"
            target="_blank"
            title="Link opens in a new window outside of this
            website"
          >
            $7M Verdict reached and placed in Asbestos trial, Top 50 Personal
            Injury Verdicts in California in 2016
          </ListAnchor>
        </ListItem>
      </ListContainer>
    </>
  );
};

export default HighlightsBlock;
