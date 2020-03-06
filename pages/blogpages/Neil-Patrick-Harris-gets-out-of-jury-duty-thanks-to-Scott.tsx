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
  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Blog"
            url2="blog"
            path3="Neil Patrick Harris gets out of jury duty thanks to Scott"
            url3="/Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott"
          />
        </div>
        <div className="bg-white p-4">
          <h1 className="font-extrabold text-frost-blue text-3xl leading-tight">
            Neil Patrick Harris gets out of jury duty thanks to Scott
          </h1>
        </div>
        <span className="px-4 block text-sm text-gray-700 font-semibold">
          Posted By Frost Law Firm
        </span>
        <span className="px-4 block text-sm text-gray-600">
          August 16th, 2019
        </span>
        <div className="my-3">
          <iframe
            className="m-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/suP95tPSbUQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Neil Patrick Harris was on The Late Show with James Corden and he
            discusses his recent experience with jury duty. The 'lawyer' he
            refers to is actually Scott L. Frost as he was selecting his jury
            for a trial.
          </p>
        </div>

        <div className="bg-frost-light-gray pb-2">
          <div className="h-24 bg-frost-lightest-blue">
            <h1 className="text-frost-blue text-4xl font-extrabold px-4 pt-2 pb-4 text-center leading-tight">
              See more posts
            </h1>
          </div>

          <div className="-mt-8 mx-4 bg-white shadow pb-4 mb-4">
            <img
              className="h-45 w-full object-cover object-center"
              src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
            />
            <div>
              <h4 className="px-4 pt-3 text-2xl text-frost-blue font-extrabold leading-6">
                Team Frost Law Firm joins the 8th annual Walk for Mesothelioma
                2019
              </h4>
              <span className="px-4 block text-sm text-gray-700 font-semibold">
                Posted By Frost Law Firm
              </span>
              <span className="px-4 block text-sm text-gray-600">
                October 26th, 2019
              </span>
              <p className="px-4 pt-3 text-md leading-tight">
                The Pacific Mesothelioma Center (PMC), a division of The Pacific
                Heart, Lung & Blood Institute, was established in 2012 with
                the...
              </p>
              <div className="text-center">
                <Link href="/blog/Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019">
                  <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mt-8 mx-4 bg-white shadow pb-4 mb-4">
            <img
              className="h-45 w-full object-cover object-center"
              src="/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg"
            />
            <div>
              <h4 className="px-4 pt-3 text-2xl text-frost-blue font-extrabold leading-6">
                Scott featured in the Keenan Trial Institute Newsletter
              </h4>
              <span className="px-4 block text-sm text-gray-700 font-semibold">
                Posted By Frost Law Firm
              </span>
              <span className="px-4 block text-sm text-gray-600">
                August 16th, 2019
              </span>
              <p className="px-4 pt-3 text-md leading-tight">
                Check out Scott L. Frost in the Keenan Trial Institute
                newsletter!...
              </p>
              <div className="text-center">
                <Link href="/blog/Scott-featured-in-the-Keenan-Trial-Institute-Newsletter">
                  <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <AttorneysButton className="pt-6 mb-2" />
          <ContactButton className="pt-4" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default AttorneysPage;
