import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeroBgWrapper = styled.div`
  background-image: url('/images/unsplash-bg.jpg');
  ${tw`px-4 py-4 bg-center bg-frost-light-gray md:py-20`}
`;

export const HeroText = styled.h1`
  ${tw`text-2xl lg:text-4xl font-extrabold tracking-wide leading-tight md:text-3xl`}
`;

export const SpanHighlightBlue = styled.span`
  ${tw`text-frost-blue`}
`;

export const HeroContentLayoutContainer = styled.div`
  ${tw`md:max-w-screen-xl flex items-center md:justify-center m-auto`}
`;

export const HeroContentLeft = styled.div`
  ${tw`w-full lg:w-2/3`}
`;

export const HeroContentRight = styled.div`
  ${tw`lg:w-1/3 hidden lg:block`}
`;

export const ButtonsLayoutContainer = styled.div`
  ${tw`mt-10 mb-8 flex flex-col items-center md:flex-row`}
`;

export const ButtonsLeft = styled.div`
  ${tw`mr-4`}
`;

export const ButtonsRight = styled.div`
  ${tw`mt-6 md:mt-0 mr-4 md:mr-0`}
`;
