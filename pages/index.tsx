import Nav from '../components/nav';
import { NextPage } from 'next';
import MasterLayout from '../layouts/master/master.layout';
import CallButton from '../components/call-button/call-button.component';
import ContactButton from '../components/contact-button/contact-button.component';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs.component';
import Link from 'next/link';
import RecognitionAffiliationBlock from '../components/recognition-affiliation-block/recognition-affiliation-block.component';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <MasterLayout>
    <div className="px-4 py-4">
      <h1 className="text-lg font-extrabold tracking-wide leading-tight">
        Have you or someone you know <br className="inline" /> been diagnosed
        with
        <span className="text-frost-blue"> Mesothelioma</span>,
        <span className="text-frost-blue"> Asbestosis</span>, or
        <span className="text-frost-blue"> Lung Cancer</span>?
      </h1>
      <CallButton className="mt-3" />
      <ContactButton className="mt-3" />
    </div>
    <div className="bg-frost-light-gray">
      <Breadcrumbs path1="Home" url1="/" />
    </div>
    <div className="bg-frost-lightest-blue">
      <h1 className="text-frost-blue text-3xl font-extrabold px-4 py-4 text-center">
        FROST LAW FIRM, PC
      </h1>
    </div>
    <div className="image">
      <img
        src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg"
        alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
      />
      <span className="py-2 px-4 block text-xs text-black leading-tight">
        Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk at
        Will Rogers State Historic Park on October 26th 2019.
      </span>
    </div>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      The best attorneys for mesothelioma, asbestosis, and lung cancer
      represenation.
    </p>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      We have represented victims of disease for over eighteen years.
    </p>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      We represent families who have been harmed by corporations.
    </p>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      Our mission is to make sure this never happens to our children and
      grandchildren and keep our communities safe for these future generations.
    </p>
    <h3 className="px-4 mt-5 text-lg font-bold leading-tight tracking-normal block">
      I have Mesothelioma/Asbestosis/Lung Cancer, what can I do legally?
    </h3>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      First, we sympathize with you during this difficult time and would like to
      say that you are not alone.
    </p>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      Our attorneys know first-hand what a life-changing diagnosis can do to a
      person and family.
    </p>
    <Link href="/about">
      <a className="px-4 mt-3 inline-block text-frost-blue tracking-wider underline text-lg">
        Click here to go to Scott Frost’s story.
      </a>
    </Link>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      Tell us your story and we can help you best decide how you can approach
      your case.
    </p>
    <h3 className="px-4 mt-5 text-lg font-bold leading-tight tracking-normal block">
      Are Frost Law Firm, PC, Mesothelioma/Asbestosis/Lung Cancer attorneys near
      me?
    </h3>
    <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
      We have represented mesothelioma patients across the country; including
      Hawaii, California, Washington, Oregon, Florida, Illinois, Missouri,
      Nevada, Massachusetts, New York, Oklahoma, Georgia, Kentucky, Louisiana,
      and Texas.
    </p>
    <ContactButton className="mt-3 mx-4" />
    <div className="bg-frost-light-gray pb-10 mt-4 pt-4">
      <div className="h-24 bg-frost-lightest-blue">
        <h1 className="text-frost-blue text-4xl font-extrabold px-4 pt-2 pb-4 text-center">
          Our Story
        </h1>
      </div>
      <div className="-mt-8 mx-4 bg-white shadow pb-4">
        <img
          className="h-40 w-full object-cover object-top"
          src="/images/about/dadandmom.jpg"
        />
        <div>
          <h4 className="px-4 pt-3 text-lg text-black font-bold leading-tight">
            Scott Frost's family experience with Lung Cancer
          </h4>
          <p className="px-4 pt-3 text-md leading-tight">
            Scott Frost was born in Iowa. Shortly after, the family packed up
            the panel wagon and moved to Southern California...
          </p>
          <div className="text-center">
            <Link href="/about">
              <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                Read more
              </a>
            </Link>
          </div>
          <span className="-mt-2 text-gray-900 text-xs tracking-tight leading-tight block text-center">
            *Tapping this button will take you to our story page
          </span>
        </div>
      </div>
    </div>
    <div className="bg-frost-light-gray pb-5">
      <div className="h-24 bg-frost-lightest-blue">
        <h1 className="text-frost-blue text-4xl font-extrabold px-4 pt-2 pb-4 text-center leading-tight">
          From our blog
        </h1>
      </div>
      <div className="-mt-8 mx-4 bg-white shadow pb-4">
        <img
          className="h-45 w-full object-cover object-center"
          src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
        />
        <div>
          <h4 className="px-4 pt-3 text-lg text-black font-bold leading-tight">
            Team Frost Law Firm joins the 8th annual Walk for Mesothelioma 2019
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
      </div>
    </div>
    <div className="bg-frost-light-gray pb-1 mb-0">
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
          Neil Patrick Harris gets out of Jury Duty thanks to Scott
        </span>
      </div>
    </div>
    <div className="bg-frost-light-gray px-4">
      <Link href="/blog">
        <a className="rounded-full bg-frost-blue text-white text-xl font-bold inline-block py-2 px-2 w-full text-center">
          View our blog page
        </a>
      </Link>
    </div>
    <RecognitionAffiliationBlock />
  </MasterLayout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
