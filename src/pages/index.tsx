import type { NextPage } from 'next';
import Head from 'next/head';
import Greeting from '../components/Greeting';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Greeting name={'Everybody'} />
      </div>
    </div>
  );
};

export default Home;
