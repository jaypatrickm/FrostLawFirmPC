import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
const Wrapper = styled.div`
  ${tw`py-2 px-4 bg-frost-light-gray`}
`;

const LinkAnchor = styled.a.attrs({
  className: 'text-link'
})`
  ${tw`underline`}
`;

const LinkWrapper = styled.div`
  ${tw`inline-block`}
`;

const BlueText = styled.span`
  ${tw`text-frost-blue px-2`}
`;

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
    <Wrapper>
      <Link href={url1}>
        <LinkAnchor>{path1}</LinkAnchor>
      </Link>
      {path2 !== undefined && url2 !== undefined ? (
        <LinkWrapper>
          <BlueText>/</BlueText>
          <Link href={`${url1}${url2}`}>
            <LinkAnchor>{path2}</LinkAnchor>
          </Link>
        </LinkWrapper>
      ) : (
        ''
      )}
      {path3 !== undefined && url3 !== undefined ? (
        <LinkWrapper>
          <BlueText>/</BlueText>
          <Link href={`${url1}${url2}${url3}`}>
            <LinkAnchor>{path3}</LinkAnchor>
          </Link>
        </LinkWrapper>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default Breadcrumbs;
