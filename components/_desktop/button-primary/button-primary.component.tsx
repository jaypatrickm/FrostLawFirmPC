import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';

type ButtonPrimaryProps = {
  children: string;
  url?: string;
};

const RoundedAnchor = styled.a`
  ${tw`bg-frost-orange hover:bg-frost-dark-orange py-2 rounded-full block w-64 cursor-pointer`}
`;

const TextSpan = styled.span`
  ${tw`text-2xl font-extrabold tracking-wide leading-tight flex justify-center text-white`}
`;

const ButtonPrimary = ({ children, url = '' }: ButtonPrimaryProps) => {
  return (
    <Link href={url} passHref>
      <RoundedAnchor>
        <TextSpan>{children}</TextSpan>
      </RoundedAnchor>
    </Link>
  );
};

export default ButtonPrimary;
