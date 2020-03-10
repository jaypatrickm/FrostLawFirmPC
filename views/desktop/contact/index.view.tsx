import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import ContactForm from '../../../components/contact-form/contact-form.component';

import {
  Wrapper,
  LayoutContainer,
  Header,
  ContentContainer,
  FormContainer,
  TextContainer,
  Text,
  TextButton,
  RequiredText
} from './index.styles';

type ContactDesktopProps = {
  isMobile: boolean;
  page: string;
};

const ContactDesktop = ({ isMobile, page }: ContactDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Breadcrumbs path1="Home" url1="/" path2="Contact" url2="contact" />
      <Wrapper>
        <LayoutContainer>
          <Header>Contact Us</Header>
          <ContentContainer>
            <TextContainer>
              <Text>
                <TextButton>
                  <a href="tel:+1866FLFMESO">Call us at (866) FLF-MESO</a>
                </TextButton>
                Or complete this form below.
              </Text>
            </TextContainer>
            <FormContainer>
              <RequiredText>
                <span>*</span>required fields.
              </RequiredText>
              <ContactForm />
            </FormContainer>
          </ContentContainer>
        </LayoutContainer>
      </Wrapper>
    </MasterLayout>
  );
};

export default ContactDesktop;
