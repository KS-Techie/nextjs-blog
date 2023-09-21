import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Date from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Keep the existing code here */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
        <br />
        {postData.id}
        <br />
        <hr />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      {/* Replace {postData.date} with this */}
      <Date dateString={postData.date} />

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
      {/* Keep the existing code here */}
    </Layout>
  );
}
  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  // Return a list of possible value for id
  
  
// Fetch necessary data for the blog post using params.id