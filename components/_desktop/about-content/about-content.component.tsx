import React from 'react';
import ButtonPrimary from '../../../components/_desktop/button-primary/button-primary.component';
import ButtonSecondary from '../../../components/_desktop/button-secondary/button-secondary.component';
import {
  ImageContainer,
  ImageCaption,
  ContentContainer,
  PullQuote,
  ButtonContainer
} from './about-content.styles';

const AboutContent = () => {
  return (
    <>
      <ImageContainer>
        <img
          src="/images/about/dadwork.jpg"
          alt="Scott Frost's father at work"
        />
        <ImageCaption>Scott's dad (second from right).</ImageCaption>
      </ImageContainer>
      <ContentContainer>
        <p>
          Scott L. Frost was born in Iowa. Shortly after, the family packed up
          the panel wagon and moved to Southern California. Scott’s father was a
          construction laborer who studied at the kitchen table to get this
          contractor license. Scott’s father would put on his tool belt and work
          construction across southern California for years. As a baby, Scott
          used to jump inside the big leather tool belt and try to fit it around
          his little waist. When the tool belt didn’t fit, Scott would just
          carry it around the apartment.
        </p>
        <p>
          Scott’s father worked for years laying tile and kicking in carpet.
          Eventually the daily work broke down his body. He spent the remainder
          of his career selling the very products he had used for all those
          years.
        </p>
        <PullQuote>
          “Son, I have some bad news but it is going to be ok.”
        </PullQuote>
        <p>
          Forty years later Scott’s father was diagnosed with lung cancer. Scott
          was at a close friend’s wedding rehearsal when he got the call.
          Scott’s father said, “Son, I have some bad news but it is going to be
          ok.” Scott’s father chose to fight his cancer and sought out
          experimental drugs and therapy. Scott’s mother and father got used to
          the stale smell of hospitals over the next few years. The constant
          ever changing drugs, whose names his father could not even pronounce,
          ruined his father’s kidneys leading him to an at-home daily dialysis
          treatment plan.
        </p>
        <p>
          Throughout this time, Scott’s dad continued to volunteer driving a
          large church truck collecting food for local families in need. He
          loved handing out food and seeing the smiling faces of the kids.
          Scott’s dad always had a smile on his face and was quick to say, “Have
          you heard the story about…”
        </p>
        <p>
          The drugs helped extend his life, but the serious side effects kept
          him from enjoying his love of farming, camping, and fishing. It even
          kept him from doing the simplest of things, like walking down the
          street.
        </p>
      </ContentContainer>
      <ImageContainer>
        <img
          src="/images/about/dadandmom.jpg"
          alt="Photo of Scott L. Frost's dad and mom"
        />
        <ImageCaption>Scott's dad and mom.</ImageCaption>
      </ImageContainer>
      <ContentContainer>
        <p>
          The cancer that doctors were able to shrink, had begun to grow again
          and Scott’s father was in and out of hospital – all with the love and
          support of his wife of over 50 years, by his side. Eventually, all of
          the visits caught up to Scott’s father and he passed away suddenly
          from an infection.
        </p>
        <p>
          Scott’s father had worked with and even sold asbestos products for
          many years. Scott’s father never knew they were dangerous until Scott
          told him many years later.
        </p>
        <p>
          Scott has represented victims of asbestos related disease for over
          eighteen years. Scott’s passion is representing families who have been
          harmed by corporations. Scott’s mission is to make sure this never
          happens to our children and grandchildren and to keep our communities
          safe for these future generations.
        </p>
        <p>
          Scott Frost has represented mesothelioma patients across the country;
          including Hawaii, California, Washington, Oregon, Florida, Illinois,
          Missouri, Nevada, Massachusetts, New York, Oklahoma, Georgia,
          Kentucky, Louisiana, and Texas.
        </p>
      </ContentContainer>
      <ButtonContainer>
        <ButtonPrimary url="/contact">Contact Us</ButtonPrimary>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonSecondary url="/attorneys">Our Attorneys</ButtonSecondary>
      </ButtonContainer>
    </>
  );
};

export default AboutContent;
