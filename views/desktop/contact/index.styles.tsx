import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-white mt-4 pb-5`}
`;

export const LayoutContainer = styled.div`
  ${tw`max-w-screen-xl m-auto`}
`;

export const Header = styled.h1`
  ${tw`px-4 text-4xl lg:text-5xl text-center font-extrabold text-frost-blue`}
`;

export const ContentContainer = styled.div`
  ${tw`pt-6 pb-6 md:w-2/3 lg:w-1/2 md:m-auto`}
`;

export const FormContainer = styled.div`
  ${tw`px-4`}
`;

export const TextContainer = styled.div`
  ${tw`px-4`}
`;

export const Text = styled.p`
  ${tw`px-4 text-xl lg:text-2xl`}
`;

export const TextButton = styled.span`
  ${tw`mb-4 font-bold text-white bg-frost-orange hover:bg-frost-dark-orange w-full block py-2 rounded text-center cursor-pointer`}
`;
