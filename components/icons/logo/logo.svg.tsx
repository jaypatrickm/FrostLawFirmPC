import React from 'react';

type LogoSvgProps = {
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
};

const LogoSvg = ({
  className = 'w-12',
  colorPrimary = 'text-frost-blue',
  colorSecondary = 'text-frost-gray'
}: LogoSvgProps) => {
  return (
    <svg className={className} viewBox="0 0 500 500">
      <path
        className={colorSecondary + ' fill-current'}
        d="M99.78,337.22c.09,1.48,1.08,2.63,1.67,3.92.23.5.79.95.6,1.51-.46,1.43.42,2.38,1.12,3.47a76.34,76.34,0,0,0,6.25,8.58,2.12,2.12,0,0,1,.29.38c1.43,2.65,3.84,4.49,6,6.49.74.66,1.29,1.45,2,2.14.4.39.59.49,1.21.2,2-.94,3.62-.14,4,2a8.78,8.78,0,0,0,.84,2.45,1.75,1.75,0,0,0,2.05,1,6.26,6.26,0,0,1,4.8.79,1.6,1.6,0,0,0,1.19.22c1.42-.46,2.41.32,3.45.94s2,1.19,2.92,1.85c1.29.92,2.9,1.27,4.2,2a37,37,0,0,0,3.9,2.5c.21.09.48.22.6-.09,0-.08-.15-.25-.24-.37a1.1,1.1,0,0,0-.21-.14,2.28,2.28,0,0,1-.38-.3,2.18,2.18,0,0,1-.16-2.26c.31-.73,1.15-.46,1.79-.5a5,5,0,0,1,3.06.91c.81.56,1.63,1.11,2.41,1.7a3.81,3.81,0,0,0,2.54.87,7.63,7.63,0,0,1,5,1.82c1,.76,2.35,1.17,3,2.42.26.52,1,.47,1.61.47h5.53a12.08,12.08,0,0,1,2.74.28c1.28.31,2.67.34,3.35,1.72.15.3.58.28.88.06a.5.5,0,0,0,.15-.64c-.13-.29-.34-.54-.48-.83-.5-1.08-.17-1.67,1-1.82a3.41,3.41,0,0,1,1.94.32,24.24,24.24,0,0,1,4.77,2.61c.45.35,1,.61,1.44.94,1.08.78,2,.92,3-.18a2.23,2.23,0,0,1,3-.2,8.09,8.09,0,0,0,5.25,1.16,8,8,0,0,1,5.14,1.57,17,17,0,0,0,4.4,2.72.55.55,0,0,1,.21.12c2.47,2.13,5.06,4.15,7.35,6.44,1.49,1.48,2.88,3.08,4.43,4.52a24.52,24.52,0,0,1,4.1,5.06c.93,1.5,1.88,3,2.87,4.45a10.51,10.51,0,0,1,1.84,3.84c.28,1.43.67,1.53,2.32,1.37,1.94-.19,2.4.13,2.44,2,.07,3.78.56,7.54.66,11.34a14.47,14.47,0,0,1-1.34,6.58,34.46,34.46,0,0,1-8,11.63,5.48,5.48,0,0,0-1.87,3.52,2.7,2.7,0,0,1-1.53,2.3,13.17,13.17,0,0,0-2.78,2.37,13.19,13.19,0,0,1-3.93,2.91,7.09,7.09,0,0,0-2.08,1.69,12.85,12.85,0,0,1-8.1,3.83,5.75,5.75,0,0,0-1.45.38,9.87,9.87,0,0,1-7.06.06,5.1,5.1,0,0,0-2.71.16c-.74.12-1.47.54-2.2.24-1.37-.57-2.23.11-3.07.95-.35.35-.72.66-1.06,1a3.7,3.7,0,0,1-2.43,1c-6,.72-12,.42-18,.61a28.37,28.37,0,0,1-10.55-1.76,56.81,56.81,0,0,1-11.94-5.47c-2.22-1.42-4.36-2.92-6.5-4.42-2.62-1.83-5.45-3.37-8.18-5-4.23-2.56-8.4-5.18-12.42-8a43.24,43.24,0,0,0-6.15-3.67,18.23,18.23,0,0,1-6.51-5.09c-1.36-1.69-2.73-3.39-4.15-5a35.94,35.94,0,0,0-5.55-5.1c-2.41-1.82-4.89-3.59-7.2-5.52-3.19-2.68-6.26-5.49-9.38-8.24-.24-.21-.47-.45-.73-.65C70,405.2,64.1,399.15,58,393.32A98,98,0,0,1,43.24,376c-.52-.8-1.32-1.43-1.92-2.19A78.65,78.65,0,0,1,32.84,361a42,42,0,0,0-2.9-5,50.73,50.73,0,0,1-5.24-9.69,8.8,8.8,0,0,0-.85-1.71c-2.1-3.08-3.47-6.49-5.16-9.75-1.43-2.77-3-5.47-4.18-8.35-1.7-4.11-3.43-8.21-4.92-12.4-.75-2.1-1.46-4.19-2.08-6.32-.31-1.08-.65-2.38.43-3.08s.69-1,.49-1.83c-.55-2.39-2-4.33-3.26-6.34a5.52,5.52,0,0,1-1-3.12c0-2.28.24-4.59-.94-6.74A3.68,3.68,0,0,1,3.08,285c0-1.66,0-3.32,0-5a12.3,12.3,0,0,0-.37-3.76,7.41,7.41,0,0,1-.17-2.11c0-2.53,0-5.06,0-7.59a17,17,0,0,0-.63-6.1,6,6,0,0,1-.2-2.12q0-7.23,0-14.46a11.44,11.44,0,0,1,.22-2.11.9.9,0,0,1,.89-.72,1.15,1.15,0,0,1,1.23.62,3.65,3.65,0,0,1,.27,1.38c0,3.32.85,6.59.59,9.92a4.57,4.57,0,0,0,.42,1.84,14.84,14.84,0,0,1,1,5.82c0,.94,0,1.9,0,2.84a76.61,76.61,0,0,0,1,10.59,15.15,15.15,0,0,0,1.38,5.72,1.26,1.26,0,0,1,.13.69c-.2,2.31.41,4.56.67,6.82s.26,4.58,1.5,6.66a2.78,2.78,0,0,1,.34,1.37,16.15,16.15,0,0,0,2.52,7.61,7,7,0,0,1,1.14,4.29,5.55,5.55,0,0,0,1,3.6c.76,1.22,1.35,2.54,2,3.81a9.48,9.48,0,0,0,.73,1.23,7.61,7.61,0,0,0,.88.81c.36-.41,0-.75-.14-1.09a16.47,16.47,0,0,1-1.56-5.45c-.23-2.27-1.11-4.45-1.25-6.75a3.83,3.83,0,0,0-.7-1.51,39.8,39.8,0,0,1-3.44-8.61,50,50,0,0,0-2.34-6.93,4.26,4.26,0,0,1-.3-1.86c0-1.26,0-2.53,0-3.79a4.88,4.88,0,0,0-.38-2.33,8,8,0,0,1-.76-4.15c.15-5.14-.7-10.25-.54-15.39-.92-3.46.27-6.92,0-10.38,1.06-5.81.36-11.67.54-17.5a21.51,21.51,0,0,1,1.22-7,6.8,6.8,0,0,0,.59-2.29c0-2.46.76-4.84.68-7.29a10.13,10.13,0,0,1,2-6.25A12.83,12.83,0,0,0,15,204c.3-1.12.37-2.33,1.38-3.24.55-.5.37-1.36.33-2.06a29.74,29.74,0,0,1,.93-7.73,11.13,11.13,0,0,1,2.68-5c1-1.16,2-2.32,2.95-3.52.49-.62.34-1-.48-1.21-.65-.17-1.36-.18-1.52-1a2.05,2.05,0,0,1,.76-1.92c.11-.11.21-.27.36-.33,1.86-.81,2-2.34,1.83-4-.19-2.15,1-4,1.71-5.86,1-2.59,2.25-5.1,3.3-7.67.45-1.1.59-2.3,1-3.41a86.16,86.16,0,0,1,5.57-12.93,33.27,33.27,0,0,0,2.5-5.17,5.65,5.65,0,0,1,.84-1.44,1.51,1.51,0,0,1,1.68-.76,1.45,1.45,0,0,1,1,1.7c-.13.94-.36,1.86-.56,2.79-.1.46-.22.92-.33,1.38a8.47,8.47,0,0,0-.79,1.19c-.74,1.5-1.29,3.07-1.93,4.61-1.1,2.64-2.55,5.15-3.85,7.71-.21.43-.45.85-.62,1.29a.45.45,0,0,0,.24.6,1.06,1.06,0,0,0,.7,0c.5-.21.66-.7.85-1.13,1.35-3.23,2.79-6.43,4-9.71a15.77,15.77,0,0,0,1.4-4.53,7.39,7.39,0,0,0,2.35-3.56,15.45,15.45,0,0,1,1.51-3,95.87,95.87,0,0,1,5.7-8.09A5.07,5.07,0,0,0,52,124.42a5.08,5.08,0,0,1,1.29-3,123.67,123.67,0,0,1,9.21-12.13c2.5-2.87,5-5.71,7.56-8.57a4.09,4.09,0,0,0,.74-.94C72.7,95.43,76,92.07,79,88.51A118.84,118.84,0,0,1,89.42,78.2a79.41,79.41,0,0,1,6.29-5.09c2.17-1.61,4.27-3.3,6.41-5,.65-.49,1.33-1,2-1.42a4.36,4.36,0,0,1,3-1c.56.06.94-.27.44-.89-.28-.35.1-.56.34-.75,1.71-1.41,3.44-2.79,5.85-3a5.55,5.55,0,0,0,2.45-1.15c4.07-2.51,8.12-5,12.2-7.53,1.55-.94,3.13-1.84,4.75-2.66,4.89-2.44,9.7-5,14.73-7.19,6-2.61,12-5.32,18.07-7.77,5.87-2.35,11.92-4.2,18-6,1.85-.54,3.7-1,5.54-1.57,5.6-1.67,11.32-2.88,17-4.12,7.85-1.71,15.79-2.9,23.67-4.4,4.61-.87,9.29-1.22,13.94-1.75,6.33-.71,12.69-.88,19.05-1a92.58,92.58,0,0,1,10.54.15c3.41.32,6.85.29,10.26.69,2.49.29,5,.41,7.52.55,3.51.2,7,.33,10.53.53.92.05,1.82.27,2.73.41a150.45,150.45,0,0,1,25,6.35c5.77,1.92,11.39,4.19,17.11,6.23a54.35,54.35,0,0,1,6.52,3c2.66,1.35,5.55,2.22,8.17,3.66,2.24,1.23,4.61,2.24,6.88,3.43,3.44,1.79,6.86,3.63,10.27,5.48,4.07,2.2,8.16,4.37,12.17,6.65a142.78,142.78,0,0,1,17.27,11.4c1.41,1.1,2.9,2.13,4.4,3.13s2.76,2.28,4.22,3.35c2.24,1.65,4.26,3.56,6.39,5.34,1.56,1.31,3.19,2.56,4.73,3.89,3.75,3.27,7.48,6.57,11.21,9.85,3.31,2.93,6,6.35,8.95,9.6,1,1.08,1.91,2.2,2.86,3.3s2,1.94,2,3.46c0,.2.22.42.37.61,4.47,5.58,7.56,11.9,10.84,18.12,1.93,3.68,3.83,7.38,5.83,11,1.23,2.24,1.89,4.74,3.5,6.8a1.23,1.23,0,0,1,.3.88c-.56,2.3,1,4.1,1.63,6.09.44,1.36,1.14,2.63,1.65,4a51.69,51.69,0,0,0,2.38,5.47,29.89,29.89,0,0,1,2.14,5.55c.72,2.52,1.54,5,2.45,7.46,1.88,5.15,3.4,10.4,4.84,15.68.92,3.36,1.45,6.79,2.15,10.19.37,1.85,1.23,3.57,1.37,5.5.16,2.36.61,4.69,1,7,.07.46,0,1.06.32,1.36,1.14,1.18.91,2.63,1.11,4,.3,2.18.74,4.35,1.25,6.51a15.49,15.49,0,0,1,.38,3.52c0,3.95.07,7.91,0,11.86a28.74,28.74,0,0,0,2,10,8.23,8.23,0,0,1,.57,3c0,.24,0,.48,0,.71a104.46,104.46,0,0,0,.62,13.23,26.6,26.6,0,0,1-.46,8,.86.86,0,0,0-.05.23c.15,2.95-.63,5.79-1.22,8.65-.46,2.24-.69,4.51-1.32,6.73-.75,2.66-1.18,5.4-1.71,8.11a76.81,76.81,0,0,1-3,11c-.29.82-.57,1.65-.82,2.48-.73,2.51-1.43,5-2.17,7.53a32.48,32.48,0,0,0-1.05,4.38,22.33,22.33,0,0,1-1.3,4.32,12,12,0,0,0-.68,2.75c-.05.06-.12.11-.16.17s0,.12,0,.17l.16-.35a6.43,6.43,0,0,0,1.44-2.47,8.34,8.34,0,0,1,.81-1.46,1,1,0,0,1,1.1-.37.87.87,0,0,1,.6.71,5.7,5.7,0,0,1-.07,2.36,42,42,0,0,1-3.06,9.25,17.18,17.18,0,0,0-1.89,5.12,1.49,1.49,0,0,1-.23.67c-2.12,3.26-3,7-4.83,10.4a18.69,18.69,0,0,1-4.3,5.78,23.08,23.08,0,0,0-2.46,2.38c-.71.78-.64,1.28.08,2.07,1.46,1.58,1.39,1.55.27,3.38s-2.19,4.09-3.41,6.06c-2.11,3.41-4.17,6.86-6.54,10.11-1.2,1.64-2,3.45-3.08,5.11a39.59,39.59,0,0,1-3.65,4.74c-2.74,3.08-5.22,6.37-7.84,9.55a86.61,86.61,0,0,1-7,7.74c-2.47,2.37-4.53,5.09-7.34,7.15-.58.43-.33.78.24,1.05.79.38.77,1,.38,1.61a10.49,10.49,0,0,1-1.36,1.69,59.42,59.42,0,0,1-9.76,8.16c-1.48.94-2.84,2-3.1,3.82a2,2,0,0,1-1,1.3,6.43,6.43,0,0,0-1.34,1.07,3.37,3.37,0,0,1-3.59,1c-2.08-.41-3.18.18-3.86,2a5.32,5.32,0,0,1-2.62,3,23.85,23.85,0,0,0-3.23,2.24,27.24,27.24,0,0,1-9.65,4.88c-1.33.32-2.32,1.5-3.81,1.65-.42,0-.61.51-.73.9a10.14,10.14,0,0,0-.68,2.76,2.19,2.19,0,0,1-2,2.11c-1.63.35-3.25.78-4.89,1a5.8,5.8,0,0,0-3.86,2.42c-.6.76-1.12,1.57-1.7,2.35a4.16,4.16,0,0,1-3.61,1.83c-2-.09-4,.57-6,.68a5.21,5.21,0,0,0-2.13.67c-3,1.63-6.29,2.59-9.32,4.11a19.5,19.5,0,0,0-2.67,1.32,12.37,12.37,0,0,1-5.6,1.89c-.57.09-1.29,0-1.62.47-.75,1.14-1.9,1.05-3.06,1.19-1.56.19-3.13.33-4.08,1.91-.56,1-1.89.93-2.94,1.1a5.07,5.07,0,0,0-2.57.82,1.52,1.52,0,0,1-.89.39c-2.72-.13-5.11,1.48-7.86,1.27a9.83,9.83,0,0,0-3.2.51,16.4,16.4,0,0,1-4.4.84,2.57,2.57,0,0,0-1.18.36c-3.25,1.75-6.79,2.06-10.43,1.9l-.25,0c-.74-.09-1.59-.07-1.8-1a2.06,2.06,0,0,1,1.33-2.07,9.23,9.23,0,0,1,2.41-.64A58.58,58.58,0,0,0,319,477.9c3-.91,6-2,9-3,1.95-.69,3.89-1.44,5.81-2.21a13.55,13.55,0,0,1,4.38-1,12.55,12.55,0,0,0,3.65-.8,69.41,69.41,0,0,0,10.26-4.45c5-2.66,10.27-4.63,15.21-7.29,4.08-2.19,8.15-4.38,12-6.87.2-.13.43-.29.28-.55-.06-.1-.29-.14-.45-.15a8.77,8.77,0,0,0-2.5.18,9.87,9.87,0,0,1-2.23.28,3.42,3.42,0,0,0-3,1.4,4.7,4.7,0,0,1-1.27,1.12,8.25,8.25,0,0,0-3.76,3.69,1.73,1.73,0,0,1-1.42.86c-1.8.36-3.59.83-5.41,1a4.31,4.31,0,0,0-2.86,1.25,13.11,13.11,0,0,1-6,3.38,49.86,49.86,0,0,0-7.74,3.36,86.85,86.85,0,0,1-10.19,4,13.63,13.63,0,0,1-5.47.3c-1.08-.07-1.38-.93-.66-1.69a12.65,12.65,0,0,1,5.55-3.06,56.12,56.12,0,0,0,11.94-5.39c2.82-1.69,5.57-3.5,8.37-5.23a12.14,12.14,0,0,1,6-2.32,3.44,3.44,0,0,0,1.61-.6c2.14-1.39,4.51-2.38,6.5-4a40.91,40.91,0,0,1,5.76-3.79c3.38-1.94,6.27-4.47,9.41-6.7,1.33-.95,2.69-1.87,4-2.81l5.82-4.12c.09-.07.1-.25.14-.38a1.52,1.52,0,0,0-.46-.1,2.29,2.29,0,0,0-1.3.66l-2.78,2a2.44,2.44,0,0,1-1.61.55,1.37,1.37,0,0,1-1.41-.79c-.19-.53.18-.9.59-1.21,1.23-.94,2.45-1.91,3.72-2.81,2-1.43,4-2.83,6.05-4.22,1.23-.84,1.94-2.14,3.12-3.06,2.58-2,5.09-4.11,7.45-6.35,2.76-2.63,5.33-5.44,8-8.17a5.89,5.89,0,0,0,4-2.15c.91-1,1.84-2,2.76-3,.15-.16.4-.38.21-.57s-.44,0-.6.17a47.64,47.64,0,0,1-5.37,4.53,6.62,6.62,0,0,0-1,1.06,8.09,8.09,0,0,0-4.46,3.26,6.35,6.35,0,0,1-4.63,2.94,3.81,3.81,0,0,0-3.18,2.37,8,8,0,0,1-2.63,3.11q-2.42,1.89-4.67,3.95c-1.39,1.27-3.15,1.41-4.88,1.5a1.46,1.46,0,0,1-1.37-2.32,18.94,18.94,0,0,1,1.16-1.55c.93-.31,1.94-.52,2.3-1.57a3.53,3.53,0,0,0-2.28,1.59,4.15,4.15,0,0,0-1.13.49c-1.73,1.61-3.88,2.77-5.46,4.52a22.17,22.17,0,0,1-6.3,4.61,11.35,11.35,0,0,0-2.21,1.54c-1.77,1.56-3.5,3.19-6,3.7a2.15,2.15,0,0,0-.85.49c-2.7,2.14-5.87,3.62-8.82,5.4-3.73,2.27-7.66,4.2-11.56,6.17a98.26,98.26,0,0,1-13.87,6c-2.78.9-5.28,2.36-8,3.45a4.22,4.22,0,0,1-2.65.44,1.15,1.15,0,0,1-.92-.72c-.16-.55.18-.9.63-1.16a2.4,2.4,0,0,1,.67-.31c3.34-.9,6.19-2.75,9.28-4.14,1.13-.51,2.24-1.06,3.4-1.51a16.57,16.57,0,0,0,4.25-2.46,6.8,6.8,0,0,1,3.13-1.37,12.71,12.71,0,0,0,3.27-1.15c1.19-.58,2.38-1.15,3.58-1.7a10.21,10.21,0,0,0,2.84-1.87,30.41,30.41,0,0,1,4.22-2.93c1.93-1.24,3.9-2.43,5.83-3.68a6.16,6.16,0,0,0,1-1,3.22,3.22,0,0,0,1.77-.76c.27-.22.85-.46.49-.86s-.74,0-1.1.2a1.89,1.89,0,0,0-1.2,1.39,7.31,7.31,0,0,0-3.05,1.55,4,4,0,0,1-1.53.78c-4,1.19-7.62,3.16-11.32,5-.22.11-.52.21-.61.4-.84,1.6-2.58,1.87-4.06,2.55s-2.83,1.35-4.25,2a3.4,3.4,0,0,1-1.15.45c-3.27.19-6,1.9-9,2.95a21.38,21.38,0,0,0-7.38,3.85,2.23,2.23,0,0,1-2.37.26,1.14,1.14,0,0,1-.28-2.07,10.61,10.61,0,0,1,2-1.06,28.16,28.16,0,0,0,5.09-2.55,15.91,15.91,0,0,1,5.49-2.24,2.7,2.7,0,0,0,1.61-.6c.36-.4,1.34-.64,1.05-1.14s-1.07,0-1.47.28c-1.24.91-2.83.82-4.18,1.52-3.14,1.64-6.43,3-9.66,4.52a10.79,10.79,0,0,1-1.89.64,60,60,0,0,0-11.39,4.35,20,20,0,0,1-5,1.38,5.33,5.33,0,0,1-2-.06,1.17,1.17,0,0,1-.68-2,5.05,5.05,0,0,1,2-1.36c4.1-1.4,7.87-3.5,11.9-5a2.22,2.22,0,0,0,1.71-2.11c0-1,.61-1.54,1.59-1.86a2.7,2.7,0,0,0,1.47-.84c1.2-2.22,3.59-3,5.59-4.21a73.2,73.2,0,0,0,6.42-3.71,16.6,16.6,0,0,1,3.09-1.57c6.51-3,12.27-7.05,18.18-10.93a3.59,3.59,0,0,0,.47-.12c.22-.08.54-.23.38-.45s-.42,0-.58.19a2.6,2.6,0,0,0-.27.38,12,12,0,0,0-6.67,2.46,35.67,35.67,0,0,1-5.48,2.86,5.11,5.11,0,0,1-2.2.42,15.8,15.8,0,0,0-4.84,1.12,54.23,54.23,0,0,0-6.79,3,2.18,2.18,0,0,1-2.74-.18,2,2,0,0,0-2.55-.08,11,11,0,0,1-3.51,1.23,4.38,4.38,0,0,1-1.49.09,2,2,0,0,1-1.74-1.18c-.33-.8.2-1.35.72-1.88a1.39,1.39,0,0,1,.19-.15c2.8-1.54,5.33-3.53,8.47-4.51a19,19,0,0,0,4.27-2c3.58-2.16,7.21-4.27,10.8-6.42a7.51,7.51,0,0,0,1.32-1.08c.34-.33.85-.81.63-1.2-.35-.61-.81.16-1.24.16-3,0-5.2,1.37-7.42,3-1.43,1.07-3.08,1.9-4.41,3.11a6.74,6.74,0,0,1-3.07,1.55,21,21,0,0,0-8,3.74,11.9,11.9,0,0,1-5.31,1.94,1.72,1.72,0,0,1-.75,0c-.69-.22-1.61-.25-1.76-1.11a1.52,1.52,0,0,1,1.19-1.63c1.58-.56,2.72-1.85,4.34-2.34a1.4,1.4,0,0,0,1.14-1.14c.22-1.59,1.48-2.19,2.82-2.72a6.13,6.13,0,0,1,1.2-.35,6.68,6.68,0,0,0,4.1-2.43,16.16,16.16,0,0,1,6.35-4.13A70.42,70.42,0,0,0,334,409.9a6.75,6.75,0,0,0,2.64-2.47,2.83,2.83,0,0,0,2-.78c.21-.2.57-.39.34-.74,0-.05-.45.07-.62.19-.58.43-1.14.9-1.71,1.36-1.7-.27-3.13.59-4.49,1.24a13.72,13.72,0,0,1-4.73,1.4c-3.38.3-5.87,2.2-8.27,4.16a42.48,42.48,0,0,1-5,3.9,12.52,12.52,0,0,0-2.53,2.29c-1.31,1.41-2.15,1.34-3-.32-.38-.79-.68-1-1.46-.54-1.85,1-3.89.76-5.89.71-.52,0-1-.16-1.1-.75s.34-.64.74-.83c2.4-1.09,4.81-2.17,7.1-3.48,3.14-1.81,6.27-3.65,9.47-5.37,1.76-.95,3.26-2.21,4.91-3.29a20,20,0,0,1,4.17-2.56,3.63,3.63,0,0,0,1.54-1.2,16.86,16.86,0,0,1,5-3.9c1.8-1,3.47-2.2,5.19-3.32.2-.13.43-.34.26-.55s-.46,0-.65.07c-.82.39-1.62.81-2.42,1.24a3.21,3.21,0,0,1-1.65.52,1.26,1.26,0,0,1-1.13-2,9.34,9.34,0,0,1,2.46-2.35c2.79-1.87,5.5-3.87,8.47-5.52a37.44,37.44,0,0,0,6.33-4.64c2-1.76,4.28-3.29,6.17-5.2,1.36-1.37,3.09-2.43,3.88-4.26a1.79,1.79,0,0,1,.49-.54c3.64-3.16,6.55-7,10.22-10.13a27.32,27.32,0,0,0,3.83-4.07,8.81,8.81,0,0,1,2.72-2.75,2.76,2.76,0,0,0,1-1.06c1.83-3.13,4.27-5.85,6.42-8.77,1.78-2.4,3.29-4.95,5-7.37,2-2.81,4-5.66,6-8.46a9.91,9.91,0,0,0,1.11-2.11c2.09-4.83,4.13-9.67,6.5-14.38.87-1.71,2.05-3.22,2.77-5a48.26,48.26,0,0,0,2.42-8.68,3.91,3.91,0,0,1,.87-2.18,3,3,0,0,0,.62-1.53c.54-2.55,1-5.12,1.7-7.64,1.07-3.89,1.55-7.9,2.56-11.79.93-3.62.62-7.21.71-10.81.12-4.9.23-9.79.45-14.69.28-6.24.09-12.49.09-18.74a1.83,1.83,0,0,0-.21-1.14c-1.76-1.9-1.37-4.33-1.77-6.53-.56-3-.67-6.12-1-9.18a14.82,14.82,0,0,0-.42-1.84,7.35,7.35,0,0,1-.4-1.6,7.65,7.65,0,0,0-1.27-5,3.4,3.4,0,0,1-.46-2.07c0-1,.07-2.06-.94-2.82-.4-.31-.39-.85-.42-1.33a19.49,19.49,0,0,0-2.51-8.34,3.21,3.21,0,0,1-.49-1.07c-.22-2.08-1.3-3.89-2-5.8a4.69,4.69,0,0,1-.38-.87c-.59-3.87-2.45-7.35-3.86-11-1.27-3.24-2.6-6.47-4-9.66a9.19,9.19,0,0,0-2.18-2.87c-1.92-1.82-3.44-3.86-3.21-6.64a3.9,3.9,0,0,0-1-2.86,62.53,62.53,0,0,0-5.44-6.2,60.87,60.87,0,0,1-6.67-7.7,56.68,56.68,0,0,0-5.92-7.05,11.46,11.46,0,0,0-2.51-2,2.58,2.58,0,0,1-1.14-.89c-.89-1.77-2.53-2.92-3.92-4.28-1.63-1.59-3.31-3.13-5-4.7a5.93,5.93,0,0,0-2-1.39,1.37,1.37,0,0,0-.45,0c0,.13,0,.32.06.4,1,1,2,1.93,3,2.88.59.57,1.19,1.12,1.75,1.7.29.3.49.68.16,1a1,1,0,0,1-1.16.21,4.14,4.14,0,0,1-1.24-.76c-2.8-2.61-5.6-5.22-8.36-7.86a8.83,8.83,0,0,0-2.6-1.8,25.3,25.3,0,0,1-4.42-3.07c-3.12-2.25-6.22-4.47-10.1-5.59-3.19-.93-6.21-2.36-9.29-3.58a108.1,108.1,0,0,0-17.39-5.4A36.68,36.68,0,0,1,299.84,94a9.36,9.36,0,0,0-4.19-.6,12.1,12.1,0,0,1-3.48-.41,16.83,16.83,0,0,0-4.7-.66,3,3,0,0,1-1.24-.14c-1.92-.79-3.94-.6-6-.62A72.11,72.11,0,0,1,271,91.2a16.5,16.5,0,0,0-6.48.26,13.62,13.62,0,0,1-3,.13c-.83,0-1.68,0-2.51,0a44.73,44.73,0,0,0-10.45.92c-3,.51-6.05,1.17-9.12,1.56-2.06.27-4.1.68-6.2.78a8.1,8.1,0,0,0-2.18.54c-3.61,1.2-7.24,2.36-10.82,3.67-2.25.82-4.39,1.91-6.62,2.79-3.62,1.44-7.28,2.78-10.91,4.2a32.64,32.64,0,0,0-4.1,1.8c-3.23,1.81-6.76,3.07-9.94,5a58.61,58.61,0,0,1-6.32,2.92,5.19,5.19,0,0,1-2.43.48,3,3,0,0,0-2.62,1.14,8.32,8.32,0,0,1-2.49,1.94c-1.13.67-2.12,1.54-3.19,2.29a24.76,24.76,0,0,1-2.9,1.88c-1.48.74-2.32.38-3.07-1.12-.14-.3-.27-.63-.67-.53a1,1,0,0,0-.51.49,3.75,3.75,0,0,0-.33,2.08,3.52,3.52,0,0,1-1.61,3.06c-.33.24-.62.53-1,.76a91.32,91.32,0,0,0-11.66,9.7c-2.39,2.21-4.64,4.57-7.14,6.68a42.74,42.74,0,0,0-5.33,5.61c-.94,1.14-1.37,2.53-2.31,3.65s-1.11,1.2-2.27.16c-.82-.73-1.08-.7-1.27.23-.43,2.14-1.75,3.91-2.69,5.84-.26.53-.92.9-1.39,1.34a22.83,22.83,0,0,0-3.62,3.6.49.49,0,0,0,0,.44c.15.27.42.23.64.09a13.11,13.11,0,0,1,1.42-1,.87.87,0,0,1,1.16.85,2.71,2.71,0,0,1-2.22,2.3c-.87.22-1.87.13-2.39,1.07a3.53,3.53,0,0,0-.34,3,2,2,0,0,1-.44,2.2,5.46,5.46,0,0,0-.9,1.94,6.89,6.89,0,0,1-1.71,2.86,2.84,2.84,0,0,0-1,2.56,4.92,4.92,0,0,1-1.19,3.76,20.27,20.27,0,0,0-2.37,4.66c-.16.36-.24.91-.52,1-1.69.79-1.78,2.63-2.93,3.77a2.32,2.32,0,0,0-.5,2c.28,2.33-.92,4.29-1.78,6.31a16.55,16.55,0,0,0-.85,2.19,7,7,0,0,1-1,2.41,6.72,6.72,0,0,0-1.51,3.66c0,.88-.88,1.11-1.66.59a8.9,8.9,0,0,1-1-.76c-1.07-.95-1.23-1.75-.47-2.94a10.77,10.77,0,0,1,2.58-2.89,3.24,3.24,0,0,0,1.37-2.9c-.06-1.18,0-2.37,0-3.56a3.89,3.89,0,0,1,.57-2.5,3.13,3.13,0,0,0,.53-2.27c-.32-3.58,1.24-6.64,3-9.63a9.62,9.62,0,0,0,1.29-2.81c.53-2.49,1.63-4.81,2.33-7.24a3.26,3.26,0,0,1,.4-.87c2-3.13,3.75-6.34,5.43-9.61a20.45,20.45,0,0,1,3.62-4.81c1.46-1.52,2.67-3.24,4-4.88a1.46,1.46,0,0,0,.36-.62c.36-2.25,2.11-3.71,3.44-5.4,3.59-4.59,7.91-8.58,12.05-12.71,2.75-2.74,5.83-5.2,8.82-7.73s6.15-4.34,9.05-6.75a75.37,75.37,0,0,1,7.94-5.4c3.48-2.19,7-4.27,10.57-6.39a15,15,0,0,1,1.52-.84,1,1,0,0,1,1.31.33.87.87,0,0,1-.16,1.1,8.34,8.34,0,0,1-2.46,1.62,4,4,0,0,0-1.61,1.08.47.47,0,0,0,0,.43.48.48,0,0,0,.41.17,10.84,10.84,0,0,0,1.32-.66c1.55-.93,3.09-1.89,4.65-2.82a7.29,7.29,0,0,1,2-1c2.86-.64,5-2.44,7.46-3.81a38,38,0,0,1,7-3.19,5.72,5.72,0,0,0,2.38-1.28,7.76,7.76,0,0,1,2.52-1.92c1-.41.89-1.77,2.06-2,1-.16,2-.26,3-.42a3,3,0,0,0,1.82-1.17,8.59,8.59,0,0,1,4.56-2.69,51.38,51.38,0,0,0,7.61-3,19.85,19.85,0,0,1,5-1.5c1.41-.26,2.78-.6,4.13-1a14.32,14.32,0,0,1,5.39-1,2.28,2.28,0,0,0,1.23-.15c1.68-.94,3.52-.9,5.36-.9a18.3,18.3,0,0,0,3.93-.85,1,1,0,0,0-1.18-.32c-3,.81-6,.45-9,.5-1.6,0-3.14,0-4.39,1.25-.74.76-1.95.86-3,1.09A38.26,38.26,0,0,0,225.82,88a5.26,5.26,0,0,1-1.69.43,12.76,12.76,0,0,0-7,2.23,1.67,1.67,0,0,1-.94.3c-2.18-.06-4.26.75-6.47.51-1.06-.12-2.16.12-3.25.1s-1.51-.39-1.6-1.41A3,3,0,0,1,206.22,87a5.45,5.45,0,0,0,1.58-1.81c.3-.45.9-.93.46-1.46s-1.09-.24-1.67-.24a2.69,2.69,0,0,0-1.6.59,14.87,14.87,0,0,1-7.07,2.8,2.86,2.86,0,0,0-.73.14c-3.68,1.52-7.54,2.75-10.95,4.67-3,1.7-6,3.43-9.12,4.84a13.59,13.59,0,0,0-4.06,3.1,46.27,46.27,0,0,1-4.86,3.73c-4,3.08-8,6.2-11.88,9.5a4.32,4.32,0,0,0-1.76,2.51,3.75,3.75,0,0,1-1.4,1.93c-1.56,1.44-3.09,2.9-4.65,4.33a8.6,8.6,0,0,0-3.07,5.77c-.12,1.57-.68,2-2.27,2.42a23.11,23.11,0,0,1-2.71.52,4.23,4.23,0,0,0-2.4,1.15c-1.72,1.41-2.9,3-2.59,5.31.19,1.46-.29,2.35-2.34,2.25a5.59,5.59,0,0,0-1,0,1,1,0,0,0-1,.86c-.09.47-.14.94-.22,1.41-.2,1-.67,1.84-1.92,1.83a2.13,2.13,0,0,0-2.05,1.45c-1.11,2.22-2.3,4.4-3.31,6.66a49.11,49.11,0,0,1-6.08,9.78,3.14,3.14,0,0,1-.42.59,8.69,8.69,0,0,0-3.31,5.9,4.22,4.22,0,0,1-1.53,2.4c-1.79,1.7-3.07,1.64-4.73-.22-.36-.41-.64-.49-.91,0-.9,1.6-1.82,3.2-2.63,4.84a3.42,3.42,0,0,0-.16,1.63c.11,2.21-.84,4.17-1.52,6.19a1.64,1.64,0,0,1-1.49,1.12c-.87.07-1.4.4-1.44,1.29a3.3,3.3,0,0,1-2.41,3,2.28,2.28,0,0,0-.45.2,1.39,1.39,0,0,0,.12,2.49c1.52,1,1.46,1,1,2.6a25.42,25.42,0,0,1-1.17,2.6c-.46,1.12-1,2-2.46,1.93-.54,0-.69.39-.71.81s-.05,1.11,0,1.66a5.32,5.32,0,0,1-.87,3.62,3.37,3.37,0,0,0-.52,2.29,3.64,3.64,0,0,1-1.47,3.12,13.94,13.94,0,0,0-1.24,1.19c-1,1.07-1,1.15.22,2.13a2,2,0,0,1,.78,1.89c-.22,2.46.56,4.86.46,7.31a1.07,1.07,0,0,0,.42,1.05c1.17.75,1.5,2.28,3,2.77.66.23.77,1,.7,1.66a20.4,20.4,0,0,1-.42,2.82,14.6,14.6,0,0,0,.15,8.63,6.71,6.71,0,0,1,.23,2.11c.09,4.35.15,8.7.22,13,0,1.11,0,2.21.85,3.12a2.67,2.67,0,0,1,.53,2c0,1.66.11,3.33,0,5a7.94,7.94,0,0,0,1.64,5.34c.88,1.24,1.42,2.63,2.35,3.87s.57,3.05.27,4.61a1,1,0,0,1-.91.71,2.29,2.29,0,0,1-2.81-1.4c-.57-1.65-1.61-3.14-1.84-4.91a2.93,2.93,0,0,0-.57-1.29,7.66,7.66,0,0,1-1.29-5c0-1,0-1.9,0-2.85a2.29,2.29,0,0,0-.89-2.11,2.53,2.53,0,0,1-1-2.3c0-1.66-.91-3.2-.59-4.9a15.92,15.92,0,0,0-.14,6.61,39.35,39.35,0,0,1,1.47,9.82c0,2.52,1,5,1.66,7.4a85.91,85.91,0,0,0,6.09,15.78,116.07,116.07,0,0,0,9.09,15.26,19.38,19.38,0,0,0,3.6,4.24.66.66,0,0,0,.44.17c.31-.07.25-.33.21-.55-.09-.47-.16-.94-.28-1.4-.17-.65-.26-1.28.48-1.66a1.92,1.92,0,0,1,2.13.12c1.12.83,2.36,1.67,2.76,3,.79,2.65,2.7,4.71,4,7.07.08.14.2.26.28.39.81,1.34.69,1.8-.85,2.55-.62.3-.69.5-.35,1,2.1,3.38,5,6.11,7.9,8.87,1.7,1.63,3.45,3.22,5.2,4.8a3,3,0,0,1,1.21,2.49,1.67,1.67,0,0,1-2,1.68,4.1,4.1,0,0,1-3.17-1.71,42,42,0,0,0-7.94-7.88c-1.49-1.2-2.39-2.83-3.68-4.18a2.17,2.17,0,0,0-2.34-.91,4.14,4.14,0,0,1-3.29-.84c-.18-.11-.56-.19-.67-.1-.34.27,0,.56.13.81a2.17,2.17,0,0,0,.31.37c4.43,4.53,8.79,9.12,13.59,13.32a27.17,27.17,0,0,0,4.65,3.2c2.52,1.4,4.7,3.26,7.14,4.79a33.61,33.61,0,0,1,5.09,4.54c.68.65.33,1.6-.66,1.83a6,6,0,0,1-4.16-.31,9.68,9.68,0,0,1-2.66-1.78c-1.76-1.83-4.16-2.65-6.5-3.43-2.67-.88-5.33-1.92-8.24-2-.7,0-1.18-.52-1.74-.87a30,30,0,0,1-8.21-7.9c-3.58-4.76-7.28-9.45-11-14.14A22.08,22.08,0,0,1,98.05,321a5.58,5.58,0,0,0-.69-1c-.26-.3-.6-.64-1-.34s-.15.58,0,.86a6.26,6.26,0,0,0,1.33,1.71,8,8,0,0,1,1.15,1.25,2.54,2.54,0,0,1,.54,1.78,1.59,1.59,0,0,1-1.12,1.43c-.61.27-.57.73-.27,1.18a23.12,23.12,0,0,0,1.4,2c2.23,2.67,4.52,5.29,6.71,8,.94,1.15,2.34,1.79,3.31,2.89a3,3,0,0,1,1.08,2.06,1.4,1.4,0,0,1-1.75,1.48,3.36,3.36,0,0,1-1.16-.42,14.62,14.62,0,0,1-4.8-3.76,13.07,13.07,0,0,0-3-2.86l-.5-1c-.24-.41-.44-.85-.72-1.24A106.48,106.48,0,0,1,92,325a3.93,3.93,0,0,0-1.2-1.49.63.63,0,0,0-.46-.09.37.37,0,0,0-.2.57c.19.35.46.66.63,1,.67,1.38.35,2.1-1.21,2.74-.86.36-.92.44-.1.92a4.29,4.29,0,0,1,2.5,4,6.42,6.42,0,0,0,1.81,3.82c.45.54.59.5,1-.27.74-1.39,1.37-1.6,2.74-.84.56.31,1,.85,1.73.86ZM432.27,131.3l.49,1a2.27,2.27,0,0,0,1,1.42,1.7,1.7,0,0,0,0,.22,1.49,1.49,0,0,0,.12.14l-.17-.35a2.17,2.17,0,0,0-1-1.41,1.51,1.51,0,0,0-.5-1,1.16,1.16,0,0,0-.06-.22c0-.06-.09-.09-.13-.13ZM425.7,397c.23-.2.46-.39.67-.6a.2.2,0,0,0,.05-.2.21.21,0,0,0-.37,0,6.19,6.19,0,0,0-.32.81,3.65,3.65,0,0,0-.37.29,1.54,1.54,0,0,0-.27.36s0,.17,0,.17c.3,0,.36-.21.44-.41S425.66,397.14,425.7,397ZM393,373.3c-.36.32-.73.63-1.07,1-.07.07,0,.26,0,.39.14,0,.32,0,.42-.13a2.15,2.15,0,0,0,.65-1.24.61.61,0,0,0,.16-.16.42.42,0,0,0,0-.16Zm36.72-245.79a3.9,3.9,0,0,0,.12.46,2,2,0,0,0,.24.4.27.27,0,0,0,.21,0c.17-.26-.06-.41-.21-.57s-.25-.2-.38-.31c-.11-.29-.14-.68-.36-.85-.51-.39-.31-1.45-1.38-1.27-.09.74.52,1.1,1,1.54A6.64,6.64,0,0,0,429.75,127.51ZM48,158.35a1.59,1.59,0,0,0,.95-1.52,10.66,10.66,0,0,1,.55-2.75,3.54,3.54,0,0,0,2.92-2.6,3.41,3.41,0,0,1,.62-1c1.61-2.31,3.22-4.62,4.85-6.91a4.15,4.15,0,0,0,1-1.87,7.33,7.33,0,0,1,1.63-3.43c1.33-1.81,2.72-3.59,4.08-5.39.09-.12.19-.35.14-.41-.24-.26-.43,0-.6.11a31.66,31.66,0,0,0-3.44,4.07c-2.13,2.53-4.22,5.1-6.21,7.73s-2.86,5.86-4.71,8.59a3.24,3.24,0,0,0-.27,1.15,1.19,1.19,0,0,0-1,1.24,10.48,10.48,0,0,1-.57,3,2.14,2.14,0,0,0-.41.25c-.17.15-.14.28.06.31s.14-.08.17-.14S47.9,158.5,48,158.35ZM86.2,221.47c-.62,1.36-.79,2.67.42,3.87.84.83,1.26.76,1.7-.36.38-1,.38-1.11-.78-1.38-1.32-.31-1.36-1.17-1.35-2.14.15-.27.3-.55.44-.83a.24.24,0,0,0,0-.22c-.15-.17-.26-.12-.29.12ZM405.09,67.26c.1.1-.12.42.26.32l-.26-.31c-.35-1.42-1.67-2.15-2.58-3.15-1.88-2.06-4.51-3.23-6.88-4.69a.51.51,0,0,0-.67.15.48.48,0,0,0,.05.65,6.35,6.35,0,0,0,.73.63A101.54,101.54,0,0,0,405.09,67.26ZM109.34,146a5.93,5.93,0,0,0,2.81-2.6c.89-1.43,1.64-2.93,2.52-4.36,1.34-2.19,1.84-4.74,3.32-6.86.12-.17.09-.35-.11-.36a.73.73,0,0,0-.43.21,48.45,48.45,0,0,0-4.74,5.19c-.4.48-.58.94,0,1.43,1,.81.7,1.7,0,2.52s-1.54,1.87-2.36,2.76a3,3,0,0,0-1.09,2.06c-.36.29-.72.58-1.06.89-.07.07,0,.26,0,.39a1.23,1.23,0,0,0,.41-.12A2.05,2.05,0,0,0,109.34,146ZM409.62,71.54c-.13-.05-.16-.41-.4-.12l.4.11a7.44,7.44,0,0,0,1.54,2.68c1.28,1.13,2.51,2.31,3.75,3.48a3,3,0,0,0,1.95,1,4.1,4.1,0,0,1,2.72,1.52,4.1,4.1,0,0,0,4.92,1c.77-.3.82-.59.2-1.22a5.16,5.16,0,0,0-.54-.5l-9.78-7.36c-.36-.26-.82-.4-1.12,0-.87,1.1-1.66.68-2.53,0A5.08,5.08,0,0,0,409.62,71.54ZM58.13,179.22a3.48,3.48,0,0,0,.41-.56c1-2.19,2.16-4.27,3.26-6.39.65-1.25,1.28-2.16,2.9-2.18a2,2,0,0,0,1.84-1.39.49.49,0,0,0-.38-.72,10.24,10.24,0,0,0-1.25-.07,1.79,1.79,0,0,1-1.65-1.54,2.44,2.44,0,0,1,.26-1.84,32.28,32.28,0,0,1,1.73-2.88c3.41-5,7.18-9.72,11-14.44,3.38-4.22,6.81-8.4,10.44-12.44,2.27-2.52,3.82-5.56,6.3-7.94a.85.85,0,0,0,.22-.42.69.69,0,0,0,0-.45.56.56,0,0,0-.66-.21,3.86,3.86,0,0,0-1.1.53c-1.91,1.41-3.8,2.84-5.69,4.28a7.85,7.85,0,0,1-3,1.71,3.35,3.35,0,0,0-2.63,2.28,5.71,5.71,0,0,1-1.29,2c-2.14,2.32-4.17,4.74-6.41,7a61.26,61.26,0,0,0-10.63,14.85c-1.1,2-2.07,4.15-3.27,6.13-1.38,2.28-2.18,4.78-3.43,7.1a3.55,3.55,0,0,0-.31.9.45.45,0,0,0,.25.58.51.51,0,0,0,.59-.33c.32-.64.62-1.3.89-2,.68-1.62,1.34-3.24,2-4.85a4.1,4.1,0,0,1,2-2.36c.92-.44,1.49-.23,1.59.7a5.38,5.38,0,0,1,0,1.65c-.46,2.24-.61,4.54-1.67,6.65-.81,1.64-1.56,3.31-2.36,5a1.94,1.94,0,0,0-.29,1.36C57.8,179,58,179.11,58.13,179.22Zm21.29-70.85a.79.79,0,0,0-.64-.67,3,3,0,0,0-2.76.77c-1.92,1.88-3.89,3.71-5.76,5.63C66,118.47,61.91,123,57.8,127.43c-3.13,3.41-6.08,6.93-8.84,10.61a11.87,11.87,0,0,0-2.23,4.22c-.79,3.37-2.89,6.21-4,9.43a3.7,3.7,0,0,1-.49.83c-.91,1.21-1.58,2.38-.49,3.87.33.46.18,1.23.27,1.85,0,.24.08.51.43.45.13,0,.26-.17.35-.29.6-.77.51-1.83,1.19-2.59a10.29,10.29,0,0,0,2.41-5.13,4.86,4.86,0,0,1,.86-1.93,86.72,86.72,0,0,0,8.18-14.38,13.21,13.21,0,0,1,1.62-2.67,2.55,2.55,0,0,1,2.57-1.15,2.15,2.15,0,0,0,2.36-1,114,114,0,0,1,7.77-8.69,2.25,2.25,0,0,0,.73-1.21c.14-2.44,1.79-4,3.47-5.57s3.17-3,4.74-4.58C79.05,109.21,79.43,108.88,79.42,108.37Zm189.46-82.1a24.37,24.37,0,0,0,5.36,1.48c4.91.5,9.75,1.39,14.67,1.79,5.58.46,11.14,1.09,16.72,1.6a14.14,14.14,0,0,0,3.25-.07,8.29,8.29,0,0,1,3.22.26c3.46.91,6.92,1.85,10.4,2.73a63.35,63.35,0,0,1,6.79,1.65c.22.08.53.18.63-.1,0-.09-.31-.35-.52-.44-1.23-.5-2.45-1-3.71-1.44-4.34-1.43-8.65-3-13.06-4.2s-8.69-2.86-13.23-3.67a5.31,5.31,0,0,1-3.31-1.52,2.26,2.26,0,0,0-1.09-.55,61.27,61.27,0,0,0-8.62-1.54c-.74-.06-.83.09-.53.76.69,1.51.32,2.19-1.33,2.44a10.46,10.46,0,0,1-1.25.06c-2.09,0-4.19-.16-6.23.45a2.79,2.79,0,0,1-1.49,0A10.6,10.6,0,0,0,268.88,26.27ZM92,89.82a2,2,0,0,0,1.32-.61q10.08-7.63,20.53-14.83a2.62,2.62,0,0,0,1.48-2.3,3.36,3.36,0,0,1,1.45-2.64,44.69,44.69,0,0,1,5.06-3.89c4.21-2.85,8.46-5.67,12.69-8.5.27-.18.53-.39.78-.59a.29.29,0,0,0,0-.22c-.13-.07-.29-.19-.41-.16a5.22,5.22,0,0,0-.93.35A157.86,157.86,0,0,0,116,66.68a50.2,50.2,0,0,0-4.61,3.25,49.07,49.07,0,0,1-3.92,3A64.54,64.54,0,0,0,98.1,80a6.65,6.65,0,0,1-1.59,1.13c-3.36,1.74-4.42,4.75-5.06,8C91.38,89.49,91.65,89.74,92,89.82ZM197.73,49.43c0-1.33-.39-1.7-1.67-1.43-1.63.33-3.27.68-4.87,1.14-7.28,2.09-14.69,3.82-21.68,6.75-4.28,1.8-8.62,3.48-12.92,5.25A9.35,9.35,0,0,0,153.71,63c1.22.18,2.09-.64,3.13-1,.23-.07.44-.23.67-.32,2-.8,3.91-1.84,6.2-1.67a4.44,4.44,0,0,0,1.46-.31c3.11-.95,6.2-1.94,9.31-2.86,4.39-1.3,8.8-2.55,13.31-3.47a76.67,76.67,0,0,0,8.48-2.11C197.29,50.91,197.82,50.35,197.73,49.43ZM368,67.85a.9.9,0,0,0-.94.59,1.08,1.08,0,0,0,.26,1.31,8.73,8.73,0,0,0,1.51.81c3,1.42,6,2.77,9,4.25a41.2,41.2,0,0,1,4.67,2.76c1.18.8,2.13,1.84,1.79,3.39-.19.86.28,1.35,1,1.73s1.18.6,1.76.9a72.22,72.22,0,0,1,10.2,6c.41.31.68.36.94-.15a2.84,2.84,0,0,1,.63-.72c.49-.44.5-.86-.18-1-1.74-.4-2.83-1.63-4-2.71-3.91-3.53-7.67-7.19-12.26-10-3.59-2.24-7.73-3.34-11.28-5.59-.58-.36-1.4-.43-1.9-1A1.48,1.48,0,0,0,368,67.85Zm-328,137c1.18-2,1.32-4,2.08-5.71a166.49,166.49,0,0,0,5.87-16.86c1.31-4.16,2.5-8.35,4.94-12.1a23.87,23.87,0,0,0,1.44-3c.06-.13.07-.37,0-.44-.26-.21-.44,0-.56.19-1.17,1.64-2.34,3.28-3.48,4.94a14.21,14.21,0,0,0-1.53,2.44,146.49,146.49,0,0,0-5.63,14.68c-.36,1.22-.87,2.39-1.24,3.61A33.23,33.23,0,0,0,40,204.82ZM231.9,39.36c.07-.43-.23-.49-.46-.5a16.5,16.5,0,0,0-3.5.24c-3.37.58-6.75,1.11-10.12,1.68s-6.59,1.08-9.85,1.82a9.86,9.86,0,0,0-3.39,1.92.55.55,0,0,0-.13.43.45.45,0,0,0,.52.39,6.28,6.28,0,0,0,1.24-.13c7.37-1.88,14.9-3,22.34-4.6a29.37,29.37,0,0,0,2.86-.87C231.62,39.67,231.78,39.45,231.9,39.36Zm193.65,83.29c.74-.1.74-.47.58-.88a36.4,36.4,0,0,0-3-5.42,4.36,4.36,0,0,0-2.67-2c-1.37-.42-1.55-.4-2.51.7-.25.28-.33.54-.07.82s.56.58.84.87c1.45,1.5,3.22,2.71,4.15,4.66C423.34,122.43,424.59,122.55,425.55,122.65ZM398.69,91.49a1,1,0,0,0-.25.06,2.23,2.23,0,0,0-.3,2.37,9.31,9.31,0,0,0,1.21.84q5.22,3.27,10.45,6.53c.19.12.51.29.63.22s.08-.41-.06-.59a17.2,17.2,0,0,0-1.17-1.53c-2.83-3.18-6.6-5.28-10.05-7.75A1.66,1.66,0,0,0,398.69,91.49ZM340,414.26c.16-.05.33-.08.47-.14,1.05-.5,2.12-.95,3.12-1.53,4-2.28,8-4.55,11.93-6.95,2.1-1.29,4-2.84,6-4.29.17-.12.37-.47.3-.56-.17-.26-.42,0-.6.08a61.51,61.51,0,0,1-6.45,4.08c-3.75,1.92-7.45,3.92-11.11,6a32.16,32.16,0,0,0-3.37,2.45,2,2,0,0,0-.46.55C339.67,414.08,339.75,414.21,340,414.26ZM433.07,88.32c1,1.44,1.9,2.93,3,4.25.89,1.06,1.39,2.58,3.2,2.76.31,0,.58.54.83.84.52.63,1,1.29,1.52,1.88.27.3.44,1.08,1,.65.38-.27,0-.88-.26-1.28s-.59-.76-.88-1.14c-2.19-2.91-5.06-5.23-7.69-7.75A.61.61,0,0,0,433.07,88.32Zm-350.5,222a.47.47,0,0,0-.38.54,29,29,0,0,0,.61,3.47,12.2,12.2,0,0,0,2.69,5,.79.79,0,0,0,.9.26c.57-.33.14-.69-.12-.92a4.94,4.94,0,0,1-1.76-4.24c.08-1.51-.77-2.71-1.54-3.92C82.91,310.34,82.69,310.33,82.57,310.28Zm347.21,82a3.48,3.48,0,0,0,.55-.45c1.36-1.59,2.74-3.18,4.05-4.81.65-.81,1.18-1.7,1.76-2.57A.23.23,0,0,0,436,384a.33.33,0,0,0-.23.05,5.32,5.32,0,0,0-.59.44,34.27,34.27,0,0,0-5.53,7,.87.87,0,0,0-.16.43C429.52,392,429.67,392.11,429.78,392.24ZM45,165.86a1.45,1.45,0,0,0,.44-.18c.74-.63,1.48-1.25,2.18-1.91,1-.93,1-1.84-.11-2.81-.3-.27-.68-.18-.76.17a7.63,7.63,0,0,1-1.79,3.3,1.32,1.32,0,0,0-.25,1.12C44.69,165.66,44.86,165.75,45,165.86Zm321.58,246a.46.46,0,0,0-.49-.43,2.27,2.27,0,0,0-1.86,1,12.21,12.21,0,0,1-3.08,2.73,7.72,7.72,0,0,0-1.1,1c-.08.08-.05.26-.07.4.14,0,.32,0,.43-.07l5.49-3.69A1.32,1.32,0,0,0,366.54,411.86Zm-237-292.26a1.78,1.78,0,0,0,.48-.1,20.52,20.52,0,0,0,4.31-3.6.46.46,0,0,0,.06-.42.47.47,0,0,0-.42-.13,9.73,9.73,0,0,0-4.6,3.85C129.27,119.27,129.43,119.46,129.49,119.6ZM264,25.57v-.1c-.65.08-1.31.13-2,.25-.27.05-.42.37-.15.53a4.35,4.35,0,0,0,3.73.8c.39-.13.76-.39.75-.84s-.45-.61-.87-.64S264.51,25.57,264,25.57Zm91.08,35.71c-.06,0-.17.09-.18.15-.06.27.14.44.36.54Q359,63.52,362.81,65c.1,0,.28-.06.42-.09-.07-.13-.1-.34-.22-.39a45.67,45.67,0,0,0-7.67-3.29A.71.71,0,0,0,355.09,61.28ZM55.86,190.94c0-.38,0-.85-.57-.86-.34,0-.53.34-.59.66-.19.91-.38,1.82-.54,2.74a.42.42,0,0,0,.42.47.75.75,0,0,0,.59-.3A6.4,6.4,0,0,0,55.86,190.94Zm375-101.61a1,1,0,0,0-.11-.2,33.16,33.16,0,0,0-3.49-3.92c-.23-.19-.49-.54-.8-.2s0,.61.18.83c1.24,1.25,2.5,2.47,3.76,3.69.07.07.28,0,.41,0S430.84,89.4,430.86,89.33Zm-21,18.59c-.18.06-.26.22-.12.35,1,.91,1.74,2.12,3.18,2.52a.45.45,0,0,0,.59-.26.48.48,0,0,0-.15-.41c-1.08-.73-2.17-1.44-3.26-2.14A.84.84,0,0,0,409.89,107.92ZM100.28,158.69l-.2-.43c-.14.07-.34.11-.41.22-.36.53-.71,1.07-1,1.62-.16.28-.21.64.19.77a.71.71,0,0,0,.6-.28C99.76,160,100,159.3,100.28,158.69Zm18.08,162.09c-.11.05-.42.1-.52.25-.19.33.07.61.37.72a2.72,2.72,0,0,0,1,.1.42.42,0,0,0,.3-.29.5.5,0,0,0-.12-.41A1.17,1.17,0,0,0,118.36,320.78Zm27.7-204.59c-.12-.06-.28-.19-.37-.16a1.32,1.32,0,0,0-.78.79.37.37,0,0,0,.14.36.51.51,0,0,0,.42-.09A1.08,1.08,0,0,0,146.06,116.19ZM394.4,418.48c0-.07,0-.2,0-.2-.41-.1-.55.22-.75.44,0,0,0,.19,0,.19C394,419,394.18,418.67,394.4,418.48ZM406.89,69c-.26,0-.41.07-.35.22a2.65,2.65,0,0,0,.41.5c.1-.08.3-.21.29-.23A4.15,4.15,0,0,0,406.89,69Zm4.66.93c-.31,0-.47.07-.37.2a2.26,2.26,0,0,0,.65.58c.15.09.33-.06.24-.2A3.4,3.4,0,0,0,411.55,70Zm-9.06,20.83a4.13,4.13,0,0,0-.64-.44.16.16,0,0,0-.21.23,2.43,2.43,0,0,0,.66.57C402.44,91.22,402.55,91.08,402.49,90.78ZM422.78,401l-.2-.33a2.13,2.13,0,0,0-.54.39.17.17,0,0,0,.2.26A2.75,2.75,0,0,0,422.78,401Zm-401-77.33c-.24-.09-.41,0-.38.16a1.1,1.1,0,0,0,.31.58.2.2,0,0,0,.32-.17A2.28,2.28,0,0,0,21.8,323.63Zm337.05,65.42c0-.23-.13-.36-.28-.28a1.16,1.16,0,0,0-.44.44c-.07.15.11.29.26.21A2.19,2.19,0,0,0,358.85,389.05ZM116,316.75c0-.06.09-.16.07-.18a2,2,0,0,0-.34-.22c0,.06-.09.16-.07.18A2.46,2.46,0,0,0,116,316.75ZM310,418.34c0-.16,0-.25-.22-.23s-.12.06-.17.1-.11.29.05.31S309.86,418.41,310,418.34Zm31.38-13.7a.85.85,0,0,0-.38,0c-.18.06-.2.2-.08.3a.23.23,0,0,0,.21,0A2.18,2.18,0,0,0,341.35,404.64Zm23-20.78c.06,0,.18.09.19.07a4,4,0,0,0,.24-.33,1,1,0,0,0-.2-.08A2.54,2.54,0,0,0,364.4,383.86Zm64,10.1c0-.07.08-.18.05-.21s-.27-.12-.38.05-.09.18-.06.22S428.26,394.13,428.39,394Zm-13-280.71c0-.06,0-.14-.09-.17s-.12,0-.18,0,0,.14.09.17S415.33,113.27,415.39,113.25ZM151.05,379.9c-.23,0-.27.08-.1.24s.13,0,.2-.06Zm226.79,8.66c.06,0,.16-.05.17-.09s-.05-.24-.21-.18a.2.2,0,0,0-.09.16S377.8,388.53,377.84,388.56Z"
      />
      <path
        className={colorPrimary + ' fill-current'}
        d="M270.6,156.16h79.91c.79,0,1.59,0,2.38,0,1.1.08,1.42.35,1.62,1.31a5.91,5.91,0,0,1,.11,1.12c.05,1.72.22,3.43.37,5.15.29,3.36.4,6.74.63,10.1.41,6,.87,12,1.26,17.94.26,4,.49,7.94.66,11.9.07,1.72-.14,1.86-2,2.13-.87.13-1.73.29-2.59.38-1.19.12-1.6-.18-1.76-1.3-.21-1.41-.32-2.84-.53-4.24a46.82,46.82,0,0,0-6.78-19.05,37.1,37.1,0,0,0-17-14,61,61,0,0,0-16.74-4.19A89.45,89.45,0,0,0,299.7,163q-22.31,0-44.61,0c-3,0-3,0-3,2.89q0,39.6,0,79.2c0,2.9-.11,2.8,3,2.8,7.48,0,14.95.07,22.42,0a48.75,48.75,0,0,0,12.51-1.38,25.19,25.19,0,0,0,17.07-14.86A45.88,45.88,0,0,0,310.62,217c.14-1.72.26-3.44.42-5.15.1-1.22.33-1.5,1.55-1.56a35.44,35.44,0,0,1,3.57,0,1.16,1.16,0,0,1,1.21,1.15c0,.6.05,1.2.05,1.8q0,38.25,0,76.5c0,2.95,0,2.94-3.23,2.95-3,0-3.06,0-3.23-2.77A62.07,62.07,0,0,0,308.61,275a29.35,29.35,0,0,0-8-13.36,26,26,0,0,0-12.95-6.3,55.07,55.07,0,0,0-10.19-.88H254.81c-2.69,0-2.7,0-2.7,2.64q0,36.8,0,73.58a37.35,37.35,0,0,0,1.47,10.44,19,19,0,0,0,9.59,12.09,24.9,24.9,0,0,0,9.52,2.7c1.74.17,3.48.27,5.22.42,1.14.1,1.39.29,1.42,1.4.12,4.25.19,3.81-3.67,3.81H188.59c-2.18-.05-2.33-.18-2.41-2.14,0-.6,0-1.2,0-1.8.1-1.83.33-2.12,2.24-2.13a37.87,37.87,0,0,0,5.93-.51c4.89-.8,9.31-2.49,12.79-6a21.22,21.22,0,0,0,5.6-11,36.71,36.71,0,0,0,.61-7.61V299.38q0-55.35,0-110.7a39.17,39.17,0,0,0-.6-8.51c-1.2-5.48-3.7-10.2-8.73-13.46a25.13,25.13,0,0,0-9.44-3.58c-2.26-.39-4.57-.56-6.84-.87-1.26-.17-1.46-.38-1.54-1.58a20.33,20.33,0,0,1,0-2.92c.11-1.24.45-1.5,1.83-1.58.8,0,1.59,0,2.39,0Z"
      />
    </svg>
  );
};

export default LogoSvg;
