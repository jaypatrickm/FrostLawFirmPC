import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`bg-white`}
`;

export const AttorneyLayoutContainer = styled.div`
  ${tw`max-w-screen-xl pt-8 m-auto`}
`;

export const LayoutTopContainer = styled.div`
  ${tw`lg:flex`}
`;

export const AttorneyProfileContainer = styled.div`
  ${tw`lg:w-1/3 mt-auto`}
`;

export const ImageContainer = styled.div`
  ${tw`flex justify-center`}
`;

export const Image = styled.img`
  ${tw`rounded-full border-white border-4 h-40 w-40 object-cover object-center`}
`;

export const ProfileName = styled.h1`
  ${tw`pt-20 -mt-20 font-extrabold text-frost-blue text-4xl text-center`}
`;

export const RecognitionAffiliationContainer = styled.div`
  ${tw`hidden lg:w-2/3 lg:block`}
`;

export const LayoutBottomContainer = styled.div`
  ${tw`flex flex-col md:flex-row`}
`;

export const LayoutLeftContainer = styled.div`
  ${tw`w-full md:w-1/3 lg:w-1/3 lg:px-2`}
`;

export const AccordionsContainer = styled.div`
  ${tw`flex flex-col items-center px-2 py-6`}
`;

export const LayoutRightContainer = styled.div`
  ${tw`w-full lg:w-2/3 bg-white h-full lg:px-2`}
`;

export const ProfileTextContent = styled.div`
  ${tw`p-4 leading-tight tracking-wider text-lg`}
`;

export const ProfileRecognitionAffiliationBlockContainer = styled.div`
  ${tw`lg:hidden`}
`;

export const ButtonContainer = styled.div`
  ${tw`pt-4 pb-8 flex justify-center mb-4 px-4`}
`;
