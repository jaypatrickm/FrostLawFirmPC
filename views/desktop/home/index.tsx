import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Link from 'next/link';
import HighlightsBlog from '../../../components/_desktop/highlights-block/highlights-block.component';
import ResultsBlock from '../../../components/_desktop/results-block/results-block.component';
import Hero from '../../../components/_desktop/hero/hero.component';
import TeamPhoto from '../../../components/_desktop/team-photo/team-photo.component';
import HomeContent from '../../../components/_desktop/home-content/home-content.component';
import AboutCta from '../../../components/_desktop/about-cta/about-cta.component';

type HomeDesktopProps = {
  isMobile?: boolean;
  page: string;
};

const HomeDesktop = ({ isMobile, page }: HomeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <Hero />
      <TeamPhoto />
      <HomeContent />
      <AboutCta />

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
                      Pacific Heart, Lung & Blood Institute, was established in
                      2012 with the...
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
                      Neil Patrick Harris gets out of jury duty thanks to Scott
                    </h4>
                    <p className="text-md leading-tight pt-2 text-frost-dark-blue">
                      Neil Patrick Harris was on The Late Show with James Corden
                      and he discusses his recent experience with jury duty...
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
    </MasterLayout>
  );
};

export default HomeDesktop;
