import LastArticles from '../../components/homepage/Blog';
import Contact from '../../components/homepage/Contact';
import Hero from '../../components/homepage/Hero';
import Services from '../../components/homepage/Services';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewLastArticles from '../../components/homepage/PreviewBlog';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p>Loading Preview Data</p>
          </div>
        }
      >
        <PreviewLastArticles query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div className='flex flex-col items-center'>
      <Hero />
      <Services />
      <LastArticles articles={posts} />
      <Contact />
    </div>
  );
};

export default page;
