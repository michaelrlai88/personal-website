import Head from 'next/head';
import Image from 'next/image';

import Home from '../components/Home';
import theme from '../styles/theme';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Michael Lai</title>
        <meta
          name='Welcome to my portfolio'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
      <style jsx global>{`
        html,
        body {
          background-color: ${theme.colors.background};
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        .active {
          color: ${theme.colors.primary};
        }
      `}</style>
    </div>
  );
};

export default Index;
