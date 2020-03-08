import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-white mt-4 pb-5`}
`;

export const LayoutContainer = styled.div`
  ${tw`max-w-screen-xl m-auto`}
`;

export const Header = styled.h2`
  ${tw`text-4xl px-4 lg:text-5xl text-center font-extrabold text-frost-blue`}
`;

export const ContentContainer = styled.div`
  ${tw`lg:w-2/3 lg:m-auto bg-white pb-6`}
  & {
    p {
      ${tw`px-4 mt-3 leading-tight tracking-wider text-lg`}
    }
  }
`;
