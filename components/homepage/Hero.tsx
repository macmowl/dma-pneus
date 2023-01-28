import Image from 'next/image';
// import heroPic from '../public/assets/hero-image.png';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row w-full items-center justify-between px-4 gap-8 py-12 md:py-16 max-w-7xl'>
      <div>
        <h1 className='uppercase text-4xl lg:text-6xl leading-10 font-bold'>
          Vos <span className='text-orange-600'>pneus</span> <br />
          au prix d'antan
        </h1>
        <div className='flex gap-3 items-center text-orange-600 my-3'>
          <div className='border border-b-[1px] border-orange-600 h-[1px] w-8'></div>
          <p>Ce que nous vous proposons</p>
        </div>
        <p className='mb-3 max-w-sm'>
          Nous assurons un service de qualité pour le changement de vos pneus
          ainsi que l’entretien de votre véhicule.
        </p>
        <button className='bg-orange-600 text-xl rounded-md py-2 px-4 text-white hover:bg-orange-700'>
          Prenez rendez-vous
        </button>
      </div>
      <div className='aspect-square max-w-[420px] max-h-[420px] lg:w-[500px] lg:h-[500px] relative flex justify-center items-center'>
        <Image
          src='/assets/hero-image.png'
          alt="Vos pneus au prix d'antan"
          width={422}
          height={422}
          priority={true}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div className='border-orange-300 border w-full h-full absolute rounded-full -z-10'></div>
        <div className='bg-gray-300 border w-5/6 h-5/6 absolute rounded-full -z-10'></div>
      </div>
    </section>
  );
};

export default Hero;
