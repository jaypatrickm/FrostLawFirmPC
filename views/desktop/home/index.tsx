import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Button from '../../../components/_desktop/button/button.component';
import Link from 'next/link';

import LogoSvg from '../../../components/icons/logo/logo.svg';
import BrickBg from '../../../components/_desktop/brick-bg/brick-bg.component';
import HighlightsBlog from '../../../components/_desktop/highlights-block/highlights-block.component';
import ResultsBlock from '../../../components/_desktop/results-block/results-block.component';

type HomeDesktopProps = {
  isMobile?: boolean;
  page: string;
};

const HomeDesktop = ({ isMobile, page }: HomeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <div
        style={{ backgroundImage: 'url(/images/unsplash-bg.jpg)' }}
        className="px-4 py-4 bg-center bg-frost-light-gray md:py-20"
      >
        <div className="md:max-w-screen-xl flex items-center md:justify-center m-auto">
          <div className="w-full lg:w-2/3 md:px-4">
            <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wide leading-tight md:text-3xl">
              Have you or someone you know <br className="inline" /> been
              diagnosed with
              <span className="sm:block sm:pb-4">
                <span className="text-frost-blue"> Mesothelioma</span>,
                <span className="text-frost-blue"> Asbestosis</span>, or
                <span className="text-frost-blue"> Lung Cancer</span>?
              </span>
            </h1>
            <div className="mt-10 mb-8 flex flex-col items-center md:block">
              <div className="w-64 mr-4 inline-block">
                <Button
                  url="/contact"
                  color="hover:bg-frost-dark-orange bg-frost-orange text-white"
                >
                  Contact Us
                </Button>
              </div>
              <div className="mt-6 md:mt-0 w-64 mr-4 md:mr-0 inline-block">
                <Button
                  url="/about"
                  color="hover:bg-frost-dark-blue text-white bg-frost-blue"
                >
                  About Us
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 hidden lg:block">
            <LogoSvg className="w-64 m-auto" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <BrickBg>
          <div className="image max-w-3xl border-white border-16 bg-white mr-auto ml-auto">
            <img
              src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg"
              alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
            />
            <span className="py-2 block text-sm text-black text-center leading-normal">
              Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk
              at Will Rogers State Historic Park on October 26th 2019.
            </span>
          </div>
        </BrickBg>
      </div>

      <div className="m-auto px-4 py-4 sm:w-5/6 lg:py-8 md:w-8/12 lg:w-7/12 max-w-screen-xl">
        <h1 className="text-frost-blue text-4xl lg:text-5xl font-extrabold">
          FROST LAW FIRM, PC
        </h1>
        <p className="mt-3 leading-tight tracking-wider text-lg lg:text-2xl">
          The best attorneys for mesothelioma, asbestosis, and lung cancer
          representation. We have represented victims of disease for over
          eighteen years. We represent families who have been harmed by
          corporations. Our mission is to make sure this never happens to our
          children and grandchildren and keep our communities safe for these
          future generations.
        </p>
        <h3 className="mt-5 text-lg lg:text-2xl font-bold leading-tight tracking-normal block ">
          I have Mesothelioma/Asbestosis/Lung Cancer, what can I do legally?
        </h3>
        <p className="mt-3 leading-tight tracking-wider text-lg lg:text-2xl">
          First, we sympathize with you during this difficult time and would
          like to say that you are not alone. Our attorneys know first-hand what
          a life-changing diagnosis can do to a person and family.
        </p>
        <Link href="/about">
          <a className="mt-3 text-link inline-block tracking-wider text-lg lg:text-2xl">
            Click here to go to Scott Frost’s story.
          </a>
        </Link>
        <p className="mt-3 leading-tight tracking-wider text-lg lg:text-2xl">
          Tell us your story and we can help you best decide how you can
          approach your case.
        </p>
        <h3 className="mt-5 text-lg lg:text-2xl font-bold leading-tight tracking-normal block ">
          Are Frost Law Firm Mesothelioma/Asbestosis/Lung Cancer attorneys near
          me?
        </h3>
        <p className="mt-3 leading-tight tracking-wider text-lg lg:text-2xl">
          We have represented mesothelioma patients across the country;
          including Hawaii, California, Washington, Oregon, Florida, Illinois,
          Missouri, Nevada, Massachusetts, New York, Oklahoma, Georgia,
          Kentucky, Louisiana, and Texas.
        </p>
        <div className="w-full text-center mt-6 lg:mt-8 pb-4">
          <div className="w-64 m-auto inline-block">
            <Button
              url="/contact"
              color="hover:bg-frost-dark-orange bg-frost-orange text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <BrickBg>
        <div className="flex flex-col sm:flex-row items-center justify-center p-4 max-w-screen-xl m-auto">
          <div className="md:w-1/2 w-full">
            <div className="bg-white max-w-lg m-auto sm:ml-auto p-3">
              <img
                src="/images/about/dadandmom.jpg"
                alt="Photo of Scott L. Frost's dad and mom."
              />
              <span className="py-2 block text-sm text-black leading-normal text-center">
                Scott's dad and mom.
              </span>
            </div>
          </div>
          <div className="md:w-1/2 w-full pt-4 sm:p-8">
            <h2 className="md:text-5xl m-auto md:ml-0 md:mr-0 font-extrabold tracking-wide text-white text-3xl leading-none ,md:leading-relaxed">
              Scott L. Frost's <br />
              family experience with Lung Cancer
            </h2>
            <div className="max-w-sm mt-5 m-auto md:ml-0 sm:mt-10">
              <Button
                color="text-white bg-frost-orange hover:text-white hover:bg-frost-dark-orange"
                url="/about"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </BrickBg>

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
