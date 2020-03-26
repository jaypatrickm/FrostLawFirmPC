import React from 'react';
import Link from 'next/link';
import LogoSvg from '../../icons/logo/logo.svg';
import LogoText from '../../icons/logo-text/logo-text.svg';
import RecognitionAffiliationBlock from '../recognition-affiliation-block/recognition-affiliation-block.component';
import {
  FooterWrapper,
  FooterLayoutContainer,
  FooterContentLeftLayout,
  FooterContentRightLayout,
  LogoContainer,
  LogoTextAndInfoContainer,
  Address,
  PhoneContainer,
  Phone,
  NavigationLayoutContainer,
  NavigationAnchor,
  CopyrightContainer
} from './footer.styles';

type FooterProps = {
  showRecognitionAffiliation?: boolean;
};

const Footer = ({ showRecognitionAffiliation = true }: FooterProps) => {
  return (
    <FooterWrapper>
      {showRecognitionAffiliation ? <RecognitionAffiliationBlock /> : ''}
      <FooterLayoutContainer>
        <FooterContentLeftLayout>
          <LogoContainer>
            <LogoSvg colorPrimary="text-white" colorSecondary="text-white" />
          </LogoContainer>
          <LogoTextAndInfoContainer>
            <LogoText className="max-w-sm" color="#fff" />
            <Address>
              273 West 7th Street <br />
              San Pedro, CA 90731
            </Address>
            <PhoneContainer>
              <Phone>
                <a className="hover:text-frost-orange" href="tel:+1866FLFMESO">
                  Tel: (866) FLF-MESO
                </a>
              </Phone>
              <Phone> Fax: (310) 861-8803</Phone>
            </PhoneContainer>
          </LogoTextAndInfoContainer>
        </FooterContentLeftLayout>
        <FooterContentRightLayout>
          <NavigationLayoutContainer>
            <Link href="/sitemap" passHref>
              <NavigationAnchor>Site Map</NavigationAnchor>
            </Link>
            <Link href="/contact" passHref>
              <NavigationAnchor>Contact</NavigationAnchor>
            </Link>
            <Link href="/legalnotice" passHref>
              <NavigationAnchor>Legal Notice</NavigationAnchor>
            </Link>
          </NavigationLayoutContainer>
        </FooterContentRightLayout>
      </FooterLayoutContainer>
      <CopyrightContainer>&copy; 2020 FROST LAW FIRM, PC</CopyrightContainer>
    </FooterWrapper>
  );
};

export default Footer;
