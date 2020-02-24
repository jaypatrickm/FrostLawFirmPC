import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  path1: string;
  url1: string;
  path2?: string;
  url2?: string;
  path3?: string;
  url3?: string;
};

const Breadcrumbs: NextPage<Props> = ({
  path1,
  url1,
  path2,
  url2,
  path3,
  url3
}) => {
  return (
    <div className="py-2 px-4">
      <Link href={url1}>
        <a className="underline text-frost-blue">{path1}</a>
      </Link>
      {path2 !== undefined && url2 !== undefined ? (
        <span>
          <span className="text-frost-blue px-2">/</span>
          <Link href={url2}>
            <a className="underline text-frost-blue">{path2}</a>
          </Link>
        </span>
      ) : (
        ''
      )}
      {path3 !== undefined && url3 !== undefined ? (
        <span>
          <span className="text-frost-blue px-2">/</span>
          <Link href={url3}>
            <a className="underline text-frost-blue">{path3}</a>
          </Link>
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Breadcrumbs;
