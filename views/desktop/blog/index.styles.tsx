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

export const PostGridContainer = styled.div.attrs({
  className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
})`
  ${tw`mt-4`}
`;
