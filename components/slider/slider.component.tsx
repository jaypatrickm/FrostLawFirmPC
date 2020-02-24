import React, { useRef, useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import styled from 'styled-components';

const StyledSlide = styled.div`
  width: 100%;
  height: 100%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

type SliderProps = {
  children?: React.ReactNode[];
  onSlideChange?: (slide: number) => void;
  auto?: number;
  activeIndex?: number;
};

const Slider = ({
  children = [],
  onSlideChange = () => undefined,
  auto = 5000,
  activeIndex = 0
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  // Initialize slides with spring
  const [springProps, setSpringProps] = useSprings(children.length, index => ({
    offset: index
  }));

  //Triggered on slide change
  useEffect(() => {
    // see:  https://github.com/react-spring/react-spring/issues/861
    // @ts-ignore
    setSpringProps(index => ({ offset: index - slide }));
    onSlideChange(slide);
  }, [slide, setSpringProps, onSlideChange]);

  //Effect for autosliding
  useEffect(() => {
    let interval: number;

    if (auto > 0) {
      interval = setInterval(() => {
        const targetIndex = (slide + 1) % children.length;
        setSlide(targetIndex);
      }, auto);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [auto, children.length, slide]);

  //Jump to slide index when prop changes
  useEffect(() => {
    setSlide(activeIndex % children.length);
  }, [activeIndex, children.length]);

  //Sets pointer events none to every child and preserves styles
  const childs = children.map((child, index) => (
    <StyledSlide key={index}>{child}</StyledSlide> //es-lint-disable-line react/no-array-index-key
  ));

  return (
    <StyledWrapper ref={sliderRef}>
      <StyledSlider>
        {springProps.map(({ offset }, index) => (
          <animated.div
            key={index} // eslint-disable-line react/no-array-index-key
            className="slider__slide"
            style={{
              transform: offset.interpolate(
                offsetX => `translate3d(${offsetX * 100}%, 0, 0)`
              ),
              position: 'absolute',
              width: '100%',
              height: '100%',
              willChange: 'transform'
            }}
          >
            {childs[index]}
          </animated.div>
        ))}
      </StyledSlider>
    </StyledWrapper>
  );
};

export default Slider;
