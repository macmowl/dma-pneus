import React from 'react';
import Image from 'next/image';

interface PostProps {
  title: string;
  author: string;
  mainImage: string;
  description: string;
}

const Post = (post: PostProps) => {
  return (
    <div className='px-4 flex flex-col items-center justify-center w-full max-w-7xl'>
      <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
      <div className='text-center mb-4'>Date de l'article</div>
      <Image
        className='w-full max-w-3xl h-auto rounded-lg'
        src={post.mainImage}
        alt={post.title}
        width={800}
        height={486}
      />
      <div className='my-12 max-w-3xl'>{post.description}</div>
    </div>
  );
};

export default Post;
