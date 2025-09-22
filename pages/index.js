// Import the Head component from Next.js to manage the document's <head>
import Head from 'next/head';
// Import the Layout component and siteTitle variable for a consistent page structure and title
import Layout, { siteTitle } from '../components/layout';
// Import utility styles for common styling patterns
import utilStyles from '../styles/utils.module.css';
// Import a function to fetch and sort blog post data from an external source. Changed from posts.js to posts-json.js.
import { getSortedPostsData } from '../lib/posts-json';
// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';
// Import a custom Date component to format and display dates
import Date from '../components/date';
// Import the Image component from Next.js
import Image from 'next/image'
 
// Export an async function called getStaticProps for static site generation (SSG)
export async function getStaticProps() {
  // Fetch the sorted post data at build time
  const allPostsData = getSortedPostsData();
  // Return the fetched data as props to the Home component
  return {
    props: {
      allPostsData,
    },
  };
}
 
// Define and export the Home component, which serves as the main page
export default function Home ({ allPostsData }) {
  // The component returns JSX to be rendered to the screen
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Nick, a full stack web developer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, featured_image }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <Image
                src={featured_image}
                width={400}
                height={300}
                alt="featured image"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}