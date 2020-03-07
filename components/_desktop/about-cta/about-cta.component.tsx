import React from 'react';
import ButtonPrimary from '../button-primary/button-primary.component';
import {
  Wrapper,
  LayoutContainer,
  ContentLeft,
  ContentRight,
  ImageContainer,
  Caption,
  TextLarge,
  ButtonContainer
} from './about-cta.styles';

const AboutCta = () => {
  return (
    <Wrapper>
      <LayoutContainer>
        <ContentLeft>
          <ImageContainer>
            <img
              src="/images/about/dadandmom.jpg"
              alt="Photo of Scott L. Frost's dad and mom."
            />
            <Caption>Scott's dad and mom.</Caption>
          </ImageContainer>
        </ContentLeft>
        <ContentRight>
          <TextLarge>
            Scott L. Frost's <br />
            family experience with Lung Cancer
          </TextLarge>
          <ButtonContainer>
            <ButtonPrimary url="/about">About Us</ButtonPrimary>
          </ButtonContainer>
        </ContentRight>
      </LayoutContainer>
    </Wrapper>
  );
};

export default AboutCta;
