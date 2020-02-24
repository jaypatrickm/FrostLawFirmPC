import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../components/contact-button/contact-button.component';
import Link from 'next/link';
import BlogButton from '../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../components/recognition-affiliation-block/recognition-affiliation-block.component';
import HighlightsBlock from '../../components/highlights-block/highlights-block.component';
import ResultsBlock from '../../components/results-block/results-block.component';

const AttorneysPage = () => {
  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="/attorneys"
          />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Attorneys
          </h1>
        </div>
        <div className="bg-white pb-4">
          <div className="flex flex-col items-center mt-6 mx-4 px-2 py-6 bg-white rounded-xl shadow">
            <div className="w-40 overflow-hidden">
              <img
                className="h-56 w-full object-cover object-center"
                src="/images/attorneys/scott-l-frost.jpg"
              />
            </div>
            <div className="text-center">
              <Link href="/attorneys/scott-l-frost">
                <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                  Scott L. Frost
                </a>
              </Link>
            </div>
            <span className="-mt-2 text-gray-900 text-xs tracking-tight leading-tight block text-center">
              *Tap this button to learn more about Scott L. Frost.
            </span>
          </div>
          <div className="flex flex-col items-center mt-6 mx-4 px-2 py-6 bg-white rounded-xl shadow">
            <div className="w-40 overflow-hidden">
              <img
                className="h-56 w-full object-cover object-center"
                src="/images/attorneys/andrew-seitz.jpg"
              />
            </div>
            <div className="text-center">
              <Link href="/attorneys/scott-l-frost">
                <a className="bg-frost-blue text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
                  Andrew Seitz
                </a>
              </Link>
            </div>
            <span className="-mt-2 text-gray-900 text-xs tracking-tight leading-tight block text-center">
              *Tap this button to learn more about Andrew Seitz.
            </span>
          </div>
        </div>
        <RecognitionAffiliationBlock />
        <HighlightsBlock />
        <ResultsBlock />
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
          <BlogButton className="pt-6" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default AttorneysPage;
