import LastArticles from '../../components/homepage/Blog';
import Contact from '../../components/homepage/Contact';
import Hero from '../../components/homepage/Hero';
import Services from '../../components/homepage/Services';
import { Article } from '../../types/article';

const articles: Article[] = [
  {
    id: 0,
    title: "Equipez-vous pour l'hiver",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/image1.png',
    publishedAt: '16 mars 2022',
  },
  {
    id: 1,
    title: 'Vos vacances à la montagne',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/image2.png',
    publishedAt: '16 mars 2022',
  },
  {
    id: 2,
    title: 'Pourquoi faire son entretien ?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/image3.png',
    publishedAt: '16 mars 2022',
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <Hero />
      <Services />
      <LastArticles articles={articles} />
      <Contact />
    </div>
  );
};

export default page;
