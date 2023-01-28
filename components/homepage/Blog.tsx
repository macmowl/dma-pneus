'use client';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

interface ArticlesProps {
  articles: Article[];
}

const LastArticles: React.FC<ArticlesProps> = ({ articles }) => {
  const posts = articles.slice(0, 3);

  return (
    <div className='max-w-7xl py-16 px-4'>
      <h2 className='text-2xl font-bold md:text-4xl mb-4'>A votre service</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((article) => (
          <Link
            href='/'
            key={article._id}
            className='group hover:scale-105 drop-shadow-xl rounded-md overflow-hidden'
          >
            <div className='h-48 w-full relative'>
              <Image
                src={urlFor(article.mainImage).url()}
                alt={article.author.name}
                fill
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                style={{
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
            </div>
            <div className='p-4 bg-white'>
              <h2 className='text-lg lg:text-xl font-bold mb-2 truncate'>
                {article.title}
              </h2>
              <p className='text-gray-700'>{article.description}</p>
              <p className='text-gray-500 mt-8'>{article._createdAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastArticles;
