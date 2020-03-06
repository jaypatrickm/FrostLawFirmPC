import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const listener = () => {
    setShowScrollToTop(window.scrollY > 1200);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
  return (
    <div
      onClick={() => {
        scrollToTop();
      }}
      className={
        (showScrollToTop ? 'block' : 'hidden') +
        ' fixed bg-frost-orange p-4 bottom-0 right-0 mb-16 mr-8 cursor-pointer'
      }
    >
      <h2 className="text-white font-extrabold">Scroll To Top</h2>
    </div>
  );
};

export default ScrollToTopButton;
