import React from 'react';
import { NextPage } from 'next';

type Props = {
  className: string;
};

const CallButton: NextPage<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href="tel:+13103081074"
        className="py-2 text-white bg-frost-blue rounded-full block w-full"
      >
        <span className="text-xl font-extrabold tracking-wide leading-tight text-white flex justify-center">
          Tap to call +1(866)
          <div className="">
            <span>FLF-MESO</span>
            <span className="text-2xs block -mt-1 ml-1 tracking-specialWide">
              353-6376
            </span>
          </div>
        </span>
      </a>
      <span className="mt-2 text-gray-900 text-xs tracking-tight leading-tight inline-block">
        *Tapping this button will trigger a phone call on the device you are
        using.
      </span>
    </div>
  );
};

export default CallButton;
