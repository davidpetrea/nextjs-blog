import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='my-6'>
        <p className='leading-normal'>
          This is the first project I'm ever building using Next.js. So far it's
          been pretty cool, really nice features and all of that juicy stuff.
          Hoping to learn some more.
        </p>
        <p>Just come back and look at this later. You gonna be amazed.</p>
      </section>
      <section>
        <h2 className='text-2xl font-bold'>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='my-4'>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
