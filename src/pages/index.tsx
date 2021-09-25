import { NextPage } from 'next';
import Head from 'next/head';
import { Seo } from '../components/Seo/Seo';

const HomePage: NextPage = () => {
  return (
    <>
      <Seo title="Homepage" />
      <div>homepage</div>
    </>
  );
};

export default HomePage;
