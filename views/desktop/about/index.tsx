import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs.component';
import BrickBg from '../../../components/_desktop/brick-bg/brick-bg.component';
import Button from '../../../components/_desktop/button/button.component';
type AboutPageProps = {
  isMobile: boolean;
  page: string;
};

const AboutDesktop = ({ isMobile, page }: AboutPageProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs path1="Home" url1="/" path2="About" url2="about" />
        </div>
        <div className="w-full bg-frost-blue">
          <div className="bg-white pb-10">
            <div className="md:max-w-2xl max md:m-auto">
              <div className="m-auto py-4">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-frost-blue text-center">
                  Our Story
                </h3>

                <div className="image border-white border-16 bg-white mr-auto ml-auto">
                  <img
                    src="/images/about/dadwork.jpg"
                    alt="Scott Frost's father at work"
                  />
                  <span className="py-2 block text-sm lg:text-lg text-black text-center leading-normal">
                    Scott's dad (second from right).
                  </span>
                </div>

                <div className="px-4 leading-snug tracking-wider text-lg lg:text-xl">
                  <p className="">
                    Scott L. Frost was born in Iowa. Shortly after, the family
                    packed up the panel wagon and moved to Southern California.
                    Scott’s father was a construction laborer who studied at the
                    kitchen table to get this contractor license. Scott’s father
                    would put on his tool belt and work construction across
                    southern California for years. As a baby, Scott used to jump
                    inside the big leather tool belt and try to fit it around
                    his little waist. When the tool belt didn’t fit, Scott would
                    just carry it around the apartment.
                  </p>
                  <p className="mt-4">
                    Scott’s father worked for years laying tile and kicking in
                    carpet. Eventually the daily work broke down his body. He
                    spent the remainder of his career selling the very products
                    he had used for all those years.
                  </p>
                  <span className="text-4xl font-extrabold text-frost-blue text-center leading-tight tracking-normal py-4 mt-4 inline-block">
                    “Son, I have some bad news but it is going to be ok.”
                  </span>
                  <p className="mt-4">
                    Forty years later Scott’s father was diagnosed with lung
                    cancer. Scott was at a close friend’s wedding rehearsal when
                    he got the call. Scott’s father said, “Son, I have some bad
                    news but it is going to be ok.” Scott’s father chose to
                    fight his cancer and sought out experimental drugs and
                    therapy. Scott’s mother and father got used to the stale
                    smell of hospitals over the next few years. The constant
                    ever changing drugs, whose names his father could not even
                    pronounce, ruined his father’s kidneys leading him to an
                    at-home daily dialysis treatment plan.
                  </p>
                  <p className="mt-4">
                    Throughout this time, Scott’s dad continued to volunteer
                    driving a large church truck collecting food for local
                    families in need. He loved handing out food and seeing the
                    smiling faces of the kids. Scott’s dad always had a smile on
                    his face and was quick to say, “Have you heard the story
                    about…”
                  </p>
                  <p className="mt-4">
                    The drugs helped extend his life, but the serious side
                    effects kept him from enjoying his love of farming, camping,
                    and fishing. It even kept him from doing the simplest of
                    things, like walking down the street.
                  </p>
                </div>
              </div>
              <div className="image border-white border-16 bg-white mr-auto ml-auto">
                <img
                  src="/images/about/dadandmom.jpg"
                  alt="Photo of Scott L. Frost's dad and mom"
                />
                <span className="py-2 block text-sm text-black text-center leading-normal lg:text-lg">
                  Scott's dad and mom.
                </span>
              </div>
              <div className="px-4 leading-snug tracking-wider text-lg lg:text-xl">
                <p className="">
                  The cancer that doctors were able to shrink, had begun to grow
                  again and Scott’s father was in and out of hospital – all with
                  the love and support of his wife of over 50 years, by his
                  side. Eventually, all of the visits caught up to Scott’s
                  father and he passed away suddenly from an infection.
                </p>
                <p className="mt-4">
                  Scott’s father had worked with and even sold asbestos products
                  for many years. Scott’s father never knew they were dangerous
                  until Scott told him many years later.
                </p>
                <p className="mt-4">
                  Scott has represented victims of asbestos related disease for
                  over eighteen years. Scott’s passion is representing families
                  who have been harmed by corporations. Scott’s mission is to
                  make sure this never happens to our children and grandchildren
                  and to keep our communities safe for these future generations.
                </p>
                <p className="mt-4">
                  Scott Frost has represented mesothelioma patients across the
                  country; including Hawaii, California, Washington, Oregon,
                  Florida, Illinois, Missouri, Nevada, Massachusetts, New York,
                  Oklahoma, Georgia, Kentucky, Louisiana, and Texas.
                </p>
              </div>
              <div className="w-64 mt-10 m-auto">
                <Button
                  color="text-white bg-frost-orange hover:text-white hover:bg-frost-dark-orange"
                  url="/contact"
                >
                  Contact Us
                </Button>
              </div>
              <div className="w-72 mt-10 m-auto">
                <Button
                  color="text-white bg-frost-blue hover:text-white hover:bg-frost-dark-blue"
                  url="/attorneys"
                >
                  View Our Attorneys
                </Button>
              </div>
              <div className="w-64 mt-10 m-auto">
                <Button
                  color="text-white bg-frost-blue hover:text-white hover:bg-frost-dark-blue"
                  url="/blog"
                >
                  View Our Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AboutDesktop;
