import React from 'react';
import Link from 'next/link';
import MasterLayout from '../../../layouts/master/master.layout';
import Breadcrumbs from '../../../../components/breadcrumbs/breadcrumbs.component';
import ButtonPrimary from '../../../../components/_desktop/button-primary/button-primary.component';
import RecognitionAffiliationBlock from '../../../../components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component';
import Accordion from '../../../../components/_desktop/accordion/accordion.component';
import ScrollToTopButton from '../../../../components/scroll-to-top-button/scroll-to-top-button.component';
import BlogPostsFooter from '../../../../components/_desktop/blog-posts-footer/blog-posts-footer.component';
import { createMarkup } from '../../../../helpers/utils.helpers';
import {
  Wrapper,
  AttorneyLayoutContainer,
  LayoutTopContainer,
  AttorneyProfileContainer,
  ImageContainer,
  Image,
  ProfileName,
  RecognitionAffiliationContainer,
  LayoutBottomContainer,
  LayoutLeftContainer,
  AccordionsContainer,
  LayoutRightContainer,
  ProfileTextContent,
  ProfileRecognitionAffiliationBlockContainer,
  ButtonContainer
} from './index.styles';

type AttorneysNameDesktopProps = {
  attorneysNameDesktopProps: {
    attorneysNameProps: {
      isMobile: boolean;
      page: string;
    };
    attorneyInfo: {
      name: string;
      pathName: string;
      imageUrl: string;
      content: string;
      affiliations: { id: number; imageUrl: string; alt: string }[];
      listsOfAccomplishments: { title: string; items: string[] }[];
    };
  };
};

const AttorneysNameDesktop = ({
  attorneysNameDesktopProps
}: AttorneysNameDesktopProps) => {
  const { attorneysNameProps, attorneyInfo } = attorneysNameDesktopProps;
  const { isMobile, page } = attorneysNameProps;
  const {
    name,
    pathName,
    imageUrl,
    content,
    listsOfAccomplishments,
    affiliations
  } = attorneyInfo;

  return (
    <MasterLayout
      isMobile={isMobile}
      page={page}
      showRecognitionAffiliation={false}
    >
      <Wrapper>
        <Breadcrumbs
          path1="Home"
          url1="/"
          path2="Attorneys"
          url2="attorneys"
          path3={name}
          url3={'/' + pathName}
        />

        <AttorneyLayoutContainer>
          <LayoutTopContainer>
            <AttorneyProfileContainer>
              <ImageContainer>
                <Image src={imageUrl} />
              </ImageContainer>

              <ProfileName>{name}</ProfileName>
            </AttorneyProfileContainer>
            <RecognitionAffiliationContainer>
              <RecognitionAffiliationBlock
                items={affiliations}
                bgColor="bg-white"
                headerColor="text-frost-orange"
                headerHide={false}
              />
            </RecognitionAffiliationContainer>
          </LayoutTopContainer>
          <LayoutBottomContainer>
            <LayoutLeftContainer>
              <AccordionsContainer>
                {listsOfAccomplishments.map((item, index) => {
                  return (
                    <Accordion
                      key={index}
                      accordionTitle={item.title}
                      accordionList={item.items}
                    />
                  );
                })}
              </AccordionsContainer>
            </LayoutLeftContainer>
            <LayoutRightContainer>
              <ProfileTextContent
                dangerouslySetInnerHTML={createMarkup(content)}
              ></ProfileTextContent>
              <ProfileRecognitionAffiliationBlockContainer>
                <RecognitionAffiliationBlock
                  items={affiliations}
                  bgColor="bg-white"
                  headerColor="text-frost-orange"
                  headerHide={false}
                />
              </ProfileRecognitionAffiliationBlockContainer>
              <ButtonContainer>
                <Link href="/contact">
                  <ButtonPrimary>Contact Us</ButtonPrimary>
                </Link>
              </ButtonContainer>
            </LayoutRightContainer>
          </LayoutBottomContainer>
          <ScrollToTopButton />
        </AttorneyLayoutContainer>
        <BlogPostsFooter />
      </Wrapper>
    </MasterLayout>
  );
};

export default AttorneysNameDesktop;
