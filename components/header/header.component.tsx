import { useState } from 'react';
import { NextPage } from 'next';
import { HeaderWrapper } from './header.styles';
import LogoSvg from '../../assets/icons/logo/logo.svg';
import LogoText from '../../assets/icons/logo-text/logo-text.svg';
import Menu from '../../assets/icons/menu/menu.svg';
type Props = {
  showMobileMenu: boolean;
};

const Header: NextPage<Props> = ({ showMobileMenu }) => {
  const [showMenu, setShowMenu] = useState(showMobileMenu);

  const onClickToggleMenu = () => {
    setShowMenu(!showMenu);
    return !showMenu;
  };

  return (
    <HeaderWrapper
      className={
        (showMenu ? ' absolute min-h-screen ' : '') +
        'flex flex-col w-screen sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 bg-white shadow-md sticky top-0'
      }
    >
      <div className={showMenu ? ' flex-sticky ' : ''}>
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="text-xl hover:text-blue-900 text-blue-500 font-extrabold">
            <a href="/">
              <LogoSvg />
            </a>
          </div>
          <div>
            <a href="/">
              <LogoText />
            </a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={onClickToggleMenu}
              type="button"
              className="block rounded bg-frost-blue hover:border-blue-900"
            >
              <Menu showMenu={showMenu} />
            </button>
          </div>
        </div>

        <nav
          className={
            (showMenu ? 'block' : 'hidden') + ' sm:flex sm:p-0 bg-white'
          }
        >
          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-t-2 border-b-2"
            href="/"
          >
            Home
          </a>

          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-b-2"
            href="/about"
          >
            About
          </a>
          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-b-2"
            href="/attorneys"
          >
            Attorneys
          </a>
          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-b-2"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-b-2"
            href="/veterans"
          >
            Veterans
          </a>
          <a
            className="block pl-6 py-1 text-frost-blue font-bold text-2xl bg-frost-light-gray border-frost-lightest-blue border-b-2"
            href="/contact"
          >
            Contact
          </a>
          <div className="pl-6 pt-8 pb-8">
            <LogoText />
            <p className="pt-3 font-bold text-frost-blue">
              273 West 7th Street <br />
              San Pedro, CA 90731
            </p>
            <br />
            <span className="block text-frost-blue">Tel: (866) FLF-MESO</span>
            <span className="block text-frost-blue">Fax: (310) 861-8803</span>
          </div>
        </nav>
      </div>
      <div
        className={
          (showMenu ? 'block' : 'hidden') +
          ' flex-shrink bg-frost-blue px-3 py-2'
        }
      >
        <h3 className="block text-white font-bold text-2xl tracking-tight leading-tight">
          Tap to call +1(866) FLF-MESO
        </h3>
        <span className="block text-white font-light text-md leading-tight">
          *Tapping this button will trigger a phone call on the device you are
          using.
        </span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
