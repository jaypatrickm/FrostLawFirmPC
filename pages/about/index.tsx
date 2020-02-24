import React from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import { NextPage } from 'next';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import ContactButton from '../../components/contact-button/contact-button.component';
import Link from 'next/link';
import AttorneysButton from '../../components/attorneys-button/attorneys-button.component';
import BlogButton from '../../components/blog-button/blog-button.component';
const AboutPage = () => {
  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs path1="Home" url1="/" path2="About" url2="/About" />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Our Story
          </h1>
        </div>
        <div className="bg-white pb-4">
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott Frost was born in Iowa. Shortly after, the family packed up
            the panel wagon and moved to Southern California. Scott’s father was
            a construction laborer who studied at the kitchen table to get this
            contractor license. Scott’s father would put on his tool belt and
            work construction across southern California for years. As a baby,
            Scott used to jump inside the big leather tool belt and try to fit
            it around his little waist. When the tool belt didn’t fit, Scott
            would just carry it around the apartment.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott’s father worked for years laying tile and kicking in carpet.
            Eventually the daily work broke down his body. He spent the
            remainder of his career selling the very products he had used for
            all those years.
          </p>
          <img
            className="pt-4"
            src="images/about/dadwork.jpg"
            alt="Scott Frost's father at work"
          />
          <span className="py-2 px-4 block text-xs text-black leading-tight">
            Scott's Dad (second from right)
          </span>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Forty years later Scott’s father was diagnosed with lung cancer.
            Scott was at a close friend’s wedding rehearsal when he got the
            call. Scott’s father said, “Son, I have some bad news but it is
            going to be ok.” Scott’s father chose to fight his cancer and sought
            out experimental drugs and therapy. Scott’s mother and father got
            used to the stale smell of hospitals over the next few years. The
            constant ever changing drugs, whose names his father could not even
            pronounce, ruined his father’s kidneys leading him to an at-home
            daily dialysis treatment plan.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Throughout this time, Scott’s dad continued to volunteer driving a
            large church truck collecting food for local families in need. He
            loved handing out food and seeing the smiling faces of the kids.
            Scott’s dad always had a smile on his face and was quick to say,
            “Have you heard the story about…”
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            The drugs helped extend his life, but the serious side effects kept
            him from enjoying his love of farming, camping, and fishing. It even
            kept him from doing the simplest of things, like walking down the
            street.
          </p>
          <img
            className="pt-4"
            src="images/about/dadandmom.jpg"
            alt="Scott Frost's mother and father"
          />
          <span className="py-2 px-4 block text-xs text-black leading-tight">
            Scott's Mom and Dad
          </span>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            The cancer that doctors were able to shrink, had begun to grow again
            and Scott’s father was in and out of hospital – all with the love
            and support of his wife of over 50 years, by his side. Eventually,
            all of the visits caught up to Scott’s father and he passed away
            suddenly from an infection.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott’s father had worked with and even sold asbestos products for
            many years. Scott’s father never knew they were dangerous until
            Scott told him many years later.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott has represented victims of asbestos related disease for over
            eighteen years. Scott’s passion is representing families who have
            been harmed by corporations. Scott’s mission is to make sure this
            never happens to our children and grandchildren and to keep our
            communities safe for these future generations.
          </p>
          <p className="px-4 mt-3 leading-tight tracking-wider text-lg">
            Scott Frost has represented mesothelioma patients across the
            country; including Hawaii, California, Washington, Oregon, Florida,
            Illinois, Missouri, Nevada, Massachusetts, New York, Oklahoma,
            Georgia, Kentucky, Louisiana, and Texas.
          </p>
        </div>

        <div className="bg-frost-light-gray pt-4 px-4 pb-8">
          <ContactButton className="pt-4" />
          <AttorneysButton className="pt-6" />
          <BlogButton className="pt-6" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default AboutPage;
