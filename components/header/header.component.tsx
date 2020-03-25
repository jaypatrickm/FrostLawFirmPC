import { useState } from 'react';
import {
  HeaderWrapper,
  HeaderContentLayoutContainer,
  HeaderTopLevelContentContainer,
  LogoTextContainer,
  MobileMenuContainer,
  MobileMenuButton,
  HeaderNavigation,
  MobileMenuContent,
  Address,
  Phone,
  PhoneButtonContainer,
  TapToCallText
} from './header.styles';
import LogoSvg from '../../components/icons/logo/logo.svg';
import LogoText from '../../components/icons/logo-text/logo-text.svg';
import Menu from '../../components/icons/menu/menu.svg';
import Link from 'next/link';

type HeaderProps = {
  showMobileMenu: boolean;
  page: string;
};

const Header = ({ showMobileMenu, page }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(showMobileMenu);

  const onClickToggleMenu = () => {
    setShowMenu(!showMenu);
    return !showMenu;
  };

  return (
    <HeaderWrapper active={showMenu}>
      <HeaderContentLayoutContainer active={showMenu}>
        <HeaderTopLevelContentContainer>
          <Link href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>

          <LogoTextContainer>
            <Link href="/">
              <a>
                <LogoText />
              </a>
            </Link>
          </LogoTextContainer>
          <MobileMenuContainer>
            <MobileMenuButton onClick={onClickToggleMenu} type="button">
              <Menu showMenu={showMenu} />
            </MobileMenuButton>
          </MobileMenuContainer>
        </HeaderTopLevelContentContainer>

        <HeaderNavigation active={showMenu}>
          <Link href="/">
            <a className={(page == 'Home' ? 'active' : '') + ' nav-link'}>
              Home
            </a>
          </Link>

          <Link href="/about">
            <a className={(page == 'About' ? 'active' : '') + ' nav-link'}>
              About
            </a>
          </Link>

          <Link href="/attorneys">
            <a className={(page == 'Attorneys' ? 'active' : '') + ' nav-link'}>
              Attorneys
            </a>
          </Link>

          <Link href="/blog">
            <a className={(page == 'Blog' ? 'active' : '') + ' nav-link'}>
              Blog
            </a>
          </Link>

          <Link href="/veterans">
            <a className={(page == 'Veterans' ? 'active' : '') + ' nav-link'}>
              Veterans
            </a>
          </Link>

          <Link href="/contact">
            <a className={(page == 'Contact' ? 'active' : '') + ' nav-link'}>
              Contact
            </a>
          </Link>

          <MobileMenuContent>
            <LogoText />
            <Address>
              273 West 7th Street <br />
              San Pedro, CA 90731
            </Address>
            <br />
            <Phone>
              <a className="hover:text-frost-orange" href="tel:+1866FLFMESO">
                Tel: (866) FLF-MESO
              </a>
            </Phone>
            <Phone>Fax: (310) 861-8803</Phone>
            <PhoneButtonContainer active={showMenu}>
              <>
                <a href="tel:+1866FLFMESO">
                  <TapToCallText>
                    Tap to call <br className="sm:hidden" /> +1(866) FLF-MESO
                  </TapToCallText>
                </a>
              </>
            </PhoneButtonContainer>
          </MobileMenuContent>
        </HeaderNavigation>
      </HeaderContentLayoutContainer>
    </HeaderWrapper>
  );
};

export default Header;
