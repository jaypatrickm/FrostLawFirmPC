import React from 'react';
import {
  Header,
  ListContainer,
  ListItem,
  ListAnchor
} from './results-block.styles';

const ResultsBlock = () => {
  return (
    <>
      <Header>Results</Header>
      <ListContainer>
        <ListItem>
          <ListAnchor
            href="/pdfs/LaMonica (5).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $7M+ Verdict
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="/pdfs/Saller (4).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $8.66M Verdict
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="/pdfs/Conway (2).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $9.9M Verdict
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            href="/pdfs/Brewer (1).pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $9.7M Verdict
          </ListAnchor>
        </ListItem>
        {/* <ListItem>
          <ListAnchor
            href="https://www.americanbar.org/content/dam/aba/administrative/tips/asbestos_tf/SPHCOfficial1-9-13%20Transcript.authcheckdam.pdf"
            target="_blank"
            title="link opens a pdf file"
          >
            $1.6 Billion Bankruptcy Trust Award
          </ListAnchor>
        </ListItem> */}
      </ListContainer>
    </>
  );
};

export default ResultsBlock;
