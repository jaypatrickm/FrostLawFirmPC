import React from 'react';
import Link from 'next/link';
import ButtonPrimary from '../button-primary/button-primary.component';
import {
  HomeContentContainer,
  Title,
  Paragraph,
  TextLink,
  Question,
  ButtonContainer
} from './home-content.styles';

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <Title>FROST LAW FIRM, PC</Title>
      <Paragraph>
        The best attorneys for mesothelioma, asbestosis, and lung cancer
        representation. We have represented victims of disease for over eighteen
        years. We represent families who have been harmed by corporations. Our
        mission is to make sure this never happens to our children and
        grandchildren and keep our communities safe for these future
        generations.
      </Paragraph>
      <Question>
        I have Mesothelioma/Asbestosis/Lung Cancer, what can I do legally?
      </Question>
      <Paragraph>
        First, we sympathize with you during this difficult time and would like
        to say that you are not alone. Our attorneys know first-hand what a
        life-changing diagnosis can do to a person and family.
      </Paragraph>
      <Link href="/about">
        <TextLink>Click here to go to Scott Frost’s story.</TextLink>
      </Link>
      <Paragraph>
        Tell us your story and we can help you best decide how you can approach
        your case.
      </Paragraph>
      <Question>
        Are Frost Law Firm Mesothelioma/Asbestosis/Lung Cancer attorneys near
        me?
      </Question>
      <Paragraph>
        We have represented mesothelioma patients across the country; including
        Hawaii, California, Washington, Oregon, Florida, Illinois, Missouri,
        Nevada, Massachusetts, New York, Oklahoma, Georgia, Kentucky, Louisiana,
        and Texas.
      </Paragraph>
      <ButtonContainer>
        <ButtonPrimary url="/contact">Contact Us</ButtonPrimary>
      </ButtonContainer>
    </HomeContentContainer>
  );
};

export default HomeContent;
