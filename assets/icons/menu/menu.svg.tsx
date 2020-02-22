import React from 'react';
import { NextPage } from 'next';

type Props = {
  showMenu: boolean;
};
const Menu: NextPage<Props> = ({ showMenu }) => {
  return (
    <svg
      className="fill-current hover:text-blue-900 text-blue-500"
      style={{ margin: '3px', width: '40px' }}
      viewBox="0 0 800 800"
    >
      <path
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        d="M170.13,605.6h55.52V793.24h-36V666.32q0-5.48.12-15.34t.13-15.21L155,793.24h-37.5L82.71,635.77q0,5.34.12,15.21T83,666.32V793.24H47V605.6h56.15l33.62,147.54Z"
      />
      <path
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        d="M397.92,638.82H300.2v39.85h89.7v32.59H300.2V759.5H402.43v33.74H262.49V605.6H397.92Z"
      />
      <path
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        d="M431.87,605.6h40.45l73.31,130.84V605.6h36V793.24H543L467.83,660.1V793.24h-36Z"
      />
      <path
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        d="M617.79,605.6H657V720.84q0,19.33,4.5,28.24,7,15.76,30.46,15.77t30.33-15.77q4.5-8.91,4.5-28.24V605.6H766V720.93q0,29.93-9.13,46.59-17,30.56-64.91,30.56t-65-30.56q-9.13-16.66-9.13-46.59Z"
      />
      <rect
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        x="79.68"
        y="216.41"
        width="654"
        height="114.83"
        transform="translate(312.74 -207.37) rotate(45)"
      />
      <rect
        className={showMenu ? 'block' : 'hidden'}
        style={{ fill: '#fff' }}
        x="79.68"
        y="216.41"
        width="654"
        height="114.83"
        transform="translate(887.87 179.88) rotate(135)"
      />
      <rect
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        x="47.82"
        y="50.52"
        width="717.69"
        height="126.01"
        transform="translate(-0.19 0.69) rotate(-0.1)"
      />
      <rect
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        x="47.97"
        y="421.12"
        width="717.62"
        height="126.01"
        transform="translate(-0.82 0.69) rotate(-0.1)"
      />
      <rect
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        x="48.2"
        y="235.76"
        width="717.69"
        height="126.01"
        transform="translate(-0.51 0.69) rotate(-0.1)"
      />
      <path
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        d="M170.78,607.37h55.38V794.53H190.3V667.93q0-5.45.13-15.3t.12-15.17l-34.9,157.07H118.24L83.58,637.46q0,5.34.13,15.17t.12,15.3v126.6H48V607.37h56L137.5,754.53Z"
      />
      <path
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        d="M398,640.51H300.52v39.74H390v32.51H300.52v48.12h102v33.65H262.9V607.37H398Z"
      />
      <path
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        d="M431.85,607.37H472.2l73.11,130.5V607.37h35.87V794.53H542.7l-75-132.8v132.8H431.85Z"
      />
      <path
        className={showMenu ? 'hidden' : 'block'}
        style={{ fill: '#fff' }}
        d="M617.29,607.37H656.4v115q0,19.27,4.49,28.16,7,15.74,30.38,15.73t30.25-15.73Q726,741.6,726,722.32v-115h39.11v115q0,29.83-9.11,46.47-17,30.47-64.74,30.47T626.4,768.88q-9.1-16.64-9.11-46.47Z"
      />
    </svg>
  );
};

export default Menu;
