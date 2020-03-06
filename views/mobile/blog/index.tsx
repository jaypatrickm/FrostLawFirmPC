import { NextPage } from 'next';
import MasterLayout from '../../../views/layouts/master/master.layout';
import AttorneysButton from '../../../components/attorneys-button/attorneys-button.component';
import ContactButton from '../../../components/_desktop/contact-button/contact-button.component';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import Link from 'next/link';
import RecognitionAffiliationGallery from '../../../components/_mobile/recognition-affiliation-gallery/recognition-affiliation-gallery.component';

type BlogMobileProps = {
  isMobile?: boolean;
  page: string;
};

const BlogMobile = ({ isMobile, page }: BlogMobileProps) => (
  <MasterLayout isMobile={isMobile} page={page}>
    <div className="bg-frost-light-gray">
      <Breadcrumbs path1="Home" url1="/" path2="Blog" url2="blog" />
    </div>
    <div className="bg-white mt-4 pb-5">
      <div className="mx-4 bg-white shadow pb-4 mb-4">
        <img
          className="h-45 w-full object-cover object-center"
          src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg"
        />
        <div>
          <h4 className="px-4 pt-3 text-2xl text-frost-blue font-extrabold leading-6">
            Team Frost Law Firm joins the 8th annual Walk for Mesothelioma 2019
          </h4>
          <span className="px-4 block text-sm text-gray-700 font-semibold">
            Posted By Frost Law Firm
          </span>
          <span className="px-4 block text-sm text-gray-600">
            October 26th, 2019
          </span>
          <p className="px-4 pt-3 text-md leading-tight">
            The Pacific Mesothelioma Center (PMC), a division of The Pacific
            Heart, Lung & Blood Institute, was established in 2012 with the...
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
      <div className="mx-4 bg-white shadow pb-4 mb-4">
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
      <div className="mx-4 bg-white shadow pb-4 mb-4">
        <img
          className="h-45 w-full object-cover object-center"
          src="/images/blog/nph/nph-video-cover.jpg"
        />
        <div>
          <h4 className="px-4 pt-3 text-2xl text-frost-blue font-extrabold leading-6">
            Neil Patrick Harris gets out of jury duty thanks to Scott
          </h4>
          <span className="px-4 block text-sm text-gray-700 font-semibold">
            Posted By Frost Law Firm
          </span>
          <span className="px-4 block text-sm text-gray-600">
            August 16th, 2019
          </span>
          <p className="px-4 pt-3 text-md leading-tight">
            Neil Patrick Harris discusses how he got out of jury duty. The
            'lawyer' he refers to happens to be our very own Scott L. Frost. He
            was selecting...
          </p>
          <div className="text-center">
            <Link href="/blog/Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott">
              <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                Read more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-frost-light-gray pt-6 px-4 pb-6">
      <AttorneysButton className="mt-3" />
      <ContactButton className="mt-6" />
    </div>
  </MasterLayout>
);

export default BlogMobile;
