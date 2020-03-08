import styled from 'styled-components';
import tw from 'tailwind.macro';

export const ImageContainer = styled.div`
  ${tw`py-3`}
`;

export const ImageCaption = styled.span`
  ${tw`py-2 block text-sm lg:text-lg text-black text-center leading-normal`}
`;

export const ContentContainer = styled.div`
  ${tw`px-4 leading-snug tracking-wider text-lg lg:text-xl`}
  & {
    p {
      ${tw`mt-4`}
    }
  }
`;

export const PullQuote = styled.span`
  ${tw`text-4xl font-extrabold text-frost-blue text-center leading-tight tracking-normal py-4 mt-4 inline-block`}
`;

export const ButtonContainer = styled.div`
  ${tw`mt-10 flex justify-center`}
`;
