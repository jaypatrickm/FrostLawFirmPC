import Nav from '../components/nav';
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <Nav />
    <div className="hero">
      <h1 className="title">Next.js + Tailwind CSS</h1>
      <h2>{userAgent}</h2>
    </div>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
