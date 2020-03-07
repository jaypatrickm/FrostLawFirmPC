import styled from 'styled-components';
import tw from 'tailwind.macro';

export const FooterWrapper = styled.div`
  ${tw`flex-shrink-0 bg-frost-dark-blue pb-8`}
`;

export const FooterLayoutContainer = styled.div`
  ${tw`flex flex-col md:flex-row max-w-screen-xl border-t border-white text-white m-auto pt-8`}
`;

export const FooterContentLeftLayout = styled.div`
  ${tw`md:w-1/2 flex pl-6`}
`;

export const FooterContentRightLayout = styled.div`
  ${tw`ml-16 md:w-1/2 flex pl-10`}
`;

export const LogoContainer = styled.div`
  ${tw`md:w-1/3`}
`;

export const LogoTextAndInfoContainer = styled.div`
  ${tw`w-2/3 ml-8 mt-4`}
`;

export const Address = styled.p`
  ${tw`font-bold mt-6`}
`;

export const PhoneContainer = styled.div`
  ${tw`mt-4`}
`;

export const Phone = styled.span`
  ${tw`block py-2`}
`;

export const NavigationLayoutContainer = styled.nav`
  ${tw`flex flex-col pt-3`}
`;

export const NavigationAnchor = styled.a`
  ${tw`underline mb-3 hover:text-frost-orange cursor-pointer`}
`;

export const CopyrightContainer = styled.div`
  ${tw`text-center text-white mt-6 ml-3 `}
`;
