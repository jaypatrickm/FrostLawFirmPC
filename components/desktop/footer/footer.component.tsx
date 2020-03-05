import React from 'react';
import Link from 'next/link';
import LogoSvg from '../../icons/logo/logo.svg';
import LogoText from '../../icons/logo-text/logo-text.svg';
const Footer = () => {
  return (
    <div className="flex-shrink-0 bg-frost-dark-blue pb-8">
      <div className="flex flex-col md:flex-row max-w-screen-xl border-t border-white text-white m-auto pt-8">
        <div className="md:w-1/3 flex pl-6">
          <div className="md:w-1/3">
            <LogoSvg color="#fff" />
          </div>
          <div className="w-2/3 ml-8 mt-4">
            <LogoText className="max-w-sm" color="#fff" />
            <p className="font-bold mt-6">
              273 West 7th Street <br />
              San Pedro, CA 90731
            </p>
            <div className="mt-4">
              <span className="py-2">Tel: (866) FLF-MESO</span>
              <span className="block py-2"> Fax: (310) 861-8803</span>
            </div>
          </div>
        </div>
        <div className="ml-16 md:w-1/3 flex mt-16 pl-10">
          <nav className="flex flex-col">
            <Link href="/sitemap">
              <a className="underline hover:text-frost-orange">Site Map</a>
            </Link>
            <Link href="/contact">
              <a className="underline mt-3 hover:text-frost-orange">Contact</a>
            </Link>
            <Link href="/legalnotice">
              <a className="underline mt-3 hover:text-frost-orange">
                Legal Notice
              </a>
            </Link>
          </nav>
        </div>
        <div className="w-1/3 flex"></div>
      </div>
      <div className="text-center text-white">
        <span className="mt-6 ml-3 inline-block">
          &copy; 2020 FROST LAW FIRM, PC
        </span>
      </div>
    </div>
  );
};

export default Footer;
