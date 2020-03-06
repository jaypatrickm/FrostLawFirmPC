import { NextPage, NextPageContext } from 'next';
import AttorneysNameMobile from '../../views/mobile/attorneys/name/index';
import AttorneysNameDesktop from '../../views/desktop/attorneys/name/index';
import { isMobileDetector } from '../../helpers/utils.helpers';
import ATTORNEYS_DATA from '../../data/attorneys';
import url from 'url';

type AttorneyInfo = {
  name: string;
  pathName: string;
  imageUrl: string;
  description: string;
  affiliations: { id: number; imageUrl: string; alt: string }[];
  listsOfAccomplishments: { title: string; items: string[] }[];
};

type AttorneysNameProps = {
  attorneysNameProps: {
    isMobile: boolean;
    page: string;
  };
  attorneyInfo: {
    name: string;
    pathName: string;
    imageUrl: string;
    content: string;
    affiliations: { id: number; imageUrl: string; alt: string }[];
    listsOfAccomplishments: { title: string; items: string[] }[];
  };
};

const AttorneysName = (attorneysNameProps: AttorneysNameProps) => {
  return (
    <AttorneysNameDesktop attorneysNameDesktopProps={attorneysNameProps} />
  );
};

AttorneysName.getInitialProps = async ({ query, req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  const isMobile = isMobileDetector(userAgent);
  const { name } = query;
  const attorney =
    name == 'andrew-seitz'
      ? ATTORNEYS_DATA['andrew-seitz']
      : ATTORNEYS_DATA['scott-l-frost'];
  const page = 'Attorneys';
  return {
    attorneysNameProps: { isMobile: isMobile, page: page },
    attorneyInfo: attorney
  };
};

export default AttorneysName;
