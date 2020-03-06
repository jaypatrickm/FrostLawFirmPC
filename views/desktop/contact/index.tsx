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
      <div className="bg-frost-light-gray">
        <Breadcrumbs path1="Home" url1="/" path2="Contact" url2="contact" />
      </div>
      <div className="bg-white mt-4 pb-5">
        <div className="max-w-screen-xl m-auto">
          <div className="px-4">
            <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-frost-blue">
              Contact Us
            </h1>
          </div>
          <div className="pt-6 pb-6 md:w-2/3 lg:w-1/2  md:m-auto">
            <div className="px-4">
              <p className="px-4 text-xl lg:text-2xl">
                <span className="mb-4 font-bold text-white bg-frost-orange hover:bg-frost-dark-orange w-full block py-2 rounded text-center">
                  <a href="tel:+1866FLFMESO">Call us at (866) FLF-MESO</a>
                </span>
                Or complete this form below.
              </p>
            </div>
            <div className="px-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContactDesktop;
