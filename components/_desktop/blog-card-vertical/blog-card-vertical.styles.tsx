import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`md:ml-4 bg-white shadow mb-4 cursor-pointer`}
`;
export const LayoutContainer = styled.div`
  ${tw`flex flex-col md:flex-row md:h-40 md:overflow-hidden`}
`;

export const LayoutLeft = styled.div`
  ${tw`md:w-1/3 md:h-auto overflow-hidden`}
`;

export const Image = styled.img`
  ${tw`w-full h-full object-cover object-center`}
`;

export const LayoutRight = styled.div`
  ${tw`p-4 md:w-2/3 md:py-0 w-full`}
`;

export const Title = styled.h4.attrs({
  className: 'line-clamp'
})`
  ${tw`md:pt-3 text-2xl text-frost-light-blue font-extrabold leading-6`}
`;

export const Author = styled.span`
  ${tw`block text-sm text-gray-700 font-semibold`}
`;

export const Date = styled.span`
  ${tw`block text-sm text-gray-600`}
`;

export const LinkAnchor = styled.a.attrs({
  className: 'text-link'
})`
  ${tw`text-xl font-extrabold inline-block`}
`;
