import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TitledList = styled.div`
  ${tw`w-full text-center border-2 border-frost-blue text-white`}
  & {
    h2 {
      ${tw`font-bold text-xl text-white bg-frost-blue border-b-2 border-frost-blue py-2`}
    }
    ul {
      ${tw`w-full text-center m-auto text-frost-blue`}
      li {
        ${tw`py-1`}
      }
    }
  }
`;

export const Wrapper = styled.div`
  ${tw`mx-6 mb-32 inline-block bg-white inline-flex flex-col rounded shadow md:max-w-2xl`}
`;

export const LayoutContainer = styled.div`
  ${tw`flex flex-col -mt-24 w-full`}
`;

export const ImageContainer = styled.div`
  ${tw`pt-4 m-auto`}
`;

export const Image = styled.img`
  ${tw`rounded-full border-white border-4 shadow h-40 w-40 object-cover object-center`}
`;

export const Name = styled.span`
  ${tw`pb-4 text-3xl block text-center font-extrabold text-frost-blue`}
`;

export const ContentWrapper = styled.div`
  ${tw`w-full`}
  & {
    p {
      ${tw`p-4`}
    }
  }
`;

export const LinkContainer = styled.div`
  ${tw`text-center mb-4 px-4`}
`;

export const ButtonSquare = styled.a`
  ${tw`bg-frost-orange hover:bg-frost-dark-orange text-xl rounded w-full sm:w-64 py-2 text-white font-bold inline-block cursor-pointer`}
`;
