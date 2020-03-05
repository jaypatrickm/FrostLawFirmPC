import React, { useState } from 'react';
import MasterLayout from '../../../layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../../../components/desktop/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../../../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../../../components/mobile/recognition-affiliation-block/recognition-affiliation-block.component';
import HighlightsBlock from '../../../../components/mobile/highlights-block/highlights-block.component';
import ResultsBlock from '../../../../components/mobile/results-block/results-block.component';
import Accordion from '../../../../components/accordion/accordion.component';

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
      description: string;
      affiliations: { id: number; imageUrl: string; alt: string }[];
      listsOfAccomplishments: { title: string; items: string[] }[];
    };
  };
};

const AttorneysNameDesktop = ({
  attorneysNameDesktopProps
}: AttorneysNameDesktopProps) => {
  console.log(attorneysNameDesktopProps);

  function createMarkup(value: string) {
    return { __html: value };
  }

  return attorneysNameDesktopProps ? (
    <MasterLayout
      isMobile={attorneysNameDesktopProps.attorneysNameProps.isMobile}
      page={attorneysNameDesktopProps.attorneysNameProps.page}
    >
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="attorneys"
            path3={attorneysNameDesktopProps.attorneyInfo.name}
            url3={'/' + attorneysNameDesktopProps.attorneyInfo.pathName}
          />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            {attorneysNameDesktopProps.attorneyInfo.name}
          </h1>
        </div>
        <div className="bg-white pb-4">
          <div className="flex flex-col items-center px-2 py-6 bg-frost-blue">
            <div className="w-40 overflow-hidden">
              <img
                className="h-56 w-full object-cover object-center"
                src={attorneysNameDesktopProps.attorneyInfo.imageUrl}
              />
            </div>
          </div>
          <p
            className="px-4 mt-3 leading-tight tracking-wider text-lg"
            dangerouslySetInnerHTML={createMarkup(
              attorneysNameDesktopProps.attorneyInfo.description
            )}
          ></p>
        </div>
        <div>
          {attorneysNameDesktopProps.attorneyInfo.listsOfAccomplishments.map(
            (item, index) => {
              return (
                <Accordion
                  key={index}
                  accordionTitle={item.title}
                  accordionList={item.items}
                />
              );
            }
          )}
        </div>
        <RecognitionAffiliationBlock
          items={attorneysNameDesktopProps.attorneyInfo.affiliations}
        />
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
          <BlogButton className="pt-6" />
        </div>
      </div>
    </MasterLayout>
  ) : (
    <div></div>
  );
};

export default AttorneysNameDesktop;
