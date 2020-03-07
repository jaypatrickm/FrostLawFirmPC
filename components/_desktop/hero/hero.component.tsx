import React from 'react';
import {
  HeroBgWrapper,
  HeroText,
  SpanHighlightBlue,
  HeroContentLayoutContainer,
  HeroContentLeft,
  HeroContentRight,
  ButtonsLayoutContainer,
  ButtonsLeft,
  ButtonsRight
} from './hero.styles';
import LogoSvg from '../../../components/icons/logo/logo.svg';
import ButtonPrimary from '../../../components/_desktop/button-primary/button-primary.component';
import ButtonSecondary from '../../../components/_desktop/button-secondary/button-secondary.component';

const Hero = () => {
  return (
    <HeroBgWrapper>
      <HeroContentLayoutContainer>
        <HeroContentLeft>
          <HeroText>
            Have you or someone you know been diagnosed with
            <SpanHighlightBlue> Mesothelioma</SpanHighlightBlue>,
            <SpanHighlightBlue> Asbestosis</SpanHighlightBlue>, or
            <SpanHighlightBlue> Lung Cancer</SpanHighlightBlue>?
          </HeroText>

          <ButtonsLayoutContainer>
            <ButtonsLeft>
              <ButtonPrimary url="/contact">Contact Us</ButtonPrimary>
            </ButtonsLeft>
            <ButtonsRight>
              <ButtonSecondary url="/about">About Us</ButtonSecondary>
            </ButtonsRight>
          </ButtonsLayoutContainer>
        </HeroContentLeft>

        <HeroContentRight>
          <LogoSvg className="w-64 m-auto" />
        </HeroContentRight>
      </HeroContentLayoutContainer>
    </HeroBgWrapper>
  );
};

export default Hero;
