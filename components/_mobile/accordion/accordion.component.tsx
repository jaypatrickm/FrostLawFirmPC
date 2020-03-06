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

  return (
    <div>
      <div
        onClick={onClickToggleAccordion}
        className="flex justify-between items-center bg-frost-blue py-1 px-4 border-solid border-4 border-frost-lightest-blue"
      >
        <div className="w-2/3">
          <h3 className="leading-tight text-white font-bold text-3xl ">
            {accordionTitle}
          </h3>
        </div>
        <div>
          <PlusMinusSvg isOpen={isOpen} />
        </div>
      </div>
      <div className={isOpen ? 'block' : 'hidden'}>
        <ul>
          {accordionList.map((value, index) => {
            function createMarkup() {
              return { __html: value };
            }
            return (
              <li
                dangerouslySetInnerHTML={createMarkup()}
                key={index}
                className={
                  (index % 2 ? '' : 'bg-frost-lightest-blue') + ' py-3 px-4'
                }
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
