import styled from 'styled-components';
import tw from 'tailwind.macro';

export const BlogPostsWrapper = styled.div`
  ${tw`bg-white shadow border-t-4 border-frost-blue`}
`;

export const BlogPostsLayoutContainer = styled.div`
  ${tw`max-w-screen-xl m-auto pb-2`}
`;

export const BlogPostsHeader = styled.h3`
  ${tw`text-frost-blue text-2xl font-extrabold px-4 py-4 text-center leading-tight`}
`;

export const BlogPostsLinkAnchor = styled.a`
  ${tw`underline hover:text-frost-orange cursor-pointer`}
`;
