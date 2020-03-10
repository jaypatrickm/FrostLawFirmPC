import styled from 'styled-components';
import tw from 'tailwind.macro';

export const MessageContainer = styled.div`
  ${tw`flex flex-col justify-center items-center px-4 mb-8`}
`;

export const IconContainer = styled.div`
  ${tw`w-16 my-3`}
`;

export const MessageTitle = styled.h3`
  ${tw`font-extrabold text-xl text-center w-full px-4`}
`;

export const MessageContent = styled.span`
  ${tw`px-4`}
`;
