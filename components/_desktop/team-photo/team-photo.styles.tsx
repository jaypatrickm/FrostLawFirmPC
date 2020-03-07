import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TeamPhotoWrapper = styled.div`
  ${tw`w-full`}
`;

export const TeamPhotoContainer = styled.div`
  ${tw`bg-frost-blue py-8`}
`;

export const ImageContainer = styled.div`
  ${tw`max-w-3xl sm:p-4 bg-white mr-auto ml-auto shadow`}
`;

export const Image = styled.img``;

export const ImageCaption = styled.span`
  ${tw`py-2 px-4 block text-sm text-black text-center leading-normal`}
`;
