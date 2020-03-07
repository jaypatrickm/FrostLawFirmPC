import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';

type ButtonSecondaryProps = {
  children: string;
  url?: string;
};

const RoundedAnchor = styled.a`
  ${tw`bg-frost-blue hover:bg-frost-dark-blue py-2 rounded-full block w-64 cursor-pointer`}
`;

const TextSpan = styled.span`
  ${tw`text-2xl font-extrabold tracking-wide leading-tight flex justify-center text-white`}
`;

const ButtonSecondary = ({ children, url = '' }: ButtonSecondaryProps) => {
  return (
    <Link href={url}>
      <RoundedAnchor>
        <TextSpan>{children}</TextSpan>
      </RoundedAnchor>
    </Link>
  );
};

export default ButtonSecondary;
