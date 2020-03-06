import React from 'react';
import Link from 'next/link';
import MasterLayout from '../../../layouts/master/master.layout';
import Breadcrumbs from '../../../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../../../components/_desktop/contact-button/contact-button.component';
import BlogButton from '../../../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../../../components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component';
import Accordion from '../../../../components/_desktop/accordion/accordion.component';
import ScrollToTopButton from '../../../../components/scroll-to-top-button/scroll-to-top-button.component';

type AttorneysNameDesktopProps = {
  attorneysNameDesktopProps: {
    attorneysNameProps: {
      isMobile: boolean;
      page: string;
    };
    attorneyInfo: {
      name: string;
      pathName: string;
      imageUrl: string;
      content: string;
      affiliations: { id: number; imageUrl: string; alt: string }[];
      listsOfAccomplishments: { title: string; items: string[] }[];
    };
  };
};

const AttorneysNameDesktop = ({
  attorneysNameDesktopProps
}: AttorneysNameDesktopProps) => {
  console.log(attorneysNameDesktopProps);

  function createMarkup(value: string) {
    return { __html: value };
  }

  const { attorneysNameProps, attorneyInfo } = attorneysNameDesktopProps;
  const { isMobile, page } = attorneysNameProps;
  const {
    name,
    pathName,
    imageUrl,
    content,
    listsOfAccomplishments,
    affiliations
  } = attorneyInfo;

  return attorneysNameDesktopProps ? (
    <MasterLayout
      isMobile={isMobile}
      page={page}
      showRecognitionAffiliation={false}
    >
      <div className="bg-white">
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="attorneys"
            path3={name}
            url3={'/' + pathName}
          />
        </div>

        <div className="max-w-screen-xl mt-10 m-auto">
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="w-40 overflow-hidden m-auto">
                <img
                  className="rounded-full border-white border-4 h-40 w-40 object-cover object-center"
                  src={imageUrl}
                />
              </div>
              <div className="bg-white pt-20 -mt-20">
                <h1 className="font-extrabold text-frost-blue text-4xl text-center">
                  {name}
                </h1>
              </div>
            </div>
            <div className="hidden lg:w-2/3 lg:block">
              <RecognitionAffiliationBlock
                items={affiliations}
                bgColor="bg-white"
                headerColor="text-frost-orange"
                headerHide={false}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row bg-white">
            <div className="w-full md:w-1/3 lg:w-1/3 lg:px-2">
              <div className="flex flex-col items-center px-2 py-6 bg-white">
                <div>
                  {listsOfAccomplishments.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        accordionTitle={item.title}
                        accordionList={item.items}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 bg-white h-full lg:px-2">
              <div
                className="p-4 leading-tight tracking-wider text-lg"
                dangerouslySetInnerHTML={createMarkup(content)}
              ></div>
              <div className="lg:hidden">
                <RecognitionAffiliationBlock
                  items={affiliations}
                  bgColor="bg-white"
                  headerColor="text-frost-orange"
                  headerHide={false}
                />
              </div>
              <div className="bg-white pt-4 pb-8">
                <div className="text-center mb-4 px-4">
                  <Link href="/contact">
                    <a className="bg-frost-orange hover:bg-frost-dark-orange text-xl w-full py-2 rounded text-white font-bold inline-block">
                      Contact Us
                    </a>
                  </Link>
                </div>
                <div className="text-center mb-4 px-4">
                  <Link href="/blog">
                    <a className="bg-frost-blue hover:bg-frost-dark-blue text-xl w-full py-2 rounded text-white font-bold inline-block">
                      View our blog
                    </a>
                  </Link>
                </div>
                {/* <ContactButton className="pt-4" />
              <BlogButton className="pt-6" /> */}
              </div>
            </div>
          </div>
          <ScrollToTopButton />
          {/* <RecognitionAffiliationBlock items={affiliations} /> */}
        </div>
      </div>
    </MasterLayout>
  ) : (
    <div></div>
  );
};

export default AttorneysNameDesktop;
