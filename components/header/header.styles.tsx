import styled from 'styled-components';
import tw from 'tailwind.macro';

interface HeaderProps {
  active: boolean;
}

export const HeaderWrapper = styled.div<HeaderProps>`
  ${tw`flex flex-col justify-between items-center sm:px-4 sm:py-3 bg-white shadow-md sticky top-0 z-10`}
  ${({ active }) => (active ? tw` min-h-screen sm:min-h-full sm:relative` : '')}
`;

export const HeaderContentLayoutContainer = styled.div<HeaderProps>`
  ${tw`w-full sm:flex`}
  ${({ active }) =>
    active ? tw`md:justify-between flex-sticky` : tw`sm:justify-between`}
`;

export const HeaderTopLevelContentContainer = styled.div`
  ${tw`flex items-center justify-between px-4 py-3 sm:p-0 sm:w-1/3 sm:inline-flex`}
`;

export const LogoTextContainer = styled.div`
  ${tw`sm:hidden lg:block mr-0 sm:mr-auto lg:pl-2`}
`;

export const MobileMenuContainer = styled.div`
  ${tw`sm:hidden`}
`;

export const MobileMenuButton = styled.button`
  ${tw`block rounded bg-frost-blue`}
`;

export const HeaderNavigation = styled.nav<HeaderProps>`
  ${tw`sm:flex sm:p-0 bg-white sm:w-2/3 w-full sm:items-center sm:justify-end sm:bg-transparent`}
  ${({ active }) => (active ? tw` block sm:inline-flex` : tw` hidden`)}
`;

export const MobileMenuContent = styled.div`
  ${tw`sm:hidden px-6 pt-8 pb-8`}
`;

export const Address = styled.p`
  ${tw`pt-3 font-bold text-frost-blue`}
`;

export const Phone = styled.span`
  ${tw`block text-frost-blue`}
`;

export const PhoneButtonContainer = styled.div<HeaderProps>`
  ${tw`bg-frost-orange rounded text-center px-4 py-2 w-full mt-8`}
  ${({ active }) => (active ? tw` block sm:hidden` : tw` hidden`)}
`;

export const TapToCallText = styled.h3`
  ${tw`block text-white font-bold text-2xl tracking-tight leading-tight`}
`;
