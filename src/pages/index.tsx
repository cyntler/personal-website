import { NextPage } from 'next';
import { Seo } from 'src/components/Seo/Seo';

const HomePage: NextPage = () => {
  return (
    <>
      <Seo title="Homepage" />
      <div>homepage</div>
    </>
  );
};

export default HomePage;
