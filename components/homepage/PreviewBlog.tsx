'use client';
import { usePreview } from '../../lib/sanity.preview';
import LastArticles from './Blog';

type Props = {
  query: string;
};

const PreviewLastArticles: React.FC<Props> = ({ query }) => {
  const posts = usePreview(null, query);
  return <LastArticles articles={posts} />;
};

export default PreviewLastArticles;
