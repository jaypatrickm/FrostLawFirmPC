import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`sm:px-4 py-6 bg-frost-light-gray shadow`}
`;

export const LayoutContainer = styled.div`
  ${tw`max-w-screen-xl flex flex-col md:flex-row m-auto`}
`;

export const LayoutLeftBlock = styled.div`
  ${tw`px-4 sm:px-0 md:w-1/3`}
`;

export const LayoutRightBlock = styled.div`
  ${tw`w-full mt-4 md:mt-0 md:w-2/3 md:pl-4`}
`;

export const BlogHeaderContainer = styled.span`
  ${tw`px-4 sm:px-0 text-2xl lg:text-3xl font-extrabold md:pl-4 mb-2 text-frost-blue`}
`;

export const BlogLink = styled.a`
  ${tw`underline hover:text-frost-dark-orange cursor-pointer`}
`;
