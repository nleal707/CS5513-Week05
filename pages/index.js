import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Nick. I'm a full stack web developer.</p>
        <p>Read{' '}<a href="https://nextjs.org/learn">this page</a>!</p>
      </section>
    </Layout>
  );
}