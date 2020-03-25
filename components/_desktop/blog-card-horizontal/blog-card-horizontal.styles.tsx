import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LayoutWrapper = styled.div`
  ${tw`sm:mx-4 bg-white shadow pb-4 mb-4 cursor-pointer`}
`;

export const ImageContainer = styled.div`
  ${tw`h-56 overflow-hidden`}
`;

export const Image = styled.img`
  ${tw`w-full h-56 object-cover object-top`}
`;

export const Title = styled.h4.attrs({
  className: 'line-clamp'
})`
  ${tw`px-4 pt-3 text-2xl text-frost-light-blue font-extrabold leading-6`}
`;

export const Author = styled.span`
  ${tw`px-4 block text-sm text-gray-700 font-semibold`}
`;

export const Date = styled.span`
  ${tw`px-4 block text-sm text-gray-600`}
`;
export const LinkContainer = styled.div`
  ${tw`px-4 text-left`}
`;

export const LinkAnchor = styled.a.attrs({
  className: 'text-link'
})`
  ${tw`font-extrabold text-xl`}
`;
