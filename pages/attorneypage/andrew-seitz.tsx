import React, { useState } from 'react';
import MasterLayout from '../../views/layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../components/_desktop/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../components/_mobile/recognition-affiliation-block/recognition-affiliation-block.component';
import HighlightsBlock from '../../components/_mobile/highlights-block/highlights-block.component';
import ResultsBlock from '../../components/_mobile/results-block/results-block.component';
import Accordion from '../../components/accordion/accordion.component';

const AttorneysPage = () => {
  const recognitionAffiliationItems = [
    {
      id: 5,
      imageUrl: '/images/affiliations/NTL-Top-40-Brass-Badge.png',
      alt: 'The National Top 40 Under 40 Trial Lawyers - Frost Law Firm'
    }
  ];
  const accordionData = [
    {
      title: 'Areas of Expertise',
      items: [
        'Asbestos Litigation',
        'Toxic Tort',
        'Product Liability',
        'Personal Injury',
        'Premise Liability'
      ]
    },
    {
      title: 'Publications & Speeches',
      items: [
        '“It’s a Series of Tubes: Network Neutrality in the United States,” 29 J. Nat’l Ass’n L. Jud. 683 (Fall, 2009)'
      ]
    },
    {
      title: 'Bar Admissions',
      items: [
        'California, 2010',
        'U.S. District Court, Central District of California, 2017',
        'U.S. District Court, Northern District of California, 2015'
      ]
    },
    {
      title: 'Honors & Awards',
      items: ['Dean’s Merit Scholarship, Pepperdine University, 2007-2010']
    },
    {
      title: 'Education',
      items: [
        'Pepperdine University School of Law, Malibu, California, J.D., 2010',
        'JPennsylvania State University, University Park, Pennsylvania, B.S, 2002'
      ]
    }
  ];

  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="attorneys"
            path3="Andrew-Seitz"
            url3="/andrew-seitz"
          />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Andrew Seitz
          </h1>
        </div>
        <div className="bg-white pb-4">
          <div className="flex flex-col items-center px-2 py-6 bg-frost-blue">
            <div className="w-40 overflow-hidden">
              <img
                className="h-56 w-full object-cover object-center"
                src="/images/attorneys/andrew-seitz.jpg"
              />
            </div>
          </div>
          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Andrew earned his bachelor’s degree from Penn State University and
            was awarded his Juris Doctor degree from Pepperdine University
            School of Law, where he was a Dean’s Merit Scholar.
          </p>
          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Andrew is the author of a law review article titled, “It’s a Series
            of Tubes: Network Neutrality in the United States,” published in the
            Journal of the National Association of Administrative Law Judiciary
            in Fall, 2009. Andrew was admitted to the State Bar of California in
            2010.
          </p>
        </div>
        <div>
          {accordionData.map((item, index) => {
            return (
              <Accordion
                key={index}
                accordionTitle={item.title}
                accordionList={item.items}
              />
            );
          })}
        </div>
        <RecognitionAffiliationBlock items={recognitionAffiliationItems} />
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
          <BlogButton className="pt-6" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default AttorneysPage;
