import React from 'react';
import Link from 'next/link';
import {
  TitledList,
  Wrapper,
  LayoutContainer,
  ImageContainer,
  Image,
  Name,
  ContentWrapper,
  LinkContainer,
  ButtonSquare
} from './attorney-card.styles';

type AttorneyCardProps = {
  imageUrl: string;
  name: string;
  listTitle: string;
  listItems: string[];
  description: string;
  urlFriendlyName: string;
};

const AttorneyCard = ({
  imageUrl,
  name,
  listTitle,
  listItems,
  description,
  urlFriendlyName
}: AttorneyCardProps) => {
  return (
    <Wrapper>
      <LayoutContainer>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <Name>{name}</Name>

        <TitledList>
          <h2>{listTitle}</h2>
          <ul>
            {listItems.sort().map((item, index) => (
              <li key={item + '_' + index}>{item}</li>
            ))}
          </ul>
        </TitledList>

        <ContentWrapper>
          <p>{description}</p>
          <LinkContainer>
            <Link href={`/attorneys/${urlFriendlyName}`}>
              <ButtonSquare>Learn More</ButtonSquare>
            </Link>
          </LinkContainer>
        </ContentWrapper>
      </LayoutContainer>
    </Wrapper>
  );
};

export default AttorneyCard;
