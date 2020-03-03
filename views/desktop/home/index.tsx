import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Button from '../../../components/desktop/button/button.component';
import ContactButton from '../../../components/desktop/contact-button/contact-button.component';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import Link from 'next/link';
import RecognitionAffiliationGallery from '../../../components/recognition-affiliation-gallery/recognition-affiliation-gallery.component';
import LogoSvg from '../../../components/icons/logo/logo.svg';
import BrickBg from '../../../components/desktop/brick-bg/brick-bg.component';

const HomeDesktop = () => {
  return (
    <MasterLayout>
      <div
        style={{ backgroundImage: 'url(/images/unsplash-bg.jpg)' }}
        className="px-4 py-4 bg-center bg-frost-light-gray flex items-center py-20 justify-center"
      >
        <div className="sm:w-2/3 p-10 lg:max-w-3xl">
          <h1 className="text-lg font-extrabold tracking-wide leading-tight sm:text-3xl">
            Have you or someone you know <br className="inline" /> been
            diagnosed with
            <span className="sm:block sm:pb-4">
              <span className="text-frost-blue"> Mesothelioma</span>,
              <span className="text-frost-blue"> Asbestosis</span>, or
              <span className="text-frost-blue"> Lung Cancer</span>?
            </span>
          </h1>
          <div className="mt-10">
            <div className="w-64 mr-4 inline-block">
              <Button
                url="/contact"
                color="hover:bg-frost-dark-blue bg-frost-blue text-white"
              >
                Contact Us
              </Button>
            </div>
            <div className="w-64 inline-block">
              <Button
                url="/about"
                color="hover:bg-gray-600 text-white bg-frost-gray"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/3 hidden md:block">
          <LogoSvg className="w-64 m-auto" />
        </div>
      </div>
      <div className="bg-white shadow w-full">
        <div>
          <BrickBg>
            <div className="image max-w-3xl border-white border-16 bg-white mr-auto ml-auto">
              <img
                src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg"
                alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
              />
              <span className="py-2 block text-sm text-black text-center leading-normal">
                Team Frost Law Firm poses during the 8th Annual Mesothelioma
                Walk at Will Rogers State Historic Park on October 26th 2019.
              </span>
            </div>
          </BrickBg>
        </div>
      </div>

      <div className="bg-white m-auto py-10 sm:w-5/6 lg:w-8/12 ">
        <h1 className="text-frost-blue text-4xl font-extrabold px-4 pt-4">
          FROST LAW FIRM, PC
        </h1>
        <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
          The best attorneys for mesothelioma, asbestosis, and lung cancer
          representation. We have represented victims of disease for over
          eighteen years. We represent families who have been harmed by
          corporations. Our mission is to make sure this never happens to our
          children and grandchildren and keep our communities safe for these
          future generations.
        </p>
        <h3 className="px-4 mt-5 text-lg font-bold leading-tight tracking-normal block ">
          I have Mesothelioma/Asbestosis/Lung Cancer, what can I do legally?
        </h3>
        <p className="px-4 mt-3 leading-tight tracking-wider text-lg ">
          First, we sympathize with you during this difficult time and would
          like to say that you are not alone. Our attorneys know first-hand what
          a life-changing diagnosis can do to a person and family.
        </p>
        <Link href="/about">
          <a className="px-4 mt-3 inline-block text-frost-blue tracking-wider underline text-lg hover:text-frost-dark-blue">
            Click here to go to Scott Frost’s story.
          </a>
        </Link>
        <p className="px-4 mt-3 leading-tight tracking-wider text-lg ">
          Tell us your story and we can help you best decide how you can
          approach your case.
        </p>
        <h3 className="px-4 mt-5 text-lg font-bold leading-tight tracking-normal block ">
          Are Frost Law Firm Mesothelioma/Asbestosis/Lung Cancer attorneys near
          me?
        </h3>
        <p className="px-4 mt-3 leading-tight tracking-wider text-lg ">
          We have represented mesothelioma patients across the country;
          including Hawaii, California, Washington, Oregon, Florida, Illinois,
          Missouri, Nevada, Massachusetts, New York, Oklahoma, Georgia,
          Kentucky, Louisiana, and Texas.
        </p>
        <div className="w-full text-center mt-6">
          <div className="w-64 m-auto inline-block">
            <Button
              url="/contact"
              color="hover:bg-frost-dark-blue bg-frost-blue text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <BrickBg>
        <div className="flex items-center justify-center p-4">
          <div className="w-1/2">
            <div className="bg-white max-w-lg ml-auto p-3">
              <img
                src="/images/about/dadandmom.jpg"
                alt="Photo of Scott L. Frost's dad and mom."
              />
              <span className="py-2 block text-sm text-black leading-normal text-center">
                Scott's Dad and Mom.
              </span>
            </div>
          </div>
          <div className="w-1/2 p-8">
            <h2 className="text-5xl font-extrabold tracking-wide text-white">
              Scott L. Frost's <br />
              family experience with Lung Cancer
            </h2>
            <div className="max-w-sm mt-10">
              <Button
                color="text-frost-blue bg-white hover:text-white hover:bg-frost-dark-blue"
                url="/about"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </BrickBg>
      <div className="px-4 py-6 px-10 bg-auto bg-frost-light-gray">
        <h3 className="text-2xl font-extrabold text-center">
          Visit our&nbsp;
          <Link href="/blog">
            <a className="underline hover:text-frost-blue">blog</a>
          </Link>
          .
        </h3>
        <div className="flex items-center justify-center mt-4">
          <div className="w-1/3 p-4 blog-card">
            <div>
              <img
                className="h-45 w-full object-cover object-center"
                src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
              />
              <h4 className="pt-3 text-lg text-black font-bold leading-tight">
                Team Frost Law Firm joins the 8th annual Walk for Mesothelioma
                2019
              </h4>
              <p className="pt-3 text-md leading-tight">
                The Pacific Mesothelioma Center (PMC), a division of The Pacific
                Heart, Lung & Blood Institute, was established in 2012 with
                the...
              </p>
              <div>
                <Link href="/blog">
                  <a className="bg-gray-900 text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 blog-card">
            <div>
              <img
                className="h-45 w-full object-cover object-center"
                src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
              />
              <h4 className="pt-3 text-lg text-black font-bold leading-tight">
                Team Frost Law Firm joins the 8th annual Walk for Mesothelioma
                2019
              </h4>
              <p className="pt-3 text-md leading-tight">
                The Pacific Mesothelioma Center (PMC), a division of The Pacific
                Heart, Lung & Blood Institute, was established in 2012 with
                the...
              </p>
              <div>
                <Link href="/blog">
                  <a className="bg-gray-900 text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 blog-card">
            <div>
              <img
                className="h-45 w-full object-cover object-center"
                src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
              />
              <h4 className="pt-3 text-lg text-black font-bold leading-tight">
                Team Frost Law Firm joins the 8th annual Walk for Mesothelioma
                2019
              </h4>
              <p className="pt-3 text-md leading-tight">
                The Pacific Mesothelioma Center (PMC), a division of The Pacific
                Heart, Lung & Blood Institute, was established in 2012 with
                the...
              </p>
              <div>
                <Link href="/blog">
                  <a className="bg-gray-900 text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-4 bg-white shadow pb-4">
          <img
            className="h-45 w-full object-cover object-center"
            src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
          />
          <div>
            <h4 className="px-4 pt-3 text-lg text-black font-bold leading-tight">
              Team Frost Law Firm joins the 8th annual Walk for Mesothelioma
              2019
            </h4>
            <p className="px-4 pt-3 text-md leading-tight">
              The Pacific Mesothelioma Center (PMC), a division of The Pacific
              Heart, Lung & Blood Institute, was established in 2012 with the...
            </p>
            <div className="text-center">
              <Link href="/blog">
                <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                  Read more
                </a>
              </Link>
            </div>
            <span className="-mt-2 text-gray-900 text-xs tracking-tight leading-tight block text-center">
              *Tapping this button will take you to our blog page
            </span>
          </div>
        </div> */}
      </div>
      {/* <div className="bg-frost-light-gray pb-1 mb-0">
        <div className="bg-white flex mx-4 mb-4 shadow">
          <img
            className="h-40 w-1/2 object-cover object-top"
            src="/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg"
          />
          <span className="p-3 text-black font-bold text-lg">
            Scott featured in the Keenan Trial Institute Newsletter
          </span>
        </div>
        <div className="bg-white flex mx-4 mb-4 shadow">
          <img
            className="h-40 w-1/2 object-cover object-top"
            src="/images/blog/nph/nph-video-cover.jpg"
          />
          <span className="p-3 text-black font-bold text-lg">
            Neil Patrick Harris gets out of jury duty thanks to Scott
          </span>
        </div>
      </div> */}
      {/* <div className="bg-frost-light-gray px-4">
        <Link href="/blog">
          <a className="rounded-full bg-frost-blue text-white text-xl font-bold inline-block py-2 px-2 w-full text-center">
            View our blog page
          </a>
        </Link>
      </div> */}
      <RecognitionAffiliationGallery />
    </MasterLayout>
  );
};

export default HomeDesktop;
