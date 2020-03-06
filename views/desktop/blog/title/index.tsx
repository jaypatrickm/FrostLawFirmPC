import React, { useState } from 'react';
import MasterLayout from '../../../../views/layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../../../components/_desktop/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../../../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../../../components/_mobile/recognition-affiliation-block/recognition-affiliation-block.component';
import HighlightsBlock from '../../../../components/_mobile/highlights-block/highlights-block.component';
import ResultsBlock from '../../../../components/_mobile/results-block/results-block.component';
import Accordion from '../../../../components/_mobile/accordion/accordion.component';
import BlogCard from '../../../../components/_desktop/blog-card/blog-card';
import GET_BLOG_POSTS from '../../../../data/get-posts';

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
    content: string;
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
    content,
    videoLink
  } = blogPost;
  function createMarkup(value: string) {
    return { __html: value };
  }
  return (
    <MasterLayout isMobile={isMobile} page={page}>
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
        <div className="bg-white mt-4">
          <div className="max-w-screen-xl m-auto">
            <div className="flex">
              <div className="md:w-2/3 md:m-auto">
                <div className="md:px-4">
                  <div className="py-8">
                    <div className="px-4 pb-4">
                      <h1 className="font-extrabold text-frost-blue text-4xl lg:text-5xl leading-tight">
                        {title}
                      </h1>
                      <span className="block text-sm text-gray-700 font-semibold">
                        Posted By {author}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {postedDate}
                      </span>
                    </div>
                    {videoLink ? (
                      ''
                    ) : (
                      <div className="image py-4">
                        <div>
                          <img
                            src={imageUrl}
                            alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
                          />
                        </div>
                        <span className="py-2 px-4 block text-xs text-black leading-tight">
                          {caption}
                        </span>
                      </div>
                    )}

                    <div
                      className="px-4"
                      dangerouslySetInnerHTML={createMarkup(content)}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-frost-dark-blue">
            <div className="max-w-screen-xl m-auto pb-2">
              <div className="h-24 bg-frost-lightest-blue">
                <h1 className="text-white text-4xl font-extrabold px-4 py-4 text-center leading-tight">
                  See more posts
                </h1>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {GET_BLOG_POSTS.map(item => (
                  <BlogCard postData={item} key={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default BlogTitleDesktop;
