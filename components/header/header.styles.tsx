import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeaderWrapper = styled.div.attrs({})``;

export const HeaderContainer = styled.nav.attrs(props => ({
  className: 'flex items-center justify-between flex-wrap bg-teal-500 p-6'
}))``;

export const LogoContainer = styled.div.attrs(props => ({
  className: 'flex items-center flex-shrink-0 text-white mr-6'
}))``;

export const LogoSvgWrapper = styled.svg.attrs(props => ({
  className: 'fill-current h-8 w-8 mr-2',
  width: '54',
  height: '54',
  viewBox: '0 0 54 54',
  xmlns: 'http://www.w3.org/2000/svg'
}))``;

export const LogoAnchor = styled.a.attrs(props => ({
  className: 'font-semibold text-xl tracking-tight hover:text-white',
  href: '#responsive-header'
}))``;

export const MobileMenuContainer = styled.div.attrs(props => ({
  className: 'block lg:hidden'
}))``;

export const MobileMenuButton = styled.button.attrs(props => ({
  className:
    'flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
}))``;

export const MobileMenuSvgWrapper = styled.svg.attrs(props => ({
  className: 'fill-current h-3 w-3',
  viewBox: '0 0 20 20',
  xmlns: 'http://www.w3.org/2000/svg'
}))``;

export const NavContainer = styled.div.attrs(props => ({
  className: `w-full ${props.className} block flex-grow lg:flex lg:items-center lg:w-auto`
}))``;

export const LinkContainer = styled.div.attrs(props => ({
  className: 'text-sm lg:flex-grow'
}))``;

export const LinkAnchor = styled.a.attrs(props => ({
  className:
    'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4',
  href: '#responsive-header'
}))``;
