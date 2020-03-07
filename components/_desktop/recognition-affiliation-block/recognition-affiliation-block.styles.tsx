import styled from 'styled-components';
import tw from 'tailwind.macro';

export const RecognitionAffiliationWrapper = styled.div`
  ${tw`p-4`}
`;

export const LayoutContainer = styled.div`
  ${tw`max-w-screen-xl m-auto`}
`;

export const Title = styled.h2`
  ${tw`font-extrabold text-2xl leading-tight text-center mb-2`}
`;

export const ImageLayoutContainer = styled.div`
  ${tw`flex flex-row lg:flex-no-wrap flex-wrap m-auto`}
`;

export const ImageContainer = styled.div`
  ${tw`xl:w-1/6 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex items-center`}
`;

export const ImageMask = styled.div`
  ${tw`m-2 p-4 flex items-center justify-center h-32 w-full bg-white shadow`}
`;

export const Image = styled.img`
  ${tw`w-full h-full object-contain object-center`}
`;
