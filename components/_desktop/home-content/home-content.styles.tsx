import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HomeContentContainer = styled.div`
  ${tw`m-auto px-4 py-4 sm:w-5/6 lg:py-8 md:w-8/12 lg:w-7/12 max-w-screen-xl`}
`;

export const Title = styled.div`
  ${tw`text-frost-blue text-4xl lg:text-5xl font-extrabold text-center`}
`;
export const Paragraph = styled.p`
  ${tw`mt-3 leading-tight tracking-wider text-lg lg:text-2xl`}
`;

export const Question = styled.h3`
  ${tw`mt-5 text-lg lg:text-2xl font-bold leading-tight tracking-normal block`}
`;

export const TextLink = styled.a.attrs({
  className: 'text-link'
})`
  ${tw`mt-3 inline-block tracking-wider text-lg lg:text-2xl cursor-pointer`}
`;

export const ButtonContainer = styled.div`
  ${tw`w-full flex justify-center mt-6 lg:mt-8 pb-4`}
`;
