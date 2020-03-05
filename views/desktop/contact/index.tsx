import React, { useState } from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import ContactForm from '../../../components/contact-form/contact-form.component';

type ContactDesktopProps = {
  isMobile: boolean;
  page: string;
};

const ContactDesktop = ({ isMobile, page }: ContactDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Desktop</h1>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs path1="Home" url1="/" path2="Contact" url2="contact" />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Contact Us
          </h1>
        </div>
        <div className="bg-white pt-6 pb-6">
          <div className="px-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContactDesktop;
