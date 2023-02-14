import React from 'react';
import ServiceItem from './ServiceItem';
import Image from 'next/image';

const services = [
  {
    image: '/assets/servicePneu.png',
    title: 'Tout pour vos pneus',
    desc: 'Besoin de pneus neufs ou vous voulez les permuter pour la saison qui arrive ? DMA est l’expert qu’il vous faut.',
    link: '/pneus',
  },
  {
    image: '/assets/serviceEntretien.png',
    title: 'Un entretien ?',
    desc: 'Chez DMA, nous faisons également le petit entretien de votre voiture. Nous veillerons à vérifier minutieusement les points clés de votre véhicule.',
    link: '/entretien',
  },
];

const Services = () => {
  return (
    <section className='bg-white w-full py-16 flex justify-center'>
      <div className='max-w-7xl px-4 w-full relative'>
        <h2 className='text-2xl font-bold md:text-4xl'>A votre service</h2>
        <ul className='mt-8 flex flex-col w-full justify-between sm:flex-row gap-8'>
          {services.map((service, index) => (
            <ServiceItem
              image={service.image}
              title={service.title}
              desc={service.desc}
              link={service.link}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
