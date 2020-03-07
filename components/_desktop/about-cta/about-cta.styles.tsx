import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-frost-blue py-8`}
`;

export const LayoutContainer = styled.div`
  ${tw`flex flex-col sm:flex-row items-center justify-center sm:px-2 max-w-screen-xl m-auto`}
`;

export const ContentLeft = styled.div`
  ${tw`md:w-1/2 w-full`}
`;

export const ContentRight = styled.div`
  ${tw`md:w-1/2 w-full pt-4 sm:p-8`}
`;

export const ImageContainer = styled.div`
  ${tw`bg-white max-w-lg m-auto sm:ml-auto sm:p-3 shadow`}
`;

export const Caption = styled.span`
  ${tw`py-2 block text-sm text-black leading-normal text-center`}
`;

export const TextLarge = styled.h2`
  ${tw`md:text-5xl m-auto md:ml-0 md:mr-0 font-extrabold tracking-wide text-white text-3xl leading-none px-4 md:leading-tight`}
`;

export const ButtonContainer = styled.div`
  ${tw`mt-5 flex justify-center md:ml-0 sm:mt-10`}
`;
