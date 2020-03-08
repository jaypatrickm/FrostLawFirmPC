import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-white`}
`;

export const LayoutContainer = styled.div`
  ${tw`max-w-screen-xl m-auto flex`}
`;

export const ContentContainer = styled.div`
  ${tw`md:w-2/3 md:m-auto md:px-4 py-8`}
`;

export const TitleContainer = styled.div`
  ${tw`px-4 pb-4`}
`;

export const Title = styled.h1`
  ${tw`font-extrabold text-frost-blue text-4xl lg:text-5xl leading-tight`}
`;

export const Author = styled.span`
  ${tw`block text-sm text-gray-700 font-semibold`}
`;

export const Date = styled.span`
  ${tw`block text-sm text-gray-600`}
`;

export const MainImageContainer = styled.div`
  ${tw`py-4`}
`;

export const MainImageCaption = styled.span`
  ${tw`py-2 px-4 block text-xs text-black leading-tight`}
`;

export const PostContent = styled.div`
  ${tw`px-4`}
`;

export const BlogPostsFooterTitle = styled.span`
  ${tw`text-frost-blue text-2xl font-extrabold px-4 text-center leading-tight`}
`;
