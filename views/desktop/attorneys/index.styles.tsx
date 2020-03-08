import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-white py-4 -mb-24`}
`;

export const Header = styled.h1`
  ${tw`font-extrabold text-frost-blue lg:text-5xl text-4xl text-center`}
`;

export const AttorneysLayoutContainer = styled.div`
  ${tw`flex flex-col md:flex-row mt-24 mb-8 justify-center`}
`;
