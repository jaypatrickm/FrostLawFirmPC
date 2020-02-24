import React from 'react';
import Link from 'next/link';
import LogoSvg from '../../assets/icons/logo/logo.svg';
import LogoText from '../../assets/icons/logo-text/logo-text.svg';
const Footer = () => {
  return (
    <div>
      <div className="flex bg-frost-light-blue text-white py-4">
        <div className="w-1/4">
          <div className="flex justify-center">
            <LogoSvg color="#fff" />
          </div>
        </div>
        <div className="w-3/4 pt-4">
          <LogoText color="#fff" />
          <p className="font-bold mt-4">
            273 West 7th Street <br />
            San Pedro, CA 90731
          </p>
          <p className="mt-4">
            <a className="underline" href="+1866FLFMESO">
              Tel: (866) FLF-MESO
            </a>
            <br />
            Fax:(310)861-8803
          </p>
          <nav className="mt-4">
            <Link href="/sitemap">
              <a className="underline block py-2">Site Map</a>
            </Link>
            <Link href="/about">
              <a className="underline block py-2">About</a>
            </Link>
            <Link href="/attorneys">
              <a className="underline block py-2">Attorneys</a>
            </Link>
            <Link href="/blog">
              <a className="underline block py-2">Blog</a>
            </Link>
            <Link href="/veterans">
              <a className="underline block py-2">Veterans</a>
            </Link>
            <Link href="/contact">
              <a className="underline block py-2">Contact</a>
            </Link>
            <Link href="/legalnotice">
              <a className="underline block py-2">Legal Notice</a>
            </Link>
          </nav>
          <span className="mt-6 inline-block">&copy; FROST LAW FIRM, PC</span>
        </div>
      </div>
      <div className="block flex-shrink bg-frost-blue px-3 py-2">
        <h3 className="block text-white font-bold text-2xl tracking-tight leading-tight">
          Tap to call +1(866) FLF-MESO
        </h3>
        <span className="block text-white font-light text-md leading-tight">
          *Tapping this button will trigger a phone call on the device you are
          using.
        </span>
      </div>
    </div>
  );
};

export default Footer;
