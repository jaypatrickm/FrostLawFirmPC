import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Header = styled.h2`
  ${tw`font-extrabold text-2xl lg:text-3xl text-frost-blue`}
`;

export const ListContainer = styled.ul`
  ${tw`mt-2 lg:text-lg`}
`;

export const ListItem = styled.li`
  ${tw`py-2 border-t-0 border-b border-gray-400`}
  &:first-child {
    ${tw`border-t`}
  }
`;

export const ListAnchor = styled.a.attrs({
  className: 'text-link'
})``;
