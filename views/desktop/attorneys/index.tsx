import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import Link from 'next/link';
import BrickBg from '../../../components/_desktop/brick-bg/brick-bg.component';
import HighlightsBlog from '../../../components/_desktop/highlights-block/highlights-block.component';
import ResultsBlock from '../../../components/_desktop/results-block/results-block.component';
import Accordion from '../../../components/_desktop/accordion/accordion.component';

type AttorneysDesktopProps = {
  isMobile: boolean;
  page: string;
};

const AttorneysDesktop = ({ isMobile, page }: AttorneysDesktopProps) => {
  const expertise = {
    title: 'Areas of Expertise',
    items: [
      'Asbestos Litigation',
      'Benzene Litigation',
      'Unsafe Medical Devices',
      'Toxic Tort',
      'Product Liability'
    ]
  };
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="attorneys"
          />
        </div>

        <div className="bg-white py-4">
          <h1 className="font-extrabold text-frost-blue lg:text-5xl text-4xl text-center">
            Attorneys
          </h1>
          <div className="flex flex-col md:flex-row mt-24 mb-8 justify-center">
            <div className="image mx-6 mb-8 inline-block bg-white inline-flex flex-col rounded shadow md:max-w-2xl">
              <div className="inline-flex">
                <div className="flex flex-col -mt-24 w-full">
                  <div className="flex flex-col">
                    <div className="pt-4 w-full">
                      <div className="w-40 overflow-hidden m-auto">
                        <img
                          src="/images/attorneys/scott-l-frost.jpg"
                          alt="Scott L. Frost"
                          className="rounded-full border-white border-4 shadow h-40 w-40 object-cover object-center"
                        />
                      </div>
                      <span className="pb-4 text-3xl block text-lg text-center font-extrabold text-frost-blue">
                        Scott L. Frost
                      </span>
                    </div>
                    <div className="w-full text-center bg-frost-dark-blue py-3 text-white">
                      <h2 className="font-bold text-xl text-frost-orange">
                        Areas of Expertise
                      </h2>
                      <ul className="w-1/2 m-auto">
                        <li className="py-1">Absestos Litigation</li>
                        <li className="py-1">Benzene Litigation</li>
                        <li className="py-1">Unsafe Medical Devices</li>
                        <li className="py-1">Toxic Tort</li>
                        <li className="py-1">Product Libaility</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="p-4">
                      Scott Frost has represented victims of asbestos related
                      disease for over 18 years. His passion is representing
                      families who have been harmed by corporations. Scott is an
                      experienced litigator who tries benzene exposure and
                      defective medical device cases along with asbestos
                      exposure and mesothelioma cases. He is licensed to
                      practice law by the state bars of California, ashington,
                      Oregon, Hawaii, Georgia, Kentucky, Indiana, and Texas....
                    </p>
                    <div className="text-center mb-4 px-4">
                      <Link href="/attorneys/scott-l-frost">
                        <a className="bg-frost-orange hover:bg-frost-dark-orange text-xl rounded w-full py-2 text-white font-bold inline-block">
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image mx-6 mt-24 mb-8 md:mt-0 inline-block bg-white inline-flex flex-col rounded shadow md:max-w-2xl">
              <div className="inline-flex">
                <div className="flex flex-col -mt-24 w-full">
                  <div className="flex flex-col">
                    <div className="pt-4 w-full">
                      <div className="w-40 overflow-hidden m-auto">
                        <img
                          src="/images/attorneys/andrew-seitz.jpg"
                          alt="Andrew Seitz"
                          className="rounded-full border-white border-4 shadow h-40 w-40 object-cover object-center"
                        />
                      </div>
                      <span className="pb-4 text-3xl block text-lg text-center font-extrabold text-frost-blue">
                        Andrew Seitz
                      </span>
                    </div>
                    <div className="w-full text-center bg-frost-dark-blue py-3 text-white">
                      <h2 className="font-bold text-xl text-frost-orange">
                        Areas of Expertise
                      </h2>
                      <ul className="w-1/2 m-auto">
                        <li className="py-1">Absestos Litigation</li>
                        <li className="py-1">Toxic Tort</li>
                        <li className="py-1">Product Liability</li>
                        <li className="py-1">Personal Injury</li>
                        <li className="py-1">Premise Libaility</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="p-4">
                      Andrew earned his bachelor’s degree from Penn State
                      University and was awarded his Juris Doctor degree from
                      Pepperdine University School of Law, where he was a Dean’s
                      Merit Scholar. Andrew is the author of a law review
                      article titled, “It’s a Series of Tubes: Network
                      Neutrality in the United States,” published in the Journal
                      of the National Association of Administrative Law
                      Judiciary in Fall, 2009. Andrew was admitted...
                    </p>
                    <div className="text-center mb-4 px-4">
                      <Link href="/attorneys/andrew-seitz">
                        <a className="bg-frost-orange hover:bg-frost-dark-orange text-xl w-full py-2 rounded text-white font-bold inline-block">
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
              <div className="image mx-6 inline-block p-4 bg-white inline-flex flex-col items-center rounded shadow-xl">
                <div className="w-40 overflow-hidden">
                  <img
                    src="/images/attorneys/andrew-seitz.jpg"
                    alt="Andrew Seitz"
                    className="h-56 w-full object-cover object-center"
                  />
                </div>
                <span className="py-2 block text-lg text-black text-center leading-normal">
                  Andrew Seitz
                </span>
                <div className="text-center">
                  <Link href="/attorneys/andrew-seitz">
                    <a className="bg-frost-orange hover:bg-frost-dark-orange text-xl py-1 px-10 rounded-full text-white font-bold inline-block">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div> */}
          </div>
        </div>

        <div className="px-4 py-6 bg-frost-light-gray shadow">
          <div className="max-w-screen-xl flex flex-col md:flex-row m-auto">
            <div className="md:w-1/3">
              <HighlightsBlog />
              <div className="mt-4">
                <ResultsBlock />
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-2/3 md:pl-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold md:pl-4 mb-2 text-frost-blue">
                From our&nbsp;
                <Link href="/blog">
                  <a className="underline hover:text-frost-dark-orange">blog</a>
                </Link>
                ...
              </h3>
              <div className="flex items-center justify-center flex-col">
                <div className="p-4 blog-card">
                  <div className="flex flex-col md:flex-row md:h-40 md:overflow-hidden">
                    <div className="md:w-1/3 md:h-auto w-full h-64 overflow-hidden">
                      <img
                        className="h-auto object-cover object-center"
                        src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
                      />
                    </div>
                    <div className="md:w-2/3 md:px-4 pt-2 md:pt-0 w-full">
                      <h4 className="text-lg lg:text-xl text-frost-blue font-extrabold leading-tight">
                        Team Frost Law Firm joins the 8th annual Walk for
                        Mesothelioma 2019
                      </h4>
                      <p className="text-md lg:text-lg leading-tight pt-2 text-frost-dark-blue">
                        The Pacific Mesothelioma Center (PMC), a division of The
                        Pacific Heart, Lung & Blood Institute, was established
                        in 2012 with the...
                      </p>
                      <div>
                        <Link href="/blog">
                          <a className="rounded-full underline lg:text-lg text-frost-blue font-bold inline-block">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 blog-card">
                  <div className="flex flex-col md:flex-row md:h-40 md:overflow-hidden">
                    <div className="md:w-1/3 md:h-auto w-full h-64 overflow-hidden">
                      <img
                        className="h-auto object-cover object-center"
                        src="/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg"
                      />
                    </div>
                    <div className="md:w-2/3 md:px-4 pt-2 md:pt-0 w-full">
                      <h4 className="text-lg text-frost-blue font-extrabold leading-tight">
                        Scott featured in the Keenan Trial Institute Newsletter
                      </h4>
                      <p className="text-md leading-tight pt-2 text-frost-dark-blue">
                        Check out Scott L. Frost in the Keenan Trial Institute
                        newsletter!
                      </p>
                      <div>
                        <Link href="/blog">
                          <a className="rounded-full underline text-frost-blue font-bold inline-block">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 blog-card">
                  <div className="flex flex-col md:flex-row md:h-40 md:overflow-hidden">
                    <div className="md:w-1/3 md:h-auto w-full h-64 overflow-hidden">
                      <img
                        className="h-auto object-cover object-center"
                        src="/images/blog/nph/nph-video-cover.jpg"
                      />
                    </div>
                    <div className="md:w-2/3 md:px-4 pt-2 md:pt-0  w-full">
                      <h4 className="text-lg text-frost-blue font-extrabold leading-tight">
                        Neil Patrick Harris gets out of jury duty thanks to
                        Scott
                      </h4>
                      <p className="text-md leading-tight pt-2 text-frost-dark-blue">
                        Neil Patrick Harris was on The Late Show with James
                        Corden and he discusses his recent experience with jury
                        duty...
                      </p>
                      <div>
                        <Link href="/blog">
                          <a className="rounded-full underline text-frost-blue font-bold inline-block">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AttorneysDesktop;
