import { useState } from 'react';
import { NextPage } from 'next';
import { HeaderWrapper } from './header.styles';
import LogoSvg from '../../components/icons/logo/logo.svg';
import LogoText from '../../components/icons/logo-text/logo-text.svg';
import Menu from '../../components/icons/menu/menu.svg';
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
    <HeaderWrapper
      className={
        (showMenu
          ? ' absolute min-h-screen sm:min-h-full  sm:relative md:w-full '
          : '') +
        'flex flex-col w-full sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 bg-white shadow-md sticky top-0 z-10'
      }
    >
      <div
        className={
          showMenu
            ? ' w-full  md:justify-between flex-sticky sm:flex sm:flex-none'
            : ' w-full sm:flex sm:justify-between'
        }
      >
        <div className="flex items-center sm:items-center justify-between px-4 py-3 sm:p-0 sm:w-1/3 sm:inline-flex">
          <div className="text-xl hover:text-blue-900 text-blue-500 font-extrabold">
            <a href="/">
              <LogoSvg />
            </a>
          </div>
          <div className="sm:hidden lg:block mr-0 sm:mr-auto lg:pl-2 lg:mr-auto">
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
            (showMenu ? 'block sm:inline-flex' : 'hidden') +
            ' sm:flex sm:p-0 bg-white sm:w-2/3 w-full sm:items-center sm:justify-end sm:bg-transparent'
          }
        >
          <a
            className={(page == 'Home' ? 'active' : '') + ' nav-link'}
            href="/"
          >
            Home
          </a>

          <a
            className={(page == 'About' ? 'active' : '') + ' nav-link'}
            href="/about"
          >
            About
          </a>
          <a
            className={(page == 'Attorneys' ? 'active' : '') + ' nav-link'}
            href="/attorneys"
          >
            Attorneys
          </a>
          <a
            className={(page == 'Blog' ? 'active' : '') + ' nav-link'}
            href="/blog"
          >
            Blog
          </a>
          <a
            className={(page == 'Veterans' ? 'active' : '') + ' nav-link'}
            href="/veterans"
          >
            Veterans
          </a>
          <a
            className={(page == 'Contact' ? 'active' : '') + ' nav-link'}
            href="/contact"
          >
            Contact
          </a>
          <div className="sm:hidden pl-6 pt-8 pb-8">
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
          (showMenu ? 'block sm:hidden' : 'hidden') +
          ' flex-shrink bg-frost-blue p-4'
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
