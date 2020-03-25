import React, { useState } from 'react';
import { NextPage } from 'next';
import PlusMinusSvg from '../../icons/plusminus/plusminus.svg';
import { create } from 'domain';

type Props = {
  accordionTitle: string;
  accordionList: string[];
};

const Accordion: NextPage<Props> = ({ accordionTitle, accordionList }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClickToggleAccordion = () => {
    setIsOpen(!isOpen);
    return !isOpen;
  };

  function createMarkup(markup: any) {
    return { __html: markup };
  }

  return (
    <div className="mb-8 border-solid border-2 border-frost-blue w-full">
      <div
        onClick={onClickToggleAccordion}
        className={
          (isOpen ? '' : '') +
          ' flex justify-between items-center py-1 px-4 cursor-pointer bg-white border-b-2 border-frost-blue'
        }
      >
        <div className="w-2/3">
          <h3 className="leading-tight text-frost-blue tracking-wide font-bold text-3xl ">
            {accordionTitle}
          </h3>
        </div>
        <div>
          <PlusMinusSvg isOpen={isOpen} className="text-frost-blue" />
        </div>
      </div>
      <div className={isOpen ? 'block' : 'hidden'}>
        <ul>
          {accordionList.map((value, index) => {
            return (
              <li
                dangerouslySetInnerHTML={createMarkup(value)}
                key={index}
                className={(index % 2 ? '' : ' bg-white') + ' py-3 px-4'}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
