import React, { useState } from 'react';
import MasterLayout from '../../views/layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../components/_desktop/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../../components/blog-button/blog-button.component';
import RecognitionAffiliationBlock from '../../components/_mobile/recognition-affiliation-block/recognition-affiliation-block.component';
import HighlightsBlock from '../../components/_mobile/highlights-block/highlights-block.component';
import ResultsBlock from '../../components/_mobile/results-block/results-block.component';
import Accordion from '../../components/accordion/accordion.component';

const AttorneysPage = () => {
  const affiliationImages = [
    {
      id: 1,
      imageUrl: '/images/affiliations/ntl-top-100-member-b.png',
      alt: 'The National Trial Lawyers Top 100 - Frost Law Firm'
    },
    {
      id: 2,
      imageUrl: '/images/affiliations/american-association-for-justice.png',
      alt: 'American Association For Justice - Frost Law Firm'
    },
    {
      id: 3,
      imageUrl: '/images/affiliations/american-board-of-trial-advocates.jpg',
      alt: 'American Board of Trial Advocates - Frost Law Firm'
    },
    {
      id: 4,
      imageUrl: '/images/affiliations/KTI-LOGO-FACULTY1.jpg',
      alt: 'Keenan Trial Institute - Frost Law Firm'
    },
    {
      id: 6,
      imageUrl: '/images/affiliations/superlawyers2.png',
      alt: 'Super Lawyers - Frost Law Firm'
    },
    {
      id: 7,
      imageUrl: '/images/affiliations/triallawyerscollege.jpg',
      alt:
        'Graduate of Trial Lawyers College Thunderhead Ranch Durgis, Wyoming - Frost Law Firm'
    },
    {
      id: 8,
      imageUrl: '/images/affiliations/usdva-accredited-attorney.png',
      alt:
        'U.S. Department of Veterans Affairs Accredited Attorney - Frost Law Firm'
    }
  ];
  const accordionData = [
    {
      title: 'Areas of Expertise',
      items: [
        'Asbestos Litigation',
        'Benzene Litigation',
        'Unsafe Medical Devices',
        'Toxic Tort',
        'Product Liability'
      ]
    },
    {
      title: 'Pro Bono & Community Service',
      items: [
        'Of counsel, Trial Lawyers for Public Justice Foundation',
        'St. Louis Airport Asbestos Removal Litigation',
        'Fort Worth Cowtown Inn Project',
        'St. Bernard Parish Asbestos Removal'
      ]
    },
    {
      title: 'Publications & Speeches',
      items: [
        'Co-Chair,\
            <a href="https://harrismartin.com/conference/922/CalifAsb101_May2017/" target="_blank" rel="noopener noreferrer">HarrisMartin’s California&nbsp;Asbestos Litigation: Trial 101</a>, May 12, 2017',
        'Panelist, Cutting-Edge Issues in Asbestos Litigation Conference, <i>Young Lawyers Lunch: There and Back Again—Tales and Advice on How to Win Your Cases at Trial, Satisfy your Clients and Keep You Partners Happy, All at the Same Time; and DNA in The Court Room—The Cutting Edge of Science and Medicine</i>, Beverly Hills, California, March 14-15, 2016',
        'Panelist, Cutting-Edge Issues in Asbestos Litigation Conference, <i>The Perils of Successor Liability: Who is Really in the Hot Seat?</i>, Perrin Conferences, Beverly Hills, California, March 17-18, 2014',
        'Co-Chair, Asbestos Litigation in 2013 and Beyond, Asbestos Litigation Group, American Association for Justice Annual Convention, July 20-23, 2013',
        'Speaker, Overview of Recent Verdicts, Case law, and Emerging Issues from the Front Lines, American Association for Justice Annual Convention, July 22, 2013',
        'Speaker, Building an Asbestosis Case, 2012 Arizona Regional Conference, Mesa, AZ, October 4-5, 2012',
        'Speaker, Asbestos Litigation Conference: A National Overview & Outlook, Perrin Conferences, San Francisco, CA, September 10-12, 2012',
        'Speaker, Plaintiff’s Asbestos Litigation Seminar, Las Vegas, Nevada, May 16, 2012',
        'Co-Chair, 4th Annual Emerging Trends in Asbestos Litigation Conference, HB Litigation Conferences, April 7-8, 2011',
        'Speaker, HarrisMartin’s National Asbestos Conference: Litigation and Trial of MDL Asbestos Claims in Federal Court, February 24-25, 2011',
        'Speaker, Asbestos Litigation Crash Course, HB Litigation Conferences, February 24, 2010',
        'Speaker, Asbestos Litigation Conference: <i>A Comprehensive National Overview and Outlook</i>, Perrin Conferences, San Francisco, California, September 14-16, 2009',
        'Speaker, <i>HarrisMartin’s</i> Asbestos Conference: Trial of a Take-Home Exposure Case from Jury Selection to Verdict, The Peninsula Chicago, June 22-23, 2009',
        'Speaker, <i>HarrisMartin’s</i> Trial of a Benzene Case Conference, December 8-9, 2008',
        'Speaker, <i>Mealey’s Asbestos Litigation Super Conference</i>, Sept. 22-24, 2008',
        'Speaker, <i>HarrisMartin’s</i> Trial of a Mesothelioma Case from Jury Selection to Verdict, June 23-24, 2008',
        'Speaker, <i>HarrisMartin’s</i> “Alabama Toxic Tort Litigation: Life After the Griffin Ruling”, May 19, 2008',
        'Speaker, <i>HarrisMartin’s Asbestos Litigation Conference: Peripheral No More, Part III, 2008</i>',
        'Speaker, <i>HarrisMartin’s Texas Asbestos & Silica Litigation Conference: Life After Borg-Warner v. Flores</i>, 2007',
        'Speaker, <i>HarrisMartin’s Asbestos Litigation Conference: Peripheral No More</i>, 2007',
        'Speaker, <i>Mealey’s Asbestos 101 Conference</i>, 2005',
        'Speaker, <i>Mealey’s Asbestos Premises Liability Conference</i>, 2003'
      ]
    },
    {
      title: 'Bar Admissions',
      items: [
        'California, 2008',
        'Washington, 2019',
        'Oregon, 2018',
        'Hawaii, 2017',
        'Georgia, 1996',
        'Kentucky, 1994',
        'Indiana, 1994',
        'Texas, 2000',
        'U.S. Court of Appeals, 5th Circuit',
        'U.S. Court of Appeals for the Armed Forces',
        'U.S. District Court, District of Hawaii',
        'U.S. District Court, Northern District of California',
        'U.S. District Court, Eastern District of California',
        'U.S. District Court, Southern District of California',
        'U.S. District Court, Central District of California',
        'U.S. District Court, Northern District of Texas',
        'U.S. District Court, Eastern District of Texas',
        'U.S. District Court, Southern District of Texas',
        'U.S. District Court, Western District of Texas',
        'U.S. District Court, Eastern District of Kentucky',
        'U.S. District Court, Northern Disctrict of Indiana',
        'U.S. District Court, Southern District of Indiana',
        'U.S. District Court, Eastern District of Wisconsin'
      ]
    },
    {
      title: 'Honors & Awards',
      items: [
        'Selected for inclusion on the Southern California Super Lawyers list, published by Thomson Reuters, 2014, 2015, 2016, 2017, 2018',
        'Selected for inclusion on the Texas Super Lawyers Rising Stars list, published by Law & Politics, 2005',
        'Graduate, Gerry Spence’s Trial Lawyers College, 1999',
        'National Moot Court Team, University of Kentucky, 1994'
      ]
    },
    {
      title: 'Other Appointments',
      items: [
        'Accredited by the Department of Veterans Affairs, 2016-Present',
        'JAG Corps, United States Army, 1995-2000'
      ]
    },
    {
      title: 'Professional Associations & Memberships',
      items: [
        '<a href="https://www.abota.org/index.cfm?pg=FindALawyer&amp;dirAction=SearchResults&amp;m_firstname=scott&amp;m_lastname=frost&amp;fs_match=s&amp;seed=731703" target="_blank" rel="noopener noreferrer">American Board of Trial Advocates</a>',
        'American Association for Justice - Co-Chair, Asbestos Litigation Section, 2012-Present'
      ]
    }
  ];

  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs
            path1="Home"
            url1="/"
            path2="Attorneys"
            url2="attorneys"
            path3="Scott-L-Frost"
            url3="/scott-l-frost"
          />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Scott L. Frost
          </h1>
        </div>
        <div className="bg-white pb-4">
          <div className="flex flex-col items-center px-2 py-6 bg-frost-blue">
            <div className="w-40 overflow-hidden">
              <img
                className="h-56 w-full object-cover object-center"
                src="/images/attorneys/scott-l-frost.jpg"
              />
            </div>
          </div>
          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott Frost has represented victims of asbestos related disease for
            over 18 years.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            His passion is representing families who have been harmed by
            corporations.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is an experienced litigator who tries benzene exposure and
            defective medical device cases along with asbestos exposure and
            mesothelioma cases.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            He is licensed to practice law by the state bars of California,
            Washington, Oregon, Hawaii, Georgia, Kentucky, Indiana, and Texas.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is also a member of the the American Board of Trial Advocates.
            He is also accredited by the Department of Veterans Affairs, and he
            formerly served with the Judge Advocate General’s Corps of the U.S.
            Army.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is a cum laude graduate of Xavier University in Cincinnati,
            Ohio, and earned his Juris Doctor degree from the University of
            Kentucky College of Law.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            While serving in the United States Army, Scott was appointed as a
            Special Assistant United States Attorney. In that capacity, he tried
            cases on behalf of the United States in District Court in Waco,
            Texas and earned the victim assistance award.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is a graduate of Gerry Spence’s Trial Lawyer’s College.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Since 2000, Scott has successfully tried asbestos cases across the
            country. He has been recognized in Texas Monthly magazine on the
            2005 Law & Politics Texas Rising Stars list and again from 2014
            through 2018 on the Southern California Super Lawyers list published
            by Thomson Reuters.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is also a frequent presenter at asbestos conferences. His pro
            bono work includes of counsel appointments by the Public Justice
            Foundation for asbestos removal litigation involving the St. Louis
            Airport, the Fort Worth Cowtown Inn project, and St. Bernard Parish.
          </p>

          <p class="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott is a member of the American Association for Justice and is the
            co-chair of the Asbestos Litigation Section.
          </p>
        </div>
        <div>
          {accordionData.map((item, index) => {
            return (
              <Accordion
                key={index}
                accordionTitle={item.title}
                accordionList={item.items}
              />
            );
          })}
        </div>
        <RecognitionAffiliationBlock items={affiliationImages} />
        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
          <BlogButton className="pt-6" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default AttorneysPage;
