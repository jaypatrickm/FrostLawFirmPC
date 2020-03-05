import React, { useState } from 'react';
import MasterLayout from '../../../../views/layouts/master/master.layout';
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

type BlogTitleDesktopProps = {
  isMobile: boolean;
  page: string;
  blogPost: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl?: string;
    caption?: string;
    author: string;
    postedDate: string;
    description: string;
    videoLink?: string;
  };
};

const BlogTitleDesktop = ({
  isMobile,
  page,
  blogPost
}: BlogTitleDesktopProps) => {
  console.log(blogPost);
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption,
    author,
    postedDate,
    description,
    videoLink
  } = blogPost;
  function createMarkup(value: string) {
    return { __html: value };
  }
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Desktop</h1>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Blog"
            url2="blog"
            path3={title}
            url3={'/' + urlFriendlyTitle}
          />
        </div>
        <div className="image">
          <img
            src={imageUrl}
            alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
          />
          <span className="py-2 px-4 block text-xs text-black leading-tight">
            {caption}
          </span>
        </div>
        <div className="bg-white p-4">
          <h1 className="font-extrabold text-frost-blue text-3xl leading-tight">
            {title}
          </h1>
        </div>
        <span className="px-4 block text-sm text-gray-700 font-semibold">
          Posted By {author}
        </span>
        <span className="px-4 block text-sm text-gray-600">{postedDate}</span>
        <div dangerouslySetInnerHTML={createMarkup(description)}></div>>
        <div className="bg-frost-light-gray pb-2">
          <div className="h-24 bg-frost-lightest-blue">
            <h1 className="text-frost-blue text-4xl font-extrabold px-4 pt-2 pb-4 text-center leading-tight">
              See more posts
            </h1>
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
                'lawyer' he refers to happens to be our very own Scott L. Frost.
                He was selecting...
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
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <AttorneysButton className="pt-6 mb-2" />
          <ContactButton className="pt-4" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default BlogTitleDesktop;
